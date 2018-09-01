$(function () {

    rem.isNeedVolume = false;

    initAudio();

    initWeChat();

    $(".btn-play").click(function () {
        pauseIndex();
    });

    playByUrl("music/であい-まつい_ようへい_ミト-201803.mp3");

})

function pauseIndex() {
    // 第一次点播放
    if (rem.paused === undefined) {
        playByUrl("music/であい-まつい_ようへい_ミト-201803.mp3");
        return;
    }
    if (rem.paused === false) { // 之前是播放状态
        rem.audio[0].pause(); // 
    } else {
        rem.audio[0].play();
    }
}