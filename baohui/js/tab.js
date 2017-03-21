$(function() {
    var oTab = document.getElementById('tab');
    var oTabNav = document.getElementById('tab_nav');
    var aBtn = oTabNav.getElementsByTagName('span');
    var aDiv = $('.box');
    var now = 0;
    for (var i = 0; i < aBtn.length; i++) {

        (function(index) {

            aBtn[index].onclick = function() {
                now = index;
                for (var i = 0; i < aBtn.length; i++) {
                    aBtn[i].className = '';
                    aDiv[i].className = 'box';
                }
                aBtn[now].className = 'active';
                aDiv[now].className = 'active box';
            };
        })(i);
    }
})

/*tab2*/
$(function() {
        tab('tab_pic1')
        tab('tab_pic2')
        tab('tab_pic3')
        tab('tab_pic4')

        function tab(id) {
            var oTab = document.getElementById(id);
            var aBtn1 = oTab.getElementsByTagName('li');
            var aDiv1 = oTab.getElementsByTagName('p');
            var now = 0;
            for (var i = 0; i < aBtn1.length; i++) {
                (function(index) {
                    aBtn1[index].onclick = function() {
                        now = index;
                        for (var i = 0; i < aBtn1.length; i++) {
                            aBtn1[i].className = '';
                            aDiv1[i].className = '';
                        }

                        aBtn1[now].className = 'cur';
                        aDiv1[now].className = 'cur';
                    };
                })(i);
            }
        }
    })
    /*无缝滚动 参考  http://www.17sucai.com/pins/demoshow/260*/
    //图片滚动 调用方法 imgscroll({speed: 30,amount: 1,dir: "up"});
$.fn.imgscroll = function(o) {
    var defaults = {
        speed: 40,
        amount: 0,
        width: 1,
        dir: "left"
    };
    o = $.extend(defaults, o);

    return this.each(function() {
        var _li = $("li", this);
        _li.parent().parent().css({
            overflow: "hidden",
            position: "relative"
        }); //div
        _li.parent().css({
            margin: "0",
            padding: "0",
            overflow: "hidden",
            position: "relative",
            "list-style": "none"
        }); //ul
        _li.css({
            position: "relative",
            overflow: "hidden"
        }); //li
        if (o.dir == "left") _li.css({
            float: "left"
        });

        //初始大小
        var _li_size = 0;
        for (var i = 0; i < _li.size(); i++)
            _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);

        //循环所需要的元素
        if (o.dir == "left") _li.parent().css({
            width: (_li_size * 3) + "px"
        });
        _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
        _li = $("li", this);

        //滚动
        var _li_scroll = 0;

        function goto() {
            _li_scroll += o.width;
            if (_li_scroll > _li_size) {
                _li_scroll = 0;
                _li.parent().css(o.dir == "left" ? {
                    left: -_li_scroll
                } : {
                    top: -_li_scroll
                });
                _li_scroll += o.width;
            }
            _li.parent().animate(o.dir == "left" ? {
                left: -_li_scroll
            } : {
                top: -_li_scroll
            }, o.amount);
        }

        //开始
        var move = setInterval(function() {
            goto();
        }, o.speed);
        _li.parent().hover(function() {
            clearInterval(move);
        }, function() {
            clearInterval(move);
            move = setInterval(function() {
                goto();
            }, o.speed);
        });
    });
};
$(document).ready(function() {

    $(".scrollleft").imgscroll({
        speed: 40, //图片滚动速度
        amount: 0, //图片滚动过渡时间
        width: 1, //图片滚动步数
        dir: "left" // "left" 或 "up" 向左或向上滚动
    });


});
