/* banner图轮播 */
function bannerEvent() {
    var li = '';
    var index = 0;
    var _time = '';
    var _banner = $('#banner').find('.banner');
    var _len = _banner.length;
    var _prev = $('#prev');
    var _next = $('#next');

    for (var i = 0; i < _len; i++) {
        if (i === 0) {
            li += '<li class="page-this"></li>';
        } else {
            li += '<li>' + (i + 1) + '</li>';
        }
    }
    $('#page ul').html(li);

    var _li = $('#page').find('li');
    var change = function() {
        _banner.removeClass('banner-this').eq(index).addClass('banner-this');
        _li.removeClass('page-this').eq(index).addClass('page-this');
    };

    var timer = function() {
        _time = setInterval(function() {
            index++;
            if (index === _len) {
                index = 0;
            }
            change();
        }, 5000);
    };
    timer();

    _li.hover(function() {
        clearInterval(_time);
    }, function() {
        timer();
    });

    _li.on('click', function() {
        var _self = $(this);
        index = _self.index();
        change();
        return false;
    });

    _prev.on('click', function() {
        console.log('prev submit');
        return;
    });

    _next.on('click', function() {
        console.log('next submit');
        return;
    });
}
bannerEvent();

/* tag切换 */
function tagEvent() {
    var _tagTit = $('#tagTit');
    var _tagCon = $('#tagCon');
    var _tagTitli = _tagTit.find('li');
    var _tagConli = _tagCon.find('.tag-item');
    _tagTitli.on('click', function() {
        var _self = $(this);
        _self.addClass('tag-this').siblings().removeClass('tag-this');
        var _idex = _self.index();

        _tagConli.removeClass('tag-show').eq(_idex).addClass('tag-show');
    });
}
tagEvent();

$(function() {
    $('#slideshow').cycle({
        fx: 'scrollLeft',
        speed: 300,
        timeout: 3000
    });
});