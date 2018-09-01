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