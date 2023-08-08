

const title = document.querySelector("h1")

title.addEventListener("click", () => {



    if (!document.querySelector("div")) {
        let bloc = document.createElement('div');
        bloc.id = "modale";
        let voile = document.createElement('div');
        voile.id = "voile";
        let parag = document.createElement('p');
        parag.id = "textModale"
        parag.textContent = "Bonjour";

        document.body.appendChild(voile);
        voile.appendChild(bloc);
        bloc.appendChild(parag);
        voile.addEventListener("click", () => {
            voile.remove();
            bloc.remove();
        })
    }

})



let chevron = document.createElement("p");

chevron.textContent = "<";
document.body.appendChild(chevron);



window.addEventListener("scroll", () => {

    if (window.scrollY > 800) {
        chevron.classList.add("visible");
    }
    else {
        chevron.classList.remove("visible");
    }
});



chevron.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
})

let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let image = document.createElement("img")
        let valeur = btn.getAttribute("data-src");
        image.src = valeur;
        document.body.appendChild(image);
        let voileBtn = document.createElement("div");
        voileBtn.id = "voileBtn";
    
        let modalBtn = document.createElement("div");
        modalBtn.id = "modalBtn";
    
        let buttonLeft = btns.id = "buttonLeft";
        buttonLeft.textContent = "<"
    
        let buttonRight = btns.id = "buttonRight";
        buttonRight.textContent = ">";
    })

})
