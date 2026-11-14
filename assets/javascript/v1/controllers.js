// CONTROLLERS - 

// IMPORT FUNCTIONS
    import { startGame } from "./flow.js";

// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");
    // const setupCarrierName = document.getElementById("carrier_name");
    const setupCarrierXCoordinate = document.getElementById("carrier_x");
    const setupCarrierYCoordinate = document.getElementById("carrier_y");
    const setupCarrierOrientation = document.getElementById("carrier_orientation");
    const setupCarrierButton = document.getElementById("carrier_action");

// FUNCTIONS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener('click', startGame);
        
        setupCarrierXCoordinate.addEventListener('change', () => {
            console.log(`X coord: ${setupCarrierXCoordinate.value}`);
        });
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);
    }

