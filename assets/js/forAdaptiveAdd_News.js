$(document).ready(function () {
    console.log($('#viewport').width());
    if (screen.width <= 768){        
        $('.upper').css({
        'padding-left': '30px',
        'padding-right': '0px'});
        
        if (screen.width <= 375 ){
            $('.block2').remove();
            
            $('.upper').css({
                'padding-left': '15px',
                'padding-right': '0px',
                'justify-content':'space-around'});
            $('.block3__phones').remove();
            $('.main-content').css({
                'padding-left': '15px'});
            $('#news-text').css({
                'width': '345px'});
            $('.input-container__symbols-counter').css({
                'width': '345px'});
            $('.input-container__prewiew').css({
                'width': '345px'});
            $('.input-container__visible-part').css({
                'display': 'flex',
                'flex-direction': 'column'});
            
            
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
            $('.main-content').css({
                'padding-left': '30px'});
            $('#news-text').css({
                'width': '715px'});
            $('.input-container__symbols-counter').css({
                'width': '715px'});
            $('.input-container__prewiew').css({
                'width': '715px'});
            $('.input-container__label').css({
                'width': '250px'});
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