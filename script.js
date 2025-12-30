const navButton = document.getElementById('burger-btn');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-btn');
const pageWrapper = document.getElementById('page-wrapper');
const navIcon = document.getElementById('nav-icon');
const body = document.body;

navButton.addEventListener('click', () => {
  mobileNav.classList.toggle('opacity-0');
  mobileNav.classList.toggle('opacity-100');
  mobileNav.classList.toggle('-translate-y-4');
  mobileNav.classList.toggle('translate-y-0');
  mobileNav.classList.toggle('pointer-events-none');
  mobileNav.classList.toggle('pointer-events-auto');

  pageWrapper.classList.toggle('blur-sm');
  body.classList.toggle('overflow-hidden');

  navIcon.src = mobileNav.classList.contains('opacity-0') 
    ? './images/icon-hamburger.svg' 
    : './images/icon-close.svg';
});

pageWrapper.addEventListener('click', (e) => {
    if (!mobileNav.classList.contains('hidden') && !mobileNav.contains(e.target)) {
        mobileNav.classList.add('hidden');
        pageWrapper.classList.remove('blur-sm');
        document.body.classList.remove('overflow-hidden');
          navIcon.src = mobileNav.classList.contains('hidden') ? './images/icon-hamburger.svg' : './images/icon-close.svg';
    }
});



// scroll base animation and azy laoding 

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-scroll-fade]');

  if (elements.length === 0 || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('opacity-100');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
});