// Créer un nouvel élément de bouton pour l'icône du burger
let burgerIcon = document.createElement("button");

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

    window.addEventListener("load", ()=>{
        if(window.innerWidth < 1025 && !nav.contains(burgerIcon)){
             nav.appendChild(burgerIcon);
        }
        else{
            burgerIcon.remove()
        }
    })

    window.addEventListener("click", ()=>{
        list.classList.toggle("open");
        burgerIcon.classList.toggle("active");
    })
