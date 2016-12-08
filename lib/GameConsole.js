/*jshint esversion: 6 */

function GameConsole(systemName){
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game){
  title = this.game;
  console.log( `${this.systemName} plays ${title}`);
};

module.exports = GameConsole;