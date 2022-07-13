const btn = document.querySelector('#btnAdd')
const link = document.querySelector('.link1')
link.addEventListener('click' , abrirPasta)
btn.addEventListener('click', addNovaNota)

function addNovaNota(){
    const formulario = document.querySelector('.formulario')
    formulario.classList.remove('esconder')
}

function abrirPasta(){
    const secao = document.querySelector('.anotado')
    let titulo = document.querySelector('h3')
    titulo.innerText = 'Módulo 1 - Princípios de Desenvolvimento de Software'
    secao.classList.remove('anotado')
}