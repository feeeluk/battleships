// CONTROLLERS - 

// IMPORT FUNCTIONS
    import { startGame } from "./flow.js";

// VARIABLES
    const initialisationStartGameButton = document.getElementById("initialisationStartGameButton");
    
    const setupCarrierName = document.getElementById("setup_shipName_setup_shipName_carrier_name");
    const setupCarrierXCoordinate = document.getElementById("setup_carrier_x");
    const setupCarrierYCoordinate = document.getElementById("setup_carrier_y");
    const setupCarrierOrientation = document.getElementById("setup_carrier_orientation");
    const setupCarrierEdit = document.getElementById("setup_carrier_edit");
    const setupCarrierPlace = document.getElementById("setup_carrier_place");
    
    const setupBattleshipName = document.getElementById("setup_shipName_battleship_name");
    const setupBattleshipXCoordinate = document.getElementById("setup_battleship_x");
    const setupBattleshipYCoordinate = document.getElementById("setup_battleship_y");
    const setupBattleshipOrientation = document.getElementById("setup_battleship_orientation");
    const setupBattleshipEdit = document.getElementById("setup_battleship_edit");
    const setupBattleshipPlace = document.getElementById("setup_battleship_place");
    
    const setupDestroyerName = document.getElementById("setup_shipName_destroyer_name");
    const setupDestroyerXCoordinate = document.getElementById("setup_destroyer_x");
    const setupDestroyerYCoordinate = document.getElementById("setup_destroyer_y");
    const setupDestroyerOrientation = document.getElementById("setup_destroyer_orientation");
    const setupDestroyerEdit = document.getElementById("setup_destroyer_edit");
    const setupDestroyerPlace = document.getElementById("setup_destroyer_place");
   
    const setupCruiserName = document.getElementById("setup_shipName_cruiser_name");
    const setupCruiserXCoordinate = document.getElementById("setup_cruiser_x");
    const setupCruiserYCoordinate = document.getElementById("setup_cruiser_y");
    const setupCruiserOrientation = document.getElementById("setup_cruiser_orientation");
    const setupCruiserEdit = document.getElementById("setup_cruiser_edit");
    const setupCruiserPlace = document.getElementById("setup_cruiser_place");
    
    const setupPatrolBoatName = document.getElementById("setup_shipName_patrolBoat_name");
    const setupPatrolBoatXCoordinate = document.getElementById("setup_patrolBoat_x");
    const setupPatrolBoatYCoordinate = document.getElementById("setup_patrolBoat_y");
    const setupPatrolBoatOrientation = document.getElementById("setup_patrolBoat_orientation");
    const setupPatrolBoatEdit = document.getElementById("setup_patrolBoat_edit");
    const setupPatrolBoatPlace = document.getElementById("setup_patrolBoat_place");

// FUNCTIONS

    // ADD
    export function addEventListeners(){
        initialisationStartGameButton.addEventListener('click', startGame);
        
        setupCarrierXCoordinate.addEventListener('change', () => {
            console.log(`X coord: ${setupCarrierXCoordinate.value}`);
        }); // temporary? don't need event listeners for every input, just need a single event listener that checks if all the entries are valid
    }

    // REMOVE
    export function removeEventListeners(){
        initialisationStartGameButton.removeEventListener("click", startGame);
    }

