function trocarTema(){

    if (botaoTema.classList == "lampada dia"){
        
        botaoTema.classList.remove("dia");
        botaoTema.classList.add("noite");

        paginaWeb.classList.remove("escura");
        paginaWeb.classList.add("clara");
                
    }else if (botaoTema.classList == "lampada noite"){
        
        botaoTema.classList.remove("noite");
        botaoTema.classList.add("dia");

        paginaWeb.classList.remove("clara");
        paginaWeb.classList.add("escura");
    }

}

const botaoTema = document.querySelector('.lampada');
const paginaWeb = document.querySelector('.pagina');


botaoTema.addEventListener('click', trocarTema);