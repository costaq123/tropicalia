// Script para scroll suave ao clicar nos links do menu
document.querySelectorAll('.cabecalho__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu fixo após rolar a página
window.onscroll = function() {fixarMenu()};

var menu = document.querySelector('.cabecalho');
var sticky = menu.offsetTop;

function fixarMenu() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("cabecalho--fixo");
  } else {
    menu.classList.remove("cabecalho--fixo");
  }
}

// Alternando o menu hambúrguer no mobile
const menuHamburguer = document.querySelector('.cabecalho__hamburguer');
const menuMobile = document.querySelector('.cabecalho__lista');

menuHamburguer.addEventListener('click', () => {
  menuMobile.classList.toggle('cabecalho__lista--ativo');
});
