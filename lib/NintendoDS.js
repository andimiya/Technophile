/*jshint esversion: 6 */

const extend = require('./Helper');
const GameConsole = require ('./GameConsole');

function NintendoDS (systemName){
  GameConsole.call(this, 'Nintendo DS');
}

extend(NintendoDS, GameConsole);

module.exports = NintendoDS;
