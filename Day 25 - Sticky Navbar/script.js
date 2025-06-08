const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
  fixNav();
  highlightNav();
});

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

function highlightNav() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('current');
        }
      });
    }
  });
}
