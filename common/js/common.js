/*!
 * authors: chenfx (since1991_vip@163.com)
 * date:    2017-11-18 18:18:28
 * version: v1.0.0
 */

//=require ../../static/js/_modules/miVisibleWatcher.js
//=require ../../static/js/_modules/modal.js
//=require ../../static/js/_modules/transition.js
//=require ../../static/js/_modules/doT.js

//懒加载
function loadlazy() {
    var $bd = $('#bd');
    var $sec = $('.sec', $bd);

    $sec.visibleWatcher({
        onVisible: function($elm, index) {
            $sec.filter(function(i) {
                return i <= index + 1;
            }).addClass('preload').find('img').each(function() {
                var _src = $(this).attr('data-src');
                $(this).attr('src', _src);
            });
        }
    });
}

//加载公共头部和底部
(function() {
    var headerLoad = false;
    var footerLoad = false;
    var _header = $('#header');
    var _footer = $('#footer');

    //加载 header
    _header.load('/views/header.html', function() {
        headerLoad = true;
        loadlazy();
    });
    //加载footer
    _footer.load('/views/footer.html', function() {
        footerLoad = true;
    });
})();