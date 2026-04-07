document.addEventListener("DOMContentLoaded", () => {



    const inputs = document.querySelectorAll("input, textarea, select");

    const progress = document.createElement("div");

    progress.style.position = "fixed";
    progress.style.top = "0";
    progress.style.left = "0";
    progress.style.height = "5px";
    progress.style.background = "linear-gradient(90deg,#00f0ff,#ffcf00)";
    progress.style.width = "0%";
    progress.style.zIndex = "9999";

    document.body.appendChild(progress);

    function updateProgress(){

        let filled = 0;

        inputs.forEach(i=>{
            if(i.value !== "") filled++;
        });

        const percent = (filled / inputs.length) * 100;
        progress.style.width = percent + "%";

    }

    inputs.forEach(i=>{
        i.addEventListener("input", updateProgress);
    });



    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){

        //e.preventDefault();

        const name = form.nume_complet.value.trim();
        const email = form.email_socio.value.trim();
        const captcha = form.captcha.value.trim();

        if(name.length < 3){

            alert("❌ Introduceți un nume valid.");
            return;

        }

        if(!email.includes("@")){

            alert("❌ Email invalid.");
            return;

        }

        if(captcha !== "1902"){

            alert("❌ Cod verificare incorect.");
            return;

        }

        simulateUpload();

    });



    function simulateUpload(){

        const loading = document.createElement("div");

        loading.innerHTML =
            "⏳ Trimitere cerere către Data Center Madrid...";

        loading.style.position = "fixed";
        loading.style.top = "50%";
        loading.style.left = "50%";
        loading.style.transform = "translate(-50%,-50%)";
        loading.style.padding = "40px";
        loading.style.background = "rgba(0,0,0,0.9)";
        loading.style.border = "1px solid #00f0ff";
        loading.style.borderRadius = "20px";
        loading.style.boxShadow = "0 0 40px #00f0ff";

        document.body.appendChild(loading);

        setTimeout(()=>{

            loading.remove();
            createSocioCard();

        },2500);

    }



    function createSocioCard(){

        const name = form.nume_complet.value;
        const fav = form.querySelector("input[name='fav']:checked");

        let player = "Real Madrid";

        if(fav) player = fav.value;

        const card = document.createElement("div");

        card.style.position = "fixed";
        card.style.top = "50%";
        card.style.left = "50%";
        card.style.transform = "translate(-50%,-50%) scale(0)";
        card.style.width = "420px";
        card.style.padding = "30px";
        card.style.borderRadius = "25px";
        card.style.background =
            "linear-gradient(135deg,#020617,#001f2b)";
        card.style.color = "white";
        card.style.boxShadow = "0 0 60px #00f0ff";
        card.style.textAlign = "center";
        card.style.transition = "0.6s";

        card.innerHTML = `

<h2>Socio Card</h2>

<p><b>${name}</b></p>

<p>ID Socio: RM-${Math.floor(Math.random()*999999)}</p>

<p>Fan: ${player}</p>

<p>Status: ACTIV</p>

`;

        document.body.appendChild(card);

        setTimeout(()=>{
            card.style.transform = "translate(-50%,-50%) scale(1)";
        },50);

    }



    const radios = document.querySelectorAll("input[name='fav']");

    const preview = document.createElement("div");

    preview.style.marginTop = "30px";
    preview.style.fontSize = "1.3rem";
    preview.style.color = "#00f0ff";

    document.querySelector("#socios-portal").appendChild(preview);

    radios.forEach(r=>{

        r.addEventListener("change", ()=>{

            preview.innerHTML =
                "⭐ Jucător favorit selectat: <b>"+r.nextSibling.textContent+"</b>";

        });

    });



    const title = document.querySelector("h2");

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

});