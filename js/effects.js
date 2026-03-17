// ========================================
// VietWebPro - Creative Effects
// ========================================

// ---- 1. INTERACTIVE PARTICLE NETWORK ----
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.cssText = 'position:absolute;inset:0;z-index:1;pointer-events:none;';
    const hero = document.getElementById('hero');
    if (!hero) return;
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let w, h, particles = [], mouse = { x: -999, y: -999 };
    const PARTICLE_COUNT = 60;
    const CONNECT_DIST = 150;
    const MOUSE_DIST = 200;

    function resize() {
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.r = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        update() {
            // Mouse repel
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_DIST) {
                const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02;
                this.vx += dx * force;
                this.vy += dy * force;
            }
            this.vx *= 0.99;
            this.vy *= 0.99;
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(162, 155, 254, ${this.alpha})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(108, 92, 231, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        // Mouse connections
        for (let i = 0; i < particles.length; i++) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_DIST) {
                const alpha = (1 - dist / MOUSE_DIST) * 0.3;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(0, 206, 201, ${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        drawConnections();
        requestAnimationFrame(animate);
    }

    hero.addEventListener('mousemove', e => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
    hero.style.position = 'relative';
    // Make hero content above canvas
    const heroContainer = hero.querySelector('.container');
    if (heroContainer) heroContainer.style.position = 'relative';
    if (heroContainer) heroContainer.style.zIndex = '5';

    window.addEventListener('resize', () => { resize(); });
    init();
    animate();
})();


// ---- 2. TYPEWRITER EFFECT ON HERO BADGE ----
(function () {
    const badge = document.querySelector('.hero-badge span:last-child') || document.querySelector('.hero-badge');
    if (!badge || badge.querySelector('span.dot')) {
        // Try finding text node
        const badgeEl = document.querySelector('.hero-badge');
        if (!badgeEl) return;
        const textNodes = [];
        badgeEl.childNodes.forEach(n => { if (n.nodeType === 3 && n.textContent.trim()) textNodes.push(n); });
        if (textNodes.length === 0) return;
        const text = textNodes[0].textContent.trim();
        const span = document.createElement('span');
        span.className = 'typewriter-text';
        textNodes[0].replaceWith(span);
        let i = 0;
        function type() {
            if (i <= text.length) {
                span.textContent = text.substring(0, i);
                i++;
                setTimeout(type, 80);
            }
        }
        setTimeout(type, 800);
    }
})();


// ---- 3. MAGNETIC BUTTONS ----
document.querySelectorAll('.btn-primary, .btn-outline, .btn-accent').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});


// ---- 4. SMOOTH PARALLAX ON FLOATING SHAPES ----
(function () {
    const shapes = document.querySelectorAll('.floating-shape');
    if (shapes.length === 0) return;
    window.addEventListener('mousemove', e => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;
        shapes.forEach((s, i) => {
            const speed = (i + 1) * 15;
            s.style.transform = `translate(${cx * speed}px, ${cy * speed}px)`;
        });
    });
})();


// ---- 5. TILT EFFECT ON GLASS CARDS ----
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
        card.style.transition = 'transform 0.1s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease';
    });
});


// ---- 6. ANIMATED GRADIENT CURSOR GLOW ----
(function () {
    const glow = document.createElement('div');
    glow.style.cssText = 'position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(108,92,231,0.12),transparent 70%);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:opacity .3s;opacity:0;';
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
})();


// ---- 7. STAGGERED REVEAL ANIMATIONS ----
(function () {
    const grids = document.querySelectorAll('.services-grid, .demos-grid, .pricing-grid, .process-steps');
    grids.forEach(grid => {
        const cards = grid.querySelectorAll('.reveal');
        cards.forEach((card, i) => {
            card.style.transitionDelay = (i * 0.1) + 's';
        });
    });
})();


// ---- 8. SMOOTH NUMBER COUNTER WITH EASING ----
(function () {
    const nums = document.querySelectorAll('.number[data-count]');
    if (!nums.length) return;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function animateNumber(el) {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(easeOut(progress) * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateNumber(e.target);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    nums.forEach(n => obs.observe(n));
})();
