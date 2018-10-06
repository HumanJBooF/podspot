$(function () {

//Peter's chat code
var $chatBox = $("#chatBox");
var $openChat = $("#openChat");
var $sendMessage = $("#sendMessage");
var $closeChat = $("#closeChat");
// these are for the bottom function ajax call
const $searchTerm = $('#searchBar');
const $searchButton = $('#searchButton');
 

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

    const validateForm = (event) => {
        event.preventDefault();
        
        if (!$searchTerm.val().trim()) {    // Check if the field is not empty
            return;
        }

        sendData({
            term: $searchTerm // creating the object to give to the back-end
                .val()
                .trim()
        })
    }


    // sending the data to the back end
    const sendData = data => {
        $.post('/search/term', data)
            .then(function(response){
                console.log(response);
                localStorage.setItem("data", JSON.stringify(response));
                location.href = "/search";
            });
    }

 
    $searchButton.on('click', validateForm); //on button click call the validateForm function
})
