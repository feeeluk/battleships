// CONTROLLERS - 


// IMPORT VARIABLES & FUNCTIONS 
    import { startGame } from "./flow.js";
    import { shipPlacementData } from "./ui.js";
    import { showPlaceButtonForEachShip } from "./ui.js";
    import { placeEachShip } from "./flow.js";
    import { editPlacedShip } from "./flow.js";


// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");
    
    // assign functions to variables - ship placement dropdown menus 
    const checkCarrierInputs = () => {
        showPlaceButtonForEachShip("carrier");
    };

    const checkBattleshipInputs = () => {
        showPlaceButtonForEachShip("battleship");
    };

    const checkDestroyerInputs = () => {
        showPlaceButtonForEachShip("destroyer");
    };

    const checkCruiserInputs = () => {
        showPlaceButtonForEachShip("cruiser");
    };

    const checkPatrolBoatInputs = () => {
        showPlaceButtonForEachShip("patrolBoat");
    };

    // assign functions to variables - place ship button
    const placeCarrier = () => {
        placeEachShip("carrier");
    };

    const placeBattleship = () => {
        placeEachShip("battleship");
    };

    const placeDestroyer = () => {
        placeEachShip("destroyer");
    };

    const placeCruiser = () => {
        placeEachShip("cruiserr");
    };

    const placePatrolBoat = () => {
        placeEachShip("patrolBoat");
    };


// FUNCTIONS


// EVENT LISTENERS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener('click', startGame);
        
        shipPlacementData.carrier.x.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.placeButton.addEventListener("click", placeCarrier);
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);

        shipPlacementData.carrier.x.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.removeEventListener("change", checkCarrierInputs);
    }

