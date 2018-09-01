//全局变量 music

$(function () {
    var a = UrlParam.paramValues("id");
    if (a === undefined)
        return;
    var music = musicList[0].item[a];
    if (music === undefined)
        return;
    console.log(music);
    initCover(music);
    initMusicInfo(music);
    initAudio();
})

function initCover(music) {
    $(".bg").attr("src", music.pic);
    $(".cover").attr("src", music.pic);
}

function initMusicInfo(music) {
    var html = '<div>' + music.name + '</div>' +
        '<div>' + music.artist + '</div>';
    $(".music-info").append(html);
}