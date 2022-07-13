const btn = document.querySelector('#btnAdd')
const titulo = document.querySelector('h3')
const secao = document.querySelector('.anotado')

// =========================================Links=========================================
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')
const link4 = document.querySelector('#link4')
 
const linksId = [link1 , link2 , link3, link4]
const listaLinks = document.querySelector('.lista')

// =========================================Criando Anotação =========================================
const listaAnotacoes = [] 
let id = 0
const tituloNota = document.querySelector('#titulo')
const nota = document.querySelector('#anotacao')

btn.addEventListener('click', addNovaNota)
const formulario = document.querySelector('.formulario')
function addNovaNota(){
    
    formulario.classList.remove('esconder')

    const salvar = document.querySelector('#salvar')
    salvar.addEventListener('click' , salvarNota)

}

function salvarNota (){
    formulario.classList.add('esconder')
    const titulo = tituloNota.value 
    const anotacao = nota.value 

    const novaNota = {
        id: id,
        nome: titulo,
        nota: anotacao
    }

    id++
    listaAnotacoes.push(novaNota)

    redenrizarLayout()
}

function redenrizarLayout(){
    secao.innerHTML = ''

    if (listaAnotacoes.length == 0){
        secao.innerHTML = '<div><p>Não há anotações nesta pasta</p></div>'
    } else {
        for(i = 0 ; i < listaAnotacoes.length; i++){
            criarTemplate(listaAnotacoes[i])
        }
    }
}
redenrizarLayout()
// =========================================Criando template=========================================
function criarTemplate (anotacao){
    const template = document.createElement('div')
    template.classList.add('formulario__info')
    const div = document.createElement('div')
    const input = document.createElement('input')
    const btn = document.createElement('button')
    const text = document.createElement('textarea')
   
    btn.innerText = 'X'
    btn.id = "remover"
    //btn.addEventListener('click' , removerNota)

    template.dataset.id = anotacao.id
    input.value = anotacao.nome
    text.innerText = anotacao.nota


    div.append(input , btn)
    template.append(div , text)
   
    secao.appendChild(template)
    console.log(secao)
}
// =========================================Abrindo Pasta=========================================
listaLinks.addEventListener('click' , abrirPasta)

function abrirPasta(event){
    const link = event.target

    if (link.tagName == "LI"){
        const idLink = link.id

        const linkEscolhido = linksId.find(
            (link) => link.id == idLink
           )
           console.log(linkEscolhido)
           titulo.innerText = linkEscolhido.innerText
    }

    
    
}