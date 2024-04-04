'use strict'

const switcher = document.querySelector('.btn');  /* 'document.querySelector' para obter a referência do botão */

switcher.addEventListener('click', function() { /* Adicionando o ouvinte e o manipulador do evento 'click' */
    document.body.classList.toggle('dark-theme')

    var className = document.body.className; /* Adicionando uma instrução 'if' para verificar 
                                                o tema atual e atualizar o rótulo do  botão*/                                         
    if(className == "light-theme"){
        this.textContent = "Escuro";
    }
    else{
        this.textContent = "Claro";
    }

    console.log('current class name: ' + className);
});