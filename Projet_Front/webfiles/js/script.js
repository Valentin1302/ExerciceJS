function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
    } else {
      menu.className = "";                    
      icon.className = "";
      root.style.overflowY = "";
    }
  }



  
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
        

        // Caroussel Modales
        let keyImg = tableauImg.indexOf(src);
        let currentIndex = keyImg;


        
        image.setAttribute("src", src);

        btnLeft.setAttribute("data-index", currentIndex);
        btnRight.setAttribute("data-index", currentIndex);


        
        btnLeft.addEventListener("click", () => {
            currentIndex = parseInt(btnLeft.getAttribute("data-index")) - 1;
            if (currentIndex >= 0) {
                let before = tableauImg[currentIndex];
                image.setAttribute("src", before);
                btnLeft.setAttribute("data-index", currentIndex);
                btnRight.setAttribute("data-index", currentIndex);
            }
        });
        
        btnRight.addEventListener("click", () => {
            currentIndex = parseInt(btnRight.getAttribute("data-index")) + 1;
            if (currentIndex < tableauImg.length) {
                let next = tableauImg[currentIndex];
                image.setAttribute("src", next);
                btnLeft.setAttribute("data-index", currentIndex);
                btnRight.setAttribute("data-index", currentIndex);
            }
        });

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


    })

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



