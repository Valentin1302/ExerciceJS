// Créer un nouvel élément de bouton pour l'icône du burger
let burgerIcon = document.createElement("button");
burgerIcon.id = "buttonBurger"
// Sélectionner l'élément <nav> dans le document HTML
let nav = document.querySelector("nav");
// Sélectionner l'élément <ul> dans le document HTML
let list = document.querySelector("ul");

// Ajouter un écouteur d'événement sur le redimensionnement de la fenêtre
window.addEventListener("resize", () => {
    // Vérifier si la largeur de la fenêtre est inférieure à 1025 pixels
    if (window.innerWidth < 1025) {
        // Vérifier si l'icône du burger n'est pas déjà présente dans la barre de navigation
        if (!nav.contains(burgerIcon)) {
            // Ajouter l'icône du burger à la barre de navigation
            nav.appendChild(burgerIcon);
        }
    } else {
        // Si la largeur de la fenêtre est supérieure ou égale à 1025 pixels, supprimer l'icône du burger
        burgerIcon.remove();
    }
});

window.addEventListener("load", () => {
    if (window.innerWidth < 1025 && !nav.contains(burgerIcon)) {
        nav.appendChild(burgerIcon);
    }
    else {
        burgerIcon.remove()
    }
})

burgerIcon.addEventListener("click", () => {
    list.classList.toggle("open");
    burgerIcon.classList.toggle("active");
})

// Modales
// Selectionner l'image contenant la loupe 
let imgs = document.querySelectorAll(".imgBook")
let tableauImg = Array.from(imgs).map(element => element.getAttribute("src"));

let searchs = document.querySelectorAll(".loupe");


searchs.forEach(search => {


    search.addEventListener("click", () => {



        let voile = document.createElement("div");
        voile.id = "voile";

        let modal = document.createElement("div");
        modal.id = "modal";




        // On va créer l'elément button 
        let btnLeft = document.createElement("button");
        btnLeft.id = "buttonLeft";
        btnLeft.textContent = "<";

        let btnRight = document.createElement("button");
        btnRight.id = "buttonRight"
        btnRight.textContent = ">";

        let image = document.createElement("img");
        let src = search.parentNode.querySelector("img").getAttribute("src");

        modal.appendChild(btnLeft);
        modal.appendChild(btnRight);
        // On ajoute un id dans notre element

        let keyImg = tableauImg.indexOf(src);



        
        image.setAttribute("src", src);
        
        btnLeft.addEventListener("click", () => {
            let dataL = btnLeft.getAttribute("data-prev");
            let before = tableauImg[dataL];
            image.setAttribute("src", before)
            btnLeft.setAttribute("data-prev", before -1);
            btnLeft.setAttribute("data-next", before -1);
        
        })
        
        // Faire en sorte qu'une fois qu'on a cliqué, qu'on mette à jour sa clé
        btnRight.addEventListener("click", () => {
            let dataR = btnRight.getAttribute("data-next");
            let next = tableauImg[dataR]
            image.setAttribute("src", next);
            btnLeft.setAttribute("data-prev", next +1);
            btnLeft.setAttribute("data-next", next +1);
        })

        let buttonSearch = document.createElement("button");

        buttonSearch.id = "buttonModal";

        buttonSearch.textContent = "X";

        document.body.appendChild(voile);

        voile.appendChild(modal);
        modal.appendChild(image);

        let datas = search.dataset;
        for (key in datas) {
            let parag = document.createElement("p")
            parag.textContent = datas[key];
            modal.appendChild(parag);

        }

        //On injecte dans l'HTML

        modal.appendChild(buttonSearch);
        buttonSearch.addEventListener("click", () => {
            voile.remove();
            modal.remove();

        })


    })// Créer un nouvel élément de bouton pour l'icône du burger
    let burgerIcon = document.createElement("button");
    burgerIcon.id = "buttonBurger";

    // Sélectionner l'élément <nav> dans le document HTML
    let nav = document.querySelector("nav");

    // Sélectionner l'élément <ul> dans le document HTML
    let list = document.querySelector("ul");

    // Ajouter l'icône du burger lors du chargement initial si nécessaire
    window.addEventListener("load", () => {
        // Vérifier si la largeur de la fenêtre est inférieure à 1025 pixels et si l'icône du burger n'est pas déjà présente
        if (window.innerWidth < 1025 && !nav.contains(burgerIcon)) {
            // Ajouter l'icône du burger à la barre de navigation
            nav.appendChild(burgerIcon);
        } else {
            // Si la largeur de la fenêtre est supérieure ou égale à 1025 pixels ou si l'icône du burger est déjà présente, la supprimer
            burgerIcon.remove();
        }
    });

    // Ajouter un écouteur d'événement sur le clic de l'icône du burger
    burgerIcon.addEventListener("click", () => {
        // Ajouter ou supprimer la classe "open" pour afficher ou masquer la liste
        list.classList.toggle("open");
        // Ajouter ou supprimer la classe "active" pour modifier l'apparence de l'icône du burger
        burgerIcon.classList.toggle("active");
    });

    // Modales
    // Sélectionner les images contenant la classe "imgBook"
    let imgs = document.querySelectorAll(".imgBook");
    // Convertir la NodeList en tableau et récupérer les chemins relatifs des images
    let tableauImg = Array.from(imgs).map((element) => element.getAttribute("src"));

    // Sélectionner les éléments contenant la classe "loupe"
    let searchs = document.querySelectorAll(".loupe");

    // Ajouter un écouteur d'événement sur chaque élément contenant la classe "loupe"
    searchs.forEach((search) => {
        search.addEventListener("click", () => {
            // Créer un voile pour l'arrière-plan de la modale
            let voile = document.createElement("div");
            voile.id = "voile";

            // Créer la modale
            let modal = document.createElement("div");
            modal.id = "modal";

            // Créer une image pour afficher la miniature sélectionnée
            let image = document.createElement("img");
            // Récupérer le chemin relatif de l'image en utilisant le parent de l'élément actuel
            let imageLink = search.parentNode.querySelector("img").getAttribute("src");

            // Récupérer la clé (indice) de l'image dans le tableau des chemins relatifs
            let keyImg = tableauImg.indexOf(imageLink);
      
            image.setAttribute("src", imageLink);

            modal.appendChild(image);

            // Récupérer l'ensemble des attributs data dans une variable
            let datas = search.dataset;
            for (key in datas) {
                // Créer un paragraphe pour chaque attribut data
                let parag = document.createElement("p");
                parag.textContent = datas[key];
                // Injecter la modale dans le document HTML
                modal.appendChild(parag);
            }
        })
    })
});



