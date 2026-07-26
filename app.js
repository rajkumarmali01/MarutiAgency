// ===== CONFIG =====
const WHATSAPP_NUMBER = "918154926777";
const FREE_SHIPPING_THRESHOLD = 499;

// ===== PRODUCT DATA =====
const products = [
  {
    id: 1, name: "Kashmiri Turmeric Powder", price: 180, mrp: 220, weight: "200g",
    image: "images/turmeric.png", badge: "Bestseller",
    origin: "Sourced from Lakadong, Meghalaya",
    shortDesc: "Premium high-curcumin turmeric with deep golden color and earthy aroma.",
    fullDesc: "Our Kashmiri Turmeric is sourced from the highlands of Meghalaya, known for the highest curcumin content in India (7-9%). Stone-ground at low temperatures to preserve natural oils and vibrant color. Perfect for curries, milk, and wellness drinks.",
    category: "Powder", shelfLife: "12 Months", curcumin: "7-9%", grade: "A+ Premium",
    benefits: [
      { icon: "🔥", title: "Anti-Inflammatory", desc: "Curcumin reduces inflammation naturally" },
      { icon: "🛡️", title: "Immunity Booster", desc: "Strengthens immune response" },
      { icon: "✨", title: "Skin Health", desc: "Promotes radiant and clear skin" },
      { icon: "💪", title: "Antioxidant Rich", desc: "Fights free radicals in the body" }
    ]
  },
  {
    id: 2, name: "Guntur Red Chili Powder", price: 160, mrp: 190, weight: "200g",
    image: "images/chili.png", badge: "Spicy Hot",
    origin: "Sourced from Guntur, Andhra Pradesh",
    shortDesc: "Fiery red chili powder with vibrant color and intense heat.",
    fullDesc: "Made from handpicked Guntur chilies, renowned worldwide for their heat and deep red color. Our chili powder adds authentic flavor and beautiful color to every dish. No artificial dyes — the rich red comes purely from premium Guntur S17 chilies.",
    category: "Powder", shelfLife: "12 Months", scoville: "30,000-50,000 SHU", grade: "Premium Grade",
    benefits: [
      { icon: "🔥", title: "Metabolism Boost", desc: "Capsaicin accelerates metabolism" },
      { icon: "❤️", title: "Heart Health", desc: "Supports cardiovascular health" },
      { icon: "🦠", title: "Antimicrobial", desc: "Natural antibacterial properties" },
      { icon: "😊", title: "Mood Enhancer", desc: "Triggers endorphin release" }
    ]
  },
  {
    id: 3, name: "Rajasthani Cumin Seeds", price: 220, mrp: 260, weight: "250g",
    image: "images/cumin.png", badge: "Organic",
    origin: "Sourced from Jodhpur, Rajasthan",
    shortDesc: "Aromatic whole cumin seeds with an earthy, warm flavor profile.",
    fullDesc: "Our Rajasthani cumin seeds are harvested from the arid farms of Jodhpur. Known for their strong aroma and slightly nutty taste, these seeds are essential in Indian tempering (tadka). Each seed is cleaned, sorted, and packed to retain peak freshness.",
    category: "Whole Spice", shelfLife: "18 Months", variety: "Gujarat 27", grade: "Export Quality",
    benefits: [
      { icon: "🫁", title: "Digestive Aid", desc: "Promotes healthy digestion" },
      { icon: "🩸", title: "Iron Rich", desc: "Excellent source of dietary iron" },
      { icon: "🧠", title: "Memory Boost", desc: "Enhances cognitive function" },
      { icon: "🛡️", title: "Immunity", desc: "Rich in vitamins C and A" }
    ]
  },
  {
    id: 4, name: "Kerala Green Cardamom", price: 650, mrp: 780, weight: "50g",
    image: "images/cardamom.png", badge: "Premium",
    origin: "Sourced from Idukki, Kerala",
    shortDesc: "The Queen of Spices — intensely aromatic green cardamom pods.",
    fullDesc: "Handpicked from the lush hills of Idukki, Kerala, our green cardamom is the finest 8mm bold grade. Each pod is plump, vibrantly green, and bursting with aromatic seeds. Perfect for chai, biryani, desserts, and traditional Ayurvedic remedies.",
    category: "Whole Spice", shelfLife: "12 Months", size: "8mm Bold", grade: "AGM Premium",
    benefits: [
      { icon: "🫁", title: "Breath Freshener", desc: "Natural mouth freshener" },
      { icon: "💚", title: "Detoxifier", desc: "Helps cleanse the body" },
      { icon: "😌", title: "Stress Relief", desc: "Calming aromatic properties" },
      { icon: "🫀", title: "Blood Pressure", desc: "Helps regulate BP naturally" }
    ]
  },
  {
    id: 5, name: "Dhania Coriander Powder", price: 120, mrp: 145, weight: "200g",
    image: "images/coriander.png", badge: "Essential",
    origin: "Sourced from Kota, Rajasthan",
    shortDesc: "Fresh, citrusy coriander powder — the backbone of Indian cooking.",
    fullDesc: "Finely ground from premium Rajasthani Eagle variety coriander seeds. Our dhania powder has a fresh, citrusy aroma and slightly sweet flavor that forms the base of countless Indian recipes. Stone-ground to preserve essential oils.",
    category: "Powder", shelfLife: "12 Months", variety: "Eagle", grade: "A Grade",
    benefits: [
      { icon: "🫁", title: "Digestion", desc: "Soothes digestive issues" },
      { icon: "🩸", title: "Cholesterol", desc: "May help lower bad cholesterol" },
      { icon: "✨", title: "Skin Care", desc: "Anti-fungal and anti-bacterial" },
      { icon: "👁️", title: "Eye Health", desc: "Rich in beta-carotene and Vitamin A" }
    ]
  },
  {
    id: 6, name: "Malabar Black Pepper", price: 320, mrp: 380, weight: "100g",
    image: "images/pepper.png", badge: "King of Spices",
    origin: "Sourced from Wayanad, Kerala",
    shortDesc: "Bold, pungent Malabar black peppercorns — the King of Spices.",
    fullDesc: "Our Malabar black pepper comes from the tropical plantations of Wayanad. These large, bold peppercorns have an intense piperine kick and complex flavor. Sun-dried on the vine for maximum potency. Ideal for grinding fresh or using whole in recipes.",
    category: "Whole Spice", shelfLife: "24 Months", piperine: "5-9%", grade: "Malabar Garbled",
    benefits: [
      { icon: "🔥", title: "Bioavailability", desc: "Enhances nutrient absorption" },
      { icon: "🫁", title: "Respiratory", desc: "Helps clear congestion" },
      { icon: "⚡", title: "Metabolism", desc: "Thermogenic fat burning" },
      { icon: "🧠", title: "Brain Health", desc: "Piperine supports brain function" }
    ]
  },
  {
    id: 7, name: "Royal Garam Masala", price: 280, mrp: 330, weight: "100g",
    image: "images/garam-masala.png", badge: "Signature Blend",
    origin: "JP Masale's Secret Family Recipe",
    shortDesc: "Our signature 12-spice blend for the perfect finishing touch.",
    fullDesc: "A carefully balanced blend of 12 whole spices — cinnamon, cardamom, cloves, black pepper, bay leaves, nutmeg, mace, cumin, coriander, fennel, star anise, and dried ginger. Each spice is individually roasted before blending. This is our founder's family recipe passed down through generations.",
    category: "Blend", shelfLife: "10 Months", ingredients: "12 Spices", grade: "Artisan Grade",
    benefits: [
      { icon: "🔥", title: "Warming", desc: "Balances body temperature" },
      { icon: "🫁", title: "Digestion", desc: "Aids post-meal digestion" },
      { icon: "🛡️", title: "Immunity", desc: "Blend of immune-boosting spices" },
      { icon: "😋", title: "Flavor Depth", desc: "Adds complex layered flavors" }
    ]
  },
  {
    id: 8, name: "Kashmiri Premium Saffron", price: 1200, mrp: 1450, weight: "1g",
    image: "images/saffron.png", badge: "Luxury",
    origin: "Sourced from Pampore, Kashmir",
    shortDesc: "Pure Kashmiri Mongra saffron — the world's most precious spice.",
    fullDesc: "Hand-harvested from the saffron fields of Pampore, Kashmir. Our Mongra grade saffron (ISO 3632 Category I) has the highest crocin content for intense color and flavor. Each gram requires 150+ flowers. Perfect for biryani, kheer, and kahwa.",
    category: "Premium", shelfLife: "36 Months", grade: "Mongra (ISO 3632-I)", crocin: "250+",
    benefits: [
      { icon: "😊", title: "Mood Booster", desc: "Natural anti-depressant" },
      { icon: "👁️", title: "Vision", desc: "Protects retinal health" },
      { icon: "✨", title: "Skin Glow", desc: "Traditional beauty ingredient" },
      { icon: "🧠", title: "Memory", desc: "Enhances learning & memory" }
    ]
  }
];

