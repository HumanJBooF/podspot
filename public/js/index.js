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
