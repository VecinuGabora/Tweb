document.addEventListener("DOMContentLoaded", () => {


    const title = document.querySelector("h2");

    if(title){

        const text = title.textContent;
        title.textContent = "";
        let i = 0;

        function type(){

            if(i < text.length){
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type,40);
            }

        }

        type();

    }



    const cards = document.querySelectorAll("td[bgcolor]");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";

            }

        });

    },{threshold:0.3});

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px) scale(0.95)";
        card.style.transition = "all 0.9s ease";

        observer.observe(card);

    });



    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow = "0 0 35px rgba(0,240,255,0.6)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "none";

        });

    });



    const counterBox = document.createElement("div");

    counterBox.style.marginTop = "40px";
    counterBox.style.fontSize = "1.6rem";
    counterBox.style.fontWeight = "bold";

    counterBox.innerHTML =
        "🏟 Capacitate Stadion: <span id='capacity'>0</span>";

    document.querySelector("#tehnologie-stadion").appendChild(counterBox);

    function animateCapacity(target){

        let value = 0;

        const interval = setInterval(() => {

            value += 500;

            document.getElementById("capacity").textContent =
                value.toLocaleString();

            if(value >= target){

                document.getElementById("capacity").textContent =
                    target.toLocaleString();

                clearInterval(interval);

            }

        },20);

    }

    animateCapacity(85000);



    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        document.body.style.backgroundPositionY =
            scroll * 0.4 + "px";

    });



    const btn = document.createElement("button");

    btn.innerHTML = "⬆";
    btn.style.position = "fixed";
    btn.style.bottom = "40px";
    btn.style.right = "40px";
    btn.style.padding = "14px 18px";
    btn.style.borderRadius = "50%";
    btn.style.border = "none";
    btn.style.fontSize = "20px";
    btn.style.cursor = "pointer";
    btn.style.background = "linear-gradient(135deg,#00f0ff,#ffcf00)";
    btn.style.color = "#020617";
    btn.style.boxShadow = "0 0 20px rgba(0,240,255,0.6)";
    btn.style.display = "none";
    btn.style.zIndex = "999";

    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            btn.style.display = "block";

        }else{

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});