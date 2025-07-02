// Countdown Timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set countdown to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timer);
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        }
    }, 1000);
}

// Spots Counter Animation
function animateSpots() {
    const spotsElement = document.getElementById('spotsLeft');
    let currentSpots = 23;
    
    setInterval(function() {
        if (Math.random() < 0.3 && currentSpots > 5) { // 30% chance to decrease
            currentSpots--;
            spotsElement.textContent = currentSpots;
            
            // Add animation effect
            spotsElement.style.transform = 'scale(1.2)';
            spotsElement.style.color = '#ff6b35';
            
            setTimeout(function() {
                spotsElement.style.transform = 'scale(1)';
                spotsElement.style.color = '#dc3545';
            }, 300);
        }
    }, 15000); // Check every 15 seconds
}

// FAQ Toggle
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    // Close all other FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        const otherQuestion = item.querySelector('.faq-question');
        const otherAnswer = item.querySelector('.faq-answer');
        const otherIcon = item.querySelector('.faq-question i');
        
        if (otherQuestion !== element) {
            otherAnswer.classList.remove('active');
            otherQuestion.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    answer.classList.toggle('active');
    element.classList.toggle('active');
}

// Smooth scroll to offer section
function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    offerSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Redirect to Kirvano
function redirectToKirvano() {
    // Add a small animation before redirect
    const button = event.target.closest('button');
    button.style.transform = 'scale(0.95)';
    
    setTimeout(function() {
        // Replace with actual Kirvano link
        window.open('https://kirvano.com', '_blank');
    }, 200);
    
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 300);
}

// Scroll animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.problem-item, .solution-item, .benefit-item, .week-item, .testimonial-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Floating elements animation
function createFloatingElements() {
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            pointer-events: none;
        `;
        hero.appendChild(element);
    }
}

// Button hover effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .main-cta-button, .final-cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });
}

// Parallax effect for hero section
function addParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = translateY($,{rate},px);
        }
    });
}

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('.main-cta-button, .final-cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    animateSpots();
    handleScrollAnimations();
    createFloatingElements();
    addButtonEffects();
    addParallaxEffect();
    addRippleEffect();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add mouse trail effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // 10% chance to create a trail dot
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(40, 167, 69, 0.6);
            border-radius: 50%;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 9999;
            animation: trailFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
});

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;
document.head.appendChild(trailStyle);