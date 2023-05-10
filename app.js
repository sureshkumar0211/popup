let btn=document.querySelector(".button");
let pop=document.querySelector(".popup");
let close=document.querySelector(".button-close");
btn.addEventListener('click',() =>{
   pop.classList.add("show");
})


close.addEventListener('click',()=>{
    pop.classList.remove("show");
})