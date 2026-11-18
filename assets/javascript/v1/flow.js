// FLOW - The controller. The controller listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.  It listens for user actions, passes those actions through logic.js or state.js, and tells ui.js when to update.


// IMPORT VARIABLES & FUNCTIONS
    import { state } from './state.js'; // object
    import { initialiseGrids } from './state.js'; // function
    import { initialiseFleet } from './state.js'; // function
    import { changeState } from './state.js'; // function
    import { calculatePlacedShipSegmentCoordinates } from './logic.js'; // function
    import { disablePlaceShipInputsForCurrentShip } from './ui.js'; // function
    import { enableEditPlacedShipButtonForCurrentShip } from './ui.js'; // function
    import { showTheNextShipInTheConsole } from './ui.js'; // function
    import { showPlacedShipInputValuesInTheConsole } from './ui.js'; // function
    import { enablePlaceShipInputsForNextShip } from './ui.js'; //function


// INITIALISATION

    export function startGame(){

        console.log("start game button pressed"); // testing purposes only
        
        console.log("initialise grids"); // testing purposes only
        initialiseGrids();

        console.log("initialise fleet"); // testing purposes only
        initialiseFleet();

        changeState("setup");
        console.log(`current state: ${state.layer}`) // testing purposes only

        console.log(`current turn: ${state.currentTurn}`) // testing purposes only
    }

// SETUP

    export function placeShip(ship){

        showPlacedShipInputValuesInTheConsole(ship);
        calculatePlacedShipSegmentCoordinates(ship);
        showTheNextShipInTheConsole(ship);
        disablePlaceShipInputsForCurrentShip(ship);
        enableEditPlacedShipButtonForCurrentShip(ship);
        enablePlaceShipInputsForNextShip(ship);    
    }

    export function editShip(ship){
        console.log(`test - edit ${ship}`);
        //enablePlaceShipInputsForCurrentShip(ship);
        //disablePlaceShipInputsForNextShip(ship);
    }