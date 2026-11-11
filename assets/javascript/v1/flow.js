// FLOW - The controller. The controller listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.  It listens for user actions, passes those actions through logic.js or state.js, and tells ui.js when to update.


// IMPORT VARIABLES
    import { state } from './state.js';

// IMPORT FUNCTIONS
    import { initialiseGrids } from './state.js';
    import { initialiseFleet } from './state.js';
    import { changeState } from './state.js';

// INITIALISATION

    export function startGame(){

        console.log("start game button pressed");
        
        console.log("initialise grids");
        initialiseGrids();

        console.log("initialise fleet");
        initialiseFleet();

        changeState("setup");

        console.log(`current turn: ${state.currentTurn}`)
    }