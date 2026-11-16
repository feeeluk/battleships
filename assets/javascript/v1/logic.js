//  LOGIC - The brains, Handles pure math, score calculations, and rule validations (zero DOM, zero state mutation). It calculates outcomes (e.g., did the player win?, what is the score?).

// SETUP

    export function whatIsTheNextShip(currentShip){

        let nextShipName;

        switch(currentShip){

            case "carrier":
                nextShipName = "battleship";
                break;
                
            case "battleship":
                nextShipName = "destroyer";
                break;

            case "destroyer":
                nextShipName = "cruiser";
                break;

            case "cruiser":
                nextShipName = "patrolBoat";
                break;

            case "patrolBoat":
                nextShipName = "";
                break;

        }

        return nextShipName;

    }

    export function calculateSegmentLocations(){

        // get the ship
    }