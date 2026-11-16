// FLOW - The controller. The controller listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.  It listens for user actions, passes those actions through logic.js or state.js, and tells ui.js when to update.


// IMPORT VARIABLES & FUNCTIONS
    import { state } from './state.js'; // object
    import { initialiseGrids } from './state.js'; // function
    import { initialiseFleet } from './state.js'; // function
    import { changeState } from './state.js'; // function
    import { shipPlacementData } from './ui.js'; // object
    import { whatIsTheNextShip } from './logic.js'; // function
    import { calculateSegmentLocations } from './logic.js';

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

    export function placeEachShip(ship){

        showShipInputsInTheConsole(ship);
        // calculateSegmentLocations(ship)
        enableNextShipInputs(ship);    
    }

    function showShipInputsInTheConsole(shipName){
        console.log((shipName + " X coord: " + shipPlacementData[shipName].x.value));
        console.log((shipName + " Y coord: " + shipPlacementData[shipName].y.value));
        console.log((shipName + " Orientation: " + shipPlacementData[shipName].orientation.value));
        if(shipName == "patrolBoat"){}
        else{
            console.log(`The next ship to be placed is the ${whatIsTheNextShip(shipName)}`);
        }
    }

    

    function enableNextShipInputs(shipName)
    {
        let nextShip = whatIsTheNextShip(shipName);

        if(nextShip == ""){}
        else{

            let inputs = document.querySelectorAll(`.${nextShip}`);

            inputs.forEach(input => {
                input.classList.remove("disabled");
            });
        }
    }
