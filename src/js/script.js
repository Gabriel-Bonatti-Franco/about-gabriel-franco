function trocarTema(){

    if (botaoTema.classList == "lampada dia"){
        
        botaoTema.classList.remove("dia")
        botaoTema.classList.add("noite")

        paginaWeb.classList.remove("escura")
        paginaWeb.classList.add("clara")
                
    }else if (botaoTema.classList == "lampada noite"){
        
        botaoTema.classList.remove("noite")
        botaoTema.classList.add("dia")

        paginaWeb.classList.remove("clara")
        paginaWeb.classList.add("escura")
    }

}

function mudarMenuSuspenso(){
    
    if (menu.classList == "card indice"){
        
        abrirMenu()
                
    }else if (menu.classList == "card indice ativo"){
        
        fecharMenu()
        
    }
    
}

function abrirMenu() {
    menu.classList.add("ativo")
    botaoMenu.classList.add("ativo")
}

function fecharMenu() {
    menu.classList.remove("ativo")
    botaoMenu.classList.remove("ativo")
}

function escolherArtigo(opcao) {
    opcao.addEventListener('click', () => {

        let textoOpcao = opcao.innerText
        mudarArtigo(textoOpcao)
        titulo.innerText = textoOpcao

    })
}

function mudarArtigo(textoOpcao) {
    secoes.forEach((secao) => {

        if (secao.id == textoOpcao) {
            secao.classList.add('ativo')

        } else {
            secao.classList.remove('ativo')

        }

    })

    fecharMenu()
}

var botaoTema = document.querySelector('.lampada')
var paginaWeb = document.querySelector('.pagina')
var botaoMenu = document.querySelector('.botaoIndice')

var menu = document.querySelector('.indice')

var secoes = document.querySelectorAll('.artigos')
var opcoesMenu = document.querySelectorAll('.opcaoMenu')
var titulo = document.querySelector('#tituloArtigo')
var PrimeiroArtigo = "Experiência"

// Experiência - Projetos - Objetivos - Contatos

botaoTema.addEventListener('click', trocarTema)
botaoMenu.addEventListener('click', mudarMenuSuspenso)

opcoesMenu.forEach((opcao) => escolherArtigo(opcao));

secoes.forEach((secao) =>{

    if (secao.id == PrimeiroArtigo){
        mudarArtigo(PrimeiroArtigo)
        titulo.innerText = secao.id
    }

})