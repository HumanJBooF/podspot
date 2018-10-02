$(function () {

    const $searchTerm = $('#searchBar');
    const $searchButton = $('#searchButton');

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


    $searchButton.on('click', validateForm);

})
