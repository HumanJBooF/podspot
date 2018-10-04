"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

//Peter's chat code
var $chatBox = $("#chatBox");
var $openChat = $("#openChat");
var $sendMessage = $("#sendMessage");
var $closeChat = $("#closeChat");
 //Opens Chat box
$openChat.on("click", handleOpenChat);
 var handleOpenChat = function () {
   $chatBox.attr("style", "visiblility: visible;");
 }
 //emits message typed into #messageText to #messageBoard through socket_io.js
$sendMessage.on("click", handleSendMessage);
 var handleSendMessage = function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#messageText').val());
      $('#messageText').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messageBoard').append($('<li>').text(msg));
    });
  }
 //Closes Chat box
$closeChat.on("click", handleCloseChat);
 var handleCloseChat = function () {
 
    $chatBox.hide();
 }
