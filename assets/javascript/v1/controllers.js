// CONTROLLERS - 


// IMPORT VARIABLES & FUNCTIONS 
    import { startGame } from "./flow.js";
    import { shipPlacementData } from "./ui.js";
    import { enablePlaceButton } from "./ui.js";
    import { placeShip } from "./flow.js";
    import { editShip } from "./flow.js";


// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");
    
    // assign functions to variables - ship placement dropdown menus 
    const checkCarrierInputs = () => {
        enablePlaceButton("carrier");
    };

    const checkBattleshipInputs = () => {
        enablePlaceButton("battleship");
    };

    const checkDestroyerInputs = () => {
        enablePlaceButton("destroyer");
    };

    const checkCruiserInputs = () => {
        enablePlaceButton("cruiser");
    };

    const checkPatrolBoatInputs = () => {
        enablePlaceButton("patrolBoat");
    };

    // assign function to variables - place Ship
    const placeCarrier = () => {
        placeShip("carrier");
    };

    const placeBattleship = () => {
        placeShip("battleship");
    };

    const placeDestroyer = () => {
        placeShip("destroyer");
    };

    const placeCruiser = () => {
        placeShip("cruiser");
    };

    const placePatrolBoat = () => {
        placeShip("patrolBoat");
    };

    // assign function to variables - edit Ship
    const editCarrier = () => {
        editShip("carrier");
    };

    const editBattleship = () => {
        editShip("battleship");
    };

    const editDestroyer = () => {
        editShip("destroyer");
    };

    const editCruiser = () => {
        editShip("cruiser");
    };

    const editPatrolBoat = () => {
        editShip("patrolBoat");
    };


// EVENT LISTENERS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener('click', startGame);
        
        shipPlacementData.carrier.x.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.addEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.editButton.addEventListener("click", editCarrier);
        shipPlacementData.carrier.placeButton.addEventListener("click", placeCarrier);

        shipPlacementData.battleship.x.addEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.y.addEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.orientation.addEventListener("change", checkBattleshipInputs)
        shipPlacementData.battleship.editButton.addEventListener("click", editBattleship);
        shipPlacementData.battleship.placeButton.addEventListener("click", placeBattleship);

        shipPlacementData.destroyer.x.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.y.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.orientation.addEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.editButton.addEventListener("click", editDestroyer);
        shipPlacementData.destroyer.placeButton.addEventListener("click", placeDestroyer);

        shipPlacementData.cruiser.x.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.y.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.orientation.addEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.editButton.addEventListener("click", editCruiser);
        shipPlacementData.cruiser.placeButton.addEventListener("click", placeCruiser);

        shipPlacementData.patrolBoat.x.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.y.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.orientation.addEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.editButton.addEventListener("click", editPatrolBoat);
        shipPlacementData.patrolBoat.placeButton.addEventListener("click", placePatrolBoat);
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);

        shipPlacementData.carrier.x.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.y.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.orientation.removeEventListener("change", checkCarrierInputs);
        shipPlacementData.carrier.editButton.removeEventListener("click", editCarrier);
        shipPlacementData.carrier.placeButton.removeEventListener("click", placeCarrier);

        shipPlacementData.battleship.x.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.y.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.orientation.removeEventListener("change", checkBattleshipInputs);
        shipPlacementData.battleship.editButton.removeEventListener("click", editBattleship);
        shipPlacementData.battleship.placeButton.removeEventListener("click", placeBattleship);

        shipPlacementData.destroyer.x.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.y.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.orientation.removeEventListener("change", checkDestroyerInputs);
        shipPlacementData.destroyer.editButton.removeEventListener("click", editDestroyer);
        shipPlacementData.destroyer.placeButton.removeEventListener("click", placeDestroyer);

        shipPlacementData.cruiser.x.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.y.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.orientation.removeEventListener("change", checkCruiserInputs);
        shipPlacementData.cruiser.editButton.removeEventListener("click", editCruiser);
        shipPlacementData.cruiser.placeButton.removeEventListener("click", placeCruiser);

        shipPlacementData.patrolBoat.x.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.y.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.orientation.removeEventListener("change", checkPatrolBoatInputs);
        shipPlacementData.patrolBoat.editButton.removeEventListener("click", editPatrolBoat);
        shipPlacementData.patrolBoat.placeButton.removeEventListener("click", placePatrolBoat);
    }

