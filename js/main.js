// ========================================
// MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initRevealAnimations();
    initSmoothScroll();
    initCounterAnimation();
});

// ----------------------------------------
// Navbar scroll effect
// ----------------------------------------
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ----------------------------------------
// Mobile menu toggle
// ----------------------------------------
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ----------------------------------------
// Reveal on scroll (Intersection Observer)
// ----------------------------------------
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach((el, index) => {
        el.style.transitionDelay = `${index % 4 * 0.1}s`;
        observer.observe(el);
    });
}

// ----------------------------------------
// Smooth scroll for anchor links
// ----------------------------------------
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ----------------------------------------
// Counter animation
// ----------------------------------------
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                const suffix = el.getAttribute('data-suffix') || '';
                animateCounter(el, 0, target, 2000, suffix);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, start, end, duration, suffix) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(start + (end - start) * eased);
        el.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// ----------------------------------------
// Form submission (Web3Forms API)
// ----------------------------------------
document.addEventListener('submit', (e) => {
    if (e.target.classList.contains('contact-form-el')) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;

        const originalText = btn.textContent;
        btn.textContent = '⏳ Đang gửi...';
        btn.disabled = true;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    btn.textContent = '✓ Đã gửi thành công!';
                    btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
                    form.reset();
                } else {
                    btn.textContent = '✗ Gửi thất bại, thử lại!';
                    btn.style.background = 'linear-gradient(135deg, #e17055, #d63031)';
                }
            })
            .catch(() => {
                btn.textContent = '✗ Lỗi kết nối, thử lại!';
                btn.style.background = 'linear-gradient(135deg, #e17055, #d63031)';
            })
            .finally(() => {
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            });
    }
});
