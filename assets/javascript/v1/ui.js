// USER INTERFACES - The view. The sole owner of the DOM and the 4 CSS screen layers. The only file allowed to query the DOM. It controls showing and hiding the CSS layers and rendering text to the screen. It takes data passed to it and displays it.

// RESET

    export function resetUI(){
        console.clear();
    }

// IMPORT VARIABLES & FUNCTIONS

    import { whatIsTheNextShip } from "./logic.js"; // function

// GAME WIDE

    export function showLayer(layerName) {
        console.log(`UI layer => ${layerName}`);

        // Get all elements with the class 'layer' and hide them
        const layers = document.querySelectorAll('.layer');
        layers.forEach(layer => {
            layer.style.visibility = "hidden";
        });

        // Find the specific target layer and make it visible
        const targetLayer = document.getElementById(layerName);
        if (targetLayer) {
            targetLayer.style.visibility = "visible";
        } else {
            console.error(`Layer with ID "${layerName}" not found!`);
        }
    }

// INITIALISATION

// SETUP

    // create variables for each input element
    export const shipPlacementData = {
        carrier:{
            name: document.getElementById("setup_shipName_carrier_name"),
            x: document.getElementById("setup_carrier_x"),
            y: document.getElementById("setup_carrier_y"),
            orientation: document.getElementById("setup_carrier_orientation"),
            editButton: document.getElementById("setup_carrier_edit"),
            placeButton: document.getElementById("setup_carrier_place"),
            length: 5,
            segments: [],
        },

        battleship:{
            name: document.getElementById("setup_shipName_battleship_name"),
            x: document.getElementById("setup_battleship_x"),
            y: document.getElementById("setup_battleship_y"),
            orientation: document.getElementById("setup_battleship_orientation"),
            editButton: document.getElementById("setup_battleship_edit"),
            placeButton: document.getElementById("setup_battleship_place"),
            length: 4,
            segments: [],
        },

        destroyer:{
            name: document.getElementById("setup_shipName_destroyer_name"),
            x: document.getElementById("setup_destroyer_x"),
            y: document.getElementById("setup_destroyer_y"),
            orientation: document.getElementById("setup_destroyer_orientation"),
            editButton: document.getElementById("setup_destroyer_edit"),
            placeButton: document.getElementById("setup_destroyer_place"),
            length: 3,
            segments: [],
        },

        cruiser:{
            name: document.getElementById("setup_shipName_cruiser_name"),
            x: document.getElementById("setup_cruiser_x"),
            y: document.getElementById("setup_cruiser_y"),
            orientation: document.getElementById("setup_cruiser_orientation"),
            editButton: document.getElementById("setup_cruiser_edit"),
            placeButton: document.getElementById("setup_cruiser_place"),
            length: 3,
            segments: [],
        },

        patrolBoat:{
            name: document.getElementById("setup_shipName_patrolBoat_name"),
            x: document.getElementById("setup_patrolBoat_x"),
            y: document.getElementById("setup_patrolBoat_y"),
            orientation: document.getElementById("setup_patrolBoat_orientation"),
            editButton: document.getElementById("setup_patrolBoat_edit"),
            placeButton: document.getElementById("setup_patrolBoat_place"),
            length: 2,
            segments: [],
        },
    }

    export function enableEditButton(ship) {
        shipPlacementData[ship].editButton.classList.remove("disabled");
    }

    export function disableEditButton(ship) {
        shipPlacementData[ship].editButton.classList.add("disabled");
    }

    export function enablePlaceButton(ship) {

        disableEditButton(ship);
        const controls = shipPlacementData[ship];

        if (
            controls.x.value !== "" &&
            controls.y.value !== "" &&
            controls.orientation.value !== ""
        )
        {
            controls.placeButton.classList.remove("disabled");
        }
    }

    export function enablePlaceShipInputsForCurrentShip(ship){
        let inputs = document.querySelectorAll(`.${ship}`);

            inputs.forEach(input => {
                input.classList.remove("disabled");
            });
    }

    export function disablePlaceShipInputsForCurrentShip(ship) {
        let inputs =document.querySelectorAll(`.${ship}`);
        inputs.forEach(input => {
            input.classList.add("disabled");
        });
        shipPlacementData[ship].placeButton.classList.add("disabled");
    }

    export function enablePlaceShipInputsForNextShip(ship)
    {
        let nextShip = whatIsTheNextShip(ship);

        if(nextShip == ""){}
        else{

            let inputs = document.querySelectorAll(`.${nextShip}`);

            inputs.forEach(input => {
                input.classList.remove("disabled");
            });
        }
    }

    export function disablePlaceShipInputsForNextShip(ship){
        let nextShip = whatIsTheNextShip(ship);

        if(nextShip == ""){}
        else{

            let inputs = document.querySelectorAll(`.${nextShip}`);

            inputs.forEach(input => {
                input.classList.add("disabled");
            });
        }
    }

    export function showPlacedShipInputValuesInTheConsole(ship){
        console.log(`${ship} - Place ship at: (X:${shipPlacementData[ship].x.value}, Y:${shipPlacementData[ship].y.value})`);
        console.log(`${ship} - Orientation: "${shipPlacementData[ship].orientation.value}"`);
    }

    export function showTheNextShipInTheConsole(ship){
        if(ship == "patrolBoat"){}
        else{
            console.log(`The next ship to be placed is the ${whatIsTheNextShip(ship)}`);
        }
    }


// ACTIVEPLAY

// EVALUATERESULT

// GAMEOVER