    // =============================================
    // VINAYAK HOSPITAL – MAIN JAVASCRIPT
    // .NET Core 8 Razor Pages Version
    // =============================================

    // SVG Icons helper
    const Icons = {
        cross: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>`,
        heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
        phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.31 19.79 19.79 0 0 1 1.61 2.18 2 2 0 0 1 3.59 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
        calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
        arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
        messageSquare: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
        chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
        x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
        zoomIn: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
        check: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
        star: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        quote: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#E0F2FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>`,
        menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
        closeMenu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
        mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    };

    // ===== LOADING SCREEN =====
    document.addEventListener('DOMContentLoaded', function () {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        const progressFill = document.querySelector('.loading-progress-fill');

        if (loadingScreen) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 2;
                if (progressFill) progressFill.style.width = progress + '%';
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loadingScreen.classList.add('hide');
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                            if (mainContent) mainContent.style.display = 'block';
                            initAll();
                        }, 600);
                    }, 200);
                }
            }, 20);
        } else {
            initAll();
        }
    });

    function initAll() {
        initNavbar();
        initScrollProgress();
        initScrollReveal();
        initCounters();
        initTestimonials();
        initReviewSlider();
        initGallery();
        initFloatingButtons();
        initAppointmentForm();
    }

    // ===== NAVBAR =====
    function initNavbar() {
        const nav = document.querySelector('.site-nav');
        const navInner = document.querySelector('.nav-inner');
        const mobileToggle = document.querySelector('.nav-mobile-toggle');
        const mobileMenu = document.querySelector('.nav-mobile-menu');

        if (!nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                navInner?.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
                navInner?.classList.remove('scrolled');
            }
        });

        mobileToggle?.addEventListener('click', () => {
            mobileMenu?.classList.toggle('open');
            const isOpen = mobileMenu?.classList.contains('open');
            mobileToggle.innerHTML = isOpen ? Icons.closeMenu : Icons.menu;
        });

        // Close mobile menu on link click
        mobileMenu?.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileToggle.innerHTML = Icons.menu;
            });
        });
    }

    // ===== SCROLL PROGRESS =====
    function initScrollProgress() {
        const bar = document.querySelector('.scroll-progress-bar');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollTop / docHeight : 0;
            bar.style.transform = `scaleX(${pct})`;
        });
    }

    // ===== SCROLL REVEAL =====
    function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, (entry.target.dataset.delay || 0));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '-50px' });

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== ANIMATED COUNTERS =====
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => observer.observe(c));
    }

    function animateCounter(el) {
        const end = parseInt(el.dataset.end || '0');
        const suffix = el.dataset.suffix || '';
        const duration = parseInt(el.dataset.duration || '2000');
        const steps = 60;
        let frame = 0;
        const timer = setInterval(() => {
            frame++;
            const progress = frame / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(end * eased).toLocaleString() + suffix;
            if (frame >= steps) {
                el.textContent = end.toLocaleString() + suffix;
                clearInterval(timer);
            }
        }, duration / steps);
    }

    // ===== TESTIMONIALS CAROUSEL =====
    function initTestimonials() {
        const testimonials = [
            {
                name: "Priya Sharma", role: "Mother of two", location: "Delhi", initials: "PS", color: "#0EA5E9",
                review: "Dr. at Vinayak Hospital provided exceptional care for my newborn. Their attention to detail, warmth, and expertise made us feel completely at ease during the most critical time. Highly recommend to every parent!",
                rating: 5
            },
            {
                name: "Meera Patel", role: "Patient – Pregnancy Care", location: "Mumbai", initials: "MP", color: "#EC4899",
                review: "My pregnancy journey with Vinayak Hospital was wonderful. The gynecologist was incredibly supportive and knowledgeable. She guided me through every step, addressing all my concerns with patience and care.",
                rating: 5
            },
            {
                name: "Anjali Verma", role: "Mother of a toddler", location: "Bangalore", initials: "AV", color: "#16A34A",
                review: "We've been bringing our daughter here since she was born. The pediatrician is fantastic — always thorough, gentle with the children, and takes time to explain everything. This is our family's trusted hospital.",
                rating: 5
            },
            {
                name: "Sunita Gupta", role: "Infertility Treatment Patient", location: "Pune", initials: "SG", color: "#D97706",
                review: "After years of struggle, Vinayak Hospital gave us hope. The infertility consultation was handled with such sensitivity and professionalism. We are now a family of three thanks to this incredible team.",
                rating: 5
            },
            {
                name: "Kavitha Reddy", role: "Postnatal Care Patient", location: "Hyderabad", initials: "KR", color: "#7C3AED",
                review: "The postnatal care I received was outstanding. The staff was attentive, caring, and made sure both my baby and I were comfortable and healthy. I couldn't have asked for better medical support.",
                rating: 5
            }
        ];

        let active = 0;
        const card = document.getElementById('testimonial-card');
        const dotsContainer = document.getElementById('testimonial-dots');
        const miniContainer = document.getElementById('testimonial-mini');
        if (!card) return;

        function renderTestimonial(i) {
            const t = testimonials[i];
            card.style.opacity = '0';
            card.style.transform = 'translateX(40px) scale(0.95)';
            setTimeout(() => {
                card.innerHTML = `
                    <div class="testimonial-quote-icon">${Icons.quote}</div>
                    <div class="testimonial-stars">${'<span class="icon">' + Icons.star + '</span>'.repeat(t.rating)}</div>
                    <p class="testimonial-text">"${t.review}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar" style="background:linear-gradient(135deg,${t.color},${t.color}99)">${t.initials}</div>
                        <div>
                            <div class="testimonial-name">${t.name}</div>
                            <div class="testimonial-role">${t.role}</div>
                            <div class="testimonial-location">${t.location}</div>
                        </div>
                    </div>`;
                card.style.transform = 'translateX(-40px) scale(0.95)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s, transform 0.4s';
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0) scale(1)';
                }, 20);
            }, 200);

            // Update dots
            dotsContainer?.querySelectorAll('.testimonial-dot').forEach((d, di) => {
                d.classList.toggle('active', di === i);
            });

            // Update mini cards
            miniContainer?.querySelectorAll('.testimonial-mini-card').forEach((m, mi) => {
                m.style.background = mi === i ? `${testimonials[mi].color}10` : '#F8FAFC';
                m.style.borderColor = mi === i ? `${testimonials[mi].color}40` : '#F1F5F9';
            });
        }

        // Build dots
        if (dotsContainer) {
            testimonials.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => { active = i; renderTestimonial(i); });
                dotsContainer.appendChild(dot);
            });
        }

        // Build mini cards
        if (miniContainer) {
            testimonials.forEach((t, i) => {
                const mini = document.createElement('button');
                mini.className = 'testimonial-mini-card';
                mini.innerHTML = `
                    <div class="testimonial-mini-avatar" style="background:${t.color}">${t.initials}</div>
                    <div class="testimonial-mini-name">${t.name.split(' ')[0]}</div>`;
                mini.addEventListener('click', () => { active = i; renderTestimonial(i); });
                miniContainer.appendChild(mini);
            });
        }

        // Arrows
        document.getElementById('testimonial-prev')?.addEventListener('click', () => {
            active = (active - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(active);
        });
        document.getElementById('testimonial-next')?.addEventListener('click', () => {
            active = (active + 1) % testimonials.length;
            renderTestimonial(active);
        });

        renderTestimonial(0);

        // Auto-advance
        setInterval(() => {
            active = (active + 1) % testimonials.length;
            renderTestimonial(active);
        }, 5000);
    }

    // ===== GALLERY LIGHTBOX =====
    function initGallery() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (!img || !lightbox || !lightboxImg) return;
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                if (lightboxCaption) lightboxCaption.textContent = item.dataset.category + ' — ' + img.alt;
                lightbox.classList.add('open');
            });
        });

        lightbox?.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
        document.getElementById('lightbox-close')?.addEventListener('click', () => {
            lightbox?.classList.remove('open');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') lightbox?.classList.remove('open');
        });
    }

    // ===== FLOATING BUTTONS =====
    function initFloatingButtons() {
        const scrollTopBtn = document.querySelector('.float-scroll-top');
        const fab = document.querySelector('.float-fab');
        const actionBtns = document.querySelectorAll('.float-action-btn');
        let fabOpen = false;

        window.addEventListener('scroll', () => {
            if (scrollTopBtn) {
                scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
            }
        });

        scrollTopBtn?.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        fab?.addEventListener('click', () => {
            fabOpen = !fabOpen;
            fab.classList.toggle('open', fabOpen);
            fab.innerHTML = fabOpen
                ? `<span class="float-fab-icon" style="font-size:24px;font-weight:bold;color:white">×</span>`
                : `<span class="float-fab-icon">${Icons.phone}</span>`;
            actionBtns.forEach((btn, i) => {
                setTimeout(() => btn.classList.toggle('show', fabOpen), i * 50);
            });
        });
    }

    function initReviewSlider() {

        const slides = document.querySelectorAll(".testimonial-item");

        const dotsContainer = document.querySelector(".testimonial-dots");

        if (!slides.length) return;

        let current = 0;

        slides.forEach((slide, index) => {

            if (index == 0)
                slide.classList.add("active");
            else
                slide.classList.remove("active");

            const dot = document.createElement("span");

            dot.className = "testimonial-dot";

            if (index == 0)
                dot.classList.add("active");

            dot.onclick = function () {

                showSlide(index);

                resetTimer();

            }

            dotsContainer.appendChild(dot);

        });

        const dots = document.querySelectorAll(".testimonial-dot");

        function showSlide(index) {

            slides.forEach(s => s.classList.remove("active"));

            dots.forEach(d => d.classList.remove("active"));

            slides[index].classList.add("active");

            dots[index].classList.add("active");

            current = index;

        }

        function nextSlide() {

            current++;

            if (current >= slides.length)
                current = 0;

            showSlide(current);

        }

        let timer = setInterval(nextSlide, 4000);

        function resetTimer() {

            clearInterval(timer);

            timer = setInterval(nextSlide, 4000);

        }

    }
   
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let current = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');

        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === n));
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => { current = i; showSlide(i); });
            dotsContainer.appendChild(dot);
        });
    }

    if (slides.length > 0) {
        createDots();
        showSlide(0);

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });
    }
});

    document.addEventListener("DOMContentLoaded", function () {

        const heroSlider = document.getElementById("heroSlider");

        if (!heroSlider) {
            return;
        }

        const slides = heroSlider.querySelectorAll(".hero-slide");
        const dots = heroSlider.querySelectorAll(".hero-slider-dot");

        if (slides.length <= 1) {
            return;
        }

        let currentSlide = 0;
        let autoSlideInterval = null;

        const AUTO_SLIDE_TIME = 5000;

        function showSlide(index) {

            if (index >= slides.length) {
                index = 0;
            }

            if (index < 0) {
                index = slides.length - 1;
            }

            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            dots.forEach(function (dot) {
                dot.classList.remove("active");
            });

            slides[index].classList.add("active");

            if (dots[index]) {
                dots[index].classList.add("active");
            }

            currentSlide = index;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function startAutoSlide() {

            stopAutoSlide();

            autoSlideInterval = setInterval(function () {
                nextSlide();
            }, AUTO_SLIDE_TIME);
        }

        function stopAutoSlide() {

            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }

        dots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                showSlide(index);

                startAutoSlide();
            });

        });

        heroSlider.addEventListener("mouseenter", function () {
            stopAutoSlide();
        });

        heroSlider.addEventListener("mouseleave", function () {
            startAutoSlide();
        });

        document.addEventListener("visibilitychange", function () {

            if (document.hidden) {
                stopAutoSlide();
            } else {
                startAutoSlide();
            }

        });

        showSlide(0);

        startAutoSlide();

    });
