// STATE - The data. Tracks game data and the current state. Holds the raw variables (player stats, scores, current phase string). It has zero knowledge of HTML elements and zero knowledge of math rules. It only updates and returns data.

// IMPORT FUNCTIONS
    import { showLayer } from './ui.js';

// VARIABLES
    
    export let state = {
        player: {
                homeGrid: null,
                targetGrid: null,
        },

        computer: {
            homeGrid: null,
            targetGrid: null,
        },

        layer: null, 
    }

// FUNCTIONS

    export function changeState(value){
        console.log(`state => ${value}`);
        state.layer == value;
        showLayer(value);
    }

    function createEmptyGrid(){

        const grid = [];

        for(let row = 0; row < 10; row++){

            grid[row] = [];

            for(let column = 0; column < 10; column++){

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

    function initialiseShips(){}