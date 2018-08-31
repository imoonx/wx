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
//当前音乐id
var platId;

//上一首
function prevMusic() {

}

//播放暂停
function playMusic() {

}

//下一首
function nextMusic() {

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
    rem.audio = $('<audio></audio>').appendTo('body');
};

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