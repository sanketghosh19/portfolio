document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .skill-card, .project-card, .timeline-card, .contact-card, .process-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    // Add animation classes on page load
    setTimeout(function() {
        if (document.querySelector('.hero')) {
            document.querySelector('.hero h1').classList.add('animate__animated', 'animate__fadeInDown');
            document.querySelector('.hero h2').classList.add('animate__animated', 'animate__fadeIn');
            
            const buttons = document.querySelectorAll('.hero .btn');
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.classList.add('animate__animated', 'animate__fadeInUp');
                }, 300 * (index + 1));
            });
        }
    }, 300);
    
    // Check for animations when scrolling
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize project filters if on projects page
    if (document.querySelector('.project-filters')) {
        const filterButtons = document.querySelectorAll('[data-filter]');
        const projectItems = document.querySelectorAll('.project-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        const categories = item.getAttribute('data-category').split(',');
                        if (categories.includes(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Add form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Form already submits to server-side handler
            
            // Additional client-side validation
            const formValid = contactForm.checkValidity();
            
            if (!formValid) {
                event.preventDefault();
                // Trigger browser's native validation display
                contactForm.reportValidity();
            }
            
            // If valid, form will submit normally to the server-side handler
        });
    }
}); 