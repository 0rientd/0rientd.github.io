// ===== UTILITY FUNCTIONS =====
function docReady(fn) {
    // Check if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // Call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// ===== INFINITE PIXEL GALAXY BACKGROUND =====
function initGalaxyBackground() {
    const canvas = document.getElementById('galaxy');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    window.addEventListener('resize', resizeCanvas);

    // --- CONFIGURATION ---
    const layers = 5; // More layers for depth
    const starsPerLayer = 100; 
    const speedFactors = [0.0002, 0.0004, 0.00045, 0.0005, 0.00055]; // Parallax speeds
    
    // The requested Color Palette
    const colors = ['#9b59b6', '#2980b9', '#ff7eb3', '#e67e22', '#2ecc71'];

    // Generate stars with pixel art style and assigned colors
    const stars = [];
    
    for (let layer = 0; layer < layers; layer++) {
        for (let i = 0; i < starsPerLayer; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                layer: layer,
                size: 2 + Math.random() * 3, // Random pixel size for variety
                speedX: (Math.random() - 0.5) * 0.1, // Constant drift speed
                speedY: (Math.random() - 0.5) * 0.1,
                color: colors[Math.floor(Math.random() * colors.length)] // Random palette color
            });
        }
    }

    // Mouse movement variables for parallax effect
    let lastMouseX = canvas.width / 2;
    let lastMouseY = canvas.height / 2;
    
    function draw() {
        // Clear canvas with a slight fade effect to create trails (optional, currently using clearRect)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let star of stars) {
            // 1. Constant Infinite Drift (Background movement)
            star.x += star.speedX;
            star.y += star.speedY;

            // Wrap around screen edges to make it truly infinite
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;

            // 2. Parallax Effect based on Mouse Position
            const dx = lastMouseX - canvas.width / 2;
            const dy = lastMouseY - canvas.height / 2;
            
            // Move stars opposite to mouse direction, speed depends on layer depth
            star.x -= (dx * speedFactors[star.layer]); 
            star.y -= (dy * speedFactors[star.layer]);

            // Draw the pixel
            ctx.fillStyle = star.color;
            ctx.fillRect(star.x, star.y, star.size, star.size);
        }

        requestAnimationFrame(draw);
    }

    // Handle mouse movement for parallax
    document.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });

    // Start the infinite animation
    draw();
}

// ===== NAVIGATION MENU =====
function initNavigation() {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on overlay
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    const benefitItems = document.querySelectorAll('.benefit-item');
    const backToTop = document.querySelector('.back-to-top');

    // Animate service cards on scroll
    function animateOnScroll() {
        // Service cards animation
        serviceCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;
            
            if (cardTop < triggerPoint) {
                card.classList.add('animate');
            }
        });

        // Benefit items animation
        benefitItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;
            
            if (itemTop < triggerPoint) {
                item.classList.add('animate');
            }
        });

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }

    // Initial check for elements in viewport
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentIndex = 0;
    const slideWidth = 100; // 100%

    // Set initial position
    updateSlider();

    // Update slider position and active dot
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Auto slide (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide(); // Swipe left
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide(); // Swipe right
        }
    }
}

// ===== PARALLAX EFFECT =====
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}

// ===== INITIALIZE ALL =====
docReady(() => {
    // Initialize galaxy background first
    initGalaxyBackground();
    
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initTestimonialsSlider();
    initParallaxEffect();
    
    // Add loading animation class to body
    document.body.classList.add('loaded');
    
    // Add interactive hover effects
    addInteractiveEffects();
});

// ===== INTERACTIVE EFFECTS =====
function addInteractiveEffects() {
    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = 'var(--box-shadow-hover)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--box-shadow)';
        });
    });
    
    // Add pulse effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-btns .btn');
    ctaButtons.forEach(button => {
        setInterval(() => {
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1000);
        }, 3000);
    });
}

// Add pulse animation to CSS
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}
.pulse {
    animation: pulse 1s ease;
}
</style>
`);
