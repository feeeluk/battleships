//  LOGIC - The brains, Handles pure math, score calculations, and rule validations (zero DOM, zero state mutation). It calculates outcomes (e.g., did the player win?, what is the score?).

// SETUP

    export function whatIsTheNextShip(currentShip){

        let shipName;

        switch(currentShip){

            case "carrier":
                shipName = "battleship";
                break;
                
            case "battleship":
                shipName = "destroyer";
                break;

            case "destroyer":
                shipName = "cruiser";
                break;

            case "cruiser":
                shipName = "patrolBoat";
                break;

            case "patrolBoat":
                shipName = "";
                break;

        }

        return shipName;

    }