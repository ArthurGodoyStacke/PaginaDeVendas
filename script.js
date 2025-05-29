document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animate;
                const delay = element.dataset.delay;

                // Add the animated class based on data-animate attribute
                if (animationType === 'fade-in') {
                    element.classList.add('animated', 'fade-in');
                } else if (animationType === 'slide-up') {
                    element.classList.add('animated', 'slide-up');
                }

                // Apply delay if specified
                if (delay) {
                    element.style.transitionDelay = `${delay}ms`;
                }

                // Stop observing once animated
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start loading slightly before entering viewport (optional, adjust as needed)
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Optional: Reset transition delays after a short period to allow for quicker re-animations if element goes out and back in
    // For a sales page, elements usually just animate once. But for very complex apps, this could be useful.
    setTimeout(() => {
        animatedElements.forEach(element => {
            if (element.style.transitionDelay) {
                element.style.transitionDelay = ''; // Clear delay
            }
        });
    }, 2000); // After 2 seconds, remove explicit delays (allowing default CSS transitions)
});