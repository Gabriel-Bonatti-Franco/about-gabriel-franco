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

function mudarMenuSuspenso(){
    
    if (menu.classList == "card indice"){
        
        abrirMenu();
                
    }else if (menu.classList == "card indice ativo"){
        
        fecharMenu();
        
    }
    
}

function abrirMenu() {
    menu.classList.add("ativo");
    botaoMenu.classList.add("ativo");
}

function fecharMenu() {
    menu.classList.remove("ativo");
    botaoMenu.classList.remove("ativo");
}

function escolherArtigo(opcao) {
    opcao.addEventListener('click', () => {

        let textoOpcao = opcao.innerText;
        mudarArtigo(textoOpcao);
        titulo.innerText = textoOpcao;

    })
}

function mudarArtigo(Opcao) {
    secoes.forEach((secao) => {

        if (secao.id == Opcao) {
            secao.classList.add('ativo');
        } else{
            secao.classList.remove('ativo');
        }

    })

    fecharMenu();
}

function inicializar() {

    secoes.forEach((secao) => {
    
        if (secao.id == PrimeiroArtigo) {
            mudarArtigo(PrimeiroArtigo);
            titulo.innerText = secao.id;
        }
    
    });
}

const PrimeiroArtigo = "Projetos";
// Experiência - Projetos - Objetivos - Contatos

window.addEventListener('load', inicializar);

const botaoTema = document.querySelector('.lampada');
const paginaWeb = document.querySelector('.pagina');
const botaoMenu = document.querySelector('.botaoIndice');

const menu = document.querySelector('.indice');

const secoes = document.querySelectorAll('.artigos');
const opcoesMenu = document.querySelectorAll('.opcaoMenu');
const titulo = document.querySelector('#tituloArtigo');

botaoTema.addEventListener('click', trocarTema);
botaoMenu.addEventListener('click', mudarMenuSuspenso);

opcoesMenu.forEach((opcao) => escolherArtigo(opcao));

const setas = document.querySelectorAll('.projetos i');

const primeiroProjeto = document.querySelectorAll('.projeto')[0];

let larguraProjeto = primeiroProjeto.clientWidth;

setas.forEach((seta) => {

    seta.addEventListener('click', () => {
        console.log(primeiroProjeto);
        console.log(larguraProjeto);
    });

});




