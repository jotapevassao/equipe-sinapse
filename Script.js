// =========================================
// BOTÃO DE CONTATO
// =========================================

const botaoContato = document.querySelector(".btn-cta");

// QUANDO CLICAR

botaoContato.addEventListener("click", function(event){

    // EVITA RECARREGAR A PÁGINA

    event.preventDefault();

    // ALERTA

    alert("Obrigado pelo interesse! Entraremos em contato em breve.");

});

// =========================================
// EFEITO NOS CARDS DA EQUIPE
// =========================================

const membros = document.querySelectorAll(".membro");

// PARA CADA MEMBRO

membros.forEach(function(membro){

    // ENTRAR COM MOUSE

    membro.addEventListener("mouseenter", function(){

        membro.style.transform = "scale(1.08)";

    });

    // SAIR COM MOUSE

    membro.addEventListener("mouseleave", function(){

        membro.style.transform = "scale(1)";

    });

});

// =========================================
// ANIMAÇÃO SCROLL HEADER
// =========================================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    // SE DESCER A PÁGINA

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    }else{

        header.style.boxShadow = "none";

    }

});