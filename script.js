document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateElements = () => {
        const elements = document.querySelectorAll('[data-animate]');
        if (prefersReducedMotion) {
            elements.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -60px 0px',
            }
        );

        elements.forEach((el) => observer.observe(el));
    };

    const enableSmoothScroll = () => {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#') return;

                const target = document.querySelector(targetId);
                if (!target) return;

                event.preventDefault();
                target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
            });
        });
    };

    const handleNavbarState = () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const toggleScrolled = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        toggleScrolled();
        window.addEventListener('scroll', toggleScrolled, { passive: true });
    };

    const attachProductInteractions = () => {
        const buttons = document.querySelectorAll('[data-product]');
        if (!buttons.length) return;

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const productName = button.dataset.product || 'your selection';
                showToast(`${productName} was added to your wishlist 🌸`);
            });
        });
    };

    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });

        setTimeout(() => {
            toast.classList.remove('visible');
            toast.addEventListener('transitionend', () => toast.remove(), { once: true });
        }, 2600);
    };

    const animateHeroParallax = () => {
        if (prefersReducedMotion) return;

        const heroCard = document.querySelector('.hero-card');
        if (!heroCard) return;

        const resetTransform = () => {
            heroCard.style.transform = '';
        };

        heroCard.addEventListener('mousemove', (event) => {
            const rect = heroCard.getBoundingClientRect();
            const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
            const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
            heroCard.style.transform = `rotateX(${(-offsetY).toFixed(2)}deg) rotateY(${offsetX.toFixed(2)}deg)`;
        });

        heroCard.addEventListener('mouseleave', () => {
            resetTransform();
        });
    };

    animateElements();
    enableSmoothScroll();
    handleNavbarState();
    attachProductInteractions();
    animateHeroParallax();
});
