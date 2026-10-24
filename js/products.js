/**
 * Glow & Grace Skincare - Curated Product Catalog Data
 */

const PRODUCTS = [
  {
    id: "gg-001",
    name: "Rose Quartz Purifying Gel Cleanser",
    subtitle: "pH-Balancing Botanical Facial Wash",
    category: "cleansers",
    categoryName: "Cleansers",
    price: 28,
    originalPrice: 34,
    rating: 4.9,
    reviewCount: 142,
    badge: "Best Seller",
    badgeType: "bestseller",
    skinType: ["All Skin Types", "Sensitive", "Combination"],
    concern: ["Daily Cleanse", "Gentle Hydration", "Calming"],
    sizes: [
      { size: "120 ml", price: 28 },
      { size: "200 ml", price: 42 }
    ],
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A silky, non-stripping gel cleanser infused with wild Damask rose water, soothing centella, and low-molecular hyaluronic acid. Gently dissolves impurities, waterproof SPF, and excess sebum while restoring your skin barrier's natural pH 5.5 balance.",
    benefits: [
      "Melts dirt & SPF without stripping natural moisture",
      "Leaves skin petal-soft, refreshed, and never tight",
      "Calms redness and cools reactive complexions",
      "Naturally fragranced with pure steam-distilled rosewater"
    ],
    keyIngredients: [
      { name: "Damask Rose Water", role: "Hydrates and tones with natural antioxidants" },
      { name: "Centella Asiatica (Cica)", role: "Soothes inflammation and barrier stress" },
      { name: "White Tea Leaf Extract", role: "Shields against environmental free radicals" },
      { name: "Vegetable Glycerin", role: "Attracts deep cellular hydration" }
    ],
    ingredients: "Aqua (Water), Rosa Damascena Flower Water*, Glycerin, Decyl Glucoside, Cocamidopropyl Betaine, Centella Asiatica Extract, Camellia Sinensis (White Tea) Leaf Extract, Sodium Hyaluronate, Panthenol, Allantoin, Citric Acid, Phenoxyethanol, Ethylhexylglycerin. (*Organic)",
    howToUse: "Dispense 1-2 pumps onto damp palms. Massage in gentle circular motions over wet face for 60 seconds, savoring the delicate rose aroma. Rinse thoroughly with lukewarm water. Use morning and night.",
    isFeatured: true
  },
  {
    id: "gg-002",
    name: "Luminous Dew 10% Niacinamide & Zinc Serum",
    subtitle: "Pore Clarifying & Skin Tone Perfector",
    category: "serums",
    categoryName: "Serums",
    price: 42,
    originalPrice: null,
    rating: 5.0,
    reviewCount: 289,
    badge: "Award Winner",
    badgeType: "award",
    skinType: ["Oily", "Combination", "Blemish-Prone", "Normal"],
    concern: ["Pores & Texture", "Dark Spots", "Oil Control"],
    sizes: [
      { size: "30 ml", price: 42 },
      { size: "50 ml", price: 58 }
    ],
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597359-0098e9b89569?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An ultra-weightless serum engineered with clinical-grade 10% pure Niacinamide (Vitamin B3) paired with 1% Zinc PCA. Visibly refines enlarged pores, fades post-blemish hyperpigmentation, and balances sebum for an immaculate dewy glow.",
    benefits: [
      "Tightens the appearance of stretched pores by 42% in 2 weeks",
      "Accelerates the fading of stubborn sunspots and acne scars",
      "Tames mid-day shine without parching the skin",
      "Plumps fine dehydration lines with plant pentapeptides"
    ],
    keyIngredients: [
      { name: "10% Niacinamide (Vitamin B3)", role: "Strengthens barrier and balances tone" },
      { name: "1% Zinc PCA", role: "Regulates sebum production & clarifies" },
      { name: "Licorice Root Extract", role: "Potent natural brightening agent" },
      { name: "Snow Mushroom Polysaccharide", role: "Locks in 500x its weight in water" }
    ],
    ingredients: "Aqua, Niacinamide, Pentylene Glycol, Zinc PCA, Glycyrrhiza Glabra (Licorice) Root Extract, Tremella Fuciformis (Snow Mushroom) Sporocarp Extract, Palmitoyl Tripeptide-5, Betaine, Hydroxyethylcellulose, Caprylyl Glycol.",
    howToUse: "Apply 3-4 drops directly to cleansed face and neck morning and evening before creams. Gently pat until absorbed. Follow with moisturizer and daytime SPF.",
    isFeatured: true
  },
  {
    id: "gg-003",
    name: "Velvet Petal Ceramide Cloud Cream",
    subtitle: "Deep Barrier Recovery & Moisture Lock",
    category: "moisturizers",
    categoryName: "Moisturizers",
    price: 48,
    originalPrice: 56,
    rating: 4.9,
    reviewCount: 318,
    badge: "Best Seller",
    badgeType: "bestseller",
    skinType: ["Dry", "Normal", "Sensitive", "Compromised"],
    concern: ["Hydration", "Barrier Repair", "Flakiness"],
    sizes: [
      { size: "50 ml", price: 48 },
      { size: "100 ml", price: 78 }
    ],
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A whipped, cloud-like moisturizer packed with 5 biomimetic ceramides, squalane, and marshmallow root. Melts instantly on contact to replenish lost lipids, cushion sensitized skin, and lock in 72-hour moisture with a velvety, cushiony finish.",
    benefits: [
      "Restores damaged skin barrier within 3 days of use",
      "72-hour deep cellular hydration verified by clinical trials",
      "Never greasy, sticky, or pore-clogging under makeup",
      "Infused with organic elderberry and marshmallow blossom"
    ],
    keyIngredients: [
      { name: "5-Ceramide Lipid Complex", role: "Rebuilds intercellular matrix and seals moisture" },
      { name: "Sugar Cane Squalane", role: "Biomimetic emollient for supple softness" },
      { name: "Marshmallow Root Extract", role: "Cushions irritations and relieves dryness" },
      { name: "Colloidal Oatmeal", role: "Calms itchiness and redness" }
    ],
    ingredients: "Aqua, Caprylic/Capric Triglyceride, Squalane, Butyrospermum Parkii (Shea) Butter, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Althaea Officinalis Root Extract, Avena Sativa Kernel Flour, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum.",
    howToUse: "Warm a dime-sized amount between clean fingertips and press into skin morning and night. Can be layered generously as a restorative overnight moisture cushion.",
    isFeatured: true
  },
  {
    id: "gg-004",
    name: "Lavender Moon Restorative Sleeping Mask",
    subtitle: "Overnight Repair & Dreamy Lavender Infusion",
    category: "masks",
    categoryName: "Masks",
    price: 38,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 95,
    badge: "Staff Pick",
    badgeType: "staffpick",
    skinType: ["All Skin Types", "Stressed", "Dull"],
    concern: ["Overnight Renewal", "Plumping", "Aromatherapy"],
    sizes: [
      { size: "60 ml", price: 38 }
    ],
    images: [
      "https://images.unsplash.com/photo-1567928815116-2917711d9bc5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An overnight recovery jelly infused with French lavender essential oil, botanical melatonin, and calming blue tansy. Works while you sleep during peak circadian regeneration to wake up with bouncy, plump, luminous glass skin.",
    benefits: [
      "Intensely hydrates fatigued skin overnight",
      "Promotes tranquil sleep with therapeutic lavender aroma",
      "Prevents transepidermal water loss as you rest",
      "Non-comedogenic jelly formula won't stain pillowcases"
    ],
    keyIngredients: [
      { name: "French Lavender Oil", role: "Calms nervous system and relaxes tension" },
      { name: "Botanical Melatonin", role: "Supercharges nighttime cellular repair" },
      { name: "Blue Tansy Oil", role: "Subdues redness and evens tone" },
      { name: "Polyglutamic Acid", role: "Holds 4x more moisture than hyaluronic acid" }
    ],
    ingredients: "Aqua, Lavandula Angustifolia Flower Water, Glycerin, Tanacetum Annuum (Blue Tansy) Flower Oil, Lavandula Angustifolia (Lavender) Oil, Melatonin, Polyglutamic Acid, Bisabolol, Sodium Hyaluronate, Hydroxyethylcellulose, Gluconolactone.",
    howToUse: "As the final step of your nighttime routine, apply an even layer over face and neck. Allow 5 minutes to absorb before going to bed. Rinse with warm water in the morning. Use 2-3 times weekly.",
    isFeatured: false
  },
  {
    id: "gg-005",
    name: "Aura Shield Invisible Mineral SPF 50+",
    subtitle: "Broad-Spectrum UVA/UVB Non-Nano Sunscreen",
    category: "sunscreens",
    categoryName: "Sunscreens",
    price: 36,
    originalPrice: 42,
    rating: 4.9,
    reviewCount: 176,
    badge: "Clean Formula",
    badgeType: "clean",
    skinType: ["All Skin Types", "Sensitive", "Acne-Prone"],
    concern: ["UV Protection", "Anti-Photoaging", "Zero White Cast"],
    sizes: [
      { size: "50 ml", price: 36 },
      { size: "100 ml", price: 54 }
    ],
    images: [
      "https://images.unsplash.com/photo-1556228722-d0b71946ec98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A breakthrough 100% mineral sunscreen with transparent zinc oxide that leaves zero white cast, zero chalkiness, and zero greasy residue. Infused with antioxidant matcha tea and bisabolol to guard against blue light and pollution.",
    benefits: [
      "SPF 50+ PA++++ broad spectrum physical shield",
      "Completely invisible on all Fitzpatrick skin tones (I-VI)",
      "Silky velvet primer finish that grips makeup seamlessly",
      "Reef-friendly, ocean-safe, and fragrance-free"
    ],
    keyIngredients: [
      { name: "Non-Nano Zinc Oxide 18.5%", role: "Gentle physical shield against UVA & UVB" },
      { name: "Uji Green Tea Extract", role: "High-potency EGCG protects against HEV blue light" },
      { name: "Bisabolol", role: "Soothes and prevents sun-induced heat flush" },
      { name: "Vitamin E (Tocopherol)", role: "Strengthens cellular lipid defense" }
    ],
    ingredients: "Zinc Oxide (18.5%), Aqua, Isododecane, Caprylic/Capric Triglyceride, Butyloctyl Salicylate, Silica, Camellia Sinensis (Green Tea) Leaf Extract, Bisabolol, Tocopherol, Polyglyceryl-4 Diisostearate, Ethylhexylglycerin.",
    howToUse: "Shake well. Apply generously and evenly as the last step of your morning skincare ritual, 15 minutes before sun exposure. Reapply at least every 2 hours or after 80 minutes of swimming.",
    isFeatured: true
  },
  {
    id: "gg-006",
    name: "Peptide Blossom Firming Eye Elixir",
    subtitle: "Dark Circle & Fine Line Smoothing Concentrate",
    category: "eye-care",
    categoryName: "Eye Care",
    price: 44,
    originalPrice: 52,
    rating: 4.9,
    reviewCount: 112,
    badge: "Clean Formula",
    badgeType: "clean",
    skinType: ["All Skin Types", "Mature", "Fatigued"],
    concern: ["Dark Circles", "Puffiness", "Crow's Feet"],
    sizes: [
      { size: "15 ml", price: 44 }
    ],
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An illuminating eye treatment combining botanical peptides, green caffeine, and gentle bakuchiol. Drains fluid puffiness within 10 minutes and diffuses the look of under-eye shadows with light-refracting pearl minerals.",
    benefits: [
      "Depuffs tired morning eyes with cooling botanical caffeine",
      "Reduces appearance of crow's feet and smile lines by 38%",
      "Brightens stubborn blue & brown under-eye pigmentation",
      "Opthalmologist-tested & safe for sensitive contact lens wearers"
    ],
    keyIngredients: [
      { name: "Argireline & Matrixyl 3000", role: "Peptide duo mimics botox-like smoothing" },
      { name: "Green Coffee Bean Caffeine", role: "Constricts capillaries to eradicate morning bags" },
      { name: "Bakuchiol (1%)", role: "Gentle plant retinol alternative safe for eye contour" },
      { name: "Camellia Japonica Seed Oil", role: "Deeply nourishes delicate orbital skin" }
    ],
    ingredients: "Aqua, Camellia Japonica Seed Oil, Glycerin, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Caffeine, Bakuchiol, Mica, Titanium Dioxide, Chrysin, N-Hydroxysuccinimide, Carbomer, Phenoxyethanol.",
    howToUse: "Using your ring finger, gently tap half a pea-sized drop along the orbital bone, moving from the inner corner outward. Can be applied morning and night. Store in fridge for extra cooling depuffing power.",
    isFeatured: false
  },
  {
    id: "gg-007",
    name: "Sakura Radiance Vitamin C + E Glow Essence",
    subtitle: "Advanced 15% Ethyl Ascorbic Acid Serum",
    category: "serums",
    categoryName: "Serums",
    price: 46,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 204,
    badge: "Best Seller",
    badgeType: "bestseller",
    skinType: ["All Skin Types", "Dull", "Hyperpigmentation"],
    concern: ["Radiance", "Sun Damage", "Even Texture"],
    sizes: [
      { size: "30 ml", price: 46 },
      { size: "50 ml", price: 65 }
    ],
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597359-0098e9b89569?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Harnessing an ultra-stable next-generation Vitamin C molecule (3-O-Ethyl Ascorbic Acid) combined with Japanese cherry blossom extract and Ferulic acid. Delivers high-voltage radiance without oxidation, tingling, or yellow skin staining.",
    benefits: [
      "Boosts skin luminosity by 64% after 28 days of daily use",
      "Stays 100% clear and potent for up to 12 months (no orange tint!)",
      "Shields skin from urban smog and environmental oxidants",
      "Enhances natural collagen synthesis for youthful bounce"
    ],
    keyIngredients: [
      { name: "15% 3-O-Ethyl Ascorbic Acid", role: "Ultra-stable Vitamin C that converts directly in skin" },
      { name: "Sakura Blossom Extract", role: "Anti-glycation botanical for porcelain smoothness" },
      { name: "0.5% Ferulic Acid", role: "Doubles the photoprotective power of Vitamin C & E" },
      { name: "Vitamin E", role: "Lipid antioxidant creates synergy for maximum glow" }
    ],
    ingredients: "Aqua, 3-O-Ethyl Ascorbic Acid, Propanediol, Prunus Serrulata (Sakura) Flower Extract, Ferulic Acid, Tocopherol, Sodium Hyaluronate, Hydroxyethylcellulose, Sodium Citrate, Citric Acid, Disodium EDTA.",
    howToUse: "In the morning, apply 4-5 drops onto cleansed, dry skin. Press gently into face and neck before applying moisturizer and sunscreen.",
    isFeatured: true
  },
  {
    id: "gg-008",
    name: "Milky Silk Hydrating Essence Toner Mist",
    subtitle: "Ceramide & Rice Ferment Barrier Prep",
    category: "cleansers",
    categoryName: "Cleansers",
    price: 26,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 88,
    badge: "New",
    badgeType: "new",
    skinType: ["All Skin Types", "Dry", "Sensitive"],
    concern: ["Immediate Comfort", "Pre-Serum Prep", "7-Skin Method"],
    sizes: [
      { size: "150 ml", price: 26 }
    ],
    images: [
      "https://images.unsplash.com/photo-1512290900672-1f5be67623d3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A micro-fine mist that cushions thirsty skin in a comforting cloud of fermented rice water, oat beta-glucan, and provitamin B5. Rebalances moisture immediately post-cleansing and preps the skin to absorb serums 3x more effectively.",
    benefits: [
      "Instantly quenches surface tightness and parched dryness",
      "Micro-fine mist nozzle delivers an ultra-soft even halo",
      "Great for the Korean '7-Skin' layering ritual",
      "Can be spritzed over makeup throughout the day for dewy refresh"
    ],
    keyIngredients: [
      { name: "Fermented Rice Water (Galactomyces)", role: "Nourishes with amino acids & enzymes" },
      { name: "Oat Beta-Glucan", role: "20% more hydrating than hyaluronic acid" },
      { name: "Panthenol (Pro-Vitamin B5)", role: "Relieves micro-irritation and builds resilience" },
      { name: "Centella Extract", role: "Tones down heat and surface redness" }
    ],
    ingredients: "Aqua, Galactomyces Ferment Filtrate, Glycerin, Butylene Glycol, Panthenol, Beta-Glucan, Centella Asiatica Extract, Allantoin, 1,2-Hexanediol, Dipotassium Glycyrrhizate.",
    howToUse: "Close eyes and spritz 3-4 pumps across face, neck, and chest immediately after cleansing. Pat lightly with palms until absorbed. Re-mist throughout the day whenever skin needs a boost.",
    isFeatured: false
  },
  {
    id: "gg-009",
    name: "Hydra-Plump 4D Hyaluronic Water Gel",
    subtitle: "Oil-Free Multi-Depth Hydration Moisturizer",
    category: "moisturizers",
    categoryName: "Moisturizers",
    price: 39,
    originalPrice: 45,
    rating: 4.9,
    reviewCount: 240,
    badge: "Clean Formula",
    badgeType: "clean",
    skinType: ["Oily", "Combination", "Acne-Prone", "Dehydrated"],
    concern: ["Weightless Moisture", "Non-Clogging", "Cooling"],
    sizes: [
      { size: "50 ml", price: 39 },
      { size: "100 ml", price: 62 }
    ],
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An invigorating water-burst cream infused with four molecular weights of hyaluronic acid, Icelandic glacier water, and cactus flower extract. Delivers a surge of cooling hydration that quenches deep dermal layers with zero pore buildup.",
    benefits: [
      "Drenches skin in 4-level deep cellular hydration",
      "Cooling burst lowers skin temperature by 3°C on contact",
      "100% oil-free and non-comedogenic (won't trigger breakouts)",
      "Creates a supple, glass-like primer base for foundation"
    ],
    keyIngredients: [
      { name: "4D Hyaluronic Complex", role: "Targeted multi-depth hydration from surface to deep dermis" },
      { name: "Prickly Pear Cactus Water", role: "Electrolyte-rich moisture reservoir" },
      { name: "Spirulina Algae Extract", role: "Detoxifies and infuses essential minerals" },
      { name: "Trehalose", role: "Prevents cellular dehydration under dry climate" }
    ],
    ingredients: "Aqua (Icelandic Water), Propanediol, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Opuntia Ficus-Indica (Cactus) Stem Extract, Spirulina Platensis Extract, Carbomer, Arginine, Ethylhexylglycerin.",
    howToUse: "Smooth a blueberry-sized amount over face and neck in upward strokes morning and evening. Perfect for humid summer weather or anyone seeking ultra-light hydration.",
    isFeatured: false
  },
  {
    id: "gg-010",
    name: "French Pink Clay Detoxifying Pore Mask",
    subtitle: "Gentle Mineral Clarifying & Softening Polish",
    category: "masks",
    categoryName: "Masks",
    price: 34,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 79,
    badge: "Purifying",
    badgeType: "purifying",
    skinType: ["All Skin Types", "Oily", "Congested"],
    concern: ["Clogged Pores", "Blackheads", "Gentle Detox"],
    sizes: [
      { size: "75 ml", price: 34 }
    ],
    images: [
      "https://images.unsplash.com/photo-1567928815116-2917711d9bc5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A whipped pastel pink clay mask sourced from the Auvergne mountains in France. Gently vacuums out stubborn pore impurities, micro-particles, and excess oil without the uncomfortable cracking or moisture stripping of traditional clay masks.",
    benefits: [
      "Draws out sebum plugs and impurities in just 10 minutes",
      "Non-drying formula remains soft and pliable on the skin",
      "Refines uneven skin texture and leaves skin baby-smooth",
      "Infused with soothing hibiscus and organic chamomile"
    ],
    keyIngredients: [
      { name: "French Montmorillonite Pink Clay", role: "Mineral-rich gentle absorbent" },
      { name: "Hibiscus Flower Acids", role: "Naturally exfoliates dead cellular build-up" },
      { name: "Pomegranate Enzymes", role: "Dissolves pore congestion" },
      { name: "Roman Chamomile Flower Oil", role: "Comforts and prevents post-mask redness" }
    ],
    ingredients: "Kaolin (French Pink Clay), Aqua, Montmorillonite, Glycerin, Hibiscus Sabdariffa Flower Extract, Lactobacillus/Punica Granatum Fruit Ferment Extract, Anthemis Nobilis (Chamomile) Flower Oil, Allantoin, Phenoxyethanol.",
    howToUse: "Apply an opaque, even layer to clean skin avoiding direct eye area. Leave on for 10-12 minutes until clay turns slightly lighter (do not allow to fully dry or crack). Remove with a warm, damp cloth. Use once or twice a week.",
    isFeatured: false
  },
  {
    id: "gg-011",
    name: "Glow Glaze Botanical Lip Oil Treatment",
    subtitle: "High-Shine Cushioning Peptide Lip Nectar",
    category: "eye-care",
    categoryName: "Eye & Lip",
    price: 22,
    originalPrice: 26,
    rating: 4.9,
    reviewCount: 310,
    badge: "Viral Favorite",
    badgeType: "viral",
    skinType: ["All Skin Types", "Dry Lips"],
    concern: ["Lip Plumping", "Flake Smoothing", "Glass Shine"],
    sizes: [
      { size: "8 ml", price: 22 }
    ],
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A nourishing hybrid lip oil and sheer glaze infused with raspberry seed oil, maxi-lip peptides, and vanilla orchid. Glides on with a custom oversized doe-foot wand to cocoon lips in mirror-like glass shine without a hint of stickiness.",
    benefits: [
      "Instantly cushions and hydrates chapped, peeling lips",
      "Delivers high-octane glass shine without any tackiness",
      "Peptides visibly boost natural lip volume and contours",
      "Delicious subtle notes of real French vanilla orchid"
    ],
    keyIngredients: [
      { name: "Cold-Pressed Raspberry Seed Oil", role: "Rich in omega-3 & 6 fatty acids" },
      { name: "Maxi-Lip Tripeptide-1", role: "Stimulates collagen for plump, defined lips" },
      { name: "Jojoba Esters", role: "Mimics natural lip lipids for longwear comfort" },
      { name: "Vitamin E", role: "Guards delicate lip barrier from cold winds" }
    ],
    ingredients: "Polybutene, Hydrogenated Polyisobutene, Rubus Idaeus (Raspberry) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Palmitoyl Tripeptide-1, Ethylhexyl Palmitate, Tocopheryl Acetate, Vanilla Planifolia Fruit Extract, CI 77891, CI 77491.",
    howToUse: "Glide generously over bare lips for an effortless dewy tint, or layer atop your favorite lip liner for a lacquered glazed look. Reapply whenever lips crave moisture.",
    isFeatured: true
  },
  {
    id: "gg-012",
    name: "Sun Petal Daily Tinted Glow Fluid SPF 40",
    subtitle: "Illuminating Mineral Sunscreen with Sheer Tint",
    category: "sunscreens",
    categoryName: "Sunscreens",
    price: 38,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 165,
    badge: "Award Winner",
    badgeType: "award",
    skinType: ["All Skin Types", "Dull", "Normal"],
    concern: ["Sun Defense", "Sheer Coverage", "Golden Hour Dew"],
    sizes: [
      { size: "50 ml", price: 38 }
    ],
    images: [
      "https://images.unsplash.com/photo-1556228722-d0b71946ec98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A featherlight mineral sunscreen fluid infused with universal light-adapting pearls and antioxidant dragon fruit. Blurs minor redness and imperfections with a sun-kissed, golden hour glow while shielding skin with broad spectrum SPF 40.",
    benefits: [
      "Adapts seamlessly across diverse skin undertones",
      "Replaces heavy morning foundation with fresh luminous dew",
      "Protects against UVA, UVB, blue light, and infrared heat",
      "Formulated without chemical UV filters, silicones, or parabens"
    ],
    keyIngredients: [
      { name: "Zinc Oxide (16%)", role: "Clean mineral UV barrier" },
      { name: "Hylocereus Undatus (Dragon Fruit) Extract", role: "Super-antioxidant protects elasticity" },
      { name: "Niacinamide (3%)", role: "Evens tone and calms irritation" },
      { name: "Micronized Mica", role: "Ethically sourced pearls provide lit-from-within sheen" }
    ],
    ingredients: "Zinc Oxide (16%), Aqua, Caprylic/Capric Triglyceride, Niacinamide, Glycerin, Hylocereus Undatus Fruit Extract, Mica, Iron Oxides (CI 77491, CI 77492, CI 77499), Polyglyceryl-3 Polyricinoleate, Isostearic Acid.",
    howToUse: "Shake vigorously before each use. Dispense 1-2 pumps onto fingertips and blend evenly across face and neck. Can be worn solo as your all-in-one daily glow base.",
    isFeatured: false
  }
];

// Blog articles data for Skincare Tips section
const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "The Glass Skin Routine: 5 Steps to Dewy, Luminous Skin",
    category: "Skin Rituals",
    readTime: "4 min read",
    date: "October 20, 2026",
    author: "Dr. Evelyn Vance, Dermatologist",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    excerpt: "Achieving translucent, poreless glass skin doesn't require 10 steps. Here is how focusing on layer-thin hydration transforms your dermal barrier.",
    content: `
      <p class="lead">Glass skin is all about hyper-hydrated, healthy, calm skin that reflects light like a clean pane of glass. Rather than piling on thick powders or oily creams, the secret lies in stacking ultra-light, humectant-dense layers.</p>
      
      <h5>Step 1: Gentle Double Cleansing</h5>
      <p>Never strip your acid mantle with harsh foaming cleansers. Start with a gentle oil or botanical micellar fluid, followed by our <strong>Rose Quartz Purifying Gel Cleanser</strong>. Your face should feel supple and hydrated immediately after patting dry.</p>

      <h5>Step 2: The Korean 7-Skin Toner Method</h5>
      <p>Instead of one heavy moisturizer, spritz our <strong>Milky Silk Hydrating Essence Toner Mist</strong> in 2-3 consecutive sheer layers. Gently press each mist into the skin before spraying the next. This saturates the deeper layers of the stratum corneum.</p>

      <h5>Step 3: Active Brightening & Barrier Support</h5>
      <p>Apply our <strong>Luminous Dew 10% Niacinamide & Zinc Serum</strong>. Niacinamide stimulates ceramide production, refines pore elasticity, and smooths microscopic surface roughness.</p>

      <h5>Step 4: Seal with a Lipid Cloud</h5>
      <p>Lock in all that moisture with the <strong>Velvet Petal Ceramide Cloud Cream</strong>. The 5-ceramide complex creates an invisible shield that locks in humectants for up to 72 hours.</p>

      <h5>Step 5: Non-Negotiable Mineral SPF</h5>
      <p>UV radiation degrades collagen and creates dull cellular debris. Finish every single morning with the <strong>Aura Shield Mineral SPF 50+</strong>.</p>
    `
  },
  {
    id: "blog-2",
    title: "Niacinamide vs. Vitamin C: Which One Does Your Skin Truly Need?",
    category: "Ingredient Spotlight",
    readTime: "5 min read",
    date: "October 16, 2026",
    author: "Chloe Dubois, Cosmetic Chemist",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    excerpt: "Demystifying two of skincare's greatest powerhouses. Can you use them together, and how should you layer them for maximum glow?",
    content: `
      <p class="lead">For years, an outdated myth circulated that Vitamin C and Niacinamide couldn't be used together. Modern cosmetic chemistry has debunked this completely—in fact, they are an ultimate dynamic glow duo.</p>
      
      <h5>Vitamin C: The Antioxidant Defense & Radiance Catalyst</h5>
      <p>Vitamin C (specifically our stabilized <strong>Sakura Radiance 15% Ethyl Ascorbic Acid</strong>) excels at neutralizing free radicals from UV light and urban smog. It inhibits tyrosinase, the enzyme responsible for dark spot formation, and prompts fibroblasts to manufacture fresh collagen.</p>

      <h5>Niacinamide: The Barrier Architect & Pore Refiner</h5>
      <p>Niacinamide (Vitamin B3) controls sebaceous gland hyperactivity, calms inflammatory cascades, and increases natural ceramide synthesis. If your concerns are redness, breakout congestion, or oily T-zones, Niacinamide is your champion.</p>

      <h5>How to Layer for Maximum Synergy</h5>
      <p>You can alternate them (Vitamin C in the morning for free-radical defense; Niacinamide in the evening for barrier recovery), or layer them in the same routine by applying Vitamin C first onto clean skin, waiting 2 minutes, and following with Niacinamide!</p>
    `
  },
  {
    id: "blog-3",
    title: "Barrier Repair 101: Signs Your Skin Barrier is Stressed & How to Fix It",
    category: "Skin Health",
    readTime: "6 min read",
    date: "October 10, 2026",
    author: "Maya Patel, Holistic Esthetician",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    excerpt: "Stinging, unexplained flaking, and sudden breakouts? Learn the warning signs of a compromised skin barrier and our 5-day recovery protocol.",
    content: `
      <p class="lead">Your skin barrier is the fortress that keeps vital moisture inside your body and keeps environmental toxins, allergens, and pathogens out. When over-exfoliated or stripped, chaos ensues.</p>

      <h5>Tell-Tale Signs of a Damaged Barrier:</h5>
      <ul>
        <li>Products that normally feel gentle suddenly sting or burn upon application.</li>
        <li>Skin feels simultaneously tight and parched, yet looks oily on top.</li>
        <li>Random red patches, micro-bumps, or heightened sensitivity.</li>
        <li>Makeup flakes or sits unevenly like a dry film.</li>
      </ul>

      <h5>The 5-Day Barrier Reset Protocol</h5>
      <p>1. <strong>Stop All Chemical & Physical Peels:</strong> Put AHAs, BHAs, and scrubs in a drawer for at least two weeks.</p>
      <p>2. <strong>Wash Only With Water in the AM:</strong> In the evening, use only a non-foaming wash like our <em>Rose Quartz Gel Cleanser</em>.</p>
      <p>3. <strong>Flood With Ceramides & Lipids:</strong> Apply generous dollops of <em>Velvet Petal Ceramide Cloud Cream</em> morning and evening.</p>
      <p>4. <strong>Slug Overnight:</strong> Lock everything down with the <em>Lavender Moon Restorative Sleeping Mask</em> to prevent transepidermal water loss while you sleep.</p>
    `
  }
];

// Verified Customer Reviews data
const CUSTOMER_REVIEWS = [
  {
    id: "rev-1",
    author: "Seraphina Lin",
    location: "Los Angeles, CA",
    rating: 5,
    date: "3 days ago",
    skinType: "Combination / Sensitive",
    productName: "Luminous Dew 10% Niacinamide & Zinc",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    title: "Literally replaced 3 of my old serums!",
    review: "I've struggled with hormonal jawline breakouts and redness for years. Within 10 days of using Luminous Dew, the redness calmed down completely and my pores around the nose look airbrushed. The lavender & pastel pink aesthetic is also gorgeous on my vanity!"
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    location: "New York, NY",
    rating: 5,
    date: "1 week ago",
    skinType: "Dry & Dehydrated",
    productName: "Velvet Petal Ceramide Cloud Cream",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    title: "Best winter moisturizer hands down",
    review: "This moisturizer feels like whipped velvet silk. It absorbs so quickly without that heavy silicone slip or grease. I wake up with bouncy, plump skin that looks like I slept for 10 hours straight. Absolutely obsessed."
  },
  {
    id: "rev-3",
    author: "Camila Fernandez",
    location: "Miami, FL",
    rating: 5,
    date: "2 weeks ago",
    skinType: "Sensitive / Melasma prone",
    productName: "Aura Shield Invisible Mineral SPF 50+",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
    title: "Zero white cast on olive skin!!",
    review: "Finding a 100% mineral sunscreen that doesn't leave a ghost mask on tan skin was impossible until Aura Shield. It melts right in and gives the softest semi-matte primer finish under foundation. Will keep re-ordering forever."
  },
  {
    id: "rev-4",
    author: "Aria Montgomery",
    location: "Seattle, WA",
    rating: 5,
    date: "2 weeks ago",
    skinType: "Normal to Dry",
    productName: "Sakura Radiance Vitamin C + E",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    title: "A gentle Vitamin C that actually works",
    review: "Traditional ascorbic acid always broke me out or turned orange in the dropper. Glow & Grace's Sakura formula is clear, gentle, smells divine, and has faded my stubborn sun spots noticeably. 10/10 recommend!"
  }
];
