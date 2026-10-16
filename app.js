// ===== CONFIG =====
const WHATSAPP_NUMBER = "918154926777";
const FREE_SHIPPING_THRESHOLD = 499;

// ===== PRODUCT DATA =====
// Real JP Masala catalogue — photographed retail packs from Jagdish Masala Mill,
// Rajpardi, Jhagadia, Bharuch. Prices are indicative retail (INR) with MRP shown.
const products = [
  {
    id: 1, name: "Haldi Powder (Turmeric)",
    badge: "Bestseller",
    origin: "Milled fresh at Bharuch, Gujarat",
    shortDesc: "Bright golden turmeric, pure and finely ground for everyday cooking.",
    fullDesc: "JP Haldi Powder is milled from clean, sun-dried turmeric to a fine, free-flowing powder with a warm earthy aroma and rich golden colour. No added colour or starch — just pure haldi for daily sabji, dal, and haldi-doodh. Available in 100g, 200g and 500g packs.",
    category: "Powder", shelfLife: "12 Months", grade: "Pure & Natural", curcumin: "3-5%",
    image: "images/jp-turmeric.jpeg",
    variants: [
      { weight: "100gm", price: 55, image: "images/jp-turmeric-100g.jpeg" },
      { weight: "200gm", price: 110, image: "images/jp-turmeric-200g.jpeg" },
      { weight: "500gm", price: 270, image: "images/jp-turmeric-500g.jpeg" }
    ],
    benefits: [
      { icon: "🔥", title: "Anti-Inflammatory", desc: "Curcumin soothes inflammation naturally" },
      { icon: "🛡️", title: "Immunity Booster", desc: "A daily kitchen staple for wellness" },
      { icon: "✨", title: "Skin Health", desc: "Traditional glow-boosting spice" },
      { icon: "💪", title: "Antioxidant Rich", desc: "Helps fight free radicals" }
    ]
  },
  {
    id: 2, name: "Mirch Powder (Red Chilli)",
    badge: "Spicy Hot",
    origin: "Milled fresh at Bharuch, Gujarat",
    shortDesc: "Bold, mouth-watering red chilli powder with fine texture and rich colour.",
    fullDesc: "The secret behind mouth-watering, flavourful dishes. JP Mirch Powder is hygienically processed from quality dried red chillies for a clean, fiery heat and vibrant colour that lifts every curry, shaak, and masala. Pure, natural, and finely ground. Available in 100g, 200g and 500g.",
    category: "Powder", shelfLife: "12 Months", grade: "Fine Quality", scoville: "Medium–Hot",
    image: "images/jp-chili.jpeg",
    variants: [
      { weight: "100gm", price: 60, image: "images/jp-mirch-100g.jpeg" },
      { weight: "200gm", price: 120, image: "images/jp-mirch-200g.jpeg" },
      { weight: "500gm", price: 300, image: "images/jp-mirch-500g.jpeg" }
    ],
    benefits: [
      { icon: "🔥", title: "Metabolism Boost", desc: "Capsaicin fires up metabolism" },
      { icon: "❤️", title: "Heart Health", desc: "Supports healthy circulation" },
      { icon: "🦠", title: "Antimicrobial", desc: "Natural antibacterial properties" },
      { icon: "😊", title: "Mood Enhancer", desc: "Triggers a feel-good endorphin kick" }
    ]
  },
  {
    id: 3, name: "Kashmiri Chilly Powder",
    badge: "Rich Colour",
    origin: "Milled fresh at Bharuch, Gujarat",
    shortDesc: "Mild Kashmiri (Kumthi) chilli that gives deep red colour without harsh heat.",
    fullDesc: "Made from Kumthi Kashmiri chillies, prized for a deep, glowing red colour and a gentle, mild heat. Perfect for tandoori marinades, gravies, and dishes where you want vibrant colour without overpowering spice. Available in 100g, 200g and 500g.",
    category: "Powder", shelfLife: "12 Months", grade: "Premium", scoville: "Mild · Deep Colour",
    image: "images/jp-kashmiri-chilli.jpeg",
    variants: [
      { weight: "100gm", price: 125, image: "images/jp-kashmiri-chilli-100g.jpeg" },
      { weight: "200gm", price: 250, image: "images/jp-kashmiri-chilli.jpeg" },
      { weight: "500gm", price: 625, image: "images/jp-kashmiri-chilli-500g.jpeg" }
    ],
    benefits: [
      { icon: "🎨", title: "Natural Colour", desc: "Deep red without artificial dye" },
      { icon: "🌶️", title: "Mild Heat", desc: "Flavour and colour, easy on the tongue" },
      { icon: "🍗", title: "Perfect Marinades", desc: "Ideal for tandoori & tikka" },
      { icon: "💪", title: "Antioxidant Rich", desc: "Loaded with natural carotenoids" }
    ]
  },
  {
    id: 4, name: "Dhaniya Jeera Powder",
    badge: "Everyday Essential",
    origin: "Milled fresh at Bharuch, Gujarat",
    shortDesc: "Classic coriander-cumin blend — the base of everyday Gujarati cooking.",
    fullDesc: "JP Dhaniya Jeera (Dhana-Jeeru) is a fresh-ground blend of coriander and cumin in the perfect ratio for daily shaak and dal. Citrusy dhaniya balanced with warm, nutty jeera — the one masala no Gujarati kitchen runs without. Available in 100g, 200g and 500g.",
    category: "Powder", shelfLife: "12 Months", grade: "A Grade", variety: "Coriander + Cumin",
    image: "images/jp-dhana-jeera.jpeg",
    variants: [
      { weight: "100gm", price: 50, image: "images/jp-dhana-jeera-100g.jpeg" },
      { weight: "200gm", price: 100, image: "images/jp-dhana-jeera.jpeg" },
      { weight: "500gm", price: 250, image: "images/jp-dhana-jeera-500g.jpeg" }
    ],
    benefits: [
      { icon: "🫁", title: "Digestion", desc: "Coriander & cumin ease digestion" },
      { icon: "🩸", title: "Cholesterol", desc: "May support healthy cholesterol" },
      { icon: "🧠", title: "Iron & Aroma", desc: "Warm, nutty everyday flavour" },
      { icon: "👁️", title: "Rich in Vitamins", desc: "Source of beta-carotene & Vitamin A" }
    ]
  },
  {
    id: 5, name: "Garam Masala",
    badge: "Signature Blend",
    origin: "JP family recipe, Bharuch",
    shortDesc: "Aromatic whole-spice garam masala for a warm, restaurant-style finish.",
    fullDesc: "A balanced blend of roasted whole spices — cinnamon, cardamom, cloves, black pepper, bay leaf, cumin, coriander and more. Freshly ground for a deep, warming aroma that finishes any curry, biryani or shaak beautifully. Available in 100g, 200g and 500g.",
    category: "Masala Blend", shelfLife: "10 Months", grade: "Artisan", ingredients: "12+ Spices",
    image: "images/jp-garam-masala.jpeg",
    variants: [
      { weight: "100gm", price: 80, image: "images/jp-garam-masala-100g.jpeg" },
      { weight: "200gm", price: 160, image: "images/jp-garam-masala-200g.jpeg" },
      { weight: "500gm", price: 400, image: "images/jp-garam-masala-500g.jpeg" }
    ],
    benefits: [
      { icon: "🔥", title: "Warming", desc: "Balances body temperature" },
      { icon: "🫁", title: "Digestion", desc: "Aids post-meal digestion" },
      { icon: "🛡️", title: "Immunity", desc: "Blend of immune-friendly spices" },
      { icon: "😋", title: "Flavour Depth", desc: "Adds rich, layered aroma" }
    ]
  },
  {
    id: 7, name: "Chaat Masala",
    badge: "Tangy",
    origin: "JP family recipe, Bharuch",
    shortDesc: "Tangy, zesty chaat masala to sprinkle over fruits, salads and snacks.",
    fullDesc: "A zingy blend of dried mango (amchur), black salt, cumin, black pepper and aromatic spices. Sprinkle over fruit, salad, chaat, raita, and street snacks for an instant tangy, mouth-watering kick.",
    category: "Masala Blend", shelfLife: "12 Months", grade: "Tangy Blend", ingredients: "Amchur, Black Salt, Jeera…",
    image: "images/jp-chaat-masala.jpeg",
    variants: [
      { weight: "50gm", price: 40, image: "images/jp-chaat-masala.jpeg" }
    ],
    benefits: [
      { icon: "🍋", title: "Tangy Kick", desc: "Amchur & black salt zing" },
      { icon: "🥗", title: "Versatile", desc: "Fruits, salads, chaat & drinks" },
      { icon: "🫁", title: "Digestive", desc: "Black salt aids digestion" },
      { icon: "😋", title: "Instant Flavour", desc: "One sprinkle transforms a snack" }
    ]
  },
  {
    id: 8, name: "Kitchen King Masala",
    badge: "All-in-One",
    origin: "JP family recipe, Bharuch",
    shortDesc: "All-in-one masala for rich, flavourful sabji and mixed-veg gravies.",
    fullDesc: "The all-rounder blend for everyday vegetables and mixed-veg curries. Kitchen King brings a rich, well-rounded flavour to any shaak so you don't need a shelf full of masalas. 100% veg.",
    category: "Masala Blend", shelfLife: "12 Months", grade: "All-Rounder", ingredients: "All-in-one blend",
    image: "images/jp-kitchen-king.jpeg",
    variants: [
      { weight: "50gm", price: 40, image: "images/jp-kitchen-king.jpeg" }
    ],
    benefits: [
      { icon: "👑", title: "One-for-All", desc: "Covers most everyday sabjis" },
      { icon: "🥘", title: "Rich Gravy", desc: "Full-bodied, balanced taste" },
      { icon: "🌿", title: "100% Veg Mix", desc: "Pure spice blend" },
      { icon: "⏱️", title: "Saves Time", desc: "Fewer jars, faster cooking" }
    ]
  },
  {
    id: 9, name: "Kasuri Methi",
    badge: "Aromatic Leaves",
    origin: "Sun-dried fenugreek leaves, Bharuch",
    shortDesc: "Fragrant sun-dried fenugreek leaves to finish dals, curries and parathas.",
    fullDesc: "Premium sun-dried fenugreek (methi) leaves with a distinctive, slightly bitter aroma. Crush a pinch over dal, paneer curries, sabji and parathas to add that signature dhaba-style fragrance. 100% natural, no additives.",
    category: "Kitchen Essential", shelfLife: "12 Months", grade: "Sun-dried", variety: "Fenugreek Leaves",
    image: "images/jp-kasuri-methi.jpeg",
    variants: [
      { weight: "25gm", price: 30, image: "images/jp-kasuri-methi.jpeg" },
      { weight: "100gm", price: 100, image: "images/jp-kasuri-methi-100g.jpeg" }
    ],
    benefits: [
      { icon: "🌿", title: "Signature Aroma", desc: "Classic dhaba-style fragrance" },
      { icon: "🫁", title: "Digestive", desc: "Traditionally eases digestion" },
      { icon: "🩸", title: "Blood Sugar", desc: "Fenugreek supports sugar balance" },
      { icon: "😋", title: "A Little Goes Far", desc: "One pinch lifts a whole dish" }
    ]
  },
  {
    id: 10, name: "Kashmiri Mirchi Box",
    badge: "Deep Colour",
    origin: "Milled fresh at Bharuch, Gujarat",
    shortDesc: "Handy retail box of mild Kashmiri chilli for rich colour in every dish.",
    fullDesc: "The same deep-red, mild Kashmiri chilli in a convenient sealed 50g carton — ideal for smaller kitchens and gifting. Adds glowing colour to gravies and tandoori dishes without harsh heat. Check seal before purchase.",
    category: "Kitchen Essential", shelfLife: "12 Months", grade: "Premium", scoville: "Mild · Deep Colour",
    image: "images/jp-kashmiri-mirchi-box.jpeg",
    variants: [
      { weight: "50gm", price: 60, image: "images/jp-kashmiri-mirchi-box.jpeg" }
    ],
    benefits: [
      { icon: "🎨", title: "Natural Colour", desc: "Deep red, no artificial dye" },
      { icon: "🌶️", title: "Mild Heat", desc: "Colour without overpowering spice" },
      { icon: "📦", title: "Sealed Carton", desc: "Fresh, tamper-check pack" },
      { icon: "🍗", title: "Great for Marinades", desc: "Tandoori & tikka favourite" }
    ]
  },
  {
    id: 11, name: "JP Hing (Asafoetida)",
    badge: "New Launch",
    origin: "Compounded & packed at Bharuch, Gujarat",
    shortDesc: "Baat nis ki nahi, Hing ki hai! Pure, strong & potent for zordaar flavour.",
    fullDesc: "New Launch! Baat nis ki nahi, Hing ki hai! Pure, strong and potent compounded asafoetida with ekdum asli zordaar flavour. Just a pinch lifts dal, sambar, rasam and shaak — swaad pe perfect rang jam jaayega! Hygienically packed at Bharuch.",
    category: "Kitchen Essential", shelfLife: "18 Months", grade: "Premium Strong", variety: "Compounded Hing",
    image: "images/jp-hing.jpeg",
    variants: [
      { weight: "50gm", price: 120, image: "images/jp-hing.jpeg" }
    ],
    benefits: [
      { icon: "✨", title: "Rich Aroma", desc: "Intense, traditional tadka fragrance" },
      { icon: "🫁", title: "Digestive Aid", desc: "Known for soothing bloating & gas" },
      { icon: "🍲", title: "Umami Punch", desc: "Lifts flavour in onion/garlic-free dishes" },
      { icon: "👌", title: "A Pinch is Enough", desc: "High potency, lasts longer" }
    ]
  },
  {
    id: 12, name: "Chai Masala (Tea Masala)",
    badge: "Kadak Flavour",
    origin: "JP family recipe, Bharuch",
    shortDesc: "Aromatic blend of cardamom, dry ginger & cinnamon for royal masala tea.",
    fullDesc: "JP Chai Masala turns everyday tea into a rich, royal experience. Specially crafted from roasted whole spices — fragrant green cardamom, sun-dried ginger (saunth), cinnamon, cloves, and black pepper. Just a pinch brewed into your tea infuses deep warmth, irresistible aroma, and an invigorating kick. 100% natural with no artificial flavours.",
    category: "Masala Blend", shelfLife: "12 Months", grade: "Premium Aromatic", ingredients: "Cardamom, Dry Ginger, Cinnamon, Cloves, Pepper",
    image: "images/jp-chai-masala.jpeg",
    variants: [
      { weight: "50gm", price: 80, image: "images/jp-chai-masala.jpeg" }
    ],
    benefits: [
      { icon: "☕", title: "Kadak Chai", desc: "Transforms ordinary tea into fragrant masala chai" },
      { icon: "🌿", title: "Cold & Cough Relief", desc: "Ginger & cinnamon help soothe throat & boost immunity" },
      { icon: "🫁", title: "Digestion", desc: "Cardamom and warming spices aid digestion" },
      { icon: "⚡", title: "Fresh Energy", desc: "Invigorating spice aroma to start your day" }
    ]
  }
];

