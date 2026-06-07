/**
 * SuperCart Landing Page Interactions
 * Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // CUSTOM CURSOR LERP ANIMATION
  // ==========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  // LERP factor (interpolation step)
  const lerpFactor = 0.15;

  // Track mouse movements
  window.addEventListener('mousemove', (e) => {
    // Show cursor on movement (if hidden initially)
    if (!isMoving) {
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
      isMoving = true;
    }

    mouseX = e.clientX;
    mouseY = e.clientY;

    // Immediately position the inner dot
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // Smooth lerp loop for the trailing ring
  function updateCursor() {
    ringX += (mouseX - ringX) * lerpFactor;
    ringY += (mouseY - ringY) * lerpFactor;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(updateCursor);
  }
  
  // Start custom cursor animation loop
  requestAnimationFrame(updateCursor);

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
    isMoving = false;
  });

  // Cursor Hover Scale Effect on clickable elements
  const clickables = document.querySelectorAll('.clickable, a, button, input, textarea');
  
  clickables.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });

    element.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // ==========================================================================
  // NAVBAR SCROLL BEHAVIOR (Frosted glass toggle)
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 60;

  function checkScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Initial check and event listener
  checkScroll();
  window.addEventListener('scroll', checkScroll);

  // ==========================================================================
  // SCROLL REVEAL (Intersection Observer)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once visible, stop observing to keep visible states
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // trigger when 10% of element is in viewport
    rootMargin: '0px 0px -50px 0px' // adjust vertical trigger threshold slightly
  });

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Stagger reveal delays manually for list elements if needed
  // (In style.css, stagger delays are defined for hero elements .stagger-1, .stagger-2, etc.)
  
  // ==========================================================================
  // 3D PHONE PARALLAX ON MOUSEMOVE
  // ==========================================================================
  const phoneContainer = document.getElementById('phone-container');
  if (phoneContainer) {
    const parentWrapper = phoneContainer.parentElement;

    parentWrapper.addEventListener('mousemove', (e) => {
      const rect = parentWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Map offset coordinates to small rotation shifts
      const rotateY = -15 + (x / (rect.width / 2)) * 10;
      const rotateX = 8 - (y / (rect.height / 2)) * 8;

      phoneContainer.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(-1deg) scale(1.02)`;
    });

    // Reset phone transform on mouse leave
    parentWrapper.addEventListener('mouseleave', () => {
      phoneContainer.style.transform = `rotateY(-15deg) rotateX(8deg) rotateZ(-2deg) translateY(0)`;
      phoneContainer.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    parentWrapper.addEventListener('mouseenter', () => {
      phoneContainer.style.transition = 'none'; // remove transition for smooth tracking
    });
  }
});