// Presentation metadata for the category tiles (image + blurb per category).
const categoryMeta = {
  "Powder":      { image: "images/turmeric.png",     blurb: "Stone-ground daily essentials" },
  "Whole Spice": { image: "images/cumin.png",        blurb: "Cleaned, sorted & sun-dried" },
  "Blend":       { image: "images/garam-masala.png", blurb: "Small-batch family recipes" },
  "Premium":     { image: "images/saffron.png",      blurb: "Rare, hand-harvested luxuries" }
};

// ===== FAQ CONTENT =====
const faqs = [
  {
    q: "How long does delivery take?",
    a: "We dispatch every order within 24 hours of confirmation (Mon–Sat). Delivery typically takes 2–4 days within Gujarat and 4–7 days elsewhere in India. You'll get a tracking update on WhatsApp as soon as your parcel ships."
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes. You can pay cash when your order arrives, or choose UPI / Google Pay or bank transfer at checkout — we'll share the payment details on WhatsApp."
  },
  {
    q: "Is shipping free?",
    a: `Shipping is free across India on orders above ₹${FREE_SHIPPING_THRESHOLD}. Below that, a flat shipping charge applies and will be confirmed on WhatsApp before dispatch.`
  },
  {
    q: "How do I place an order?",
    a: "Add what you want to your cart, tap \"Proceed to Order\", and fill in your delivery details. We'll open WhatsApp with your full order pre-filled — you just tap Send. Your order is confirmed once we reply."
  },
  {
    q: "How should I store the spices?",
    a: "Keep them in a cool, dry place away from direct sunlight, and close the pack tightly after each use. Whole spices keep their aroma longest — grind them just before cooking for the best flavour."
  },
  {
    q: "Are your spices really unadulterated?",
    a: "Yes. Every batch is lab-tested for purity, adulteration, heavy metals, and microbial content, and we comply with FSSAI standards. We use no artificial colours, preservatives, or fillers."
  },
  {
    q: "What if my order arrives damaged?",
    a: "Contact us on WhatsApp within 48 hours of delivery with a photo of the damaged item and packaging, and we'll send a free replacement or refund it in full."
  },
  {
    q: "Do you supply in bulk to restaurants or shops?",
    a: "We do. We supply hotels, caterers, and retailers with bulk packs at wholesale rates. Message us with the products and quantities you need and we'll send a quote the same day."
  }
];

