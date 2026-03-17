

(function() {
    'use strict';


    const CONFIG = {
        fadeInOffset: 100,
        animationDuration: 800,
        parallaxSpeed: 0.5,
        particlesCount: 30,
    };


    const header = document.getElementById('top');
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const footer = document.getElementById('subsol');
    const yearText = document.querySelector('body::before'); // Anul 1902 din fundal


    function handleNavOnScroll() {
        if (window.scrollY > 100) {
            nav.style.backdropFilter = 'blur(30px)';
            nav.style.background = 'rgba(0, 30, 78, 0.8)';
            nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
            nav.style.transform = 'translateY(-5px)';
        } else {
            nav.style.backdropFilter = 'blur(25px)';
            nav.style.background = 'rgba(0, 82, 159, 0.35)';
            nav.style.boxShadow = 'var(--blue-glow)';
            nav.style.transform = 'translateY(0)';
        }
    }


    function handleParallax() {
        const scrolled = window.scrollY;
        const body = document.body;


        body.style.backgroundPosition = `center ${scrolled * CONFIG.parallaxSpeed}px`;


        const yearElement = document.querySelector('body');
        if (yearElement) {
            yearElement.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }


    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Elementul a intrat în viewport
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Efect special pentru secțiunea istorică
                    if (entry.target.id === 'istoric-club') {
                        entry.target.style.animation = 'pulse 2s ease-in-out';
                        setTimeout(() => {
                            entry.target.style.animation = '';
                        }, 2000);
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: `-${CONFIG.fadeInOffset}px`
        });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = `all ${CONFIG.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            observer.observe(section);
        });
    }


    function typewriterEffect() {
        const titles = document.querySelectorAll('h2');

        titles.forEach(title => {
            const originalText = title.textContent;
            title.textContent = '';
            title.style.borderRight = '4px solid var(--rm-gold)';
            title.style.overflow = 'hidden';
            title.style.whiteSpace = 'nowrap';

            let i = 0;
            function type() {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(type, 100);
                } else {
                    title.style.borderRight = 'none';
                }
            }


            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(type, 500);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(title);
        });
    }


    function createParticles() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '9999';
        container.style.overflow = 'hidden';
        document.body.appendChild(container);

        for (let i = 0; i < CONFIG.particlesCount; i++) {
            const particle = document.createElement('div');


            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 10 + 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = i % 2 === 0 ? 'var(--rm-gold)' : 'rgba(255,255,255,0.3)';
            particle.style.borderRadius = '50%';
            particle.style.filter = 'blur(2px)';
            particle.style.boxShadow = '0 0 20px var(--rm-gold)';


            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';


            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            particle.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`;

            container.appendChild(particle);
        }


        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }


    function initImageEffects() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transition = 'all 0.3s ease';
                img.style.filter = 'drop-shadow(0 0 30px var(--rm-gold)) brightness(1.2)';
            });

            img.addEventListener('mouseleave', () => {
                img.style.filter = 'drop-shadow(0 0 20px rgba(254, 190, 16, 0.6))';
            });
        });
    }


    function animateYearCounter() {
        const yearElement = document.createElement('div');
        yearElement.style.position = 'fixed';
        yearElement.style.bottom = '20px';
        yearElement.style.right = '20px';
        yearElement.style.fontSize = '5rem';
        yearElement.style.fontFamily = 'Cinzel, serif';
        yearElement.style.color = 'rgba(254, 190, 16, 0.1)';
        yearElement.style.zIndex = '9998';
        yearElement.style.pointerEvents = 'none';
        yearElement.style.transition = 'all 0.3s ease';
        yearElement.textContent = '1902';
        document.body.appendChild(yearElement);

        let currentYear = 1902;
        window.addEventListener('scroll', () => {

            const scale = 1 + (window.scrollY / 1000);
            yearElement.style.transform = `scale(${scale})`;
            yearElement.style.opacity = 0.05 + (window.scrollY / 5000);
        });
    }


    function initRippleEffect() {
        const clickableElements = document.querySelectorAll('a, button, img');

        clickableElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.width = '10px';
                ripple.style.height = '10px';
                ripple.style.background = 'rgba(254, 190, 16, 0.5)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });


        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }


    function initFooterLinks() {
        const footerLinks = footer.querySelectorAll('a');

        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transition = 'all 0.3s ease';
                link.style.transform = 'translateX(10px)';
                link.style.color = 'var(--rm-gold)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateX(0)';
                link.style.color = '';
            });
        });
    }


    function initTextGlow() {
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(p => {
            p.addEventListener('mouseenter', () => {
                p.style.textShadow = '0 0 10px var(--rm-gold)';
            });

            p.addEventListener('mouseleave', () => {
                p.style.textShadow = 'none';
            });
        });
    }


    function initPageLoader() {
        const loader = document.createElement('div');
        loader.style.position = 'fixed';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.width = '100%';
        loader.style.height = '100%';
        loader.style.background = 'var(--rm-blue-deep)';
        loader.style.zIndex = '10000';
        loader.style.display = 'flex';
        loader.style.justifyContent = 'center';
        loader.style.alignItems = 'center';
        loader.style.flexDirection = 'column';
        loader.style.transition = 'opacity 1s ease';

        loader.innerHTML = `
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" width="150" style="animation: pulse 1.5s infinite">
            <h2 style="color: var(--rm-gold); margin-top: 20px;">Încărcare Arhivă...</h2>
        `;

        document.body.appendChild(loader);

        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 1000);
            }, 1500);
        });
    }


    function init() {
        console.log('Real Madrid CF - Animații activate ✓');


        window.addEventListener('scroll', () => {
            handleNavOnScroll();
            handleParallax();
        });


        initScrollAnimations();
        typewriterEffect();
        createParticles();
        initImageEffects();
        animateYearCounter();
        initRippleEffect();
        initFooterLinks();
        initTextGlow();
        initPageLoader();


        header.style.animation = 'fadeInDown 1.5s ease-out';
    }


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();