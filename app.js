const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section"); 

const animateProgressBar =() => {
    let scrollDistance = -section.getBoundingClientRect().top; 
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))*100; 
    //Au dessus on a la ProgressWidth qui récupére la hauteur qui est scrollée. Le PB c'est que cette hauteur est prise en compte
    //qu'a partir du haut de ce que vois l'utilisateur final, et ce qu'on veux c'est ajouter la auteur de l'écran en plus de la hauteur scrollée a partir
    //du haut de la page. On transforme en suite en pourcentage.
    let value = Math.floor (progressWidth); //arrondie les valeurs console log, c'est plus jolie.
    progressBar.style.width = value + "%"

    if(value < 0) {
        progressBar.style.width = "0%"
    }
    //Si on remonte d'un coup l'article, la progress bar ne reviens pas à 0, la fonction au dessus fixe le problème. 

}

window.addEventListener("scroll", animateProgressBar); 