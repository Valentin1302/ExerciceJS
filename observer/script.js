// 1ère étape : Savoir précisément ce que l'on souhaite observer.

// Sélectionne l'élément ayant l'ID "last" dans le document.
const lastSection = document.querySelector("#last");

// Sélectionne toutes les balises <img> dans le document.
let images = document.querySelectorAll("img");

// Crée un nouvel observateur d'intersection (IntersectionObserver) qui prend une fonction de rappel.
const observer = new IntersectionObserver(elements => {
    // Pour chaque élément observé (intersection), exécute le code dans cette fonction de rappel.
    elements.forEach(el => {
        if (el.isIntersecting) {
            // Si l'élément devient visible dans la fenêtre, ajoute la classe "visible" à cet élément.
            el.target.classList.add("visible");

            // Obtient la valeur de l'attribut "data-src" pour chaque image.
            let src = el.target.getAttribute("data-src");

            // Met à jour l'attribut "src" de l'image avec la valeur de "data-src".
            el.target.setAttribute("src", src);
            //On cesse d'observer l'élément cible spécifié.
            el.target.removeAttribute("data-src");
            observer.unobserve(el.target);
        }
    });
});

// Commence à observer l'élément avec l'ID "last".
observer.observe(lastSection);

// Pour chaque balise <section> dans le document, commence à observer son intersection.
const allSect = document.querySelectorAll("section");
allSect.forEach(sec => {
    observer.observe(sec);
});

// Pour chaque image dans le document, commence à observer son intersection.
images.forEach(image => {
    observer.observe(image);
});
