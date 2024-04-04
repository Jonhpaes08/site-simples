'use strict'

const switcher = document.querySelector('.btn'); /* 'document.querySelector' para obter a referência do botão */

switcher.addEventListener('click', function() { /* Adicionando o ouvinte e o manipulador do evento 'click' */
    document.body.classList,toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "light";
    }

});

