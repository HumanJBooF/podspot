$(function () {

    //Chat variables
    var $chatBox = $("#chatBox");
    var $openChat = $("#openChat");
    var $sendMessage = $("#sendMessage");
    var $closeChat = $("#closeChat");
    var socket = io("http://192:168:15:111:3000")
    // these are for the bottom function ajax call
    const $searchTerm = $('#searchBar');
    const $searchButton = $('#searchButton');

  function handleSendMessage() {
    var messageText;

    $("form").submit(function() {
      messageText = $("#messageText").val();
      socket.emit("chat message", messageText);
      console.log(messageText);

      return false;
    });
    socket.on("chat message", function(msg) {
      $("#messageBoard").append($("<li>").text(msg));
    });
  }

  //Closes Chat box
  $closeChat.on("click", handleCloseChat);

  $chatBox.hide();
  $closeChat.hide();

  function handleCloseChat() {
    $chatBox.hide();
  }

  const validateForm = event => {
    event.preventDefault();

    if (!$searchTerm.val().trim()) {
      // Check if the field is not empty
      return;
    }

    sendData({
      term: $searchTerm // creating the object to give to the back-end
        .val()
        .trim()
    });
  };

  // sending the data to the back end
  const sendData = data => {
    $.post("/", data).then(function(response) {
      console.log(response);
      $(".collapsible").empty();
      for (var i = 0; i < response.length; i++) {
        $(".collapsible").prepend(
          "<li><div class='collapsible-header'><img src='" +
            response[i].logo +
            "'>" +
            response[i].title +
            "<div id='add'>+</div></div><div class='collapsible-body'><p>" +
            response[i].descript +
            "</p><a href='" +
            response[i].url +
            "' target='_blank'>" +
            response[i].url +
            "</a><br><button class='bodyButton' id='addButton'>Add</button><button class='bodyButton' id='reviewButton' data='" + response[i].title + "'>Reviews</button></div></li>"
        );
      }
    });
  };

  $searchButton.on("click", validateForm); //on button click call the validateForm function

  const $reviewButton = $("#reviewButton");
  const $podTitle = $("#podTitle");
  const $podDescript = $("#podDescript");
  const $review = $("#review");

  const validateReview = event => {
    event.preventDefault();


    if (!$review.val().trim()) {
      return;
    }

    sendReview({
      title: $podTitle.val().trim(),
      descript: $podDescript.val().trim(),
      review: $review.val().trim()
    });
  };

  const sendReview = data => {
    $.post("/review", data).then(data);
  };

  $searchButton.on("click", validateForm); //on button click call the validateForm function
  $reviewButton.on("click", validateReview);
});

