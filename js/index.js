$(function () {

    rem.isNeedVolume = false;

    initAudio();

    initWeChat();

    initDate();

    if (!isMobile.any()) {
        $(".href_music").attr("target", "_blank");
    }

    $(".btn-play").click(function () {
        pauseIndex();
    });

    initArgs();

    playByUrl(indexList.bgMusic);

})


function initDate() {
    var html;
    for (var i = 0; i < indexList.item.length; i++) {
        if (html == undefined)
            html = '<div class="row">';
        else html = html + '<div class="row">';

        var rowDate = indexList.item[i].row;
        for (var j = 0; j < rowDate.length; j++) {
            var date = rowDate[j];
            html = html + '<div class="col-sm-4 columns"> <div class="columns-item"><div class="item-thumb ' + date.bgColorClass + '"></div>' +
                '<div class="item-desc"><p>' + date.text + '</p></div>' +
                '<div class="item-slant reverse-slant ' + date.bgColorClass + '"></div>' +
                '<div class="item-slant"><div class="liberxue-title">' + date.type + '</div></div>' +
                '<div class="columns-item-bottom"><div class="columns-item-bottom-title">' +
                '<a href="' + date.href + '" class="href_music">' + date.title + '</a></div>' +
                '<div class="columns-item-bottom-time">' +
                '<a href="javascript:volid(0);" data-hover="' + date.time + '">' + date.time + '</a>' +
                '<img class="' + date.imgClass + '" /></div></div></div></div>';
        }
        html = html + '</div>';
    }
    $(".content").append(html);
}

function pauseIndex() {
    // 第一次点播放
    if (rem.paused === undefined) {
        playByUrl(indexList.bgMusic);
        return;
    }
    if (rem.paused === false) { // 之前是播放状态
        rem.audio[0].pause(); // 
    } else {
        rem.audio[0].play();
    }
}

/**
 * 初始化图标
 */
function initArgs() {
    $("._music").attr("src", "img/music.svg");
    $("._book").attr("src", "img/book.svg");
    $("._image").attr("src", "img/image.svg");
    $("._video").attr("src", "img/video.svg");
    $("._trip").attr("src", "img/trip.svg");
    $("._article").attr("src", "img/article.svg");
}

function headClick() {
    if (isMobile.any())
        window.location.href = "html/musicList.html";
    else
        window.open("html/musicList.html");
}