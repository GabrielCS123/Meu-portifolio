const textoDia = document.querySelector('#texto-dia')
const hora = new Date().getHours()

if (hora >= 6 && hora < 12) {
    textoDia.innerHTML = 'Bom dia'
} if (hora >= 12 && hora < 18) {
    textoDia.innerHTML = 'Boa tarde'
} if (hora >= 18 && hora < 24 || hora >= 0 && hora < 6) {
    textoDia.innerHTML = 'Boa noite'
}

const botaoMenu = document.querySelector('.botao_menu')
const menuAberto = document.querySelector('.menu_aberto')
let aberto = false;


botaoMenu.onclick = function () {

    if (aberto) {
        menuAberto.classList.remove('menu_aberto_ativado')
        aberto = false
    }
    else {
        menuAberto.classList.add('menu_aberto_ativado')
        aberto = true
    }
}