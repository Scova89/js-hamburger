const elemento = document.querySelector(".fa-bars");
const hmenu = document.querySelector(".hamburger-menu");
const chiudi = document.querySelector(".fa-times");

console.log(elemento)

elemento.addEventListener('click', apriMenu);

function apriMenu(){
    hmenu.classList.add('active');
}

chiudi.addEventListener('click', chiudiMenu);

function chiudiMenu(){
    hmenu.classList.remove('active');
}