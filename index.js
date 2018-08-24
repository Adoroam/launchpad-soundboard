// LAUNCHPAD 
const { lp } = require('./actions/helpers/lp')
const { handle_press, light_btn } = require('./lp.hand')

!!lp
  ? console.log('launchpad ready')
  : console.log('launchpad failed')

// LAUNCHPAD KEYPRESS
lp.on('press', handle_press)

// LIGHT LAUNCHPAD BUTTON
process.on('light button', light_btn)
