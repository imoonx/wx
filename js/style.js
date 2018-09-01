$(function () {

    $("._music").attr("src", "img/music.svg");
    $("._book").attr("src", "img/book.svg");
    $("._image").attr("src", "img/image.svg");
    $("._video").attr("src", "img/video.svg");
    $("._trip").attr("src", "img/trip.svg");
    $("._article").attr("src", "img/article.svg");

})

// 判断是否是移动设备
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};