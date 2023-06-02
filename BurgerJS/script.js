let burgerIcon = document.createElement("button");

let nav = document.querySelector("nav");
let list = document.querySelector("ul");
window.addEventListener("resize", () => {
    if (window.innerWidth < 1025) {
        if (!nav.contains(burgerIcon)) {
            nav.appendChild(burgerIcon);
            console.log(burgerIcon)
        } 
    }
    else {
        burgerIcon.remove();
    }
  
})

window.addEventListener("load", () =>{
   if(window.innerWidth <= 1025 && !nav.contains(burgerIcon)){
      nav.appendChild(burgerIcon)
   }
   else{
      burgerIcon.remove();
   }
})
burgerIcon.addEventListener("click", () => {
    list.classList.toggle("open");
    burgerIcon.classList.toggle("active");
    console.log(list)
})
