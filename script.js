/* Portfolio interactive script
   - Form validation + toast
   - Smooth scroll behavior for nav (native scroll-behavior used)
   - Scroll-to-top button
   - Minor accessibility helpers
*/

/* 1) DOM Ready */
document.addEventListener("DOMContentLoaded", function () {

  // CONTACT FORM: bootstrap validation pattern + toast show
  const form = document.getElementById("contactForm");
  const toastEl = document.getElementById("contactToast");
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });

  if (form) {
    form.addEventListener("submit", function (e) {
      // Bootstrap style validation
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      e.preventDefault(); // we handle sending client-side demo
      // show toast success
      toast.show();
      form.reset();
      form.classList.remove('was-validated');
    }, false);
  }

  // SCROLL TO TOP Button
  const scrollBtn = document.getElementById("scrollTopBtn");
  const showAfter = 300; // px

  window.addEventListener('scroll', function () {
    if (window.scrollY > showAfter) scrollBtn.style.display = 'flex';
    else scrollBtn.style.display = 'none';
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Accessibility: make nav links smooth on click and close collapse on mobile
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      // collapse nav in mobile after click
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapse).toggle();
      }
    });
  });

    })