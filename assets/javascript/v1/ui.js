// USER INTERFACES - The view. The sole owner of the DOM and the 4 CSS screen layers. The only file allowed to query the DOM. It controls showing and hiding the CSS layers and rendering text to the screen. It takes data passed to it and displays it.

// RESET

    export function resetUI(){
        console.clear();
    }

// GAME WIDE

    export function showLayer(layerName) {
        console.log(`UI layer => ${layerName}`);

        // Get all elements with the class 'layer' and hide them
        const layers = document.querySelectorAll('.layer');
        layers.forEach(layer => {
            layer.style.visibility = "hidden";
        });

        // Find the specific target layer and make it visible
        const targetLayer = document.getElementById(layerName);
        if (targetLayer) {
            targetLayer.style.visibility = "visible";
        } else {
            console.error(`Layer with ID "${layerName}" not found!`);
        }
    }

// INITIALISATION



