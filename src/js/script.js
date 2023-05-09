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
        
        menu.classList.add("ativo")
        botaoMenu.classList.add("ativo")
                
    }else if (menu.classList == "card indice ativo"){
        
        menu.classList.remove("ativo")
        botaoMenu.classList.remove("ativo")
        
    }
    
}

var botaoTema = document.querySelector('.lampada')
var paginaWeb = document.querySelector('.pagina')
var botaoMenu = document.querySelector('.botaoIndice')

var menu = document.querySelector('.indice')

var secoes = document.querySelectorAll('section')
var opcoesMenu = document.querySelectorAll('.opcaoMenu')

botaoTema.addEventListener('click', trocarTema)
botaoMenu.addEventListener('click', mudarMenuSuspenso)
