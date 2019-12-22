$(document).ready(function () {
    console.log($('#viewport').width());
    if (screen.width <= 768){
        $('#car_in_slider').remove();
        $('.upper').css({
        'padding-left': '30px',
        'padding-right': '0px'});
        $('#file_in_slider').css({
            'display': 'none'});
        if (screen.width <= 375 ){
            $('.block2').remove();
            $('.slides2').css({
                'padding-left': '15px'});
            $('.upper').css({
                'padding-left': '15px',
                'padding-right': '0px',
                'justify-content':'space-around'});
            $('.block3__phones').remove();
            $('.slides').css({
                'padding-left': '15px'});
            $('.text').css({
                'width': '343px'});
            $('.head-in-slider').css({
                'width': '345px',
                'font-size': '38px',
                'line-height': '46px'});
            $('.button__order').css({
                'width': '345px'});
            $('.footer').css({
                'padding-left': '15px',
                'padding-bottom': '96px',
                'padding-right': '0px',
                'flex-direction': 'column'});
            $('.footer__first-block').css({
                'flex-direction': 'column'
                });  
            $('.footer__first-block').css({
                'flex-direction': 'column'}); 
            $('.ft_name').css({
                'padding-bottom': '64px'}); 
            $('.ft_contactinfo').css({
                'padding-top': '64px'}); 
            $('.authorization').css({
                'width':'375px'                
            });
            $('.adaptive').css({
                'width':'315px',
                'padding-left':'15px'
            });
            $('.adaptive-inside').css({
                'width':'315px'
            });
            // $('.button__login').css({
            //     'width': '0px'});
        }
        else{
            $('.slides').css({
                'padding-left': '30px'});
            $('.slides2').css({
                'padding-left': '30px'});
            $('.number').css({
                'padding-right': '0px'});
            $('.block3').css({
                'flex-direction': 'column-reverse',
                'justify-content': 'flex-end',
                'padding-right' : '15px'});      
            $('.footer').css({
                'padding-left': '30px',
                'padding-bottom': '96px',
                'padding-right': '0px',
                'flex-direction': 'column'});  
            $('.ft_contactinfo').css({
                'padding-top': '96px',
                'align-self': 'center'});
            $('.footer__first-block').css({
                'width': screen.width +'px',
                'justify-content': 'space-around'});
        }
           
    }
    else {
        $('body').css({
            'min-width': '1170px'});
        $('.body_block1').css({
            'width': '1110px'});
            
    };

});