    // On sélectionne la balise select
    let slct = document.querySelector("select");
    
    // On ajoute la fonction change
    slct.addEventListener("change", () => {
        let selectList = slct.value;
        
        console.log(selectList)
        
        // On souhaite selectionner toutes les sections
        let allSections = document.querySelectorAll("section");
        
        // On récupére toutes les sections avec une boucle
        allSections.forEach((section) =>{
            // Si la valeur des selection est egal au id 
            if(selectList === section.id){
                console.log("Afficher la section"+section.id);
                section.classList.add("visible")
                section.classList.remove("invisible")
            }
            else{
                // Si la valeur du select est tous 
                if(selectList === "all"){
                    section.classList.remove("invisible");
                    section.classList.add("visible")
                }else{
                    console.log("Masquer la section"+section.id)
                    section.classList.add("invisible")
                    section.classList.remove("visible")

                }
            }
        })
    })

    // gérer la redimensionnement de la feneter
    // gerer le chargement de la fenetre
    // Dans les deux cas, controler que la largeur est < 1025

    // Ajouter un élément HTML dans la section de navigation
    burgerIcon =  document.createElement('button')

    const navBar = document.querySelector("header nav");
    
    // Recupere l'element UL
    const onglets = document.querySelector("header nav ul")
    // Injecter dans la nav
    navBar.appendChild(burgerIcon);

    // Gestion du click sur le burgerIcon
    burgerIcon.addEventListener('click', ()=>{
        onglets.classList.toggle("active")
    });

    // Gérer le redimensionnement de la fenetre

    window.addEventListener("load", ()=>{
        if(window.innerWidth <1025){
            // injecte le burgerIcon
            navBar.appendChild(burgerIcon);
        }
        else{
            burgerIcon.remove();
        }
    })