

document.addEventListener("DOMContentLoaded", () => {
    console.log("%c⚽ Animații Real Madrid CF activate! Arhiva 2025/26 e live!", "color:#FEBE10; font-weight:bold; font-size:14px");


    const rows = document.querySelectorAll("#arhiva-rezultate tbody tr");
    rows.forEach((row, index) => {

        row.style.opacity = "0";
        row.style.transform = "translateY(50px) scale(0.95)";
        row.style.transition = "none";


        setTimeout(() => {
            row.style.transition = "all 0.85s cubic-bezier(0.23, 1, 0.32, 1)";
            row.style.opacity = "1";
            row.style.transform = "translateY(0) scale(1)";
        }, 450 + index * 75); // 450ms start + 75ms între rânduri
    });


    const h2 = document.querySelector("#arhiva-rezultate h2");
    const p = document.querySelector("#arhiva-rezultate p");

    if (h2) {
        h2.style.opacity = "0";
        h2.style.transform = "translateX(-60px)";
        h2.style.transition = "none";
        setTimeout(() => {
            h2.style.transition = "all 1.1s cubic-bezier(0.23, 1, 0.32, 1)";
            h2.style.opacity = "1";
            h2.style.transform = "translateX(0)";
        }, 300);
    }

    if (p) {
        p.style.opacity = "0";
        p.style.transform = "translateX(-40px)";
        p.style.transition = "none";
        setTimeout(() => {
            p.style.transition = "all 1.1s cubic-bezier(0.23, 1, 0.32, 1)";
            p.style.opacity = "1";
            p.style.transform = "translateX(0)";
        }, 750);
    }


    const logo = document.querySelector("header img");
    if (logo) {
        logo.style.transition = "transform 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
        logo.style.transform = "scale(0.7) rotate(-18deg)";

        setTimeout(() => {
            logo.style.transform = "scale(1) rotate(0deg)";
        }, 600);
    }


    rows.forEach(row => {
        const scoreCell = row.querySelector("td:nth-child(5)"); // coloana Scor

        if (scoreCell) {
            row.addEventListener("mouseenter", () => {
                scoreCell.style.transition = "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
                scoreCell.style.transform = "scale(1.18)";
                scoreCell.style.textShadow = "0 0 25px #FEBE10";
            });

            row.addEventListener("mouseleave", () => {
                scoreCell.style.transform = "scale(1)";
                scoreCell.style.textShadow = "none";
            });
        }
    });


    window.addEventListener("scroll", () => {
        const headerH1 = document.querySelector("header h1");
        if (headerH1 && window.scrollY > 100) {
            headerH1.style.transition = "all 0.6s";
            headerH1.style.letterSpacing = "10px";
            setTimeout(() => {
                headerH1.style.letterSpacing = "7px";
            }, 800);
        }
    });


});