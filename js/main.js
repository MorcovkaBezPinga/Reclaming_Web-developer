// Фиксация панели навигации при скролле
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navigation');
  function navSticky() {
    if (window.scrollY > 10) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }
  window.addEventListener('scroll', navSticky);
  navSticky();
});
// Кнопка "Вверх"
document.addEventListener('DOMContentLoaded', function () {
  const toTopBtn = document.getElementById('to-top-btn');
  function toggleToTopBtn() {
    if (window.scrollY > 300) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  }
  if (toTopBtn) {
    toTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', toggleToTopBtn);
    toggleToTopBtn();
  }
});
// --- Перевод сайта (RU/EN) ---
const translations = {
  ru: {
    'nav.catalog': 'Каталог',
    'nav.gallery': 'Галерея',
    'nav.about': 'О лаборатории',
    'nav.contacts': 'Контакты',
    'hero.title': 'Крупнейшая коллекция природных артефактов',
    'hero.text': 'Являясь всего лишь частью общей картины, интерактивные прототипы, которые представляют собой яркий пример европейского типа политической и социальной культуры.',
    'hero.button': 'Исследовать ⟶',
    'card.1.title': 'Fig. 1 (plant)',
    'card.1.text': 'Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.',
    'card.2.title': 'Fig. 2 (flower)',
    'card.2.text': 'Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.',
    'card.3.title': 'Fig. 3 (leaf)',
    'card.3.text': 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
    'card.4.title': 'Fig. 3 (leaf)',
    'card.4.text': 'Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.',
    'card.button': 'Подробнее',
    'pager.of': 'из',
    'artefakt.title': 'Новые артефакты',
    'artefakt.button': 'Читать далее ⟶',
    'help.title': 'Помочь проекту',
    'help.text': 'Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
    'form.name': 'Имя',
    'form.email': 'Email',
    'form.submit': 'Отправить',
  },
  en: {
    'nav.catalog': 'Catalog',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Lab',
    'nav.contacts': 'Contacts',
    'hero.title': 'The largest collection of natural artifacts',
    'hero.text': 'Being only part of the big picture, interactive prototypes are a vivid example of the European type of political and social culture.',
    'hero.button': 'Explore ⟶',
    'card.1.title': 'Fig. 1 (plant)',
    'card.1.text': 'There is a controversial point of view: rapidly developing third world countries have been verified in time.',
    'card.2.title': 'Fig. 2 (flower)',
    'card.2.text': 'First of all, synthetic testing entails the process of implementation and modernization of conditions.',
    'card.3.title': 'Fig. 3 (leaf)',
    'card.3.text': 'Only direct participants in progress are ambiguous and will be equally left to their own devices.',
    'card.4.title': 'Fig. 3 (leaf)',
    'card.4.text': 'Only direct participants in progress are ambiguous and will be equally left to their own devices.',
    'card.button': 'More',
    'pager.of': 'of',
    'artefakt.title': 'New artifacts',
    'artefakt.button': 'Read more ⟶',
    'help.title': 'Help the project',
    'help.text': 'Likewise, the economic agenda of today leaves us no choice but to define the progress of the professional community. As is customary, elements of the political process are considered exclusively in terms of marketing and financial prerequisites.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.submit': 'Send',
  }
};

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Hero
  const heroTitle = document.querySelector('.info_hero');
  if (heroTitle) heroTitle.textContent = translations[lang]['hero.title'];
  const heroText = document.querySelector('.info_hero_p');
  if (heroText) heroText.textContent = translations[lang]['hero.text'];
  const heroBtn = document.querySelector('.hero__button');
  if (heroBtn) heroBtn.textContent = translations[lang]['hero.button'];
  // Cards
  document.querySelectorAll('.card').forEach((card, i) => {
    const h2 = card.querySelector('h2');
    const p = card.querySelector('p');
    const btn = card.querySelector('button');
    if (h2) h2.textContent = translations[lang][`card.${i+1}.title`];
    if (p) p.textContent = translations[lang][`card.${i+1}.text`];
    if (btn) btn.textContent = translations[lang]['card.button'];
  });
  // Pager
  const pagerOf = document.querySelector('.pager__counter');
  if (pagerOf) {
    pagerOf.innerHTML = `<span class="pager__current">1</span> ${translations[lang]['pager.of']} <span class="pager__total">3</span>`;
  }
  // Artefakt
  const artefaktTitle = document.querySelector('.artefakt h2');
  if (artefaktTitle) artefaktTitle.textContent = translations[lang]['artefakt.title'];
  const artefaktBtn = document.querySelector('.artefakt_line2 button');
  if (artefaktBtn) artefaktBtn.textContent = translations[lang]['artefakt.button'];
  // Help block
  const helpTitle = document.querySelector('.main-login h3');
  if (helpTitle) helpTitle.textContent = translations[lang]['help.title'];
  const helpText = document.querySelector('.main-login p');
  if (helpText) helpText.textContent = translations[lang]['help.text'];
  // Form
  const nameInput = document.querySelector('.registration-form .name');
  if (nameInput) nameInput.placeholder = translations[lang]['form.name'];
  const emailInput = document.querySelector('.registration-form .email');
  if (emailInput) emailInput.placeholder = translations[lang]['form.email'];
  const submitBtn = document.querySelector('.registration-form button');
  if (submitBtn) submitBtn.textContent = translations[lang]['form.submit'];
}

document.addEventListener('DOMContentLoaded', function () {
  // Переключатель языка
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('change', function() {
      translatePage(this.value);
    });
  }
  // По умолчанию русский
  translatePage('ru');

  // Плавное появление карточек
  // Плавное появление карточек
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s, transform 0.7s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200);
  });

  // Плавный скролл по якорям (меню)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Анимация появления секций при прокрутке (fade-in)
  const fadeSections = document.querySelectorAll('.fade-section');
  function checkFadeSections() {
    fadeSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.classList.add('fade-in');
      }
    });
  }
  window.addEventListener('scroll', checkFadeSections);
  checkFadeSections();

  // Ripple эффект на кнопках и иконках
  document.querySelectorAll('button, .card button, .nav__logo, .nav__search, .nav__log_in, .social-img').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.className = 'ripple';
      const rect = btn.getBoundingClientRect();
      circle.style.left = (e.clientX - rect.left) + 'px';
      circle.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // Плавное появление блока "Помочь проекту" при прокрутке
  const helpBlock = document.querySelector('.main-login');
  if (helpBlock) {
    helpBlock.style.opacity = '0';
    helpBlock.style.transition = 'opacity 1s';
    function onScroll() {
      const rect = helpBlock.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        helpBlock.style.opacity = '1';
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Пример скрипта для пагинации (если карточек будет больше 4)
  // Здесь только заготовка, т.к. сейчас все карточки видны сразу
  // Можно доработать под реальную пагинацию при необходимости
// Конец основного DOMContentLoaded
});
