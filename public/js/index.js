

//Peter's chat code
var $chatBox = $("#chatBox");
var $openChat = $("#openChat");
var $sendMessage = $("#sendMessage");
var $closeChat = $("#closeChat");
var socket = io();


//Opens Chat box
$openChat.on("click", handleOpenChat);

function handleOpenChat() {

    $chatBox.attr("style", "visibility: visible;");


}

//emits message typed into #messageText to #messageBoard through socket_io.js
$sendMessage.on("click", handleSendMessage);

function handleSendMessage() {
    console.log("here");
    
    $('form').submit(function () {
        socket.emit('chat message', $('#messageText').val());
        $('#messageText').val('');

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

// THIS IS ALL COMMENTED OUT BECAUSE WE NEED TO MAKE OUR OWN, 
// THE STRUCTURE IS PRETTY MUCH WHAT WE WILL BE DOING BUT IT WILL 
// BE A LOT LESS CONFUSING IF WE JUST START FROM NOTHING RATHER THEN TRYING TO REPLACE THINGS

// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//


// // Get references to page elements

// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
$(function () {

    const $searchTerm = $('#searchBar');
    const $searchButton = $('#searchButton');
    const $loginButton = $('#loginButton');

    const validateForm = (event) => {
        event.preventDefault();

        if (!$searchTerm.val().trim()) {    // Check if the field is not empty
            return;
        }

        sendData({
            term: $searchTerm
                .val()
                .trim()
        })
    }


    // sending the data to the back end
    const sendData = data => {
        $.post('/search/term', data)
            .then(data);
    }

    // function to send users to auth page
    // const loginData = () => {
    //     $.post('/login')
    // }

    $searchButton.on('click', validateForm);
    // this will be when someone clicks the login button will direct them to the Auth page
    // $loginButton.on('click', loginData);
})
