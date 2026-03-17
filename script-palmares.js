document.addEventListener("DOMContentLoaded", () => {



    const titles = document.querySelectorAll("h2, h3");

    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = "";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }

        typeWriter();
    });





    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },{threshold:0.2});

    document.querySelectorAll("section, table, p, ul").forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 1s ease";

        observer.observe(el);

    });





    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {
            row.style.boxShadow = "0 0 20px #00f0ff";
        });

        row.addEventListener("mouseleave", () => {
            row.style.boxShadow = "none";
        });

    });





    function animateCounter(element, target){

        let count = 0;

        const interval = setInterval(() => {

            count++;
            element.textContent = count;

            if(count >= target){
                clearInterval(interval);
            }

        },50);
    }

    const champions = document.createElement("div");
    champions.innerHTML = "🏆 Champions League: <span id='ucl'>0</span>";
    champions.style.fontSize = "1.5rem";
    champions.style.margin = "30px 0";

    document.querySelector("#sala-trofeelor").prepend(champions);

    animateCounter(document.getElementById("ucl"),15);





    const progress = document.createElement("div");

    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "4px";
    progress.style.background = "linear-gradient(90deg,#00f0ff,#ffcf00)";
    progress.style.zIndex = "9999";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / height) * 100;

        progress.style.width = scrolled + "%";

    });

});