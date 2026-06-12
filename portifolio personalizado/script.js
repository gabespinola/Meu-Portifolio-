const btnAbrir   = document.querySelector('.btn-abrir-menu');
const btnFechar  = document.querySelector('.btn-fechar');
const menuMobile = document.querySelector('.menu-mobile');
const overlay    = document.querySelector('.menu-overlay');

function abrirMenu() {
    menuMobile.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharMenu() {
    menuMobile.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});