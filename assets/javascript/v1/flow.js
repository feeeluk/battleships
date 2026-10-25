// THE CONTROLLER
// The controller that listens to UI events, talks to logic.js, updates state.js, and tells ui.js when to re-render.
// The air traffic controller. It imports the other three modules. It tells ui.js to listen for user actions via callbacks, passes those actions through logic.js or state.js, and tells ui.js when to update.

import { showUI } from './ui.js';
import { currentState } from './state.js';

showUI(currentState);