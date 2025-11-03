// Simple site script: language toggle + contact form
const translations = {
  en: {
    "nav.services":"Services",
    "nav.portfolio":"Portfolio",
    "nav.shop":"Shop",
    "nav.contact":"Contact",
    "cta.quote":"Request Quote",
    "hero.title":"Welcome to <span class='accent'>1DOLK</span>",
    "hero.lead":"Find the most specialized developers in every field — Pawn, FiveM, web, launchers and more.",
    "hero.services":"See Services",
    "hero.portfolio":"View Portfolio",
    "services.title":"Our Services",
    "services.sub":"Choose the service you need — our team makes ideas real.",
    "designs.title":"Designs & Technology",
    "designs.sub":"We build UI/UX, admin panels and layouts for web, desktop and mobile.",
    "portfolio.title":"Portfolio",
    "portfolio.sub":"Some of our projects: scripts, interfaces and launchers.",
    "shop.title":"Script Shop",
    "shop.sub":"Licensing, premium packages and VIP support.",
    "shop.buy":"Buy / Info",
    "contact.title":"Contact 1DOLK",
    "contact.sub":"Write to us for quotes or collaboration.",
    "contact.send":"Send Request",
    "contact.info":"Info",
    "footer.email":"Email:",
    "footer.hours":"Hours:",
    "legal.terms.title":"Terms of Use",
    "legal.privacy.title":"Privacy Policy"
  },
  sq: {
    "nav.services":"Shërbimet",
    "nav.portfolio":"Portofoli",
    "nav.shop":"Shop",
    "nav.contact":"Kontakt",
    "cta.quote":"Kërko Çmim",
    "hero.title":"Mirësevini tek <span class='accent'>1DOLK</span>",
    "hero.lead":"Aty ku do të gjeni developer-at më të specializuar në çdo fushë të kodimit — nga Pawn & FiveM deri tek web dhe launcher.",
    "hero.services":"Shih Shërbimet",
    "hero.portfolio":"Shiko Portofolin",
    "services.title":"Shërbimet tona",
    "services.sub":"Zgjidhni shërbimin që ju nevojitet — ekipi ynë e bën realitet çdo ide.",
    "designs.title":"Dizajne & Teknologji",
    "designs.sub":"Projektet tona përfshijnë UI/UX, panele admini dhe layoute për web, desktop dhe mobile.",
    "portfolio.title":"Portofoli",
    "portfolio.sub":"Disa prej punëve tona: scripts, interfaces dhe project-launcher.",
    "shop.title":"Shop Scriptesh",
    "shop.sub":"Licencim, paketa premium dhe support VIP për blerësit.",
    "shop.buy":"Bli / Informohu",
    "contact.title":"Kontakto 1DOLK",
    "contact.sub":"Na shkruaj për ofertë, quote ose bashkëpunim.",
    "contact.send":"Dërgo kërkesën",
    "contact.info":"Info",
    "footer.email":"Email:",
    "footer.hours":"Orari:",
    "legal.terms.title":"Kushtet e përdorimit",
    "legal.privacy.title":"Politika e privatësisë"
  }
};

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('lang') || 'sq';
  const next = current === 'sq' ? 'en' : 'sq';
  html.setAttribute('lang', next);
  document.body.setAttribute('data-lang', next);
  langToggle.textContent = next === 'sq' ? 'EN' : 'SQ';
  translatePage(next);
});

function translatePage(code){
  const map = translations[code] || translations.sq;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(map[key]) el.innerHTML = map[key];
  });
  if(code === 'en'){
    document.querySelector('[data-i18n="hero.title"]').innerHTML = translations.en['hero.title'];
  } else {
    document.querySelector('[data-i18n="hero.title"]').innerHTML = translations.sq['hero.title'];
  }
}

// Contact form (client-side only, replace with real backend endpoint for production)
function sendForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    alert((document.documentElement.lang === 'en') ? 'Please fill all fields.' : 'Ju lutem plotësoni të gjitha fushat.');
    return false;
  }
  alert((document.documentElement.lang === 'en') ? `Thanks ${name}! Your request was sent.` : `Faleminderit ${name}! Kërkesa juaj u dërgua.`);
  document.getElementById('contactForm').reset();
  return false;
}

// init
document.getElementById('year').textContent = new Date().getFullYear();
translatePage(document.documentElement.lang || 'sq');
