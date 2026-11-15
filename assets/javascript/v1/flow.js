// FLOW - The controller. The controller listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.  It listens for user actions, passes those actions through logic.js or state.js, and tells ui.js when to update.


// IMPORT VARIABLES & FUNCTIONS
    import { state } from './state.js'; // object
    import { initialiseGrids } from './state.js'; // function
    import { initialiseFleet } from './state.js'; // function
    import { changeState } from './state.js'; // function
    import { shipPlacementData } from './ui.js'; // object

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

// SETUP

    // show 'edit' placement button

    // actions when 'place' ship is clicked
    export function placeEachShip(ship){

        console.log(`${ship} X coord: ${shipPlacementData.carrier.x.value}`);
        console.log(`${ship} Y coord: ${shipPlacementData.carrier.y.value}`);
        console.log(`${ship} Orientation: ${shipPlacementData.carrier.orientation.value}`);
    }

    // actions when 'edit' placed ship is clicked
    export function editPlacedShip(ship){}