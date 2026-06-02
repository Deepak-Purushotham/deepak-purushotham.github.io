document.addEventListener('DOMContentLoaded', () => {

/* =========================
FADE IN ON SCROLL
========================= */

const animatedElements = document.querySelectorAll(
'.timeline-card, .skill-card, .impact-card, .education-card, .contact-card'
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {
    entry.target.classList.add('show');
  }

});

}, {
threshold: 0.15
});

animatedElements.forEach((element) => {
observer.observe(element);
});

});
