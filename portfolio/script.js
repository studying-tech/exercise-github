// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)'
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)'
  }
})

// Add animation class when elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in')
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll('.project-card, .about-content').forEach((el) => {
  observer.observe(el)
})

// Add CSS animation styles
const style = document.createElement('style')
style.textContent = `
    .project-card,
    .about-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`
document.head.appendChild(style)

// Simple mobile menu toggle (if you want to add a hamburger menu later)
function _toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links')
  navLinks.classList.toggle('mobile-open')
}

// Add some interactivity to skill tags
document.querySelectorAll('.skills li').forEach((skill) => {
  skill.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.1)'
    this.style.transition = 'transform 0.3s ease'
  })

  skill.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)'
  })
})