// Backwards compatibility convenience properties
products.forEach(p => {
  if (p.variants && p.variants.length) {
    p.price = p.variants[0].price;
    p.weight = p.variants[0].weight;
  }
});

// Presentation metadata for the category tiles (image + blurb per category).
const categoryMeta = {
  "Powder":            { image: "images/jp-turmeric.jpeg",      blurb: "Freshly milled daily essentials" },
  "Masala Blend":      { image: "images/jp-garam-masala.jpeg",  blurb: "Ready blends & family recipes" },
  "Kitchen Essential": { image: "images/jp-kasuri-methi.jpeg",  blurb: "The little extras every rasoi needs" }
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
      <p>JP Masala sells packaged Indian spices from Bharuch, Gujarat, India.</p>
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
const selectedCardVariants = {};
let currentModalProductId = null;
let currentModalVidx = 0;
let cart = loadCart();
let modalQty = 1;
let activeCategory = "All";
let searchQuery = "";
const focusStack = [];

function getProductVariant(product, weight) {
  if (!product || !product.variants || !product.variants.length) return null;
  if (!weight) return product.variants[0];
  return product.variants.find(v => v.weight === weight) || product.variants[0];
}

function loadCart() {
  // A corrupted localStorage entry used to throw here and kill the whole script.
  try {
    const raw = JSON.parse(localStorage.getItem('jp_cart') || '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter(c => c && products.some(p => p.id === c.id))
      .map(c => {
        const p = products.find(prod => prod.id === c.id);
        const v = getProductVariant(p, c.weight);
        return {
          id: c.id,
          weight: v ? v.weight : (p.variants[0] ? p.variants[0].weight : "50gm"),
          qty: Math.max(1, parseInt(c.qty, 10) || 1)
        };
      });
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

function selectCardVariant(pid, vidx) {
  selectedCardVariants[pid] = vidx;
  const p = products.find(x => x.id === pid);
  if (!p) return;
  const v = p.variants[vidx] || p.variants[0];
  const card = $(`card-${pid}`);
  if (!card) return;

  card.dataset.selectedVidx = vidx;

  // Update variant button classes
  card.querySelectorAll('[data-var-pid]').forEach(btn => {
    const isAct = Number(btn.dataset.varIdx) === vidx;
    btn.classList.toggle('active', isAct);
    btn.setAttribute('aria-pressed', String(isAct));
  });

  // Update image
  const imgEl = $(`card-img-${pid}`);
  if (imgEl && v.image) {
    imgEl.src = v.image;
  }

  // Update price
  const priceEl = $(`card-price-${pid}`);
  if (priceEl) {
    priceEl.innerHTML = `${formatINR(v.price)} <span class="card-weight-unit">/ ${esc(v.weight)}</span>`;
  }

  // Update discount badge
  const discEl = $(`card-discount-${pid}`);
  if (discEl) {
    discEl.textContent = `10% OFF`;
    discEl.style.display = '';
  }

  // Update add button aria-label
  const addBtn = card.querySelector('.btn-add');
  if (addBtn) {
    addBtn.setAttribute('aria-label', `Add ${p.name} ${v.weight} to cart`);
  }
}

function renderProducts() {
  const list = getFilteredProducts();

  $('noResults').hidden = list.length > 0;
  $('resultsCount').textContent = list.length
    ? `Showing ${list.length} of ${products.length} products`
    : 'No products match your search';

  $('productsGrid').innerHTML = list.map(p => {
    const vIndex = selectedCardVariants[p.id] || 0;
    const v = p.variants[vIndex] || p.variants[0];
    const currentImg = v.image || p.image;

    const variantHtml = p.variants.length > 1
      ? `<div class="card-variants" role="group" aria-label="Select pack size">
          <span class="card-variants-label">Size:</span>
          ${p.variants.map((vItem, idx) => `
            <button class="var-btn ${idx === vIndex ? 'active' : ''}"
              data-var-pid="${p.id}"
              data-var-idx="${idx}"
              type="button"
              aria-pressed="${idx === vIndex}">
              ${esc(vItem.weight)}
            </button>
          `).join('')}
        </div>`
      : `<div class="card-variants single">
          <span class="var-badge">Pack: ${esc(v.weight)}</span>
        </div>`;

    return `
    <article class="product-card fade-up" id="card-${p.id}" data-id="${p.id}" data-selected-vidx="${vIndex}">
      <div class="card-img-wrap">
        <img src="${esc(currentImg)}" alt="${esc(p.name)}" class="card-img" id="card-img-${p.id}" loading="lazy" width="400" height="300">
        <span class="card-badge">${esc(p.badge)}</span>
        <span class="card-discount" id="card-discount-${p.id}">10% OFF</span>
      </div>
      <div class="card-body">
        <h3><button class="card-open" data-id="${p.id}">${esc(p.name)}</button></h3>
        <p class="card-cat">${esc(p.category)}</p>
        <p class="card-desc">${esc(p.shortDesc)}</p>
        ${variantHtml}
        <div class="card-footer">
          <div class="card-price" id="card-price-${p.id}">
            ${formatINR(v.price)} <span class="card-weight-unit">/ ${esc(v.weight)}</span>
          </div>
          <button class="btn-add" data-add="${p.id}" aria-label="Add ${esc(p.name)} ${esc(v.weight)} to cart">Add to Cart</button>
        </div>
      </div>
    </article>`;
  }).join('');

  observeFadeUps();
}

// Event delegation — cards are re-rendered on every filter/search change.
$('productsGrid').addEventListener('click', e => {
  const varBtn = e.target.closest('[data-var-pid]');
  if (varBtn) {
    e.stopPropagation();
    const pid = Number(varBtn.dataset.varPid);
    const vidx = Number(varBtn.dataset.varIdx);
    selectCardVariant(pid, vidx);
    return;
  }
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    const pid = Number(addBtn.dataset.add);
    const p = products.find(x => x.id === pid);
    if (!p) return;
    const vidx = selectedCardVariants[pid] || 0;
    const v = p.variants[vidx] || p.variants[0];
    addToCart(pid, v.weight, 1);
    return;
  }
  const openBtn = e.target.closest('[data-id]');
  if (openBtn) {
    const pid = Number(openBtn.dataset.id);
    const vidx = selectedCardVariants[pid] || 0;
    openProductModal(pid, vidx);
  }
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
function openProductModal(id, initialVidx = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentModalProductId = id;
  currentModalVidx = initialVidx !== null ? initialVidx : (selectedCardVariants[id] || 0);
  modalQty = 1;

  $('modalTitle').textContent = p.name;
  $('modalOrigin').textContent = p.origin;
  $('modalDesc').textContent = p.fullDesc;
  $('qtyValue').textContent = '1';

  renderModalVariantUI(p);

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

  $('modalAddCart').onclick = () => {
    const v = p.variants[currentModalVidx] || p.variants[0];
    addToCart(id, v.weight, modalQty);
    closeProductModal();
  };

  // Re-entrant: opening a related product from inside the modal must not stack overlays.
  if ($('productModal').classList.contains('active')) {
    $('modalClose').focus();
    $('productModal').querySelector('.modal-scroll').scrollTop = 0;
  } else {
    openOverlay($('productModal'), $('modalClose'));
  }
}

function renderModalVariantUI(p) {
  const v = p.variants[currentModalVidx] || p.variants[0];
  $('modalImg').src = v.image || p.image;
  $('modalPrice').innerHTML = `${formatINR(v.price)} <span>/ ${esc(v.weight)}</span> <span class="modal-discount-tag">10% OFF</span>`;

  const varContainer = $('modalVariants');
  if (varContainer) {
    if (p.variants.length > 1) {
      varContainer.innerHTML = `
        <span class="modal-var-label">Select Pack Size:</span>
        <div class="modal-var-pills">
          ${p.variants.map((vItem, idx) => `
            <button class="modal-var-btn ${idx === currentModalVidx ? 'active' : ''}"
              data-modal-vidx="${idx}"
              type="button">
              <span class="mv-weight">${esc(vItem.weight)}</span>
              <span class="mv-price">${formatINR(vItem.price)}</span>
            </button>
          `).join('')}
        </div>
      `;
    } else {
      varContainer.innerHTML = `
        <div class="card-variants single">
          <span class="var-badge">Pack Size: ${esc(v.weight)}</span>
        </div>
      `;
    }
  }
}

const modalVarContainer = $('modalVariants');
if (modalVarContainer) {
  modalVarContainer.addEventListener('click', e => {
    const btn = e.target.closest('[data-modal-vidx]');
    if (!btn) return;
    const vidx = Number(btn.dataset.modalVidx);
    currentModalVidx = vidx;
    if (currentModalProductId) {
      selectCardVariant(currentModalProductId, vidx);
      const p = products.find(x => x.id === currentModalProductId);
      if (p) renderModalVariantUI(p);
    }
  });
}

function renderRelated(current) {
  let related = products.filter(p => p.id !== current.id && p.category === current.category);
  if (related.length === 0) related = products.filter(p => p.id !== current.id);
  related = related.slice(0, 3);

  $('modalRelated').hidden = related.length === 0;
  $('relatedGrid').innerHTML = related.map(p => {
    const v = p.variants[0];
    return `
    <button class="related-card" data-related="${p.id}">
      <img src="${esc(v.image || p.image)}" alt="" loading="lazy" width="120" height="90">
      <div class="rc-body">
        <h4>${esc(p.name)}</h4>
        <span>from ${formatINR(v.price)}</span>
      </div>
    </button>`;
  }).join('');
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
function addToCart(id, weight = null, qty = 1) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const v = getProductVariant(p, weight);
  const vWeight = v.weight;
  const existing = cart.find(c => c.id === id && c.weight === vWeight);
  if (existing) existing.qty += qty;
  else cart.push({ id, weight: vWeight, qty });
  saveCart();
  updateCartUI();
  bumpCartIcon();
  showToast(`${p.name} (${vWeight}) added to cart`);
}

function removeFromCart(id, weight) {
  cart = cart.filter(c => !(c.id === id && c.weight === weight));
  saveCart(); updateCartUI(); renderCartItems();
  // The button that was just pressed no longer exists.
  const next = $('cartItems').querySelector('.remove-item') || $('cartClose');
  if ($('cartSidebar').classList.contains('open') && next) next.focus();
}

function updateQty(id, weight, delta) {
  const item = cart.find(c => c.id === id && c.weight === weight);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id, weight); return; }
  saveCart(); updateCartUI(); renderCartItems();
  // Re-render destroyed the stepper — restore focus to the same button.
  const btn = $('cartItems').querySelector(`[data-qty="${id}"][data-weight="${CSS.escape(weight)}"][data-delta="${delta}"]`);
  if (btn) btn.focus();
}

function getCartCount() { return cart.reduce((s, c) => s + c.qty, 0); }

function getCartTotal() {
  return cart.reduce((s, c) => {
    const p = products.find(x => x.id === c.id);
    if (!p) return s;
    const v = getProductVariant(p, c.weight);
    return s + (v ? v.price * c.qty : 0);
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
    const v = getProductVariant(p, c.weight);
    const itemImg = v.image || p.image;
    return `
      <div class="cart-item">
        <img src="${esc(itemImg)}" alt="" loading="lazy">
        <div class="cart-item-info">
          <h4>${esc(p.name)}</h4>
          <span class="ci-weight">${esc(v.weight)}</span>
          <div class="ci-price">${formatINR(v.price * c.qty)} <small style="color:var(--text-muted);font-weight:400;">(${formatINR(v.price)} each)</small></div>
          <div class="cart-item-actions">
            <button data-qty="${p.id}" data-weight="${esc(v.weight)}" data-delta="-1" aria-label="Decrease quantity of ${esc(p.name)} ${esc(v.weight)}">−</button>
            <span aria-live="polite">${c.qty}</span>
            <button data-qty="${p.id}" data-weight="${esc(v.weight)}" data-delta="1" aria-label="Increase quantity of ${esc(p.name)} ${esc(v.weight)}">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${p.id}" data-weight="${esc(v.weight)}" aria-label="Remove ${esc(p.name)} ${esc(v.weight)} from cart">✕</button>
      </div>`;
  }).join('');
}

$('cartItems').addEventListener('click', e => {
  const qtyBtn = e.target.closest('[data-qty]');
  if (qtyBtn) { updateQty(Number(qtyBtn.dataset.qty), qtyBtn.dataset.weight, Number(qtyBtn.dataset.delta)); return; }
  const rmBtn = e.target.closest('[data-remove]');
  if (rmBtn) removeFromCart(Number(rmBtn.dataset.remove), rmBtn.dataset.weight);
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
    if (p) {
      const v = getProductVariant(p, c.weight);
      html += `<div class="os-item"><span>${esc(p.name)} (${esc(v.weight)}) × ${c.qty}</span><span>${formatINR(v.price * c.qty)}</span></div>`;
    }
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
  let msg = `🌿 *NEW ORDER - JP MASALA* 🌿\n`;
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
      const v = getProductVariant(p, c.weight);
      msg += `\n${i + 1}. *${p.name}*\n`;
      msg += `   ▫️ Pack Size: ${v.weight}\n`;
      msg += `   ▫️ Qty: ${c.qty}\n`;
      msg += `   ▫️ Price: ₹${v.price * c.qty} (₹${v.price} each)\n`;
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
  $('waFloat').href = waLink("Hi JP Masala! I have a question about your spices.");
  $('wholesaleBtn').href = waLink(
    "Hi JP Masala! I'd like wholesale/bulk pricing.\n\nBusiness name:\nProducts & quantities:\nCity:"
  );
  const ann = $('annNotifyBtn');
  if (ann) ann.href = waLink("Hi JP! Please notify me when JP ANN Atta launches. 🌾");
}

// ===== SEO: STRUCTURED DATA =====
function injectSchema() {
  const dir = location.protocol.startsWith('http')
    ? location.origin + location.pathname.replace(/[^/]*$/, '')
    : '';

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "JP Masala Spice Collection",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.shortDesc,
        "image": dir + p.image,
        "category": p.category,
        "brand": { "@type": "Brand", "name": "JP Masala" },
        "offers": p.variants.map(v => ({
          "@type": "Offer",
          "name": `${p.name} - ${v.weight}`,
          "price": v.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }))
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
