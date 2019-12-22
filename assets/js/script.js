var translateWidth = 0;
var slideInterval = 5000;
var flag = true;
var list = document.getElementById('slidewrapper');
var slides = document.getElementsByClassName('slide');
var slidesCount = slides.length;
var firstLi = list.getElementsByTagName('LI')[0];
var navBtnId = 0;
var currentSlide = 1;

$(document).ready(function () {
    
    var scr_width = screen.width;
    var viewport = $('#viewport');
    if (screen.width <= 768){
        $('#viewport').width(768);
        viewport.width(scr_width);

    }
    console.log(viewport.width());
    checkSlidePointer();
    var switchInterval = setInterval(nextSlide, slideInterval);
    // console.log(slidesCount);
    $('#nav-btns').hover(function(){
        clearInterval(switchInterval);              //don't toggle on hover
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

function nextSlide() {
    if(flag){
        flag = false;
        if(currentSlide == slidesCount){
            $('#slidewrapper').css({
                'transform': 'translate(0, 0)',
                'transition':' 0s'});
                currentSlide = 1;
        }
        translateWidth = -$('#viewport').width();
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1.2s',
            'transition-timing-function': 'ease-in-out'
        });
        currentSlide = 2;
        checkSlidePointer();
    } else{
        translateWidth = -$('#viewport').width() * 2;
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1.2s',
            'transition-timing-function': 'ease-in-out'
        });
        flag = true;
        currentSlide = slidesCount;
        checkSlidePointer();
    }
}

function checkSlidePointer(){
    if(currentSlide == 1 || currentSlide == slidesCount){
        $('#first').css({
            'background-color': '#346491'
        });
        $('#second').removeAttr("style");

    }else{
        $('#second').css({
            'background-color': '#346491'
        });
        $('#first').removeAttr("style");
    }
}

$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();
    if (navBtnId + 1 != currentSlide) {
        if( currentSlide == slidesCount){
            $('#slidewrapper').css({
                'transform': 'translate(0, 0)',
                'transition':' 0s'});
        }
        translateWidth = -$('#viewport').width() * (navBtnId);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            'transition':' 1.2s',
            'transition-timing-function': 'ease-in-out'
        });
        if(currentSlide == 1){
            currentSlide = 2;
            checkSlidePointer();
            flag = false;
        }else{
            currentSlide = 1;
            checkSlidePointer();
            flag = true;
        }
    }
});






