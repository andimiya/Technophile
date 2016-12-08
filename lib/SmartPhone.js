/*jshint esversion: 6 */

const extend = require('./Helper');
const Phone = require('./Phone');
const Tablet = require('./Tablet');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber){
  Phone.call(phoneNumber);
    this.phoneNumber = phoneNumber;
  GameConsole.call(this,'Smart Phone');
    this.systemName = 'Smart Phone';
}

extend(SmartPhone, Phone);
extend(SmartPhone, GameConsole);
extend(SmartPhone, Tablet);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;