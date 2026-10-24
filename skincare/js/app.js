/**
 * Glow & Grace Skincare - Main Application Logic
 * Pure JavaScript with Bootstrap 5 integration & LocalStorage persistence
 */

// Global State
const STATE = {
  cart: JSON.parse(localStorage.getItem('glow_grace_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('glow_grace_wishlist')) || [],
  appliedPromo: JSON.parse(localStorage.getItem('glow_grace_promo')) || null,
  activeCategory: 'all',
  activeConcern: 'all',
  searchQuery: '',
  sortBy: 'featured',
  modalSelectedProduct: null,
  modalSelectedSize: null,
  modalQuantity: 1,
  quizAnswers: {
    skinType: '',
    concern: '',
    finish: ''
  }
};

// Available Promo Codes
const PROMO_CODES = {
  'GLOW20': { discountPercent: 20, description: '20% Off Your Entire Order' },
  'GLOW15': { discountPercent: 15, description: '15% Welcome Glow Offer' },
  'FREESHIP': { freeShipping: true, description: 'Complimentary Express Shipping' }
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  initWishlist();
  initCart();
  initEventListeners();
  initReviews();
  initBlog();
  initScrollEffects();
});

/* ==========================================================================
   Catalog & Product Rendering
   ========================================================================== */
function initCatalog() {
  renderCatalog();
}

function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (STATE.activeCategory !== 'all') {
    list = list.filter(p => p.category === STATE.activeCategory);
  }

  // Concern filter
  if (STATE.activeConcern !== 'all') {
    list = list.filter(p => p.concern.some(c => c.toLowerCase().includes(STATE.activeConcern.toLowerCase())) ||
                            p.skinType.some(s => s.toLowerCase().includes(STATE.activeConcern.toLowerCase())));
  }

  // Search filter
  if (STATE.searchQuery.trim() !== '') {
    const q = STATE.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.skinType.some(s => s.toLowerCase().includes(q)) ||
      p.keyIngredients.some(k => k.name.toLowerCase().includes(q))
    );
  }

  // Sort
  switch (STATE.sortBy) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
      break;
    case 'name-az':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
    default:
      // Featured first, then rating
      list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || b.rating - a.rating);
      break;
  }

  return list;
}

function renderCatalog() {
  const container = document.getElementById('productGrid');
  const countBadge = document.getElementById('productResultsCount');
  if (!container) return;

  const products = getFilteredProducts();

  if (countBadge) {
    countBadge.textContent = `${products.length} product${products.length === 1 ? '' : 's'}`;
  }

  if (products.length === 0) {
    container.innerHTML = `
      <div class="col-12 empty-state">
        <div class="empty-state-icon"><i class="bi bi-search-heart"></i></div>
        <h4 class="font-serif">No Skincare Matches Found</h4>
        <p class="text-muted">We couldn't find any products matching your selected filters or search terms.</p>
        <button class="btn btn-glow mt-2" onclick="resetAllFilters()">
          <i class="bi bi-arrow-counterclockwise"></i> Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(product => {
    const isWishlisted = STATE.wishlist.includes(product.id);
    const badgeHtml = product.badge ? `
      <span class="badge-curated badge-${product.badgeType || 'bestseller'}">
        <i class="bi bi-stars"></i> ${product.badge}
      </span>
    ` : '';

    return `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="product-card" data-product-id="${product.id}">
          <div class="product-img-wrapper">
            <div class="product-badges">
              ${badgeHtml}
            </div>
            <div class="product-action-floating">
              <button 
                class="wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}', event)" 
                title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                aria-label="Wishlist"
              >
                <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
              </button>
            </div>
            
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              class="product-card-img" 
              loading="lazy"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80';"
            />

            <button class="quick-view-overlay-btn" onclick="openProductModal('${product.id}')">
              <i class="bi bi-eye"></i> Quick View
            </button>
          </div>

          <div class="product-card-body">
            <div class="product-category-tag">${product.categoryName}</div>
            <h3 class="product-card-title" title="${product.name}">
              <a href="javascript:void(0)" onclick="openProductModal('${product.id}')">${product.name}</a>
            </h3>
            <p class="product-card-subtitle">${product.subtitle}</p>

            <div class="d-flex align-items-center mb-2">
              <div class="star-rating">
                <i class="bi bi-star-fill"></i>
                <span class="fw-bold ms-1 text-dark">${product.rating.toFixed(1)}</span>
              </div>
              <span class="review-count-text">(${product.reviewCount})</span>
            </div>

            <div class="product-price-row">
              <div>
                <span class="price-current">$${product.price}</span>
                ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
              </div>
              <button 
                class="btn-card-cart" 
                onclick="quickAddToCart('${product.id}', event)" 
                title="Add to Bag"
                aria-label="Add to Bag"
              >
                <i class="bi bi-bag-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetAllFilters() {
  STATE.activeCategory = 'all';
  STATE.activeConcern = 'all';
  STATE.searchQuery = '';
  STATE.sortBy = 'featured';

  // Reset category pill buttons
  document.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  // Reset concern chips
  document.querySelectorAll('.concern-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.concern === 'all');
  });

  // Reset search input
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('catalogSearchClear');
  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';

  // Reset sort select
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderCatalog();
}

