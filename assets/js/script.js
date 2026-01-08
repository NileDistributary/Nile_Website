// /assets/js/script.js
// Main JavaScript for Nile Anderson's personal website

(function() {
  'use strict';

  // ==================== THEME MANAGEMENT ====================
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Initialize theme from localStorage or system preference
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', theme);
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
  
  // ==================== SMOOTH SCROLLING ====================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // ==================== INTERSECTION OBSERVER FOR REVEALS ====================
  function initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });
  }
  
  // ==================== PROJECT FILTERING ====================
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length || !projectCards.length) return;
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          const category = card.dataset.category;
          
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            // Trigger reflow for animation
            setTimeout(() => card.classList.add('visible'), 10);
          } else {
            card.classList.remove('visible');
            setTimeout(() => card.style.display = 'none', 300);
          }
        });
      });
      
      // Keyboard accessibility for filter buttons
      button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  }
  
  // ==================== CONTACT FORM VALIDATION ====================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('form-status');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation functions
    function validateField(input, validator, errorMsg) {
      const formGroup = input.closest('.form-group');
      const errorElement = formGroup.querySelector('.form-error');
      
      if (validator(input.value)) {
        formGroup.classList.remove('error');
        if (errorElement) errorElement.textContent = '';
        return true;
      } else {
        formGroup.classList.add('error');
        if (errorElement) errorElement.textContent = errorMsg;
        return false;
      }
    }
    
    function validateName(value) {
      return value.trim().length >= 2;
    }
    
    function validateEmail(value) {
      return emailRegex.test(value.trim());
    }
    
    function validateMessage(value) {
      return value.trim().length >= 10;
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', () => {
      validateField(nameInput, validateName, 'Please enter your name (at least 2 characters).');
    });
    
    emailInput.addEventListener('blur', () => {
      validateField(emailInput, validateEmail, 'Please enter a valid email address.');
    });
    
    messageInput.addEventListener('blur', () => {
      validateField(messageInput, validateMessage, 'Please enter a message (at least 10 characters).');
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate all fields
      const nameValid = validateField(nameInput, validateName, 'Please enter your name (at least 2 characters).');
      const emailValid = validateField(emailInput, validateEmail, 'Please enter a valid email address.');
      const messageValid = validateField(messageInput, validateMessage, 'Please enter a message (at least 10 characters).');
      
      if (!nameValid || !emailValid || !messageValid) {
        return;
      }
      
      // Prepare form data
      const formData = new FormData(form);
      
      // Disable submit button
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      try {
        // Submit to PHP handler
        const response = await fetch('contact.php', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.className = 'form-status success';
          form.reset();
          
          // Remove error states
          document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
          });
        } else {
          throw new Error(result.message || 'An error occurred.');
        }
      } catch (error) {
        formStatus.textContent = error.message || 'Sorry, there was an error sending your message. Please try again or email directly.';
        formStatus.className = 'form-status error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        // Hide status message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      }
    });
  }
  
  // ==================== POPULATE CONTENT FROM DATA.JS ====================
  function populateContent() {
    if (typeof personalData === 'undefined') {
      console.warn('Personal data not loaded');
      return;
    }
    
    // Populate hero
    document.querySelector('.hero-greeting').textContent = personalData.hero.greeting;
    document.querySelector('.hero-name').textContent = personalData.name;
    document.querySelector('.hero-tagline').textContent = personalData.tagline;
    document.querySelector('.hero-description').textContent = personalData.hero.description;
    
    // Populate about
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
      aboutText.innerHTML = personalData.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    
    // Populate faith
    document.querySelector('.faith-statement').textContent = personalData.faith.statement;
    document.querySelector('.verse-text').textContent = `"${personalData.faith.verse.text}"`;
    document.querySelector('.verse-reference').textContent = `— ${personalData.faith.verse.reference}`;
    document.querySelector('.faith-closing').textContent = personalData.faith.closingNote;
    
    // Populate education timeline
    const timeline = document.querySelector('.education-timeline');
    if (timeline) {
      timeline.innerHTML = personalData.education.map(edu => `
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-degree">${edu.degree}</h3>
            <div class="timeline-institution">${edu.institution}</div>
            <div class="timeline-meta">
              <span>📍 ${edu.location}</span>
              <span>📅 ${edu.period}</span>
            </div>
            <span class="timeline-grade">${edu.grade}</span>
            <ul class="timeline-highlights">
              ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('');
    }
    
    // Populate skills
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
      const skillCategories = [
        { title: '💻 Programming', skills: personalData.skills.programming },
        { title: '🔧 Frameworks & Tools', skills: personalData.skills.frameworks },
        { title: '⚙️ Engineering', skills: personalData.skills.engineering },
        { title: '🤖 Specializations', skills: personalData.skills.specializations }
      ];
      
      skillsGrid.innerHTML = skillCategories.map(cat => `
        <div class="skill-category">
          <h4 class="skill-category-title">${cat.title}</h4>
          <div class="skill-tags">
            ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }
    
    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = personalData.projects.map(project => `
        <article class="project-card" data-category="${project.category}">
          <div class="project-header">
            <div class="project-year">${project.year}</div>
            <h3 class="project-title">${project.title}</h3>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </article>
      `).join('');
    }
    
    // Populate footer
    document.querySelector('.footer-copyright').textContent = personalData.footer.copyright;
    document.querySelector('.footer-credits').textContent = personalData.footer.credits;
  }
  
  // ==================== HEADER SCROLL EFFECT ====================
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // ==================== INITIALIZE ALL FUNCTIONS ====================
  function init() {
    initTheme();
    populateContent();
    initSmoothScroll();
    initScrollReveal();
    initProjectFilters();
    initContactForm();
    initHeaderScroll();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