// ===== POLICY CONTENT =====
// Plain-language drafts written from how the shop actually operates.
// Have them reviewed before you rely on them as legal terms.
const policies = {
  shipping: {
    title: "Shipping Policy",
    body: `
      <h3>Where we ship</h3>
      <p>We ship to all serviceable pincodes across India. We do not currently ship internationally.</p>
      <h3>Dispatch time</h3>
      <p>Orders confirmed on WhatsApp before 4:00 PM (Mon–Sat) are dispatched the same working day. Orders placed on Sundays or public holidays are dispatched the next working day.</p>
      <h3>Delivery time</h3>
      <p>Gujarat: typically 2–4 working days. Rest of India: typically 4–7 working days. Remote pincodes may take longer.</p>
      <h3>Shipping charges</h3>
      <p>Free shipping on all orders above ₹${FREE_SHIPPING_THRESHOLD}. For orders below that, a flat shipping charge applies — we confirm the exact amount on WhatsApp before dispatch, so there are no surprises.</p>
      <h3>Tracking</h3>
      <p>We send your tracking details on the same WhatsApp thread you ordered from, as soon as the parcel is handed to the courier.</p>
    `
  },
  returns: {
    title: "Returns & Refunds",
    body: `
      <h3>Damaged, leaking, or wrong items</h3>
      <p>If your order arrives damaged, leaking, or incorrect, message us on WhatsApp within <strong>48 hours of delivery</strong> with a photo of the item and its packaging. We will send a free replacement or refund that item in full — your choice.</p>
      <h3>Food safety</h3>
      <p>Because these are consumable food products, we cannot accept returns of opened packs for reasons other than a quality or fulfilment problem. Unopened packs in original condition can be returned within 7 days of delivery.</p>
      <h3>How refunds are issued</h3>
      <p>Prepaid orders are refunded to the original payment method within 5–7 working days of approval. Cash-on-delivery orders are refunded by UPI or bank transfer to an account you nominate.</p>
      <h3>Order cancellation</h3>
      <p>You can cancel free of charge any time before dispatch — just message us on the same WhatsApp thread. Once a parcel has shipped it can no longer be cancelled.</p>
    `
  },
  privacy: {
    title: "Privacy Policy",
    body: `
      <h3>What we collect</h3>
      <p>Only what we need to deliver your order: your name, phone number, delivery address, and optionally your email address. You type these into the order form on this site.</p>
      <h3>Where it goes</h3>
      <p>This website has no server and no database. The details you enter are used solely to compose a WhatsApp message that <em>you</em> send to us. Nothing is transmitted anywhere until you tap Send in WhatsApp. Your cart is stored only in your own browser's local storage.</p>
      <h3>How we use it</h3>
      <p>To process, pack, and deliver your order, and to contact you about it. We share your name, address, and phone number with our delivery partner for that purpose only.</p>
      <h3>What we never do</h3>
      <p>We do not sell, rent, or trade your personal information to anyone. We do not send marketing messages unless you have asked us to.</p>
      <h3>Your choices</h3>
      <p>Message us on WhatsApp or email <a href="mailto:jagadishmasala777@gmail.com">jagadishmasala777@gmail.com</a> to request a copy of your data or ask us to delete it from our order records.</p>
    `
  },
  terms: {
    title: "Terms & Conditions",
    body: `
      <h3>About us</h3>
      <p>JP Masale sells packaged Indian spices from Bharuch, Gujarat, India.</p>
      <h3>Orders</h3>
      <p>Adding items to the cart and sending the WhatsApp message is a request to buy, not a completed sale. An order is confirmed only when we reply to confirm availability and the final amount including any shipping charge.</p>
      <h3>Pricing</h3>
      <p>All prices are in Indian Rupees (₹) and include applicable taxes unless stated otherwise. We may change prices at any time, but never after an order has been confirmed. Where a struck-through price is shown, it is the maximum retail price for that pack.</p>
      <h3>Product information</h3>
      <p>Natural agricultural products vary. Colour, aroma, and coarseness can differ slightly between harvests. Product images are representative. Weights are as printed on the pack.</p>
      <h3>Health claims</h3>
      <p>Any traditional or nutritional benefits described on this site are for general information only. They are not medical advice and are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified professional before using spices therapeutically.</p>
      <h3>Governing law</h3>
      <p>These terms are governed by the laws of India, and disputes fall under the jurisdiction of the courts of Bharuch, Gujarat.</p>
    `
  }
};

