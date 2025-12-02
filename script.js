// Esperar a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
  /* -------- TRADUCCIONES -------- */
  const translations = {
    en: {
      navHome: "HOME",
      navAbout: "ABOUT",
      navTestimonials: "TESTIMONIALS",
      navContact: "CONTACT",
      headerLogin: "Log in",
      heroTitle: "More than an app, a space for<br />friendship and wellbeing",
      heroCta: "Download the Juntos+ App Now",

      aboutTitle: "ABOUT US",
      aboutMission:
        "Our mission is to offer an accessible digital environment where older adults can create friendships, share experiences and feel accompanied.",
      aboutVision:
        "We want to be the leading social and digital integration platform for older adults in Latin America, strengthening their wellbeing and promoting active communities.",
      aboutSubtitle: "VALUES WE LIVE BY",
      valueInclusion: "Inclusion",
      valueEmpathy: "Empathy",
      valueInnovation: "Social innovation",
      valueConnection: "Human connection",

      benefitsTitle: "BENEFITS",
      benefit1: "Make new friends",
      benefit2: "Enjoy fun activities",
      benefit3: "Find real company",

      contactTitle: "Say Hello to Us",
      contactNameLabel: "What is your name? *",
      contactEmailLabel: "What is your email? *",
      contactPhoneLabel: "What is your phone number?",
      contactDistrictLabel: "Which district do you live in?",
      districtPlaceholder: "Select your district",
      contactMessageLabel: "Write your message here",
      contactTermsText: "I have read and accept the Terms of",
      contactTermsLink: "Service & Privacy Policy *",
      contactSubmit: "SEND MESSAGE",

      footerNavTitle: "Navigation",
      footerNavHome: "Home",
      footerNavBenefits: "Benefits",
      footerNavPlans: "Plans",
      footerNavTestimonials: "Testimonials",
      footerNavContact: "Contact",
      footerLegalTitle: "Legal",
      footerLegalTerms: "Terms of Service",
      footerLegalPrivacy: "Privacy Policy",
      footerContactTitle: "Contact",
      footerContactLocation: "Lima, Peru",
      footerLang: "English - En",
      footerCopy: "© 2025 EternaCare. All rights reserved.",

      formErrorRequired: "Please complete required fields.",
      formErrorTerms: "You must accept the terms.",
      formSuccess: "Message sent!",
    },
    es: {
      navHome: "INICIO",
      navAbout: "NOSOTROS",
      navTestimonials: "TESTIMONIOS",
      navContact: "CONTACTO",
      headerLogin: "Iniciar sesión",
      heroTitle:
        "Más que una app, un espacio para la<br />amistad y el bienestar",
      heroCta: "¡Descarga la App Juntos+ Aquí!",

      aboutTitle: "NOSOTROS",
      aboutMission:
        "Nuestra misión es ofrecer un entorno digital accesible donde los adultos mayores puedan crear lazos de amistad, compartir experiencias y sentirse acompañados.",
      aboutVision:
        "Queremos ser la plataforma líder de integración social y digital para adultos mayores en Latinoamérica, fortaleciendo su bienestar y promoviendo comunidades activas.",
      aboutSubtitle: "MEDIANTE LOS VALORES<br />QUE NOS REGIMOS",
      valueInclusion: "Inclusión",
      valueEmpathy: "Empatía",
      valueInnovation: "Innovación social",
      valueConnection: "Conexión humana",

      benefitsTitle: "BENEFICIOS",
      benefit1: "Haz nuevos amigos",
      benefit2: "Vive actividades divertidas",
      benefit3: "Encuentra compañía real",

      contactTitle: "Ponte en contacto con nosotros",
      contactNameLabel: "¿Cuál es tu nombre? *",
      contactEmailLabel: "¿Cuál es tu correo electrónico? *",
      contactPhoneLabel: "¿Cuál es tu número de teléfono?",
      contactDistrictLabel: "¿Cuál es tu distrito?",
      districtPlaceholder: "Selecciona tu distrito",
      contactMessageLabel: "Escribe tu mensaje aquí",
      contactTermsText: "He leído y acepto los",
      contactTermsLink: "Términos y Política de Privacidad *",
      contactSubmit: "ENVIAR MENSAJE",

      footerNavTitle: "Navegación",
      footerNavHome: "Inicio",
      footerNavBenefits: "Beneficios",
      footerNavPlans: "Planes",
      footerNavTestimonials: "Testimonios",
      footerNavContact: "Contacto",
      footerLegalTitle: "Legal",
      footerLegalTerms: "Términos de servicio",
      footerLegalPrivacy: "Política de privacidad",
      footerContactTitle: "Contacto",
      footerContactLocation: "Lima, Perú",
      footerLang: "Español - Es",
      footerCopy: "© 2025 EternaCare. Todos los derechos reservados.",

      formErrorRequired: "Por favor completa los campos obligatorios.",
      formErrorTerms: "Debes aceptar los términos.",
      formSuccess: "¡Mensaje enviado!",
    },
  };

  let currentLanguage = "en";

  /* -------- MENÚ RESPONSIVE -------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  /* -------- FORMULARIO CONTACTO -------- */
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const terms = form.terms.checked;

      if (!name || !email) {
        msg.textContent = translations[currentLanguage].formErrorRequired;
        msg.style.color = "#ffb200";
        return;
      }

      if (!terms) {
        msg.textContent = translations[currentLanguage].formErrorTerms;
        msg.style.color = "#ffb200";
        return;
      }

      form.reset();
      msg.textContent = translations[currentLanguage].formSuccess;
      msg.style.color = "#8bc34a";
    });
  }

  /* -------- CARRUSEL DE TESTIMONIOS -------- */
  const testimonials = {
    en: [
      {
        text: "With Juntos+ my dad no longer feels lonely, and that gives us peace of mind.",
        name: "Laura S.",
        role: "Daughter and Juntos+ user",
        initials: "LS",
      },
      {
        text: "My grandma looks forward to the weekly activities, now she feels part of something.",
        name: "Carlos M.",
        role: "Grandson and Juntos+ user",
        initials: "CM",
      },
      {
        text: "Before he felt isolated; now he has friends to talk to every day.",
        name: "Ana R.",
        role: "Daughter and Juntos+ user",
        initials: "AR",
      },
    ],
    es: [
      {
        text: "Con Juntos+ mi papá ya no se siente solo y eso nos da tranquilidad.",
        name: "Laura S.",
        role: "Hija y usuaria de Juntos+",
        initials: "LS",
      },
      {
        text: "Mi abuela espera cada semana las actividades, ahora se siente parte de algo.",
        name: "Carlos M.",
        role: "Nieto y usuario de Juntos+",
        initials: "CM",
      },
      {
        text: "Antes se sentía aislado, ahora tiene amigos con quienes conversar todos los días.",
        name: "Ana R.",
        role: "Hija y usuaria de Juntos+",
        initials: "AR",
      },
    ],
  };

  let currentTestimonial = 0;

  const textEl = document.getElementById("testimonialText");
  const nameEl = document.getElementById("testimonialName");
  const roleEl = document.getElementById("testimonialRole");
  const initialsEl = document.getElementById("testimonialInitials");
  const nextBtn = document.getElementById("testimonialNextBtn");
  const dotsContainer = document.getElementById("testimonialDots");

  function renderTestimonial(index) {
    const list = testimonials[currentLanguage];
    if (!list || list.length === 0) return;

    const safeIndex = index % list.length;
    const t = list[safeIndex];

    if (!t || !textEl || !nameEl || !roleEl || !initialsEl) return;

    textEl.textContent = t.text;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    initialsEl.textContent = t.initials;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === safeIndex);
      });
    }

    currentTestimonial = safeIndex;
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const list = testimonials[currentLanguage];
      const length = list ? list.length : 1;
      currentTestimonial = (currentTestimonial + 1) % length;
      renderTestimonial(currentTestimonial);
    });
  }

  if (dotsContainer) {
    dotsContainer.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-index")) || 0;
        currentTestimonial = idx;
        renderTestimonial(currentTestimonial);
      });
    });
  }

  /* -------- SELECTOR DE IDIOMA -------- */
  const langButtons = document.querySelectorAll(".lang-btn");

  function updateLangButtons() {
    langButtons.forEach((btn) => {
      const lang = btn.getAttribute("data-lang");
      btn.classList.toggle("active", lang === currentLanguage);
    });
  }

  function setLanguage(lang) {
    const targetLang = lang === "es" ? "es" : "en";
    currentLanguage = targetLang;
    document.documentElement.setAttribute("lang", targetLang);

    const dict = translations[targetLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value) {
        el.innerHTML = value;
      }
    });

    updateLangButtons();
    renderTestimonial(currentTestimonial);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Render inicial
  updateLangButtons();
  renderTestimonial(currentTestimonial);
  setLanguage("en");
});
