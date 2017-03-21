$(function() {
    $('ol li').mouseover(function(e) {
        $(this).addClass('current').siblings().removeClass()
        $('.banner ul li').eq($(this).index()).hide().fadeTo(0, 1).siblings().hide()
        num = $(this).index() + 1
    });
    var mytimer = setInterval(autoplay, 500)
    var num = 1;

    function autoplay() {
        if (num > 2) {
            num = 0;
        }
        $('ol li').eq(num).addClass('current').siblings().removeClass()
        $('.banner ul li').eq(num).hide().fadeTo(0, 1).siblings().hide()
        num++
    }
    $('.banner li').hover(function(e) {
        clearInterval(mytimer)
    }, function() {
        mytimer = setInterval(autoplay, 500)
    });
})
