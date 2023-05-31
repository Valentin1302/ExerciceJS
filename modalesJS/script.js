// On sélectionne notre élément 
const btn = document.querySelector("button");


btn.addEventListener("click", () =>{
    let voile = document.createElement('div');
    let modal = document.createElement('div');
    voile.id = "voile";
    modal.id = "modal";
    let secondTitle = document.createElement('h2');
    secondTitle.textContent = "Modale Unique";
    let thirdTitle = document.createElement('h3');
    thirdTitle.textContent = "Utilisation modale";
    let parag = document.createElement('p');
    parag.textContent = "Paragraphe sur le modale.....";
    document.body.appendChild(voile);
    voile.appendChild(modal);
    modal.append(secondTitle, thirdTitle, parag);
})