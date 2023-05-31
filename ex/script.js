let links = document.querySelectorAll("#sideBar a");

links.forEach( (link) =>{

    link.addEventListener("click", (evt)=>{
       
        evt.preventDefault();

        let target = link.getAttribute("href");

        let section = document.querySelector(target);

        section.scrollIntoView({behavior:"smooth"});
    })
})