const btn = document.querySelector('#btnAdd')
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

let listaAnotacoes = [] 
const tituloNota = document.querySelector('#titulo')
const nota = document.querySelector('#anotacao')

function salvarNota (){
    
    formulario.classList.add('esconder')
    const titulo = tituloNota.value 
    const anotacao = nota.value 

    if (anotacao == "") {
       alert('Campo de anotação incompleto')
       
    } else {
        const novaNota = {
            id: new Date().getTime(),
            nome: titulo,
            nota: anotacao 
        }
    
        listaAnotacoes.push(novaNota)
    
        redenrizarLayout()
    
        tituloNota.value = ""
        nota.value = ""
//====Armazenando na chave local, tbm atribuindo o ARRAY no formato String========
        localStorage.listChave = JSON.stringify(listaAnotacoes)
    
    }

}

if(localStorage.listChave){
//==============Recuperando o ARRAY que já esta salvo========
    listaAnotacoes = JSON.parse(localStorage.getItem('listChave'))
    redenrizarLayout()
}
// =========================================CONSTRUINDO LAYOUT=========================================

function redenrizarLayout(){
    secao.innerHTML = ''

    if (listaAnotacoes.length == 0){
        secao.innerHTML = '<p>Ainda não há anotações de estudo</p>'
    } else {
        for(i = 0 ; i < listaAnotacoes.length; i++){
            criarTemplate(listaAnotacoes[i])
        }
    }
}
// =========================================CRIANDO TEMPLATE=========================================
function criarTemplate (anotacao){
    const template = document.createElement('li')
    template.classList.add('formulario__info')
    template.setAttribute("ondblclick" , "ampliarNota(event)")

    const div = document.createElement('div')
    const input = document.createElement('input')
    input.setAttribute('disabled' , 'true')
    const btn = document.createElement('button')

    const text = document.createElement('textarea')
    text.setAttribute("rows" , "8")
    text.setAttribute('disabled' , "true");
    

   
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
    const notaClicada = btnClicado.closest('li')
    const idNotaClick = notaClicada.dataset.id

    const notaRemovida = listaAnotacoes.find((novaNota) => novaNota.id == idNotaClick)
    const posicaoRemovida = listaAnotacoes.indexOf(notaRemovida)

    listaAnotacoes.splice(posicaoRemovida, 1)

    redenrizarLayout()
    salvarLocal()
}

function salvarLocal (){
    localStorage.setItem('listChave' , JSON.stringify(listaAnotacoes))
    
}

// =========================================AMPLIANDO=========================================

function ampliarNota(event){
    const textClicado = event.target
    const notaClicada = textClicado.closest('li')
    const textArea = notaClicada.querySelector('textarea')
    
    textArea.setAttribute("rows" , "10")
    textArea.setAttribute("cols" , "40")
    
    notaClicada.classList.add('formulario')
    notaClicada.setAttribute("ondblclick" , "location.reload()")
    
}
