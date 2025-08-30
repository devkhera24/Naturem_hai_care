// tiny helpers
const $ = (s, r = document) => r.querySelector(s);

// ---- ROUTES ----
const routes = {
  "/": homeView,        // home available at #/
  "/home": homeView,    // and also at #/home (both work)
  "/about": aboutView,
  "/products": productsView,
  "/contact": contactView,
};

// ---- VIEWS ----
function homeView() {
  return `
  <section class="hero section">
    <div class="bg"></div>
    <div class="container hero-inner grid-2">
      <div>
        <span class="badge">✨ Mom's recipe for healthy hair</span>
        <h1 style="font-size:clamp(2rem,5vw,3.6rem);margin:.6rem 0 1rem;font-weight:900">Naturem Hair Serum</h1>
        <p class="muted">Crafted with rosemary, aloe vera, and vitamin E to nourish your scalp, reduce breakage, and bring natural shine. Clean, gentle, and effective.</p>
        <div style="display:flex;gap:.8rem;margin-top:1rem">
          <a class="btn outline" href="#/products">Explore Products</a>
          <a class="btn primary" href="#/contact">Contact Us</a>
        </div>
        <div style="display:flex;gap:1.5rem;margin-top:1rem;color:var(--muted)">
          <span>💧 Lightweight, non-greasy</span>
          <span>🍃 100% natural</span>
        </div>
      </div>
      <div>
        <div class="card" style="border-radius:999px;aspect-ratio:1/1;display:grid;place-items:center;background:radial-gradient(circle,#fff 45%, rgba(10,100,60,.1) 46%, rgba(10,100,60,.12) 60%, transparent 61%)">
          <div style="text-align:center">
            <div style="font-size:2rem;font-weight:800">Serum</div>
            <div class="muted" style="font-size:.8rem">Rosemary • Aloe Vera • Vitamin E</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 style="font-size:1.8rem;margin-bottom:.5rem">Powered by nature</h2>
      <p class="muted" style="margin-bottom:1.2rem">Our signature blend combines time-tested botanicals for visible results.</p>
      <div class="products">
        ${[
          {t:"Rosemary",d:"Stimulates scalp, supports thicker-looking hair."},
          {t:"Aloe Vera",d:"Soothes dryness and hydrates roots."},
          {t:"Vitamin E",d:"Protects from damage and adds shine."},
          {t:"Mustard seeds",d:"Smoothens and a good source of vitamin E."},
        ].map(i=>`<div class="card"><div class="badge">🍃</div><h3 style="margin:.4rem 0">${i.t}</h3><p class="muted">${i.d}</p></div>`).join('')}
      </div>
    </div>
  </section>`;
}

function aboutView(){
  const t = [
    {n:"Anshika Yadav",x:"I ordered 1 100ml bottle first because I was not sure about the quality, but when I tried OMG. I ordered more than 20 bottles to give it to my customers in an offer"},
    {n:"Rajeev",x:"I am in the field of pharmaceuticals for long now and I have personally used the product. I can say that it does give results and has no side effects."},
    {n:"Harshit",x:"My friend told me about Naturem serum and it works especially against Bangalore hard water. Big thanks to the Naturem team"},
    {n:"Lakshay",x:"Hair fall problem - Naturem is the one stop solution. That's all I would say"},
    {n:"Kirthi",x:"I loved the product and recommended it to all my friends"},
    {n:"Sanjeevani",x:"Makes my hair super smooth and shiny at a nominal price."},
  ];
  return `
  <section class="section"><div class="container">
    <h1 style="font-size:2rem;font-weight:800">About Naturem</h1>
    <p class="muted">Naturem began in our family kitchen, where mom crafted a simple hair oil that brought life back to tired strands. We refined her recipe with modern best practices, keeping the heart of it unchanged: a gentle blend of rosemary, aloe vera, and vitamin E.</p>
    <p class="muted">Our promise is clean, effective care. No parabens, no sulfates, no silicones—just nature-forward ingredients, bottled fresh in small batches.</p>
    <div class="kpis" style="margin-top:1rem">
      <div class="card kpi"><div style="font-size:1.4rem;font-weight:800">100%</div><div class="muted" style="font-size:.8rem">Natural</div></div>
      <div class="card kpi"><div style="font-size:1.4rem;font-weight:800">Always</div><div class="muted" style="font-size:.8rem">Cruelty-free</div></div>
      <div class="card kpi"><div style="font-size:1.4rem;font-weight:800">Small</div><div class="muted" style="font-size:.8rem">Batches</div></div>
    </div>
    <h2 style="font-size:1.6rem;margin:1.5rem 0 .8rem">What people say</h2>
    <div class="products">
      ${t.map(i=>`<figure class="card"><div class="badge">“”</div><blockquote class="muted">${i.x}</blockquote><figcaption style="margin-top:.6rem;font-weight:600">${i.n}</figcaption></figure>`).join('')}
    </div>
  </div></section>`;
}

function productsView(){
  const ps = [
    {name:"Hair Serum — 100 ml",desc:"Full-size bottle for a complete 4–6 week routine.",size:"100ml",priceBlr:100},
    {name:"Hair Serum — 50 ml",desc:"Travel-size or trial bottle for 2–3 weeks.",size:"50ml",priceBlr:79},
  ];
  return `
  <section class="section"><div class="container">
    <h1 style="font-size:2rem;font-weight:800">Our Products</h1>
    <p class="muted">We currently offer Naturem Hair Serum in two sizes. Prices shown are for Bangalore. Other cities will have separate charges shared after you place the order.</p>
    <div class="products">
      ${ps.map(p=>{
        return `<div class="card">
          <div style="border-radius:12px;background:color-mix(in oklab, hsl(var(--accent)), white 50%);height:200px;border:1px solid hsl(var(--border));margin-bottom:12px"></div>
          <h3>${p.name}</h3>
          <p class="muted">${p.desc}</p>
          <div style="margin:.5rem 0;font-weight:600">Bangalore: ₹${p.priceBlr}</div>
          <div class="muted">Other cities: charges shared after order</div>
        </div>`;
      }).join('')}
    </div>
  </div></section>`;
}

function contactView(){
  return `
  <section class="section">
    <div class="container" style="max-width:700px">
      <h1 style="font-size:2rem;font-weight:800">Contact Us</h1>
      <p class="muted">Questions about Naturem? We'd love to hear from you.</p>
      <div class="card">
        <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:1rem">WhatsApp Numbers</h2>
        <ul class="list">
          <li>📱 +91 93710 65002 — <strong>Parth Pethia</strong></li>
          <li>📱 +91 73107 93503 — <strong>Garvit Sachdeva</strong></li>
        </ul>
      </div>
    </div>
  </section>`;
}

function notFoundView(){
  return `<section class="section"><div class="container"><h1>404</h1><p class="muted">Page not found.</p><a class="btn" href="#/">Go Home</a></div></section>`;
}

// ---- RENDERER ----
function render(){
  let path = location.hash.replace('#','');
  if (!path) path = "/home"; // default to Home on first load
  const view = routes[path.split('?')[0]] || notFoundView;
  $('#app').innerHTML = view();
  postRender();
}

function postRender(){
  const year = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = year;
}

// run once + respond to changes
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
