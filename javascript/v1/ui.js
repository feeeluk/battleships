// THE VIEW
// The sole owner of the DOM and the 4 CSS screen layers.
// The only file allowed to query the DOM. It controls showing and hiding your 5 CSS layers (general.css, initialisation.css, setup.css, activePlay.css, gameOver.css) and rendering text to the screen. It takes data passed to it and displays it.



export function showUI(layer){
    
    console.log(`state = ${layer}`);

    switch(layer){
        case "initialisation":
            document.getElementById(layer).style.visibility = "visible";
            break;

        case "setup":
            document.getElementById(layer).style.visibility = "visible";
            break;

        case "activePlay":
            document.getElementById(layer).style.visibility = "visible";
            break;

        case "gameOver":
            document.getElementById(layer).style.visibility = "visible";
            break;
    }
}