// ===== STATE =====
let cart = loadCart();
let modalQty = 1;
let activeCategory = "All";
let searchQuery = "";
const focusStack = [];

function loadCart() {
  // A corrupted localStorage entry used to throw here and kill the whole script.
  try {
    const raw = JSON.parse(localStorage.getItem('jp_cart') || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter(c => c && products.some(p => p.id === c.id))
      .map(c => ({ id: c.id, qty: Math.max(1, parseInt(c.qty, 10) || 1) }));
  } catch (err) {
    console.warn('Could not read saved cart, starting fresh.', err);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('jp_cart', JSON.stringify(cart));
  } catch (err) {
    console.warn('Could not save cart.', err);
  }
}

// ===== HELPERS =====
const $ = id => document.getElementById(id);

function esc(str) {
  return String(str).replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}

function formatINR(n) { return '₹' + n.toLocaleString('en-IN'); }

function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

let toastTimer = null;
function showToast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

// ===== FOCUS MANAGEMENT =====
// A stack, not a single slot — the cart can hand off to the order modal while
// its own restore target is still pending.
function pushFocus() { focusStack.push(document.activeElement); }

function popFocus() {
  const el = focusStack.pop();
  if (el && el !== document.body && document.contains(el) && !el.closest('[inert]')) {
    el.focus();
  }
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function trapFocus(e, container) {
  if (e.key !== 'Tab') return;
  const items = [...container.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null || el === document.activeElement);
  if (!items.length) return;
  // If focus has escaped the dialog entirely (e.g. a re-render destroyed the
  // focused node), pull it back in rather than letting Tab walk the page.
  if (!container.contains(document.activeElement)) {
    e.preventDefault();
    items[0].focus();
    return;
  }
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function openOverlay(el, focusTarget) {
  pushFocus();
  el.hidden = false;
  el.classList.add('active');
  document.body.style.overflow = 'hidden';
  const target = focusTarget || el.querySelector(FOCUSABLE);
  if (target) target.focus();
}

function closeOverlay(el) {
  el.classList.remove('active');
  el.hidden = true;
  if (!anyOverlayOpen()) document.body.style.overflow = '';
  popFocus();
}

function anyOverlayOpen() {
  return $('productModal').classList.contains('active')
    || $('infoModal').classList.contains('active')
    || $('orderModal').classList.contains('active')
    || $('cartSidebar').classList.contains('open');
}

// Escape closes whichever layer is on top.
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if ($('orderModal').classList.contains('active')) closeOrderModal();
    else if ($('infoModal').classList.contains('active')) closeOverlay($('infoModal'));
    else if ($('cartSidebar').classList.contains('open')) closeCart();
    else if ($('productModal').classList.contains('active')) closeProductModal();
    else if ($('navLinks').classList.contains('open')) toggleMobileNav(false);
    return;
  }
  if ($('orderModal').classList.contains('active')) trapFocus(e, $('orderModal'));
  else if ($('infoModal').classList.contains('active')) trapFocus(e, $('infoModal'));
  else if ($('cartSidebar').classList.contains('open')) trapFocus(e, $('cartSidebar'));
  else if ($('productModal').classList.contains('active')) trapFocus(e, $('productModal'));
});

// ===== CATEGORY TILES =====
function renderCategoryTiles() {
  const categories = [...new Set(products.map(p => p.category))];
  $('categoryTiles').innerHTML = categories.map(cat => {
    const meta = categoryMeta[cat] || {};
    const count = products.filter(p => p.category === cat).length;
    return `
      <button class="cat-tile fade-up" data-filter="${esc(cat)}">
        <img src="${esc(meta.image || '')}" alt="" loading="lazy" width="300" height="150">
        <div class="cat-tile-body">
          <h3>${esc(cat)}</h3>
          <span>${count} product${count === 1 ? '' : 's'} · ${esc(meta.blurb || '')}</span>
        </div>
      </button>`;
  }).join('');
}

// ===== FILTER TABS =====
function renderFilterTabs() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  $('filterTabs').innerHTML = categories.map(cat => `
    <button class="filter-tab" aria-pressed="${cat === activeCategory}" data-filter="${esc(cat)}">
      ${esc(cat)}
    </button>`).join('');
}

function setCategory(cat, keepFocus = false) {
  activeCategory = cat;
  renderFilterTabs();
  renderProducts();
  // The tab the user just pressed was destroyed by the re-render — put focus back.
  if (keepFocus) {
    const tab = $('filterTabs').querySelector(`[data-filter="${CSS.escape(cat)}"]`);
    if (tab) tab.focus();
  }
}

// ===== PRODUCT RENDERING =====
function getFilteredProducts() {
  const q = searchQuery.trim().toLowerCase();
  return products.filter(p => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    if (!q) return true;
    return [p.name, p.shortDesc, p.origin, p.category, p.badge]
      .join(' ').toLowerCase().includes(q);
  });
}

