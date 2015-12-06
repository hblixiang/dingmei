$( function(){
	$('#nav>ul>li').hover(function(e){
        $(this).children('ul').stop().slideToggle().fadeTo(0,0.9)
    });
})