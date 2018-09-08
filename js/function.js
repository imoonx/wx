$(function () {

    //上一首
    $(".btn-prev").click(function () {
        prevMusic();
    })

    //播放 暂停
    $(".btn-play").click(function () {
        pause();
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
        var num = parseInt($(this).data("no")) - 1;
        if (isNaN(num)) return false;
        playList(num);
    });

    // 移动端列表项单击播放
    $(".music-list").on("click", ".list-item", function () {
        if (isMobile) {
            var num = parseInt($(this).data("no")) - 1;
            console.log(num);
            if (isNaN(num)) return false;
            playList(num);
        }
    });

    //初始化播放器
    initAudio();

    //初始化顶部文字
    initListHeader();

    //初始化音乐列表
    initMusicList();

})

//初始化封面 初始化音乐信息
function changeCover(music) {
    // 更新封面展示 
    $(".bg").attr("src", music.pic);
    $(".music-cover").attr("src", music.pic);
}