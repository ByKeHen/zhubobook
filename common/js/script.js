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

var apiJianbao = '/controller/index/api_jianbao.json';
var apiTouTiaoNews = '/controller/index/api_toutiao_news.json';
var apiZhiboIndustry = '/controller/index/api_zhibo_industry.json';
var apiZhuboNews = '/controller/index/api_zhubo_news.json';
var apiPlatformActivity = '/controller/index/api_platform_activity.json';
var _common = {
    sendAjax: function(api, params, dataType, callback) {
        $.ajax({
            url: api,
            data: params,
            dataType: dataType,
            success: callback
        });
    }
};

var vm = new Vue({
    el: '#bd',
    data: {
        jianbaoList: [],
        toutiaoNews: [],
        zhiboIndustry: [],
        zhuboNews: [],
        platformActivity: [],
    }
});

//百科简报
_common.sendAjax(apiJianbao, {}, 'json', function(response) {
    if (response.result === 'success') {
        var res = response.data;
        vm.jianbaoList = res.jianbao;
    } else {
        return;
    }
});

//头条新闻
_common.sendAjax(apiTouTiaoNews, {}, 'json', function(response) {
    if (response.result === 'success') {
        var res = response.data;
        vm.toutiaoNews = res;
    } else {
        return;
    }
});

//直播行业
_common.sendAjax(apiZhiboIndustry, {}, 'json', function(response) {
    if (response.result === 'success') {
        var res = response.data;
        vm.zhiboIndustry = res;
    } else {
        return;
    }
});

//主播新闻
_common.sendAjax(apiZhuboNews, {}, 'json', function(response) {
    if (response.result === 'success') {
        var res = response.data;
        vm.zhuboNews = res;
    } else {
        return;
    }
});

//平台活动
_common.sendAjax(apiPlatformActivity, {}, 'json', function(response) {
    if (response.result === 'success') {
        var res = response.data;
        vm.platformActivity = res;
    } else {
        return;
    }
});