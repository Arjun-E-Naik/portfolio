// Module 4 - Practical 1: Portfolio Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Dark / Light)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;
  const icon = themeToggleBtn.querySelector('i');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      icon.className = 'bi bi-moon-stars-fill text-info';
    } else {
      icon.className = 'bi bi-sun-fill text-warning';
    }
  }

  // 2. Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button style
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Contact Form Submission & Validation
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }

    contactForm.classList.remove('was-validated');
    const name = document.getElementById('nameInput').value;

    formAlert.classList.remove('d-none');
    formAlert.innerHTML = `<i class="fa-solid fa-circle-check me-2"></i>Thank you, <strong>${name}</strong>! Your inquiry has been logged. I'll get back to you soon!`;

    contactForm.reset();

    setTimeout(() => {
      formAlert.classList.add('d-none');
    }, 6000);
  });

  // 4. Smooth scroll on navigation link click & active state update
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
