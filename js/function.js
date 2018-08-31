$(function () {

    //上一首
    $(".btn-prev").click(function () {
        prevMusic();
    })

    //播放 暂停
    $(".btn-play").click(function () {
        playMusic();
    })

    //下一首
    $(".btn-next").click(function () {
        nextMusic();
    })

    //静音操作
    $(".btn-quiet").click(function () {
        quietMusic(this);
    });

    rem.musicList = $(".music-list");

    // 列表项双击播放
    $(".music-list").on("dblclick", ".list-item", function () {
        var num = parseInt($(this).data("no"));
        if (isNaN(num)) return false;
        listClick(num);
    });

    //初始化播放器
    initAudio();

    //初始化顶部文字
    initListHeader();

    //初始化音乐列表
    initMusicList();

})