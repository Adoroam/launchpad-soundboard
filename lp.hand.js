/*==============================
=========== IMPORTS ============
==============================*/

// LAUNCHPAD OBJECT
const { lp } = require('./actions/helpers/lp')

// HEX => RGB FUNCTIONS
const { hex_to_lp } = require('./actions/helpers/rgb')

// INPUTS
const { lp_input } = require('./lp.input')

/*==============================
========== FUNCTIONS ===========
==============================*/

// GET COORDS 
const get_coords = info => ({ x: info.button.x, y: info.button.y })

// HANDLE BUTTON PRESS
const handle_press = info => {
  // CHECK TO MAKE SURE BUTTON EXISTS
  if (!!info.button) {
    let coords = get_coords(info)
    lp_input
      .filter(({ x, y }) => x === coords.x && y === coords.y)
      .forEach(({ action }) => action())
  }
}

// LIGHT A BUTTON A CERTAIN COLOR
const light_btn = payload => {
  // GET COORDS & COLOR
  let { x, y, color } = payload
  // LAZY COLOR OVERRIDE
  if (color === 'black') color = '#000000'
  // GET RGB FROM HEX
  let { r, g, b } = hex_to_lp(color)
  // LIGHT SINGLE OR ALL BUTTONS
  if (x !== 'all') lp.getButton(y, x).setRgbColor(r, g, b)
  if (x === 'all') lp.buttons.forEach(btn => btn.setRgbColor(r, g, b))
}

/*==============================
=========== EXPORTS ============
==============================*/

module.exports = { handle_press, light_btn }



