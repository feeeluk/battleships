// CONTROLLERS - 

// IMPORT FUNCTIONS
    import { startGame } from "./flow.js";

// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");

// FUNCTIONS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener("click", startGame);
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);
    }

