document.addEventListener('DOMContentLoaded', () => {

    const animateCounters = () => {
        const counters = document.querySelectorAll('td b, td:nth-child(9) b');
        counters.forEach(counter => {
            const target = +counter.innerText;
            if (!isNaN(target)) {
                let count = 0;
                const updateCount = () => {
                    const speed = target / 50;
                    if (count < target) {
                        count += speed;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            }
        });
    };


    const logo = document.querySelector('header img');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        logo.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateY(-10px)`;
    });


    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                if(entry.target.id === 'situatie-la-zi') animateCounters();
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)";
        observer.observe(section);
    });


    const createParticles = () => {
        const header = document.querySelector('header');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-particle';
            const size = Math.random() * 5 + 'px';

            Object.assign(particle.style, {
                position: 'absolute',
                width: size,
                height: size,
                backgroundColor: 'var(--rm-gold)',
                borderRadius: '50%',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: '0',
                pointerEvents: 'none',
                boxShadow: '0 0 10px var(--rm-gold)'
            });

            header.appendChild(particle);

            particle.animate([
                { opacity: 0, transform: 'translateY(0) scale(1)' },
                { opacity: 1, transform: 'translateY(-100px) scale(1.5)' },
                { opacity: 0, transform: 'translateY(-200px) scale(0)' }
            ], {
                duration: Math.random() * 3000 + 2000,
                iterations: Infinity,
                delay: Math.random() * 5000
            });
        }
    };

    createParticles();


    console.log("%c Hala Madrid! %c Arhiva Digitală 2026 activată. ",
        "color: #FEBE10; font-size: 20px; font-weight: bold; background: #001e4e; padding: 5px;",
        "color: white; background: #00529F; padding: 5px;");
});