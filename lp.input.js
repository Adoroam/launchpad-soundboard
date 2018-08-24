/*==============================
=========== IMPORTS ============
==============================*/

// TOGGLE
const { toggle_button } = require('./actions/toggle_button')

// KILL LIGHTS
const { kill_lights } = require('./actions/kill_lights')

// KEYPRESS
const { keypress } = require('./actions/keypress')

/*==============================
=========== EXPORTS ============
==============================*/

// AVAILABLE BUTTONS AND ACTIONS
module.exports.lp_input = [
    { x: 7, y: 8, action: toggle_button },
    { x: 8, y: 8, action: kill_lights },
    { x: 1, y: 8, action: () => keypress('0') },
    { x: 1, y: 1, action: () => keypress('1') },
    { x: 2, y: 1, action: () => keypress('2') },
    { x: 3, y: 1, action: () => keypress('3') },
    { x: 4, y: 1, action: () => keypress('4') },
    { x: 5, y: 1, action: () => keypress('5') },
    { x: 6, y: 1, action: () => keypress('6') },
    { x: 7, y: 1, action: () => keypress('7') },
    { x: 8, y: 1, action: () => keypress('8') },
    { x: 1, y: 2, action: () => keypress('1', ['control']) },
    { x: 2, y: 2, action: () => keypress('2', ['control']) },
    { x: 3, y: 2, action: () => keypress('3', ['control']) },!
    { x: 4, y: 2, action: () => keypress('4', ['control']) },
    { x: 5, y: 2, action: () => keypress('5', ['control']) },
    { x: 6, y: 2, action: () => keypress('6', ['control']) },
    { x: 7, y: 2, action: () => keypress('7', ['control']) },
    { x: 8, y: 2, action: () => keypress('8', ['control']) },
    { x: 1, y: 3, action: () => keypress('1', ['shift']) },
    { x: 2, y: 3, action: () => keypress('2', ['shift']) },
    { x: 3, y: 3, action: () => keypress('3', ['shift']) },
    { x: 4, y: 3, action: () => keypress('4', ['shift']) },
    { x: 5, y: 3, action: () => keypress('5', ['shift']) },
    { x: 6, y: 3, action: () => keypress('6', ['shift']) },
    { x: 7, y: 3, action: () => keypress('7', ['shift']) },
    { x: 8, y: 3, action: () => keypress('8', ['shift']) },
    { x: 1, y: 4, action: () => keypress('1', ['alt']) },
    { x: 2, y: 4, action: () => keypress('2', ['alt']) },
    { x: 3, y: 4, action: () => keypress('3', ['alt']) },
    { x: 4, y: 4, action: () => keypress('4', ['alt']) },
    { x: 5, y: 4, action: () => keypress('5', ['alt']) },
    { x: 6, y: 4, action: () => keypress('6', ['alt']) },
    { x: 7, y: 4, action: () => keypress('7', ['alt']) },
    { x: 8, y: 4, action: () => keypress('8', ['alt']) }
  ]
