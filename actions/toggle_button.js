/*==============================
=========== IMPORTS ============
==============================*/

// LAUNCHPAD OBJECT
const { lp } = require('./helpers/lp')

// HEX => RGB FUNCTIONS
const { hex_to_lp } = require('./helpers/rgb')

/*==============================
========== CONSTANTS ===========
==============================*/

// GENERIC TOGGLE PLACEHOLDER
let toggle = false

/*==============================
=========== EXPORTS ============
==============================*/

// TOGGLES THE BUTTON ON OR OFF
module.exports.toggle_button = () => {
  toggle = !toggle
  if (toggle) {
    let { r, g, b } = hex_to_lp('#ffe311')
    lp.button(7, 8).setRgbColor(r, g, b)
  } else {
    lp.button(7, 8).darken()
  }
}