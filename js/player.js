/**
 * 全局变量
 * 
 * rem.audio 音频播放器
 * 
 * rem.musicList 音乐列表
 */
var rem = [];
//音量值
var vol;

//上一首
function prevMusic() {
    playList(rem.musicId - 1);
}

//播放暂停
function playMusic() {
    rem.paused = false;
    $(".btn-play").addClass("btn-state-paused");
}

//暂停
function pauseMusic() {
    rem.paused = true;
    $(".btn-play").removeClass("btn-state-paused");
}

//下一首
function nextMusic() {
    playList(rem.musicId + 1);
}

//错误监听
function audioErr() {
    nextMusic();
}

//进度更新
function updateProgress() {
    // 暂停状态不管
    if (rem.paused !== false) return true;
    // 同步歌词显示	
    scrollLyric(rem.audio[0].currentTime);
}

//静音切换
function quietMusic(mute) {
    if ($(mute).is('.btn-quite-mute')) {
        //静音状态下 恢复音量
        $(mute).removeClass("btn-quite-mute");
    } else {
        //开启静音
        $(mute).addClass("btn-quite-mute");
    }
}

//初始化播放器
function initAudio() {
    rem.audio = $('<audio autoplay></audio>').appendTo('body');
    // 应用初始音量
    if (rem.isNeedVolume) {
        rem.audio[0].volume = volume_bar.percent;
    }
    // 绑定歌曲进度变化事件
    rem.audio[0].addEventListener('timeupdate', updateProgress); // 更新进度
    rem.audio[0].addEventListener('play', playMusic); // 开始播放了
    rem.audio[0].addEventListener('pause', pauseMusic); // 暂停
    $(rem.audio[0]).on('ended', nextMusic); // 播放结束
    rem.audio[0].addEventListener('error', audioErr); // 播放器错误处理
}

//初始化顶部文字
function initListHeader() {
    var html = '<div class="list-head">' +
        '    <span class="music-name">' +
        '        歌曲' +
        '    </span>' +
        '    <span class="auth-name">' +
        '        歌手' +
        '    </span>' +
        '</div>';
    rem.musicList.append(html);
};

//初始化音乐列表
function initMusicList() {
    // 逐项添加数据
    for (var i = 0; i < musicList[0].item.length; i++) {
        var music = musicList[0].item[i];
        addItem(music);
    }
}

// 列表中新增一项
// 参数：编号、名字、歌手
function addItem(music) {
    var html = '<div class="list-item">' +
        '    <span class="list-num">' + music.id + '</span>' +
        '    <span class="music-name" id="music-name">' + music.name + '</span>' +
        '    <span class="auth-name" id="auth-name">' + music.artist + '</span>' +
        '</div>';
    rem.musicList.append(html);
}

//音乐播放
function play(music) {

    // 遇到错误播放下一首歌
    if (music.url == "err") {
        audioErr(); // 调用错误处理函数
        return false;
    }
    try {
        if (music.lryic !== undefined)
            ajaxLyric(music.lryic, lyricCallback);
        rem.audio[0].pause();
        rem.audio.attr('src', music.url);
        rem.audio[0].play();
        document.title = music.name;
    } catch (e) {
        audioErr(); // 调用错误处理函数
        return;
    }
    if (rem.isNeedVolume) {
        rem.errCount = 0; // 连续播放失败的歌曲数归零
        music_bar.goto(0); // 进度条强制归零
        music_bar.lock(false); // 取消进度条锁定
    }

    changeCover(music); // 更新封面展示
}

//音乐播放 通过音乐路径
function playByUrl(url) {
    // 遇到错误播放下一首歌
    if (url == "err") {
        return false;
    }

    try {
        rem.audio[0].pause();
        rem.audio.attr('src', url);
        rem.audio[0].play();
    } catch (e) {
        return;
    }
}

// 点击暂停按钮的事件
function pause() {
    // 第一次点播放
    if (rem.paused === undefined) {
        playList(rem.musicId);
        return;
    }
    if (rem.paused === false) { // 之前是播放状态
        rem.audio[0].pause(); // 
    } else {
        rem.audio[0].play();
    }
}

// 播放正在播放列表中的歌曲
// 参数：歌曲在列表中的ID
function playList(id) {
    // 没有歌曲，跳出
    if (musicList[0].item.length <= 0) return true;
    // ID 范围限定
    if (id >= musicList[0].item.length) id = 0;
    if (id < 0) id = musicList[0].item.length - 1;

    rem.musicId = id;
    play(musicList[0].item[id]);
}

//初始化微信 自动播放
function initWeChat() {
    document.addEventListener("WeixinJSBridgeReady", musicInWeixinHandler);
}

function musicInWeixinHandler() {
    rem.audio[0].play();
    document.removeEventListener("WeixinJSBridgeReady", musicInWeixinHandler);
}

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
    // console.log(lyrics);
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

    var scroll = $(".music-info").children().height() * i - ($(".music-info").height() / 5)
    $(".music-info").stop().animate({
        scrollTop: scroll
    }, 500); // 平滑滚动到当前歌词位置(更改这个数值可以改变歌词滚动速度，单位：毫秒)
}