/* ==========================================================================
   Product Detail Modal
   ========================================================================== */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  STATE.modalSelectedProduct = product;
  STATE.modalSelectedSize = product.sizes ? product.sizes[0] : { size: 'Standard', price: product.price };
  STATE.modalQuantity = 1;

  const modalEl = document.getElementById('productDetailModal');
  if (!modalEl) return;

  // Set Content
  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('modalProductSubtitle').textContent = product.subtitle;
  document.getElementById('modalProductCategory').textContent = product.categoryName;
  document.getElementById('modalProductRating').textContent = product.rating.toFixed(1);
  document.getElementById('modalProductReviews').textContent = `(${product.reviewCount} verified reviews)`;
  document.getElementById('modalProductDesc').textContent = product.description;
  document.getElementById('modalProductIngredientsFull').textContent = product.ingredients;
  document.getElementById('modalProductHowToUse').textContent = product.howToUse;
  document.getElementById('modalQuantityValue').textContent = STATE.modalQuantity;

  // Pricing
  updateModalPrice();

  // Badges & Skin Types
  const skinTypesContainer = document.getElementById('modalSkinTypes');
  if (skinTypesContainer) {
    skinTypesContainer.innerHTML = product.skinType.map(st => 
      `<span class="badge bg-pastel-pink text-pink-600 rounded-pill px-3 py-1 me-1 mb-1 fw-semibold"><i class="bi bi-droplet-half me-1"></i>${st}</span>`
    ).join('');
  }

  // Key Active Ingredients
  const ingredientsContainer = document.getElementById('modalKeyIngredients');
  if (ingredientsContainer) {
    ingredientsContainer.innerHTML = product.keyIngredients.map(ki => `
      <div class="col-sm-6 mb-2">
        <div class="p-2 rounded-3 bg-light border border-1">
          <strong class="d-block text-dark small"><i class="bi bi-check2-circle text-pink-500 me-1"></i>${ki.name}</strong>
          <span class="text-muted" style="font-size: 0.78rem;">${ki.role}</span>
        </div>
      </div>
    `).join('');
  }

  // Benefits list
  const benefitsContainer = document.getElementById('modalBenefitsList');
  if (benefitsContainer) {
    benefitsContainer.innerHTML = product.benefits.map(b => `
      <li class="mb-1 text-secondary"><i class="bi bi-sparkles text-pink-500 me-2"></i>${b}</li>
    `).join('');
  }

  // Sizes options
  const sizesContainer = document.getElementById('modalSizesContainer');
  if (sizesContainer && product.sizes) {
    sizesContainer.innerHTML = product.sizes.map((s, idx) => `
      <button 
        type="button" 
        class="size-pill-option ${idx === 0 ? 'active' : ''}" 
        onclick="selectModalSize('${s.size}', ${s.price}, this)"
      >
        ${s.size} &bull; $${s.price}
      </button>
    `).join('');
  }

  // Gallery
  const mainImg = document.getElementById('modalMainImage');
  mainImg.src = product.images[0];
  mainImg.alt = product.name;

  const thumbsContainer = document.getElementById('modalThumbsContainer');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((imgUrl, idx) => `
      <img 
        src="${imgUrl}" 
        alt="${product.name} thumb ${idx + 1}" 
        class="modal-thumb ${idx === 0 ? 'active' : ''}" 
        onclick="changeModalMainImage('${imgUrl}', this)"
      />
    `).join('');
  }

  // Wishlist Button in Modal
  const isWishlisted = STATE.wishlist.includes(product.id);
  const modalWishlistBtn = document.getElementById('modalWishlistBtn');
  if (modalWishlistBtn) {
    modalWishlistBtn.innerHTML = `<i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i> ${isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}`;
    modalWishlistBtn.onclick = () => {
      toggleWishlist(product.id);
      const updatedState = STATE.wishlist.includes(product.id);
      modalWishlistBtn.innerHTML = `<i class="bi ${updatedState ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i> ${updatedState ? 'In Wishlist' : 'Add to Wishlist'}`;
    };
  }

  // Show Modal using Bootstrap
  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
}

