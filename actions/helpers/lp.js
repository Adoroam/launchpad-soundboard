/*==============================
=========== IMPORTS ============
==============================*/

const Launchpad = require('launchpad-mk2')

const os = require('os')

/*==============================
========== CONSTANTS ===========
==============================*/

const linux = { in: 1, out: 1 }
const windows = { in: 0, out: 1 }

const ports = os.platform() === 'win32'
  ? windows
  : linux

const lp = new Launchpad(ports)
lp.button = (x, y) => lp.getButton(y, x)

/*==============================
=========== EXPORTS ============
==============================*/

module.exports = { lp }