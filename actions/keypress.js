/*==============================
=========== IMPORTS ============
==============================*/

// LAUNCHPAD OBJECT
const { lp } = require('./helpers/lp')

// OS
const os = require('os')

// ROBOTJS
const robot = require('robotjs')

/*==============================
=========== EXPORTS ============
==============================*/

module.exports.keypress = (key, modifier) => {
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]
  if (numbers.some(val => val === key) && os.platform() === 'win32') key = `numpad_${key}`
  if (!!modifier) {
    robot.keyTap(key, modifier)
  } else {
    robot.keyTap(key)
  }
}