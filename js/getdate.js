//全局变量 music

$(function () {
    var a = UrlParam.paramValues("id");

    if (a === undefined)
        return;

    var music = musicList[0].item[a];
    if (music === undefined)
        return;

    rem.musicId = Number(a);
    rem.isNeedVolume = false;

    initAudio();

    initWeChat();

    // 播放、暂停按钮的处理
    $(".btn-play").click(function () {
        pause();
    });

    // 上一首歌
    $(".btn-prev").click(function () {
        prevMusic();
    });

    // 下一首
    $(".btn-next").click(function () {
        nextMusic();
    });
    changeCover(music);
    playList(rem.musicId);
})

//初始化封面 初始化音乐信息
function changeCover(music) {
    // 更新封面展示 
    $(".bg").attr("src", music.pic);
    $(".cover").attr("src", music.pic);
    var html = '<div>' + music.name + '</div>' +
        '<div>' + music.artist + '</div>';

    $(".music-info").html("");
    $(".music-info").append(html);
}