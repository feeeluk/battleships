// USER INTERFACES - The view. The sole owner of the DOM and the 4 CSS screen layers. The only file allowed to query the DOM. It controls showing and hiding the CSS layers and rendering text to the screen. It takes data passed to it and displays it.

// RESET

    export function resetUI(){
        console.clear();
    }

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

    export function enablePlaceButtonForEachShip(ship) {

        disableEditButtonForEachShip(ship);
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

    export function disableInputsForEachShip(ship) {
        let inputs =document.querySelectorAll(`.${ship}`);
        inputs.forEach(input => {
            input.classList.add("disabled");
        });
        shipPlacementData[ship].placeButton.classList.add("disabled");

    }

    export function enableEditButtonForEachShip(ship) {
        shipPlacementData[ship].editButton.classList.remove("disabled");
    }

    export function disableEditButtonForEachShip(ship) {
        shipPlacementData[ship].editButton.classList.add("disabled");
    }