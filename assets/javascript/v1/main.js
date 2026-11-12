// MAIN - Entry point for the application, reset game, import event listeners


// IMPORT FUNCTIONS
    import { resetState } from "./state.js";
    import { resetUI } from "./ui.js";
    import { removeEventListeners } from './controllers.js';
    import { changeState } from "./state.js";
    import { addEventListeners } from './controllers.js';

//  FUNCTIONS

// Reset game
    resetState();  
    resetUI();
    removeEventListeners();


// Change state
    changeState("activePlay");


// Initialise controllers
    addEventListeners();

    