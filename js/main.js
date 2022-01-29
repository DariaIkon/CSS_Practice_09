(function () {
    'use strict'
    $('#order_form__button').click(function () {
        let url = 'https://itlogia.ru/test/checkout?name=' + $('#order_input_name').val();
        let http = new XMLHttpRequest();
        http.open(method = 'POST', url);
        http.send();
        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                console.log(http.responseText);
            }
        }
        // $('#order_form__button').click(function () {
        //     console.log('тык');
        // })
    });
}());