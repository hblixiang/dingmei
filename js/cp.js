$(function(){
	$('.all div').fadeTo(0,0.3)
	$('li').hover(function(e) {
    $(this).children('p,div').stop().animate({bottom:0},1000) 
    },function(){
	$(this).children('p,div').stop().animate({bottom:-37},1000)
	});
})