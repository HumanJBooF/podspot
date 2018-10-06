$(function () {

//Peter's chat code
var $chatBox = $("#chatBox");
var $openChat = $("#openChat");
var $sendMessage = $("#sendMessage");
var $closeChat = $("#closeChat");
var socket = io("http://192:168:15:111:3000")
=======
// these are for the bottom function ajax call
const $searchTerm = $('#searchBar');
const $searchButton = $('#searchButton');
 


//Opens Chat box
$openChat.on("click", handleOpenChat);

function handleOpenChat() {

    $chatBox.attr("style", "visibility: visible;");


}

//emits message typed into #messageText to #messageBoard through socket_io.js
$sendMessage.on("click", handleSendMessage);

function handleSendMessage() {
    
    var messageText;

    $('form').submit(function () {
        messageText = $('#messageText').val()
        socket.emit('chat message', messageText);
        console.log(messageText);

        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messageBoard').append($('<li>').text(msg));
    });
}

//Closes Chat box
$closeChat.on("click", handleCloseChat);

function handleCloseChat() {

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

            });
    }

 
    $searchButton.on('click', validateForm); //on button click call the validateForm function
})
