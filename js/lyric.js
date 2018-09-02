// ajax加载歌词
// 参数：音乐ID，回调函数
function ajaxLyric(lyricUrl, callback) {
    if (lyricUrl === undefined) callback(''); // 没有歌词ID，直接返回
    $.ajax({
        type: "GET",
        url: lyricUrl,
        dataType: "text", //返回数据格式为json
        success: function (jsonData) {
            if (jsonData) {
                callback(jsonData); // 回调函数
            } else {
                callback(''); // 回调函数
            }
        }, //success
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            callback(''); // 回调函数
        }
    }); //ajax
}

// 歌曲加载完后的回调函数
// 参数：歌词源文件
function lyricCallback(str) {

    rem.lyric = parseLyric(str); // 解析获取到的歌词

    if (rem.lyric === '') {
        return false;
    }

    $(".music-info").html(''); // 清空歌词区域的内容
    $(".music-info").scrollTop(0); // 滚动到顶部
    rem.lastLyric = -1;
    // 显示全部歌词
    var i = 0;
    for (var k in rem.lyric) {
        var txt = rem.lyric[k];
        if (!txt) txt = "&nbsp;";
        var li = $("<li data-no='" + i + "' class='lrc-item'>" + txt + "</li>");
        $(".music-info").append(li);
        i++;
    }
}

// 参数：原始歌词文件
function parseLyric(lrc) {
    if (lrc === '') return '';
    var lyrics = lrc.split("\n");
    console.log(lyrics);
    var lrcObj = {};
    for (var i = 0; i < lyrics.length; i++) {
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if (!timeRegExpArr) continue;
        var clause = lyric.replace(timeReg, '');
        for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            // console.log(time);
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}


// 滚动歌词到指定句
// 参数：当前播放时间（单位：秒）
function scrollLyric(time) {
    // console.log(time);
    if (rem.lyric === '') return false;

    time = parseInt(time); // 时间取整
    // time = Math.ceil(time + 1); // 时间取整

    if (rem.lyric === undefined || rem.lyric[time] === undefined) return false; // 当前时间点没有歌词

    if (rem.lastLyric == time) return true; // 歌词没发生改变

    var i = 0; // 获取当前歌词是在第几行

    for (var k in rem.lyric) {
        if (time == k) {
            break;
        }
        i++;
    }

    rem.lastLyric = time; // 记录方便下次使用

    $(".lplaying").removeClass("lplaying"); // 移除其余句子的正在播放样式
    $(".lrc-item[data-no='" + i + "']").addClass("lplaying"); // 加上正在播放样式

    var scroll = ($(".music-info").children().height() * i) - ($(".music-info").height() / 2);
    $(".music-info").stop().animate({
        scrollTop: scroll
    }, 1000); // 平滑滚动到当前歌词位置(更改这个数值可以改变歌词滚动速度，单位：毫秒)

}