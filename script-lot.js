document.addEventListener('DOMContentLoaded', () => {


    const startCounters = () => {
        const counters = document.querySelectorAll('.counter-value');
        const speed = 200; // Cu cât e mai mic, cu atât e mai rapid

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };


    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) startCounters();
    }, { threshold: 0.5 });

    const trophySection = document.querySelector('#sala-trofeelor');
    if(trophySection) observer.observe(trophySection);



    const searchInput = document.getElementById('quick-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            let filter = searchInput.value.toLowerCase();
            let rows = document.querySelectorAll('tbody tr');

            rows.forEach(row => {
                let text = row.innerText.toLowerCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }


    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav table');
        if (window.scrollY > 100) {
            nav.style.transform = 'scale(0.95)';
            nav.style.opacity = '0.9';
        } else {
            nav.style.transform = 'scale(1)';
            nav.style.opacity = '1';
        }
    });




    console.log('✨ Animații suplimentare activate pentru pagina Lot');


    const playerRows = document.querySelectorAll('tbody tr');
    playerRows.forEach(row => {
        row.addEventListener('mouseenter', function() {

            this.style.transition = 'all 0.4s ease';
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 10px 30px var(--rm-gold)';
            this.style.zIndex = '10';
            this.style.position = 'relative';


            const numeCell = this.querySelector('td:nth-child(2)');
            if (numeCell) {
                numeCell.style.transition = 'all 0.3s';
                numeCell.style.textShadow = '0 0 15px var(--rm-gold)';
                numeCell.style.fontSize = '1.1rem';
            }
        });

        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.zIndex = 'auto';

            const numeCell = this.querySelector('td:nth-child(2)');
            if (numeCell) {
                numeCell.style.textShadow = 'none';
                numeCell.style.fontSize = '';
            }
        });
    });


    const numereTricou = document.querySelectorAll('td:first-child');
    numereTricou.forEach(numar => {
        numar.style.transition = 'all 0.3s';
        numar.style.cursor = 'pointer';

        numar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.color = 'var(--rm-gold)';
            this.style.fontWeight = 'bold';
            this.style.display = 'inline-block';


            const tooltip = document.createElement('span');
            tooltip.textContent = 'Număr tricou';
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'var(--rm-blue-deep)';
            tooltip.style.color = 'var(--rm-gold)';
            tooltip.style.padding = '3px 8px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.fontSize = '12px';
            tooltip.style.marginLeft = '10px';
            tooltip.style.border = '1px solid var(--rm-gold)';

            this.style.position = 'relative';
            this.appendChild(tooltip);

            setTimeout(() => {
                if (tooltip.parentNode) tooltip.remove();
            }, 1500);
        });

        numar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = '';
        });
    });


    function adaugaStatisticiJucatori() {
        const tabele = document.querySelectorAll('table');

        tabele.forEach((table, indexTabel) => {
            const randuri = table.querySelectorAll('tbody tr');

            randuri.forEach((rand, index) => {

                const butonStats = document.createElement('span');
                butonStats.innerHTML = ' 📊';
                butonStats.style.cursor = 'pointer';
                butonStats.style.marginLeft = '10px';
                butonStats.style.fontSize = '1.2rem';
                butonStats.style.opacity = '0.5';
                butonStats.style.transition = 'all 0.3s';

                butonStats.addEventListener('mouseenter', function() {
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1.2)';
                });

                butonStats.addEventListener('mouseleave', function() {
                    this.style.opacity = '0.5';
                    this.style.transform = 'scale(1)';
                });

                butonStats.addEventListener('click', function() {
                    const numeJucator = rand.querySelector('td:nth-child(2)').textContent;
                    const varsta = rand.querySelector('td:nth-child(4)').textContent;


                    const meciuri = Math.floor(Math.random() * 30 + 10);
                    const goluri = Math.floor(Math.random() * 15);
                    const assisturi = Math.floor(Math.random() * 10);

                    alert(`📊 Statistici ${numeJucator} (${varsta} ani):\nMeciuri: ${meciuri}\nGoluri: ${goluri}\nAssist-uri: ${assisturi}`);
                });

                const numeCell = rand.querySelector('td:nth-child(2)');
                if (numeCell) {
                    numeCell.appendChild(butonStats);
                }
            });
        });
    }
    adaugaStatisticiJucatori();


    const mbappeRow = Array.from(playerRows).find(row =>
        row.textContent.includes('Mbappé') || row.textContent.includes('Kylian')
    );

    if (mbappeRow) {
        const numar10 = mbappeRow.querySelector('td:first-child');
        if (numar10) {
            setInterval(() => {
                numar10.style.transition = 'all 0.5s';
                numar10.style.color = numar10.style.color === 'var(--rm-gold)' ? 'white' : 'var(--rm-gold)';
                numar10.style.transform = numar10.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
            }, 1000);
        }
    }


    const sections = document.querySelectorAll('h3');
    sections.forEach((section, index) => {
        section.style.transition = 'all 0.8s';
        section.style.opacity = '0';
        section.style.transform = 'translateX(-30px)';

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200); // Intră pe rând
                }
            });
        }, { threshold: 0.5 });

        sectionObserver.observe(section);
    });


    function adaugaGraficVarste() {
        const container = document.createElement('div');
        container.style.cssText = `
            margin: 40px 0;
            padding: 30px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
        `;

        const categorii = {
            'Sub 23': 0,
            '23-28 ani': 0,
            'Peste 28': 0
        };

        playerRows.forEach(row => {
            const varsta = row.querySelector('td:nth-child(4)');
            if (varsta) {
                const ani = parseInt(varsta.textContent);
                if (ani < 23) categorii['Sub 23']++;
                else if (ani <= 28) categorii['23-28 ani']++;
                else categorii['Peste 28']++;
            }
        });

        let html = '<h3 style="color: var(--rm-gold); margin-bottom: 20px;">📊 Distribuția Vârstelor Lotului</h3>';

        Object.entries(categorii).forEach(([categorie, numar]) => {
            const procent = (numar / playerRows.length * 100).toFixed(1);
            html += `
                <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="color: white;">${categorie}</span>
                        <span style="color: var(--rm-gold);">${numar} jucători (${procent}%)</span>
                    </div>
                    <div style="width: 100%; height: 20px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden;">
                        <div class="age-bar" data-width="${procent}" style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--rm-accent-purple), var(--rm-gold)); transition: width 1.5s ease;"></div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        const section = document.querySelector('#lot-detaliat');
        if (section) {
            section.appendChild(container);


            const barObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('.age-bar').forEach(bar => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width + '%';
                        });
                    }
                });
            }, { threshold: 0.5 });

            barObserver.observe(container);
        }
    }
    adaugaGraficVarste();


    function adaugaCardEfect() {
        playerRows.forEach(row => {
            row.style.transition = 'all 0.3s';
            row.style.cursor = 'pointer';

            row.addEventListener('click', function(e) {

                if (e.target.innerHTML === ' 📊') return;

                const nume = this.querySelector('td:nth-child(2)').textContent;
                const pozitie = this.querySelector('td:nth-child(3)').textContent;
                const varsta = this.querySelector('td:nth-child(4)').textContent;

                const card = document.createElement('div');
                card.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, var(--rm-blue-deep), var(--rm-accent-purple));
                    padding: 40px;
                    border-radius: 20px;
                    border: 3px solid var(--rm-gold);
                    box-shadow: 0 0 50px var(--rm-gold);
                    z-index: 10000;
                    text-align: center;
                    min-width: 300px;
                `;

                card.innerHTML = `
                    <h2 style="color: var(--rm-gold); margin-bottom: 20px;">⭐ ${nume}</h2>
                    <p style="color: white; margin: 10px 0;">📋 Poziție: ${pozitie}</p>
                    <p style="color: white; margin: 10px 0;">🎂 Vârstă: ${varsta}</p>
                    <p style="color: var(--rm-gold); margin: 20px 0;">👑 Real Madrid</p>
                    <button style="background: var(--rm-gold); color: var(--rm-blue-deep); border: none; padding: 10px 30px; border-radius: 10px; cursor: pointer; font-weight: bold;">Închide</button>
                `;

                document.body.appendChild(card);

                card.querySelector('button').addEventListener('click', () => {
                    card.remove();
                });


                setTimeout(() => {
                    document.addEventListener('click', function closeCard(e) {
                        if (!card.contains(e.target)) {
                            card.remove();
                            document.removeEventListener('click', closeCard);
                        }
                    });
                }, 100);
            });
        });
    }
    adaugaCardEfect();


    const totalJucatori = playerRows.length;
    const counterDiv = document.createElement('div');
    counterDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--rm-blue-deep);
        padding: 15px 25px;
        border-radius: 50px;
        border: 2px solid var(--rm-gold);
        box-shadow: var(--gold-glow);
        z-index: 9999;
        font-size: 1.2rem;
        backdrop-filter: blur(10px);
        cursor: pointer;
        transition: all 0.3s;
    `;

    counterDiv.innerHTML = `👥 Lot actual: <span id="player-count" style="color: var(--rm-gold); font-weight: bold;">0</span> jucători`;
    document.body.appendChild(counterDiv);

    counterDiv.addEventListener('mouseenter', () => {
        counterDiv.style.transform = 'scale(1.1)';
    });

    counterDiv.addEventListener('mouseleave', () => {
        counterDiv.style.transform = 'scale(1)';
    });


    let count = 0;
    const targetCount = totalJucatori;
    const countInterval = setInterval(() => {
        if (count < targetCount) {
            count++;
            document.getElementById('player-count').textContent = count;
        } else {
            clearInterval(countInterval);
        }
    }, 50);

    console.log('🎯 Toate animațiile au fost încărcate cu succes!');
});