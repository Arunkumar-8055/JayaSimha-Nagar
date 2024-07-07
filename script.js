let container=document.querySelector(".container");
let menu_btn=document.querySelector(".open-menu-btn");
let close_btn=document.querySelector(".close-menu-btn");
let headers=document.querySelector(".container nav");
let nav=document.querySelector(".container .headers nav");

container.addEventListener("mouseover",()=>{
    container.style.filter="none"
},5000)

container.addEventListener("mouseleave",()=>{
    container.style.filter="grayscale(50%)";
    menu_btn.style.right="2rem";
    close_btn.style.right="2rem"
    h1.style.color="yellow"
},5000)


// nav bar
menu_btn.addEventListener("click",()=>{
    close_btn.style.display="inline-block";
    console.log("jai sri ram");
    menu_btn.style.display="none"
    headers.style.display="inline-block"
})
close_btn.addEventListener("click",()=>{
    close_btn.style.display="none";
    console.log("jai sri ram");
    menu_btn.style.display="inline-block"
     headers.style.display="none"
})