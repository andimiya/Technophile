/*jshint esversion: 6 */

const extend = require('./Helper');
const GameConsole = require ('./GameConsole');
const WebBrowser = require ('./WebBrowser');

function NintendoDS(){
  GameConsole.call(this, 'Nintendo DS');
  WebBrowser.call();
}

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;
