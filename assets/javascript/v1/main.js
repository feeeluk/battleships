// MAIN - Entry point for the application, reset game, import event listeners


// IMPORT FUNCTIONS
    import { resetState } from "./state.js";
    import { changeState } from "./state.js";
    import { initialiseControllers } from './controllers.js';


// Reset
    resetState();  
    // reset UI including clearing the console, removing eventlisteners,


// Change state
    changeState("initialisation");


// Initialise controllers
    initialiseControllers();