function renderProducts() {
  const list = getFilteredProducts();

  $('noResults').hidden = list.length > 0;
  $('resultsCount').textContent = list.length
    ? `Showing ${list.length} of ${products.length} products`
    : 'No products match your search';

  $('productsGrid').innerHTML = list.map(p => {
    const hasDeal = p.mrp && p.mrp > p.price;
    const off = hasDeal ? Math.round((1 - p.price / p.mrp) * 100) : 0;
    return `
    <article class="product-card fade-up">
      <div class="card-img-wrap">
        <img src="${esc(p.image)}" alt="" class="card-img" loading="lazy" width="400" height="300">
        <span class="card-badge">${esc(p.badge)}</span>
        ${hasDeal ? `<span class="card-discount">${off}% OFF</span>` : ''}
      </div>
      <div class="card-body">
        <h3><button class="card-open" data-id="${p.id}">${esc(p.name)}</button></h3>
        <p class="card-cat">${esc(p.category)}</p>
        <p class="card-desc">${esc(p.shortDesc)}</p>
        <div class="card-footer">
          <div class="card-price">
            ${formatINR(p.price)} <span>/ ${esc(p.weight)}</span>
            ${hasDeal ? `<span class="card-mrp">M.R.P. ${formatINR(p.mrp)}</span>` : ''}
          </div>
          <button class="btn-add" data-add="${p.id}" aria-label="Add ${esc(p.name)} to cart">Add to Cart</button>
        </div>
      </div>
    </article>`;
  }).join('');

  observeFadeUps();
}

// Event delegation — cards are re-rendered on every filter/search change.
$('productsGrid').addEventListener('click', e => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) { addToCart(Number(addBtn.dataset.add)); return; }
  const openBtn = e.target.closest('[data-id]');
  if (openBtn) openProductModal(Number(openBtn.dataset.id));
});

// ===== SEARCH =====
let searchDebounce = null;
$('productSearch').addEventListener('input', e => {
  searchQuery = e.target.value;
  $('searchClear').hidden = !searchQuery;
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(renderProducts, 150);
});

function clearSearch() {
  searchQuery = '';
  $('productSearch').value = '';
  $('searchClear').hidden = true;
}

$('searchClear').addEventListener('click', () => {
  clearSearch();
  renderProducts();
  $('productSearch').focus();
});

$('resetFilters').addEventListener('click', () => {
  clearSearch();
  setCategory('All');
  $('productSearch').focus(); // #noResults just got hidden — don't strand focus
});

function focusSearch() {
  $('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => $('productSearch').focus(), 450);
}

$('searchBtn').addEventListener('click', focusSearch);
$('bnSearch').addEventListener('click', focusSearch);

// ===== FILTER / CATEGORY DELEGATION =====
$('filterTabs').addEventListener('click', e => {
  const tab = e.target.closest('[data-filter]');
  if (tab) setCategory(tab.dataset.filter, true);
});

$('categoryTiles').addEventListener('click', e => {
  const tile = e.target.closest('[data-filter]');
  if (!tile) return;
  setCategory(tile.dataset.filter);
  $('products').scrollIntoView({ behavior: 'smooth' });
});

// Promo banners and footer product links jump straight to a filtered grid.
document.querySelectorAll('.btn-promo[data-filter], .footer-col a[data-filter]').forEach(el => {
  el.addEventListener('click', () => setCategory(el.dataset.filter));
});

// ===== POLICY MODAL =====
document.querySelectorAll('[data-policy]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const policy = policies[el.dataset.policy];
    if (!policy) return;
    $('infoTitle').textContent = policy.title;
    $('infoContent').innerHTML = policy.body +
      `<p class="info-note">Last updated July 2026. Questions? Message us on WhatsApp or email
       <a href="mailto:jagadishmasala777@gmail.com">jagadishmasala777@gmail.com</a>.</p>`;
    openOverlay($('infoModal'), $('infoClose'));
  });
});

$('infoClose').addEventListener('click', () => closeOverlay($('infoModal')));
$('infoModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeOverlay($('infoModal')); });

// Social placeholders — flag rather than silently going nowhere.
document.querySelectorAll('[data-social]').forEach(el => {
  el.addEventListener('click', e => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      showToast('Social links coming soon.');
    }
  });
});

// ===== FAQ =====
function renderFaqs() {
  $('faqList').innerHTML = faqs.map(f => `
    <details class="faq-item">
      <summary>${esc(f.q)}</summary>
      <div class="faq-answer">${esc(f.a)}</div>
    </details>`).join('');
}

