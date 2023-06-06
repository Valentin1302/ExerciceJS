
let parag = document.querySelectorAll("p");

parag.forEach(clickParag =>{
clickParag.addEventListener("click", ()=>{
    clickParag.textContent = clickParag.getAttribute("data-txt");
    console.log(clickParag)
})
})