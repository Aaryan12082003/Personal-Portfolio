// =====================
// PORTFOLIO INTERACTIVITY SCRIPTS
// =====================

document.addEventListener('DOMContentLoaded', function () {
    // 1. Smooth Scroll Navigation
    document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Hamburger Menu for Mobile
    const navbar = document.querySelector('.navbar');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navbar.insertBefore(hamburger, navbar.firstChild);
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

    // 3. Theme Switcher
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-switcher';
    themeBtn.innerHTML = '<i class="fa fa-moon"></i>';
    document.body.appendChild(themeBtn);
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeBtn.innerHTML = document.body.classList.contains('light-theme') ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
    });

    // 4. Typing Animation for Hero Title
    const typingTarget = document.querySelector('.slide-right span');
    if (typingTarget) {
        const text = typingTarget.textContent;
        typingTarget.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                typingTarget.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        type();
    }

    // 5. Scroll Reveal Animations
    const revealEls = document.querySelectorAll('.hero-content-animation > *, .stats, .stat');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'none';
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            }
        });
    }, { threshold: 0.2 });
    revealEls.forEach(el => observer.observe(el));

    // 6. Download CV Button
    const cvBtn = document.querySelector('.cvbtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // Replace with your actual CV file path
            const link = document.createElement('a');
            link.href = 'Aaryan_p/Aaryan_tomar_Letter_1.pdf';
            link.download = 'Aaryan_tomar_Letter_1.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // 7. Animated Stats Counter
    document.querySelectorAll('.stat h2').forEach(counter => {
        const updateCount = () => {
            const target = +counter.textContent.replace(/\D/g, '');
            let count = 0;
            const increment = Math.ceil(target / 60);
            function animate() {
                count += increment;
                if (count < target) {
                    counter.textContent = count + '+';
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target + '+';
                }
            }
            animate();
        };
        // Animate when visible
        const statObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    obs.disconnect();
                }
            });
        }, { threshold: 0.7 });
        statObserver.observe(counter);
    });

    // 8. Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fa fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    backToTop.style.display = 'none';
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // === About Modal Functionality ===
    const aboutLink = document.querySelector('.navbar a[href="#about"]');
    const aboutModal = document.getElementById('about-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    if (aboutLink && aboutModal && closeModalBtn) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeModalBtn.addEventListener('click', function() {
            aboutModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        aboutModal.addEventListener('click', function(e) {
            if (e.target === aboutModal) {
                aboutModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === Skills Modal Functionality ===
    const skillsLink = document.querySelector('.navbar a[href="#skills"]');
    const skillsModal = document.getElementById('skills-modal');
    const closeSkillsBtn = document.querySelector('.skills-close');
    if (skillsLink && skillsModal && closeSkillsBtn) {
        skillsLink.addEventListener('click', function(e) {
            e.preventDefault();
            skillsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeSkillsBtn.addEventListener('click', function() {
            skillsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        skillsModal.addEventListener('click', function(e) {
            if (e.target === skillsModal) {
                skillsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === Services Modal Functionality ===
    const servicesLink = document.querySelector('.navbar a[href="#services"]');
    const servicesModal = document.getElementById('services-modal');
    const closeServicesBtn = document.querySelector('.services-close');
    if (servicesLink && servicesModal && closeServicesBtn) {
        servicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            servicesModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeServicesBtn.addEventListener('click', function() {
            servicesModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        servicesModal.addEventListener('click', function(e) {
            if (e.target === servicesModal) {
                servicesModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === Portfolio Modal Functionality ===
    const portfolioLink = document.querySelector('.navbar a[href="#portfolio"]');
    const portfolioModal = document.getElementById('portfolio-modal');
    const closePortfolioBtn = document.querySelector('.portfolio-close');
    if (portfolioLink && portfolioModal && closePortfolioBtn) {
        portfolioLink.addEventListener('click', function(e) {
            e.preventDefault();
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closePortfolioBtn.addEventListener('click', function() {
            portfolioModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        portfolioModal.addEventListener('click', function(e) {
            if (e.target === portfolioModal) {
                portfolioModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // === Contact Modal Functionality ===
    const contactLink = document.querySelector('.navbar a[href="#contact"]');
    const contactModal = document.getElementById('contact-modal');
    const closeContactBtn = document.querySelector('.contact-close');
    if (contactLink && contactModal && closeContactBtn) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeContactBtn.addEventListener('click', function() {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// =====================
// END OF SCRIPTS
// =====================