// ===== PRODUCT DETAIL MODAL =====
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modalQty = 1;
  $('modalImg').src = p.image;
  $('modalTitle').textContent = p.name;
  $('modalOrigin').textContent = p.origin;
  $('modalDesc').textContent = p.fullDesc;
  $('modalPrice').innerHTML = `${formatINR(p.price)} <span>/ ${esc(p.weight)}</span>` +
    (p.mrp && p.mrp > p.price ? ` <del>${formatINR(p.mrp)}</del>` : '');
  $('qtyValue').textContent = '1';

  const metaKeys = ['category','shelfLife','grade','curcumin','scoville','variety','piperine','ingredients','crocin','size'];
  const labels = { category:'Type', shelfLife:'Shelf Life', grade:'Grade', curcumin:'Curcumin', scoville:'Heat Level', variety:'Variety', piperine:'Piperine', ingredients:'Ingredients', crocin:'Crocin', size:'Size' };
  $('modalMeta').innerHTML = metaKeys
    .filter(k => p[k])
    .map(k => `<div class="meta-item"><span class="meta-label">${esc(labels[k])}</span><p>${esc(p[k])}</p></div>`)
    .join('');

  $('modalBenefits').innerHTML = p.benefits.map(b =>
    `<div class="benefit-item"><div class="icon" aria-hidden="true">${esc(b.icon)}</div><div><h4>${esc(b.title)}</h4><p>${esc(b.desc)}</p></div></div>`
  ).join('');

  renderRelated(p);

  $('modalAddCart').onclick = () => { addToCart(id, modalQty); closeProductModal(); };
  // Re-entrant: opening a related product from inside the modal must not stack overlays.
  if ($('productModal').classList.contains('active')) {
    $('modalClose').focus();
    $('productModal').querySelector('.modal-scroll').scrollTop = 0;
  } else {
    openOverlay($('productModal'), $('modalClose'));
  }
}

function renderRelated(current) {
  let related = products.filter(p => p.id !== current.id && p.category === current.category);
  if (related.length === 0) related = products.filter(p => p.id !== current.id);
  related = related.slice(0, 3);

  $('modalRelated').hidden = related.length === 0;
  $('relatedGrid').innerHTML = related.map(p => `
    <button class="related-card" data-related="${p.id}">
      <img src="${esc(p.image)}" alt="" loading="lazy" width="120" height="90">
      <div class="rc-body">
        <h4>${esc(p.name)}</h4>
        <span>${formatINR(p.price)}</span>
      </div>
    </button>`).join('');
}

$('relatedGrid').addEventListener('click', e => {
  const btn = e.target.closest('[data-related]');
  if (btn) openProductModal(Number(btn.dataset.related));
});

function closeProductModal() { closeOverlay($('productModal')); }

