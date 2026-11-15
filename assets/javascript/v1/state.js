// STATE - The data. Tracks state and game data. Holds the raw variables (player stats, scores, current phase string). It has zero knowledge of HTML elements and zero knowledge of math rules. It only updates and returns data.

// IMPORT FUNCTIONS
    import { showLayer } from './ui.js';

// STATE OBJECT
    export let state; // main state object

    export function resetState(){
        state = {
            player: {
                    homeGrid: null,
                    targetGrid: null,
                    ships: null,
            },

            computer: {
                homeGrid: null,
                targetGrid: null,
                ships: null,
            },

            layer: null, 
            currentTurn: "player",
        }
    }

    export function changeState(value){
        console.log(`state => ${value}`);
        state.layer == value;
        showLayer(value);
    }

    function createEmptyGrid(){

        const grid = [];

        for(let row = 0; row < 10; row++)
        {
            grid[row] = [];
                for(let column = 0; column < 10; column++)
                {
                    grid[row][column] = null;
                }
        }

        return grid;
    }

    export function initialiseGrids(){
        
        state.player.homeGrid = createEmptyGrid();
        state.player.targetGrid = createEmptyGrid();
        state.computer.homeGrid = createEmptyGrid();
        state.computer.targetGrid = createEmptyGrid();
    }

    function createShip(id, name, length) {

        const ship = {
            id,
            name,
            length,
            x: null,
            y: null,
            orientation: null,
            sections: []
        };

        for (let i = 0; i < length; i++)
        {
            ship.sections.push({
                hit: false
            });
        }

        return ship;
    }

    function createFleet() {

        return [
            createShip(1, 'Carrier', 5),
            createShip(2, 'Battleship', 4),
            createShip(3, 'Destroyer', 3),
            createShip(4, 'Cruiser', 3),
            createShip(5, 'Patrol Boat', 2)
        ];
    }

    export function initialiseFleet(){
        state.player.ships = createFleet();
        state.computer.ships = createFleet();
    }

    function endTurn(){}

    