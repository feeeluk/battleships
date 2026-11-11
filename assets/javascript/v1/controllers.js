// CONTROLLERS - 

// IMPORT FUNCTIONS
    import { startGame } from "./flow.js";

// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");

// FUNCTIONS

    // initialisation
    
    export function initialiseControllers(){
        initialisationStartGameButton.addEventListener("click", startGame);
    }

    // setup


    // activePlay


    // gameOver