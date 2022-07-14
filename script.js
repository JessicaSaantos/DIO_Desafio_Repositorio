const btn = document.querySelector('#btnAdd')
const titulo = document.querySelector('h3')
const secao = document.querySelector('.notas')
const formulario = document.querySelector('.formulario')

// =========================================INICIANDO ANOTAÇÃO=========================================

btn.addEventListener('click', addNovaNota)

function addNovaNota(){
    
    formulario.classList.remove('esconder')
    const salvar = document.querySelector('#salvar')
    salvar.addEventListener('click' , salvarNota)

}

function cancelar() {
    formulario.classList.add('esconder')
}

// =========================================SALVANDO INFORMAÇÕES=========================================

const tituloNota = document.querySelector('#titulo')
const nota = document.querySelector('#anotacao')
let id = 0
function salvarNota (){
    
    formulario.classList.add('esconder')
    const titulo = tituloNota.value 
    const anotacao = nota.value 

    if (anotacao == "") {
       alert('Campo de anotação incompleto')
       
    } else {
        const novaNota = {
            id: id,
            nome: titulo,
            nota: anotacao
        }
    
        id++
        listaAnotacoes.push(novaNota)
    
        redenrizarLayout()
    
        tituloNota.value = ""
        nota.value = ""
    
    }

    
}

// =========================================CONSTRUINDO LAYOUT=========================================

const listaAnotacoes = [] 
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
// =========================================CRIANDO TEMPLATE=========================================
function criarTemplate (anotacao){
    const template = document.createElement('section')
    template.classList.add('formulario__info')

    const div = document.createElement('div')
    const input = document.createElement('input')
    const btn = document.createElement('button')
    const text = document.createElement('textarea')
   
    btn.innerText = 'X'
    btn.id = "remover"
    btn.addEventListener('click' , removerNota)

    template.dataset.id = anotacao.id
    input.value = anotacao.nome
    text.innerText = anotacao.nota


    div.append(input , btn)
    template.append(div , text)
   
    secao.appendChild(template)
}

// =========================================REMOVENDO=========================================

function removerNota (event){
    const btnClicado = event.target
    const notaClicada = btnClicado.closest('section')
    const idNotaClick = notaClicada.dataset.id

    const notaRemovida = listaAnotacoes.find((novaNota) => novaNota.id == idNotaClick)
    const posicaoRemovida = listaAnotacoes.indexOf(notaRemovida)

    listaAnotacoes.splice(posicaoRemovida, 1)

    redenrizarLayout()
}


