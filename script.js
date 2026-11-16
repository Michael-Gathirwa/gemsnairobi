/* ═══════════════════════════════════════════
   NAIROBI GEMS — script.js
═══════════════════════════════════════════ */

/* ── GEM DATA ── */
const gems = {
  urban: {
    title: 'Urban Eatery',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
    desc: 'A beloved Nairobi institution that has served everyone from morning joggers to late-night revellers. Their breakfast platters are unmatched, and the dinner crowd on weekends is electric. Arrive early or prepare to wait — it\'s always worth it.',
    location: 'Westlands, Nairobi',
    hours: '7:00am – Midnight',
    price: 'KES 500 – 1,500',
    vibe: 'Casual & Welcoming',
  },
  nsk: {
    title: 'Nairobi Street Kitchen',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    desc: 'Born from the streets of Nairobi, this spot takes everything great about local street food and gives it a proper home. The nyama choma is sensational, the portions are generous, and the energy on weekends is purely Nairobi.',
    location: 'CBD, Nairobi',
    hours: '11:00am – 11:00pm',
    price: 'KES 300 – 900',
    vibe: 'Lively & Local',
  },
  blacksamurai: {
    title: 'Black Samurai Lounge',
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80',
    desc: 'Moody interiors, impeccable cocktails, and a soundtrack that moves. Black Samurai is for those who like their nights sophisticated but not stiff. It\'s become a cult favourite among Nairobi\'s creative crowd.',
    location: 'Westlands, Nairobi',
    hours: '5:00pm – 4:00am',
    price: 'KES 1,000 – 3,000',
    vibe: 'Dark & Sophisticated',
  },
  k1: {
    title: 'K1 Klub House',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80',
    desc: 'Ask any Nairobian about their best night out and K1 will come up. This legendary venue has been the beating heart of the city\'s nightlife for years. Famous reggae Thursdays and packed Fridays and Saturdays are unmissable.',
    location: 'Parklands, Nairobi',
    hours: 'Fri–Sun from 9:00pm',
    price: 'Entry from KES 500',
    vibe: 'Iconic Party Spot',
  },
  yunion: {
    title: 'Yunion — Brunch Café & Bar',
    img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=700&q=80',
    desc: 'Nairobi\'s go-to brunch destination. Think elegant plates, flowing mimosas, and a warm, buzzy atmosphere that makes Sundays worth waking up for. Their pancake stacks are a Nairobi icon.',
    location: 'Westlands, Nairobi',
    hours: '8:00am – 10:00pm',
    price: 'KES 800 – 2,000',
    vibe: 'Relaxed & Photogenic',
  },
  kettel: {
    title: 'Kettel House Bar & Grill',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80',
    desc: 'Hidden away in Karen, Kettel House is a Sunday afternoon dream. Big garden, great grills, cold drinks, and none of the rush of the city. Bring friends, bring appetite.',
    location: 'Karen, Nairobi',
    hours: '12:00pm – 11:00pm',
    price: 'KES 700 – 2,000',
    vibe: 'Garden & Outdoors',
  },
  masshouse: {
    title: 'Mass House',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=700&q=80',
    desc: 'Live bands on weekends, resident DJs every night, and a crowd that genuinely loves music. Mass House is where Nairobi\'s music scene comes alive. The Thursday jazz sessions are a hidden treasure.',
    location: 'Westlands, Nairobi',
    hours: '4:00pm – 4:00am',
    price: 'KES 500 – 2,500',
    vibe: 'Live Music & Dancing',
  },
  '270': {
    title: '270° Rooftop Restaurant',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80',
    desc: 'The name says it all. A sweeping panoramic view over Nairobi\'s skyline, excellent cocktails, and food that matches the views. Sunset here is a full experience. One of the city\'s most romantic spots.',
    location: 'Kilimani, Nairobi',
    hours: '12:00pm – 2:00am',
    price: 'KES 1,500 – 4,000',
    vibe: 'Scenic & Romantic',
  },
  kahani: {
    title: 'Kahani',
    img: 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=700&q=80',
    desc: 'A quiet gem in Gigiri. Kahani\'s Indian-inspired menu is a revelation — spices that tell stories, plates that look like art, and a calm ambience that feels worlds away from the city\'s hustle.',
    location: 'Gigiri, Nairobi',
    hours: '12:00pm – 10:30pm',
    price: 'KES 1,500 – 4,500',
    vibe: 'Intimate & Refined',
  },
  alchemist: {
    title: 'The Alchemist',
    img: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=80',
    desc: 'Nairobi\'s most iconic creative hub. Food trucks, live music, open-air movie nights, DJs, ping pong — it\'s not just a bar, it\'s an experience. Happy hour every day 3–8pm. Always something on, always someone interesting to meet.',
    location: 'Westlands, Nairobi',
    hours: '1:00pm – 4:00am',
    price: 'KES 500 (redeemable)',
    vibe: 'Creative & Open Air',
  },
  hero: {
    title: 'Hero Bar',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&q=80',
    desc: 'East Africa\'s #1 cocktail bar and Nairobi\'s first speakeasy. A manga-style menu, African-inspired spirits, a rooftop cocktail lab, and graffiti by local artists. Ranked best bar in Africa by 50 Best Bars — enough said.',
    location: 'Westlands (Trademark Hotel, 9th fl)',
    hours: '5:00pm – 2:00am',
    price: 'KES 1,500 – 5,000',
    vibe: 'World-Class Cocktails',
  },
  brew: {
    title: 'Brew Bistro & Lounge',
    img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=700&q=80',
    desc: 'Nairobi\'s original craft beer destination on Piedmont Plaza. Master brewers, premium in-house brews, gourmet food, and a terrace that comes alive at night. Happy hour 5–7pm, karaoke nights, and DJ sets on weekends.',
    location: 'Ngong Road, Nairobi',
    hours: '12:00pm – 4:00am',
    price: 'KES 600 – 2,500',
    vibe: 'Craft Beer & Good Times',
  },
  sarabi: {
    title: 'Sarabi Rooftop Bar',
    img: 'https://images.unsplash.com/photo-1533777324565-a040eb52fac4?w=700&q=80',
    desc: 'Upscale rooftop at Sankara Hotel — infinity pool, lounge seating, one of the best cocktail menus in town, and a skyline view that never gets old. Dress code applies; arrive early on weekends.',
    location: 'Westlands (Sankara Hotel)',
    hours: '11:00am – 2:00am',
    price: 'KES 1,500 – 5,000',
    vibe: 'Luxury Rooftop',
  },
  havana: {
    title: 'Havana Bar & Restaurant',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80',
    desc: 'Cuban-inspired flair meets Nairobi energy. Downstairs is a great restaurant; upstairs transforms into a dance floor on weekends with Latin beats, Afrobeats and R&B until 4am. One of the most fun venues in the city.',
    location: 'Westlands, Nairobi',
    hours: '12:00pm – 4:00am',
    price: 'KES 800 – 2,500',
    vibe: 'Latin Energy & Dancing',
  },
  unseen: {
    title: 'Unseen Nairobi',
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&q=80',
    desc: 'Named Nairobi\'s best brunch restaurant. A rooftop garden bar with Asian-inspired cuisine, panoramic city views, rooftop movie nights, and an incredibly curated cocktail menu. A true hidden gem.',
    location: 'Kilimani (Wood Avenue Plaza)',
    hours: '8:00am – 11:00pm',
    price: 'KES 1,000 – 3,500',
    vibe: 'Best Brunch + Rooftop Movies',
  },
};

