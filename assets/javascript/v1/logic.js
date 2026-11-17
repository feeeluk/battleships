//  LOGIC - The brains, Handles pure math, score calculations, and rule validations (zero DOM, zero state mutation). It calculates outcomes (e.g., did the player win?, what is the score?).

import { shipPlacementData } from "./ui.js";

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

    export function calculateSegmentLocations(shipName){

        let temporaryCoordinateObject = {
                                            x: null,
                                            y: null,
                                        };
        
        
        console.log(`${shipName} X:${shipPlacementData[shipName].x.value}, Y:${shipPlacementData[shipName].y.value}`);
        temporaryCoordinateObject.x = shipPlacementData[shipName].x.value;
        temporaryCoordinateObject.y = shipPlacementData[shipName].y.value;
        shipPlacementData[shipName].segments.push(temporaryCoordinateObject);

        // for loop based on length of ship
        for(let i = 1; i < shipPlacementData[shipName].length; i++){
            
            if(shipPlacementData[shipName].orientation.value === "horizontal"){
                console.log(`${shipName} X:${Number(shipPlacementData[shipName].x.value) + i}, Y:${Number(shipPlacementData[shipName].x.value)}`);
                temporaryCoordinateObject.x = (Number(shipPlacementData[shipName].x.value) +i);
                temporaryCoordinateObject.y = (Number(shipPlacementData[shipName].y.value));
                shipPlacementData[shipName].segments.push(temporaryCoordinateObject);
            }

            else if(shipPlacementData[shipName].orientation.value === "vertical"){
                console.log(`${shipName} X:${Number(shipPlacementData[shipName].x.value)}, Y:${Number(shipPlacementData[shipName].y.value) + i}`);
                temporaryCoordinateObject.x = (Number(shipPlacementData[shipName].x.value));
                temporaryCoordinateObject.y = (Number(shipPlacementData[shipName].y.value) +i);
                shipPlacementData[shipName].segments.push(temporaryCoordinateObject);
            }

        }
        
        console.log(shipPlacementData[shipName].segments);
    }

