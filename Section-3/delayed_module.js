var EventEmitter = require('events').EventEmitter;

module.exports = new EventEmitter();

// process.nextTick(function() {

module.exports.message = "esprit d'escalier";
module.exports.emit('ready');

// });
