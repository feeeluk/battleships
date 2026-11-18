// MAIN - Entry point for the application, reset game, import event listeners


// IMPORT FUNCTIONS
    import { resetGameState } from "./state.js";
    import { resetUI } from "./ui.js";
    import { removeEventListeners } from './controllers.js';
    import { changeGameState } from "./state.js";
    import { addEventListeners } from './controllers.js';
    import { showGameStateDetails } from "./ui.js";

//  FUNCTIONS

// Reset game
    resetGameState();  
    resetUI();
    removeEventListeners();


// Change state
    changeGameState("initialisation");


// Initialise controllers
    addEventListeners();

    