function changeModalMainImage(url, thumbEl) {
  const mainImg = document.getElementById('modalMainImage');
  if (mainImg) mainImg.src = url;

  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function selectModalSize(sizeName, price, btnEl) {
  STATE.modalSelectedSize = { size: sizeName, price: price };
  document.querySelectorAll('.size-pill-option').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  updateModalPrice();
}

function updateModalPrice() {
  const priceEl = document.getElementById('modalProductPrice');
  if (!priceEl || !STATE.modalSelectedSize) return;

  const unitPrice = STATE.modalSelectedSize.price;
  priceEl.textContent = `$${unitPrice}`;
}

function changeModalQuantity(delta) {
  STATE.modalQuantity = Math.max(1, Math.min(20, STATE.modalQuantity + delta));
  const qtyEl = document.getElementById('modalQuantityValue');
  if (qtyEl) qtyEl.textContent = STATE.modalQuantity;
}

function addModalProductToCart() {
  if (!STATE.modalSelectedProduct) return;
  const product = STATE.modalSelectedProduct;
  const sizeObj = STATE.modalSelectedSize || { size: 'Standard', price: product.price };
  const quantity = STATE.modalQuantity;

  addToCart(product.id, sizeObj.size, sizeObj.price, quantity);

  // Close modal
  const modalEl = document.getElementById('productDetailModal');
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  if (bsModal) bsModal.hide();
}

/* ==========================================================================
   Shopping Cart (State & LocalStorage Persistence)
   ========================================================================== */
function initCart() {
  updateCartCounters();
  renderCart();
}

function quickAddToCart(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes ? product.sizes[0] : { size: 'Standard', price: product.price };
  addToCart(product.id, defaultSize.size, defaultSize.price, 1);
}

function addToCart(productId, sizeName, price, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cartItemId = `${productId}-${sizeName}`;
  const existingIndex = STATE.cart.findIndex(item => item.cartItemId === cartItemId);

  if (existingIndex > -1) {
    STATE.cart[existingIndex].quantity += quantity;
  } else {
    STATE.cart.push({
      cartItemId: cartItemId,
      productId: product.id,
      name: product.name,
      subtitle: product.subtitle,
      size: sizeName,
      price: price,
      image: product.images[0],
      quantity: quantity
    });
  }

  saveCart();
  updateCartCounters();
  renderCart();

  showToast(
    'Added to Bag',
    `<strong>${product.name}</strong> (${sizeName}) has been added to your shopping bag.`,
    'bag'
  );
}

function updateCartQuantity(cartItemId, delta) {
  const index = STATE.cart.findIndex(item => item.cartItemId === cartItemId);
  if (index === -1) return;

  STATE.cart[index].quantity += delta;
  if (STATE.cart[index].quantity <= 0) {
    STATE.cart.splice(index, 1);
  }

  saveCart();
  updateCartCounters();
  renderCart();
}

function removeFromCart(cartItemId) {
  STATE.cart = STATE.cart.filter(item => item.cartItemId !== cartItemId);
  saveCart();
  updateCartCounters();
  renderCart();
  showToast('Item Removed', 'The item was removed from your bag.', 'info');
}

function clearCart() {
  if (STATE.cart.length === 0) return;
  STATE.cart = [];
  STATE.appliedPromo = null;
  localStorage.removeItem('glow_grace_promo');
  saveCart();
  updateCartCounters();
  renderCart();
  showToast('Bag Cleared', 'All items have been removed from your shopping bag.', 'info');
}

function saveCart() {
  localStorage.setItem('glow_grace_cart', JSON.stringify(STATE.cart));
}

function updateCartCounters() {
  const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountVal = document.getElementById('cartDiscountVal');
  const totalEl = document.getElementById('cartFinalTotal');
  const shippingProgressBar = document.getElementById('freeShippingProgressBar');
  const shippingProgressText = document.getElementById('freeShippingProgressText');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const clearBtn = document.getElementById('cartClearBtn');

  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="bi bi-bag-heart"></i></div>
        <h5 class="font-serif">Your Bag is Empty</h5>
        <p class="text-muted small">Your skin deserves a treat! Explore our best sellers and create your radiant routine.</p>
        <button class="btn btn-glow btn-sm mt-3" data-bs-dismiss="offcanvas" onclick="scrollToCatalog()">
          <i class="bi bi-stars"></i> Shop Curated Products
        </button>
      </div>
    `;

    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (shippingEl) shippingEl.textContent = '$0.00';
    if (discountRow) discountRow.style.display = 'none';
    if (totalEl) totalEl.textContent = '$0.00';
    if (shippingProgressBar) shippingProgressBar.style.width = '0%';
    if (shippingProgressText) shippingProgressText.innerHTML = `Add <strong>$50.00</strong> more to unlock Free Express Shipping!`;
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
  if (clearBtn) clearBtn.style.display = 'inline-block';

  // Render items
  container.innerHTML = STATE.cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-start">
          <h6 class="mb-0 font-serif fs-6">${item.name}</h6>
          <button 
            type="button" 
            class="btn-close ms-2" 
            style="font-size: 0.65rem;" 
            onclick="removeFromCart('${item.cartItemId}')"
            aria-label="Remove item"
          ></button>
        </div>
        <span class="badge bg-pastel-lavender text-lavender-600 rounded-pill px-2 py-0.5 my-1" style="font-size: 0.72rem;">${item.size}</span>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="updateCartQuantity('${item.cartItemId}', -1)" aria-label="Decrease quantity">
              <i class="bi bi-dash"></i>
            </button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity('${item.cartItemId}', 1)" aria-label="Increase quantity">
              <i class="bi bi-plus"></i>
            </button>
          </div>
          <div class="fw-bold text-dark">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Calculations
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 50.00;
  let shippingCost = subtotal >= freeShippingThreshold ? 0.00 : 5.99;
  
  // Promo handling
  let discountAmount = 0.00;
  if (STATE.appliedPromo) {
    if (STATE.appliedPromo.discountPercent) {
      discountAmount = (subtotal * STATE.appliedPromo.discountPercent) / 100;
    }
    if (STATE.appliedPromo.freeShipping) {
      shippingCost = 0.00;
    }
    if (discountRow && discountVal) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-$${discountAmount.toFixed(2)}`;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  // Free shipping progress
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (shippingProgressBar) shippingProgressBar.style.width = `${progressPercent}%`;
  if (shippingProgressText) {
    if (subtotal >= freeShippingThreshold || (STATE.appliedPromo && STATE.appliedPromo.freeShipping)) {
      shippingProgressText.innerHTML = `<i class="bi bi-check-circle-fill text-success me-1"></i> You've unlocked <strong>FREE Express Shipping</strong>!`;
    } else {
      shippingProgressText.innerHTML = `Add <strong>$${remainingForFreeShipping.toFixed(2)}</strong> more to unlock <strong>Free Express Shipping</strong>!`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

function applyPromoCode() {
  const input = document.getElementById('cartPromoInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) return;

  if (PROMO_CODES[code]) {
    STATE.appliedPromo = { code: code, ...PROMO_CODES[code] };
    localStorage.setItem('glow_grace_promo', JSON.stringify(STATE.appliedPromo));
    renderCart();
    showToast('Promo Code Applied', `<strong>${code}</strong>: ${PROMO_CODES[code].description}`, 'stars');
    input.value = '';
  } else {
    showToast('Invalid Promo Code', 'Try <strong>GLOW20</strong> for 20% off or <strong>FREESHIP</strong>.', 'warning');
  }
}

function checkout() {
  if (STATE.cart.length === 0) return;
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Open checkout confirmation modal
  const checkoutModalEl = document.getElementById('checkoutModal');
  if (checkoutModalEl) {
    document.getElementById('checkoutOrderCount').textContent = `${itemCount} item${itemCount === 1 ? '' : 's'}`;
    document.getElementById('checkoutOrderTotal').textContent = document.getElementById('cartFinalTotal').textContent;
    const bsModal = bootstrap.Modal.getOrCreateInstance(checkoutModalEl);
    bsModal.show();

    // Hide cart offcanvas
    const offcanvasEl = document.getElementById('cartOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  }
}

function completeCheckout() {
  STATE.cart = [];
  STATE.appliedPromo = null;
  localStorage.removeItem('glow_grace_cart');
  localStorage.removeItem('glow_grace_promo');
  updateCartCounters();
  renderCart();

  const checkoutModalEl = document.getElementById('checkoutModal');
  const bsModal = bootstrap.Modal.getInstance(checkoutModalEl);
  if (bsModal) bsModal.hide();

  showToast('Order Confirmed!', 'Thank you! Your Glow & Grace beauty order has been successfully placed.', 'check');
}

/* ==========================================================================
   Wishlist (State & LocalStorage Persistence)
   ========================================================================== */
function initWishlist() {
  updateWishlistCounters();
  renderWishlist();
}

function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const index = STATE.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    STATE.wishlist.splice(index, 1);
    showToast('Wishlist Updated', `Removed <strong>${product.name}</strong> from your wishlist.`, 'heart');
  } else {
    STATE.wishlist.push(productId);
    showToast('Wishlist Saved', `Saved <strong>${product.name}</strong> to your wishlist.`, 'heart');
  }

  saveWishlist();
  updateWishlistCounters();
  renderCatalog();
  renderWishlist();
}

function saveWishlist() {
  localStorage.setItem('glow_grace_wishlist', JSON.stringify(STATE.wishlist));
}

function updateWishlistCounters() {
  const count = STATE.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-badge-count');
  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderWishlist() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  if (STATE.wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="bi bi-heart"></i></div>
        <h5 class="font-serif">Your Wishlist is Empty</h5>
        <p class="text-muted small">Save your favorite skincare gems by tapping the heart icon on any product.</p>
        <button class="btn btn-glow btn-sm mt-3" data-bs-dismiss="offcanvas" onclick="scrollToCatalog()">
          <i class="bi bi-gem"></i> Explore Catalog
        </button>
      </div>
    `;
    return;
  }

  const wishlistedProducts = PRODUCTS.filter(p => STATE.wishlist.includes(p.id));

  container.innerHTML = wishlistedProducts.map(product => `
    <div class="cart-item-card">
      <img src="${product.images[0]}" alt="${product.name}" class="cart-item-img" />
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between align-items-start">
          <h6 class="mb-0 font-serif fs-6">${product.name}</h6>
          <button 
            type="button" 
            class="btn-close ms-2" 
            style="font-size: 0.65rem;" 
            onclick="toggleWishlist('${product.id}')"
            aria-label="Remove from wishlist"
          ></button>
        </div>
        <div class="text-glow fw-bold my-1">$${product.price}</div>
        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-glow btn-sm py-1 px-3" onclick="moveWishlistToCart('${product.id}')">
            <i class="bi bi-bag-plus"></i> Move to Bag
          </button>
          <button class="btn btn-outline-secondary btn-sm py-1 px-2" onclick="openProductModal('${product.id}')">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function moveWishlistToCart(productId) {
  quickAddToCart(productId);
  toggleWishlist(productId);
}

function addAllWishlistToCart() {
  STATE.wishlist.forEach(id => {
    quickAddToCart(id);
  });
  STATE.wishlist = [];
  saveWishlist();
  updateWishlistCounters();
  renderCatalog();
  renderWishlist();
  showToast('All Items Moved', 'All wishlist items were transferred to your bag.', 'bag');
}

/* ==========================================================================
   Customer Reviews & Submission
   ========================================================================== */
function initReviews() {
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  container.innerHTML = CUSTOMER_REVIEWS.map(r => `
    <div class="col-md-6 col-lg-3">
      <div class="review-card">
        <div class="d-flex align-items-center gap-3 mb-3">
          <img src="${r.avatar}" alt="${r.author}" class="reviewer-avatar" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';" />
          <div>
            <h6 class="mb-0 fw-bold font-serif">${r.author}</h6>
            <span class="text-muted" style="font-size: 0.78rem;">${r.location} &bull; <i class="bi bi-patch-check-fill text-success" title="Verified Buyer"></i> Verified</span>
          </div>
        </div>

        <div class="d-flex align-items-center mb-2">
          <div class="star-rating">
            ${Array.from({ length: 5 }, (_, i) => `<i class="bi ${i < r.rating ? 'bi-star-fill text-warning' : 'bi-star'}"></i>`).join('')}
          </div>
          <span class="ms-2 text-muted" style="font-size: 0.78rem;">${r.date}</span>
        </div>

        <span class="badge bg-pastel-pink text-pink-600 rounded-pill px-2.5 py-1 mb-2 align-self-start" style="font-size: 0.72rem;">
          ${r.skinType}
        </span>

        <h6 class="font-serif fw-bold mb-1">${r.title}</h6>
        <p class="text-secondary small flex-grow-1">"${r.review}"</p>
        
        <div class="mt-2 pt-2 border-top border-light text-muted" style="font-size: 0.75rem;">
          <i class="bi bi-bag-check me-1 text-pink-500"></i> Purchased: <strong>${r.productName}</strong>
        </div>
      </div>
    </div>
  `).join('');
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reviewAuthorName').value.trim();
  const location = document.getElementById('reviewAuthorLocation').value.trim() || 'Verified Customer';
  const skinType = document.getElementById('reviewSkinType').value;
  const productSelect = document.getElementById('reviewProductSelect');
  const productName = productSelect.options[productSelect.selectedIndex].text;
  const rating = parseInt(document.getElementById('reviewRatingSelect').value) || 5;
  const title = document.getElementById('reviewHeadline').value.trim();
  const reviewText = document.getElementById('reviewBody').value.trim();

  const newReview = {
    id: `rev-${Date.now()}`,
    author: name,
    location: location,
    rating: rating,
    date: 'Just now',
    skinType: skinType,
    productName: productName,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    title: title,
    review: reviewText
  };

  CUSTOMER_REVIEWS.unshift(newReview);
  renderReviews();

  // Reset form & hide modal
  document.getElementById('reviewForm').reset();
  const modalEl = document.getElementById('writeReviewModal');
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  if (bsModal) bsModal.hide();

  showToast('Review Submitted', 'Thank you for sharing your experience with the Glow & Grace community!', 'stars');
}

/* ==========================================================================
   Skincare Tips Blog Reader
   ========================================================================== */
function initBlog() {
  renderBlog();
}

function renderBlog() {
  const container = document.getElementById('blogPostsContainer');
  if (!container) return;

  container.innerHTML = BLOG_POSTS.map(post => `
    <div class="col-md-4">
      <div class="blog-card">
        <img src="${post.image}" alt="${post.title}" class="blog-card-img" />
        <div class="blog-card-body">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-pastel-lavender text-lavender-600 rounded-pill px-2.5 py-1" style="font-size: 0.75rem;">${post.category}</span>
            <span class="text-muted" style="font-size: 0.78rem;"><i class="bi bi-clock me-1"></i>${post.readTime}</span>
          </div>

          <h5 class="font-serif fw-bold mb-2">
            <a href="javascript:void(0)" onclick="openBlogModal('${post.id}')">${post.title}</a>
          </h5>
          <p class="text-secondary small mb-3 flex-grow-1">${post.excerpt}</p>

          <div class="d-flex align-items-center justify-content-between pt-3 border-top border-light mt-auto">
            <div class="d-flex align-items-center gap-2">
              <img src="${post.authorAvatar}" alt="${post.author}" class="rounded-circle" width="30" height="30" style="object-fit:cover;" />
              <span class="text-muted" style="font-size: 0.78rem;">${post.author}</span>
            </div>
            <button class="btn btn-sm btn-link text-pink-500 p-0 text-decoration-none fw-semibold" onclick="openBlogModal('${post.id}')">
              Read <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function openBlogModal(blogId) {
  const post = BLOG_POSTS.find(p => p.id === blogId);
  if (!post) return;

  document.getElementById('blogModalTitle').textContent = post.title;
  document.getElementById('blogModalCategory').textContent = post.category;
  document.getElementById('blogModalReadTime').textContent = post.readTime;
  document.getElementById('blogModalDate').textContent = post.date;
  document.getElementById('blogModalAuthor').textContent = post.author;
  document.getElementById('blogModalImage').src = post.image;
  document.getElementById('blogModalContent').innerHTML = post.content;

  const modalEl = document.getElementById('blogDetailModal');
  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
}

/* ==========================================================================
   Interactive Routine Finder / Skin Quiz
   ========================================================================== */
function selectQuizOption(step, value, element) {
  STATE.quizAnswers[step] = value;

  // Clear siblings
  const parent = element.parentElement.parentElement;
  parent.querySelectorAll('.quiz-option-card').forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');

  // If next button exists or direct progression
  updateQuizProgress();
}

function updateQuizProgress() {
  const { skinType, concern, finish } = STATE.quizAnswers;
  const finishBtn = document.getElementById('quizFinishBtn');
  if (finishBtn) {
    finishBtn.disabled = !(skinType && concern && finish);
  }
}

function completeSkinQuiz() {
  const { skinType, concern } = STATE.quizAnswers;
  
  // Find top matching recommendations based on skin type and concern
  const matches = PRODUCTS.filter(p => {
    const matchesSkin = p.skinType.some(st => st.toLowerCase().includes(skinType.toLowerCase()) || st === 'All Skin Types');
    const matchesConcern = p.concern.some(c => c.toLowerCase().includes(concern.toLowerCase()));
    return matchesSkin || matchesConcern;
  }).slice(0, 3);

  const container = document.getElementById('quizResultsContainer');
  if (container) {
    container.innerHTML = matches.map(p => `
      <div class="col-md-4 mb-3">
        <div class="card h-100 border-1 border-pink-200 shadow-sm p-3 text-center">
          <img src="${p.images[0]}" alt="${p.name}" class="rounded-3 mb-2 mx-auto" style="height:120px; width:120px; object-fit:cover;" />
          <h6 class="font-serif fw-bold mb-1 fs-6">${p.name}</h6>
          <span class="text-glow fw-bold mb-2">$${p.price}</span>
          <button class="btn btn-glow btn-sm mt-auto" onclick="quickAddToCart('${p.id}')">
            <i class="bi bi-bag-plus"></i> Add to Bag
          </button>
        </div>
      </div>
    `).join('');
  }

  // Switch to quiz results view
  document.getElementById('quizQuestionsView').style.display = 'none';
  document.getElementById('quizResultsView').style.display = 'block';
}

function resetSkinQuiz() {
  STATE.quizAnswers = { skinType: '', concern: '', finish: '' };
  document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('quizQuestionsView').style.display = 'block';
  document.getElementById('quizResultsView').style.display = 'none';
  const finishBtn = document.getElementById('quizFinishBtn');
  if (finishBtn) finishBtn.disabled = true;
}

/* ==========================================================================
   Newsletter Subscription
   ========================================================================== */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput || !emailInput.value) return;

  const email = emailInput.value.trim();
  
  // Give user the welcome code
  STATE.appliedPromo = { code: 'GLOW15', ...PROMO_CODES['GLOW15'] };
  localStorage.setItem('glow_grace_promo', JSON.stringify(STATE.appliedPromo));
  renderCart();

  showToast(
    'Welcome to the Glow Club! ✨',
    `Thank you for subscribing (${email})! Your 15% discount code <strong>GLOW15</strong> has been automatically unlocked for your bag.`,
    'stars'
  );

  emailInput.value = '';
}

/* ==========================================================================
   Event Listeners & UI Helpers
   ========================================================================== */
function initEventListeners() {
  // Category Pill Buttons
  document.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.activeCategory = btn.dataset.category || 'all';
      renderCatalog();
    });
  });

  // Concern Chip Buttons
  document.querySelectorAll('.concern-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.concern-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.activeConcern = btn.dataset.concern || 'all';
      renderCatalog();
    });
  });

  // Sort Select Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      STATE.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Live Instant Search with Debounce
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('catalogSearchClear');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      if (searchClear) {
        searchClear.style.display = STATE.searchQuery ? 'block' : 'none';
      }
      renderCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      STATE.searchQuery = '';
      searchClear.style.display = 'none';
      renderCatalog();
      searchInput.focus();
    });
  }

  // Header quick search focus
  const headerSearchBtn = document.getElementById('headerSearchBtn');
  if (headerSearchBtn) {
    headerSearchBtn.addEventListener('click', () => {
      scrollToCatalog();
      if (searchInput) searchInput.focus();
    });
  }

  // Reviews product dropdown fill
  const productSelect = document.getElementById('reviewProductSelect');
  if (productSelect) {
    productSelect.innerHTML = PRODUCTS.map(p => `
      <option value="${p.id}">${p.name}</option>
    `).join('');
  }
}

function scrollToCatalog() {
  const catalogSection = document.getElementById('catalog');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(title, message, iconType = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const iconMap = {
    bag: 'bi-bag-check-fill text-pink-500',
    heart: 'bi-heart-fill text-pink-500',
    stars: 'bi-stars text-warning',
    check: 'bi-check-circle-fill text-success',
    warning: 'bi-exclamation-triangle-fill text-warning',
    info: 'bi-info-circle-fill text-lavender-500'
  };

  const iconClass = iconMap[iconType] || iconMap.info;
  const toastId = `toast-${Date.now()}`;

  const toastHtml = `
    <div id="${toastId}" class="toast toast-glow show align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="4000">
      <div class="toast-header border-bottom-0 pb-0 bg-transparent">
        <i class="bi ${iconClass} me-2 fs-5"></i>
        <strong class="me-auto font-serif">${title}</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body pt-1 small text-secondary">
        ${message}
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  const toastEl = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastEl, { delay: 4200 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}
