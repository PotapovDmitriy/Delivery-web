// var translateWidth = 0;
// var slideInterval = 3000;
// var flag = true;
// var list = document.getElementById('slidewrapper');
// var firstLi = list.getElementsByTagName('LI')[0];

// $(document).ready(function () {
//     var switchInterval = setInterval(nextSlide, slideInterval);

//     // $('#viewport').hover(function(){           //don't toggle on hover
//     //     clearInterval(switchInterval);
//     // },function() {
//     //     switchInterval = setInterval(nextSlide, slideInterval);
//     // });
// });

// function nextSlide() {
//     if(flag){
//         flag = false;
//         translateWidth = -$('#viewport').width();
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             'transition':' 1.2s',
//             'transition-timing-function': 'ease-in-out'
//         });
        
//     } else{
//         flag = true;
//         list.removeChild(firstLi);
//         $('#slidewrapper').css({
//             'transform': 'translate(0, 0)',
//             'transition':' 0s'});
//         list.appendChild(firstLi);
//         firstLi = list.getElementsByTagName('LI')[0];
//     }
// }

var translateWidth = 0;
var slideInterval = 5000;
var flag = true;
var list = document.getElementById('slidewrapper');
var firstLi = list.getElementsByTagName('LI')[0];
var navBtnId = 0;
var currentSlide = 1;

$(document).ready(function () {
    checkSlidePointer();
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#nav-btns').hover(function(){
        clearInterval(switchInterval);              //don't toggle on hover
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
});

function nextSlide() {
    if(flag){
        flag = false;
        if(currentSlide == 3){
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
        currentSlide = 3;
        checkSlidePointer();
    }
}

function checkSlidePointer(){
    if(currentSlide == 1 || currentSlide == 3){
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
        if(currentSlide == 1){
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






