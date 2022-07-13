const btn = document.querySelector('#btnAdd')
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const link4 = document.querySelector('#link4')

const links = [link1 , link2 , link3 , link4]
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
    secao.classList.remove('esconder')
}