$('modalClose').addEventListener('click', closeProductModal);
$('productModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeProductModal(); });
$('qtyPlus').addEventListener('click', () => { modalQty++; $('qtyValue').textContent = modalQty; });
$('qtyMinus').addEventListener('click', () => { if (modalQty > 1) { modalQty--; $('qtyValue').textContent = modalQty; } });

// ===== CART =====
function addToCart(id, qty = 1) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  updateCartUI();
  bumpCartIcon();
  showToast(`${p.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); updateCartUI(); renderCartItems();
  // The button that was just pressed no longer exists.
  const next = $('cartItems').querySelector('.remove-item') || $('cartClose');
  if ($('cartSidebar').classList.contains('open') && next) next.focus();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart(); updateCartUI(); renderCartItems();
  // Re-render destroyed the stepper — restore focus to the same button.
  const btn = $('cartItems').querySelector(`[data-qty="${id}"][data-delta="${delta}"]`);
  if (btn) btn.focus();
}

function getCartCount() { return cart.reduce((s, c) => s + c.qty, 0); }

function getCartTotal() {
  return cart.reduce((s, c) => {
    const p = products.find(x => x.id === c.id);
    return s + (p ? p.price * c.qty : 0);
  }, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();
  const label = `Open cart, ${count} item${count === 1 ? '' : 's'}`;

  $('cartCount').textContent = count;
  $('bnCartCount').textContent = count;
  $('cartTotal').textContent = formatINR(total);
  $('cartBtn').setAttribute('aria-label', label);
  $('bnCart').setAttribute('aria-label', label);

  const empty = count === 0;
  $('checkoutBtn').disabled = empty;
  $('quickWhatsappBtn').disabled = empty;

  const note = $('cartShipNote');
  if (empty) note.textContent = '';
  else if (total >= FREE_SHIPPING_THRESHOLD) note.textContent = '🎉 You have unlocked free shipping!';
  else note.textContent = `Add ${formatINR(FREE_SHIPPING_THRESHOLD - total)} more for free shipping`;
}

function renderCartItems() {
  const container = $('cartItems');
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="empty-icon" aria-hidden="true">🛒</div><p>Your cart is empty.<br>Add some spices!</p></div>`;
    return;
  }
  container.innerHTML = cart.map(c => {
    const p = products.find(x => x.id === c.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${esc(p.image)}" alt="" loading="lazy">
        <div class="cart-item-info">
          <h4>${esc(p.name)}</h4>
          <div class="ci-price">${formatINR(p.price * c.qty)}</div>
          <div class="cart-item-actions">
            <button data-qty="${p.id}" data-delta="-1" aria-label="Decrease quantity of ${esc(p.name)}">−</button>
            <span aria-live="polite">${c.qty}</span>
            <button data-qty="${p.id}" data-delta="1" aria-label="Increase quantity of ${esc(p.name)}">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${p.id}" aria-label="Remove ${esc(p.name)} from cart">✕</button>
      </div>`;
  }).join('');
}

$('cartItems').addEventListener('click', e => {
  const qtyBtn = e.target.closest('[data-qty]');
  if (qtyBtn) { updateQty(Number(qtyBtn.dataset.qty), Number(qtyBtn.dataset.delta)); return; }
  const rmBtn = e.target.closest('[data-remove]');
  if (rmBtn) removeFromCart(Number(rmBtn.dataset.remove));
});

function bumpCartIcon() {
  const btn = $('cartBtn');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = 'scale(1)', 300);
}

// ===== CART SIDEBAR =====
function openCart() {
  renderCartItems();
  pushFocus();
  const el = $('cartSidebar');
  el.removeAttribute('inert');
  el.classList.add('open');
  $('cartBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('cartClose').focus();
}

function closeCart({ restoreFocus = true } = {}) {
  const el = $('cartSidebar');
  el.classList.remove('open');
  el.setAttribute('inert', '');
  $('cartBackdrop').classList.remove('open');
  if (restoreFocus) popFocus(); else focusStack.pop();
  if (!anyOverlayOpen()) document.body.style.overflow = '';
}

$('cartBtn').addEventListener('click', openCart);
$('bnCart').addEventListener('click', openCart);
$('cartClose').addEventListener('click', () => closeCart());
$('cartBackdrop').addEventListener('click', () => closeCart());

// ===== ORDER FLOW =====
$('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  // Hand off without bouncing focus through the (now hidden) cart trigger.
  closeCart({ restoreFocus: false });
  openOrderModal();
});

$('quickWhatsappBtn').addEventListener('click', () => {
  if (cart.length === 0) return;
  openWhatsApp(buildWhatsAppMessage(null));
  closeCart();
});

function openOrderModal() {
  $('orderFormContent').style.display = 'block';
  $('orderSuccessContent').style.display = 'none';
  // A previous checkout may have re-pointed this at the success heading.
  $('orderModal').setAttribute('aria-labelledby', 'orderHeading');

  let html = '<h4>Order Summary</h4>';
  cart.forEach(c => {
    const p = products.find(x => x.id === c.id);
    if (p) html += `<div class="os-item"><span>${esc(p.name)} × ${c.qty}</span><span>${formatINR(p.price * c.qty)}</span></div>`;
  });
  html += `<div class="os-total"><span>Total</span><span>${formatINR(getCartTotal())}</span></div>`;
  $('orderSummary').innerHTML = html;

  updatePayNote();
  openOverlay($('orderModal'), $('orderHeading'));
}

function closeOrderModal() { closeOverlay($('orderModal')); }

$('orderModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeOrderModal(); });
$('orderModalClose').addEventListener('click', closeOrderModal);

// "Done" clears the cart; "Keep my cart" leaves it intact.
$('continueShoppingBtn').addEventListener('click', () => {
  cart = [];
  saveCart();
  updateCartUI();
  closeOrderModal();
  showToast('Cart cleared. Thank you for your order!');
});

$('keepCartBtn').addEventListener('click', () => {
  closeOrderModal();
  showToast('Your cart has been kept.');
});

// ===== PAYMENT NOTE =====
const payNotes = {
  cod: 'Pay in cash when your order is delivered.',
  upi: "We'll send our UPI ID on WhatsApp so you can pay before dispatch.",
  bank: "We'll send our bank details on WhatsApp so you can transfer before dispatch."
};

function updatePayNote() {
  $('payNote').textContent = payNotes[$('payMethod').value] || '';
}

$('payMethod').addEventListener('change', updatePayNote);

// ===== FORM VALIDATION =====
const validators = {
  custName: v => v.length >= 2 || 'Please enter your full name.',
  custPhone: v => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) || 'Enter a valid 10-digit Indian mobile number.',
  custEmail: v => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Enter a valid email address.',
  custAddress: v => v.length >= 10 || 'Please enter your full delivery address.',
  custCity: v => v.length >= 2 || 'Please enter your city.',
  custPincode: v => /^[1-9]\d{5}$/.test(v) || 'Enter a valid 6-digit pincode.'
};

function setFieldError(id, message) {
  const field = $(id);
  const errEl = $('err-' + id);
  if (message) {
    field.classList.add('invalid');
    field.setAttribute('aria-invalid', 'true');
    if (errEl) errEl.textContent = message;
  } else {
    field.classList.remove('invalid');
    field.removeAttribute('aria-invalid');
    if (errEl) errEl.textContent = '';
  }
}

function validateField(id) {
  const result = validators[id]($(id).value.trim());
  setFieldError(id, result === true ? '' : result);
  return result === true;
}

Object.keys(validators).forEach(id => {
  $(id).addEventListener('blur', () => validateField(id));
  $(id).addEventListener('input', () => {
    if ($(id).classList.contains('invalid')) validateField(id);
  });
});

// ===== WHATSAPP MESSAGE =====
function buildWhatsAppMessage(customerDetails = null) {
  let msg = `🌿 *NEW ORDER - JP MASALE* 🌿\n`;
  msg += `=============================\n\n`;

  if (customerDetails) {
    msg += `👤 *CUSTOMER DETAILS:*\n`;
    msg += `• *Name:* ${customerDetails.name}\n`;
    msg += `• *Phone:* ${customerDetails.phone}\n`;
    if (customerDetails.email && customerDetails.email !== 'Not provided') {
      msg += `• *Email:* ${customerDetails.email}\n`;
    }
    msg += `• *Address:* ${customerDetails.address}\n`;
    msg += `• *City:* ${customerDetails.city} (PIN: ${customerDetails.pincode})\n`;
    msg += `• *Payment:* ${customerDetails.payMethod}\n\n`;
  }

  msg += `🛒 *ORDERED ITEMS (${getCartCount()} items):*\n`;
  cart.forEach((c, i) => {
    const p = products.find(x => x.id === c.id);
    if (p) {
      msg += `\n${i + 1}. *${p.name}*\n`;
      msg += `   ▫️ Qty: ${c.qty} (${p.weight})\n`;
      msg += `   ▫️ Price: ₹${p.price * c.qty} (₹${p.price} each)\n`;
    }
  });

  msg += `\n=============================\n`;
  msg += `💰 *TOTAL AMOUNT: ₹${getCartTotal()}*\n`;
  if (getCartTotal() < FREE_SHIPPING_THRESHOLD) {
    msg += `(Shipping charge to be confirmed)\n`;
  } else {
    msg += `(Free shipping)\n`;
  }
  msg += `=============================\n\n`;
  msg += `Please process my order. Thank you! 🙏`;

  return msg;
}

function openWhatsApp(msg) {
  const url = waLink(msg);
  const fallbackBtn = $('whatsappFallbackBtn');
  if (fallbackBtn) fallbackBtn.href = url;
  window.open(url, '_blank', 'noopener');
}

$('orderForm').addEventListener('submit', e => {
  e.preventDefault();

  const allValid = Object.keys(validators).map(validateField).every(Boolean);
  if (!allValid) {
    const firstBad = document.querySelector('#orderForm .invalid');
    if (firstBad) firstBad.focus();
    showToast('Please fix the highlighted fields.');
    return;
  }

  const payEl = $('payMethod');
  openWhatsApp(buildWhatsAppMessage({
    name: $('custName').value.trim(),
    phone: $('custPhone').value.trim(),
    email: $('custEmail').value.trim() || 'Not provided',
    address: $('custAddress').value.trim(),
    city: $('custCity').value.trim(),
    pincode: $('custPincode').value.trim(),
    payMethod: payEl.options[payEl.selectedIndex].text
  }));

  $('orderFormContent').style.display = 'none';
  $('orderSuccessContent').style.display = 'block';
  // The focused submit button just got hidden — move focus into the new pane.
  $('orderSuccessHeading').focus();
  $('orderModal').setAttribute('aria-labelledby', 'orderSuccessHeading');

  // NOTE: the cart is deliberately NOT cleared here. The WhatsApp message is
  // only a draft until the customer taps Send; clearing now would lose their
  // basket if the popup was blocked or they backed out.
});

// ===== NAVBAR =====
function toggleMobileNav(force) {
  const links = $('navLinks');
  const open = force !== undefined ? force : !links.classList.contains('open');
  links.classList.toggle('open', open);
  $('mobileToggle').setAttribute('aria-expanded', String(open));
}

$('mobileToggle').addEventListener('click', () => toggleMobileNav());
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => toggleMobileNav(false));
});

// Every scrollable section, including ones with no nav link — otherwise the
// highlight stays stuck on the last listed section while scrolling past them.
const NAV_SECTIONS = ['hero', 'categories', 'products', 'manufacturing', 'about', 'faq', 'visit', 'testimonials', 'footer'];

function updateActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  let current = '';
  NAV_SECTIONS.forEach(id => {
    const el = $(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  links.forEach(a => {
    const isCurrent = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isCurrent);
    if (isCurrent) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

function updateHeaderState() {
  const compact = window.scrollY > 50;
  $('siteHeader').classList.toggle('scrolled', compact);
  // Mirrored onto <html> so scroll-padding-top can match the collapsed header.
  document.documentElement.classList.toggle('nav-compact', compact);
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateHeaderState();
    updateActiveNav();
    scrollTicking = false;
  });
}, { passive: true });

// ===== FADE-UP OBSERVER =====
// One shared observer for the page — previously a new one was created per call.
const fadeObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

function observeFadeUps() {
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => fadeObserver.observe(el));
}

// ===== WHATSAPP ENTRY POINTS =====
function initWhatsAppLinks() {
  $('waFloat').href = waLink("Hi JP Masale! I have a question about your spices.");
  $('wholesaleBtn').href = waLink(
    "Hi JP Masale! I'd like wholesale/bulk pricing.\n\nBusiness name:\nProducts & quantities:\nCity:"
  );
}

// ===== SEO: STRUCTURED DATA =====
function injectSchema() {
  const dir = location.protocol.startsWith('http')
    ? location.origin + location.pathname.replace(/[^/]*$/, '')
    : '';

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "JP Masale Spice Collection",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.shortDesc,
        "image": dir + p.image,
        "category": p.category,
        "brand": { "@type": "Brand", "name": "JP Masale" },
        "weight": p.weight,
        "offers": {
          "@type": "Offer",
          "price": p.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  [itemList, faqPage].forEach(data => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  });
}

// ===== INIT =====
renderCategoryTiles();
renderFilterTabs();
renderProducts();
renderFaqs();
updateCartUI();
updatePayNote();
updateHeaderState(); // correct header/scroll-padding state on a hash deep-link
updateActiveNav();
initWhatsAppLinks();
observeFadeUps();
injectSchema();
