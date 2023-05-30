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

    let link = document.querySelector('link')
    let burgerMenu = document.querySelector('burger')
    let list = document.querySelector('ul')

    link.addEventListener("click", (evt)=>{
     evt.preventDefault()

     burgerMenu.classList.toggle("open");
     list.classList.toggle("open")
    })