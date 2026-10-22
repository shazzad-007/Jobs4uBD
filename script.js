// Jobs4uBD progressive enhancements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.job-card').forEach((card, i) => {
    card.style.animationDelay = (i * 100) + 'ms';
  });
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => {
      // Prevent placeholder category links from jumping to the top.
      if (!link.classList.contains('active')) event.preventDefault();
    });
  });
});