/* =============================================
VINAYAK HOSPITAL — PREMIUM MOTION SCRIPT
Isko _Layout.cshtml me </body> se pehle
<script src="~/js/premium-animations.js"></script>
ke through add karo. Existing hero-slider script
isse touch nahi hota.
============================================= */
(function () {
    "use strict";

    /* ---------- 1. SCROLL REVEAL with stagger ---------- */
    function initScrollReveal() {
        var items = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
        var counters = {};
        items.forEach(function (el) {
            var parent = el.parentElement;
            var key = parent ? Array.prototype.indexOf.call(document.querySelectorAll("*"), parent) : 0;
            if (counters[key] === undefined) counters[key] = 0;
            var delay = Math.min(counters[key] * 90, 480); // stagger, capped
            el.style.setProperty("--reveal-delay", delay + "ms");
            counters[key]++;
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        items.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- 2. COUNTER ANIMATION ---------- */
    function animateCounter(el) {
        var end = parseFloat(el.getAttribute("data-end")) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = parseInt(el.getAttribute("data-duration"), 10) || 1800;
        var startTime = null;

        el.classList.add("counting");

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOutCubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * end);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = end + suffix;
            }
        }
        requestAnimationFrame(step);
    }

    function initCounters() {
        var counters = document.querySelectorAll(".counter[data-end]");
        if (!counters.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- 3. CARD TILT (premium 3D hover) ---------- */
    function initCardTilt() {
        var selectors = ".service-card, .doctor-card, .why-card, .stat-card, .value-card";
        var cards = document.querySelectorAll(selectors);

        cards.forEach(function (card) {
            card.classList.add("card-tilt");

            card.addEventListener("mousemove", function (e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var rotateX = ((y / rect.height) - 0.5) * -6;
                var rotateY = ((x / rect.width) - 0.5) * 6;
                card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
            });

            card.addEventListener("mouseleave", function () {
                card.style.transform = "";
            });
        });
    }

    /* ---------- 4. RIPPLE ON CLICK (buttons) ---------- */
    function initRipple() {
        var selectors = ".btn-primary, .hero-btn-primary, .doctor-cta, .btn-submit, .btn-white, .hero-btn-secondary";
        var buttons = document.querySelectorAll(selectors);

        buttons.forEach(function (btn) {
            btn.classList.add("ripple-parent");
            btn.addEventListener("click", function (e) {
                var rect = btn.getBoundingClientRect();
                var circle = document.createElement("span");
                var size = Math.max(rect.width, rect.height);
                circle.className = "ripple-circle";
                circle.style.width = circle.style.height = size + "px";
                circle.style.left = (e.clientX - rect.left - size / 2) + "px";
                circle.style.top = (e.clientY - rect.top - size / 2) + "px";
                btn.appendChild(circle);
                setTimeout(function () { circle.remove(); }, 650);
            });
        });
    }

    /* ---------- 5. HERO ORB PARALLAX ---------- */
    function initHeroParallax() {
        var hero = document.getElementById("hero");
        if (!hero) return;
        var orbs = hero.querySelectorAll(".hero-orb");
        if (!orbs.length) return;

        hero.addEventListener("mousemove", function (e) {
            var rect = hero.getBoundingClientRect();
            var relX = (e.clientX - rect.left) / rect.width - 0.5;
            var relY = (e.clientY - rect.top) / rect.height - 0.5;

            orbs.forEach(function (orb, i) {
                var strength = (i + 1) * 12;
                orb.style.transform = "translate(" + (relX * strength) + "px, " + (relY * strength) + "px)";
            });
        });

        hero.addEventListener("mouseleave", function () {
            orbs.forEach(function (orb) { orb.style.transform = "translate(0,0)"; });
        });
    }

    /* ---------- 6. INIT ---------- */
    document.addEventListener("DOMContentLoaded", function () {
        initScrollReveal();
        initCounters();
        initCardTilt();
        initRipple();
        initHeroParallax();
    });
})();

