document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .8s ease";

observer.observe(card);

});

const button=document.querySelector(".button");

if(button){

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 25px gold";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

}

});