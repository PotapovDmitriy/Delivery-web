$(document).ready(function () {
    if (screen.width <= 768){
        $('#car_in_slider').remove();
        $('.upper').css({
        'padding-left': '30px',
        'padding-right': '0px'});

        $('#file_in_slider').css({
            'display': 'none'});
        $('.slides').css({
            'padding-left': '0px'});
        $('.slides2').css({
            'padding-left': '0px'});
        $('.number').css({
            'padding-right': '0px'});
        $('.block3').css({
            'flex-direction': 'column-reverse',
            'justify-content': 'flex-end',
            'padding-right' : '15px'});           
    }
    else {
        $('body').css({
            'min-width': '1170px'});
        $('.body_block1').css({
            'width': '1110px'});
            
    };

});