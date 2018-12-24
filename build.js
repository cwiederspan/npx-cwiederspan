'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  //borderStyle: 'round'
}

// Actual strings we're going to output
const newline = '\n'
//const block = '/////////'
const block  = '■■■■■■■■■'
const divider = ' '
const spacer  = '   '

// Put all our output together into a single variable so we can use boxen effectively
// const output = chalk.rgb(242,80,34)(block) + divider + chalk.rgb(127,186,0)(block) + spacer + chalk.white.bold('Chris Wiederspan') + newline + 
//                chalk.rgb(242,80,34)(block) + divider + chalk.rgb(127,186,0)(block) + spacer + chalk.white('Azure App Dev Specialist (TSP)') + chalk.gray(' | ') + chalk.white('Southwest Region') + newline +
//                chalk.rgb(1,164,239)(block) + divider + chalk.rgb(255,185,1)(block) + spacer + chalk.white.bold('GitHub: ') + chalk.rgb(21,102,191)('cwiederspan') + chalk.gray(' | ') + chalk.white.bold('LinkedIn: ') + chalk.rgb(21,102,191)('www.linkedin.com/in/cwiederspan') + newline +
//                chalk.rgb(1,164,239)(block) + divider + chalk.rgb(255,185,1)(block) + spacer + chalk.white.bold('Email: ') + chalk.rgb(21,102,191)('chwieder@microsoft.com') + chalk.gray(' | ') + chalk.white.bold('Twitter: ') + chalk.rgb(21,102,191)('@wiederspan') + newline +
//                newline + 
//                chalk.rgb(21,102,191)('npx') + ' ' + chalk.gray('cwiederspan')

const block1 = chalk.rgb(242,80,34)(block) + divider + chalk.rgb(127,186,0)(block) + spacer
const block2 = chalk.rgb(1,164,239)(block) + divider + chalk.rgb(255,185,1)(block) + spacer

// Put all our output together into a single variable so we can use boxen effectively

const output = 
               block1 + newline + 
               block1 + chalk.rgb(21,102,191).bold('Chris Wiederspan') + newline + 
               block1 + chalk.rgb(21,102,191)('Azure App Dev Specialist (TSP) | Southwest Region') + newline + 
               block1 + newline + 
               //block1 + chalk.rgb(242,80,34)('-------------------------------------------------') + newline +

               block2 + chalk.gray('www.chwieder@microsoft.com') + newline + 
               block2 + chalk.gray('www.linkedin.com/in/cwiederspan') + newline +
               block2 + chalk.gray('www.github.com/cwiederspan') + newline +
               block2 + chalk.gray('www.twitter.com/wiederspan') + newline +
              //  block2 + newline +

               newline + 
               chalk.rgb(21,102,191)('npx') + ' ' + chalk.gray('cwiederspan')

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.rgb(21,102,191)(boxen(output, options)))