/* ── NAVBAR SCROLL EFFECT ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ── MOBILE MENU ── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

/* ── FILTER CARDS ── */
function filterCards(tag, btn) {
  // Update active button
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // Show/hide cards in main grid only
  const cards = document.querySelectorAll('#cardsGrid .gem-card');
  cards.forEach(card => {
    const tags = card.getAttribute('data-tags') || '';
    if (tag === 'all' || tags.includes(tag)) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      requestAnimationFrame(() => {
        card.style.animation = 'fadeInUp 0.3s ease forwards';
      });
    } else {
      card.classList.add('hidden');
    }
  });
}

// Attach filter button events
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterCards(filter, btn);
  });
});

/* ── CARD CLICK → MODAL ── */
document.querySelectorAll('.gem-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    openModal(id);
  });
});

/* ── MODAL ── */
const modalOverlay = document.getElementById('modal');
const modalClose   = document.getElementById('modalClose');

function openModal(id) {
  const g = gems[id];
  if (!g) return;

  document.getElementById('modalImg').innerHTML =
    `<img src="${g.img}" alt="${g.title}" loading="lazy" />`;
  document.getElementById('modalTitle').textContent = g.title;
  document.getElementById('modalDesc').textContent  = g.desc;
  document.getElementById('modalInfo').innerHTML = `
    <div class="info-chip">
      <div class="label">📍 Location</div>
      <div class="value">${g.location}</div>
    </div>
    <div class="info-chip">
      <div class="label">⏰ Hours</div>
      <div class="value">${g.hours}</div>
    </div>
    <div class="info-chip">
      <div class="label">💸 Price Range</div>
      <div class="value">${g.price}</div>
    </div>
    <div class="info-chip">
      <div class="label">✨ Vibe</div>
      <div class="value">${g.vibe}</div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on button
modalClose.addEventListener('click', closeModal);

// Close on overlay click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── FADE IN CARDS ON SCROLL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.gem-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
  observer.observe(card);
});

/* ── SMOOTH SCROLL FOR NAV LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════
   EVENTS CAROUSEL
   Source order: published Google Sheet CSV (if set) → events.json
═══════════════════════════════════════════ */
// Paste your published Google Sheet CSV link between the quotes (see README.md).
const EVENTS_CSV_URL  = '';
const EVENTS_JSON_URL = 'events.json';
const EVENTS_MAX      = 8;
const EVENTS_UTM      = { utm_source: 'nairobigems', utm_medium: 'events_carousel' };

const eventsTrack = document.getElementById('eventsTrack');
const eventsPrev  = document.getElementById('eventsPrev');
const eventsNext  = document.getElementById('eventsNext');

function nairobiToday() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Africa/Nairobi' }); // YYYY-MM-DD
}

function addDays(iso, n) {
  const d = new Date(iso + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(v => v.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some(v => v.trim() !== '')) rows.push(row);
  if (!rows.length) return [];
  const keys = rows[0].map(k => k.trim().toLowerCase().replace(/[\s-]+/g, '_'));
  return rows.slice(1).map(r => {
    const o = {};
    keys.forEach((k, i) => { o[k] = (r[i] || '').trim(); });
    return o;
  });
}

function safeUrl(u, allowRelative) {
  if (!u) return '';
  try {
    const url = new URL(u, allowRelative ? location.href : undefined);
    return (url.protocol === 'http:' || url.protocol === 'https:') ? (allowRelative && !/^https?:/i.test(u) ? u : url.href) : '';
  } catch (e) { return ''; }
}

function normaliseEvent(raw, today) {
  const sample = String(raw.sample || '').toLowerCase() === 'true' || raw.sample === true;
  let date = String(raw.date || '').trim();
  if (!date && raw.days_from_now !== undefined && raw.days_from_now !== '') {
    date = addDays(today, Number(raw.days_from_now));
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const title = String(raw.title || '').trim();
  if (!title) return null;
  return {
    title, date, sample,
    time:     String(raw.time || '').trim(),
    venue:    String(raw.venue || '').trim(),
    price:    String(raw.price || '').trim(),
    category: String(raw.category || '').trim(),
    image:    safeUrl(raw.image, true),
    ticket:   safeUrl(raw.ticket_url || raw.ticketurl || raw.ticketUrl, false),
  };
}

function ticketHref(url) {
  try {
    const u = new URL(url);
    Object.entries(EVENTS_UTM).forEach(([k, v]) => { if (!u.searchParams.has(k)) u.searchParams.set(k, v); });
    return u.href;
  } catch (e) { return url; }
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function buildEventCard(ev) {
  const d = new Date(ev.date + 'T00:00:00Z');
  const card = el('article', 'ev-card');

  const imgWrap = el('div', 'ev-card__img');
  if (ev.image) {
    const img = document.createElement('img');
    img.src = ev.image; img.alt = ''; img.loading = 'lazy';
    img.addEventListener('error', () => img.remove());
    imgWrap.appendChild(img);
  }
  const date = el('div', 'ev-date');
  date.appendChild(el('span', 'ev-date__day', d.toLocaleDateString('en-GB', { weekday: 'short', timeZone: 'UTC' })));
  date.appendChild(el('span', 'ev-date__num',
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })));
  imgWrap.appendChild(date);
  if (ev.category) imgWrap.appendChild(el('span', 'ev-cat', ev.category));
  if (ev.sample)   imgWrap.appendChild(el('span', 'ev-sample', 'Sample event'));
  card.appendChild(imgWrap);

  const body = el('div', 'ev-card__body');
  body.appendChild(el('h3', 'ev-card__title', ev.title));
  const meta = [ev.venue && '📍 ' + ev.venue, ev.time && '⏰ ' + ev.time].filter(Boolean).join('  ·  ');
  if (meta) body.appendChild(el('p', 'ev-card__meta', meta));

  const foot = el('div', 'ev-card__foot');
  foot.appendChild(el('span', 'ev-card__price', ev.price));
  if (ev.ticket) {
    const a = el('a', 'ev-btn', 'Get tickets →');
    a.href = ticketHref(ev.ticket);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Get tickets for ' + ev.title + ' (opens in a new tab)');
    foot.appendChild(a);
  } else {
    foot.appendChild(el('span', 'ev-btn ev-btn--off', 'Details soon'));
  }
  body.appendChild(foot);
  card.appendChild(body);
  return card;
}

function updateArrows() {
  if (!eventsTrack) return;
  const max = eventsTrack.scrollWidth - eventsTrack.clientWidth - 2;
  eventsPrev.disabled = eventsTrack.scrollLeft <= 2;
  eventsNext.disabled = eventsTrack.scrollLeft >= max;
}

function renderEvents(list) {
  eventsTrack.innerHTML = '';
  if (!list.length) {
    const p = el('p', 'events__status', 'New events are added every week. ');
    const a = el('a', '', 'Know one? Submit it →');
    a.href = 'mailto:hello@nairobigems.netlify.app?subject=Submit%20an%20event';
    p.appendChild(a);
    eventsTrack.appendChild(p);
  } else {
    list.forEach(ev => eventsTrack.appendChild(buildEventCard(ev)));
  }
  updateArrows();
}

async function fetchEvents() {
  const today = nairobiToday();
  const sources = [];
  if (EVENTS_CSV_URL) sources.push({ url: EVENTS_CSV_URL, type: 'csv' });
  sources.push({ url: EVENTS_JSON_URL, type: 'json' });

  for (const s of sources) {
    try {
      const res = await fetch(s.url, { cache: 'no-store' });
      if (!res.ok) throw new Error(res.status);
      const raw = s.type === 'csv' ? parseCSV(await res.text()) : await res.json();
      return (Array.isArray(raw) ? raw : [])
        .map(r => normaliseEvent(s.type === 'csv' ? r : Object.fromEntries(
          Object.entries(r).map(([k, v]) => [k.replace(/([A-Z])/g, '_$1').toLowerCase(), v])), today))
        .filter(ev => ev && ev.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, EVENTS_MAX);
    } catch (e) { /* try the next source */ }
  }
  return null;
}

if (eventsTrack) {
  fetchEvents().then(list => {
    if (list === null) {
      eventsTrack.innerHTML = '';
      eventsTrack.appendChild(el('p', 'events__status', 'Events could not be loaded right now. Please check back soon.'));
    } else {
      renderEvents(list);
    }
  });
  const step = () => Math.max(240, Math.round(eventsTrack.clientWidth * 0.8));
  eventsPrev.addEventListener('click', () => eventsTrack.scrollBy({ left: -step(), behavior: 'smooth' }));
  eventsNext.addEventListener('click', () => eventsTrack.scrollBy({ left:  step(), behavior: 'smooth' }));
  eventsTrack.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
}
