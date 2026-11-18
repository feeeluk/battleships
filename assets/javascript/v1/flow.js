// FLOW - The controller. The controller listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.  It listens for user actions, passes those actions through logic.js or state.js, and tells ui.js when to update.


// IMPORT

    import * as state from './state.js';
    import * as logic from './logic.js';
    import * as ui from './ui.js';


// INITIALISATION

    export function startGame(){

        console.log("start game button pressed"); // testing purposes only
        
        console.log("initialise grids"); // testing purposes only
        state.initialiseBothGridsForEachPlayer();

        console.log("initialise fleet"); // testing purposes only
        state.initialiseFleetForEachPlayer();

        state.changeGameState("setup");
    }

// SETUP

    export function placeShip(ship){

        ui.showPlacedShipInputValuesInTheConsole(ship);
        logic.calculatePlacedShipSegmentCoordinates(ship);
        ui.showTheNextShipInTheConsole(ship);
        ui.disablePlaceShipInputsForCurrentShip(ship);
        // ui.enableEditButton(ship);
        ui.enablePlaceShipInputsForNextShip(ship);    
    }

    export function editShip(ship){
        ui.enablePlaceShipInputsForCurrentShip(ship);
        ui.disablePlaceShipInputsForNextShip(ship);
        ui.disableEditButton(ship);
    }