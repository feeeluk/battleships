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

    export function calculatePlacedShipSegmentCoordinates(shipName){

        console.log(`${shipName} segment #1 (X:${shipPlacementData[shipName].x.value}, Y:${shipPlacementData[shipName].y.value})`);
        
        shipPlacementData[shipName].segments.push({
            x : Number(shipPlacementData[shipName].x.value),
            y : Number(shipPlacementData[shipName].y.value),
        });
        

        // for loop based on length of ship
        for(let i = 1; i < shipPlacementData[shipName].length; i++){
            
            if(shipPlacementData[shipName].orientation.value === "horizontal"){
                console.log(`${shipName} segment #${i+1} (X:${Number(shipPlacementData[shipName].x.value) + i}, Y:${Number(shipPlacementData[shipName].y.value)})`);
                shipPlacementData[shipName].segments.push({
                    x : Number(shipPlacementData[shipName].x.value + i),
                    y : Number(shipPlacementData[shipName].y.value),
                });
            }

            else if(shipPlacementData[shipName].orientation.value === "vertical"){
                console.log(`${shipName} segment #${i+1} (X:${Number(shipPlacementData[shipName].x.value)}, Y:${Number(shipPlacementData[shipName].y.value) + i})`);
                shipPlacementData[shipName].segments.push({
                    x : Number(shipPlacementData[shipName].x.value),
                    y : Number(shipPlacementData[shipName].y.value + i),
                });
            }

        }
        
        console.log(shipPlacementData[shipName].segments);
    }

