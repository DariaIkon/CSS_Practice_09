(function () {
    'use strict'

    let loader = $('#loader');
    $('#order_form__button').click(function () {
        console.log('тык');
        
        $('.order_input_error').hide();
        let name = $('#order_input_name');
        let address = $('#order_input_address');
        let phone = $('#order_input_phone');
        let hasError = false;
        let orderInput = $('.order_form_control');
        let orderForm = $('#order_form')

        if (!name.val()) {
            name.siblings('.order_input_error').show();
             orderInput.css({
                'border': '1px solid red',
                'margin-bottom': '5px'
            })
            hasError = true;
        }
        if (!address.val()) {
            address.siblings('.order_input_error').show();
             orderInput.css({
                'border': '1px solid red',
                'margin-bottom': '5px'
            })
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings('.order_input_error').show();
            orderInput.css({
                'border': '1px solid red',
                'margin-bottom': '5px'
            });
            hasError = true;
        }
        if (!hasError) {
            loader.css('display', 'flex');
             $.ajax({
        method: "POST",
        url: 'https://itlogia.ru/test/checkout',
        data: {name: name.val(), address: address.val(), phone: phone.val()}
        })
                 .done(function (msg) {
             loader.hide();
            console.log(msg);
            if (msg.success) {
                orderForm.css('display', 'none');
                orderForm.siblings('#order_form_success ').css('display', 'flex');
            } else {
                alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
            }
        });
        }

       

    })
        
    
}());