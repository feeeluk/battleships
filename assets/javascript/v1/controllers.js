// CONTROLLERS - 


// IMPORT VARIABLES & FUNCTIONS 
    import { startGame } from "./flow.js";
    import { shipPlacementData } from "./ui.js";
    import { enablePlaceButtonForEachShip } from "./ui.js";
    import { placeEachShip } from "./flow.js";


// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");
    
    // assign functions to variables - ship placement dropdown menus 
    const checkCarrierInputs = () => {
        enablePlaceButtonForEachShip("carrier");
    };

    const checkBattleshipInputs = () => {
        enablePlaceButtonForEachShip("battleship");
    };

    const checkDestroyerInputs = () => {
        enablePlaceButtonForEachShip("destroyer");
    };

    const checkCruiserInputs = () => {
        enablePlaceButtonForEachShip("cruiser");
    };

    const checkPatrolBoatInputs = () => {
        enablePlaceButtonForEachShip("patrolBoat");
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
        placeEachShip("cruiser");
    };

    const placePatrolBoat = () => {
        placeEachShip("patrolBoat");
    };


// EVENT LISTENERS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener('click', startGame);
        
        shipPlacementData.carrier.x.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.placeButton.addEventListener("click", placeCarrier);

        shipPlacementData.battleship.x.addEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.y.addEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.orientation.addEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.placeButton.addEventListener("click", placeBattleship);

        shipPlacementData.destroyer.x.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.y.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.orientation.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.placeButton.addEventListener("click", placeDestroyer);

        shipPlacementData.cruiser.x.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.y.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.orientation.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.placeButton.addEventListener("click", placeCruiser);

        shipPlacementData.patrolBoat.x.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.y.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.orientation.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.placeButton.addEventListener("click", placePatrolBoat);
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);

        shipPlacementData.carrier.x.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.placeButton.removeEventListener("click", placeCarrier);

        shipPlacementData.battleship.x.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.y.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.orientation.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.placeButton.removeEventListener("click", placeBattleship);

        shipPlacementData.destroyer.x.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.y.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.orientation.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.placeButton.removeEventListener("click", placeDestroyer);

        shipPlacementData.cruiser.x.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.y.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.orientation.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.placeButton.removeEventListener("click", placeCruiser);

        shipPlacementData.patrolBoat.x.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.y.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.orientation.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.placeButton.removeEventListener("click", placePatrolBoat);
    }

