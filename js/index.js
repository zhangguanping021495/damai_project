$(document).ready(function(){
    var index = 0;
    var $imgs = $('.img li');
    var	$icons = $('.icon li');
    var timer = null;
    // console.log($imgs,$icons)

    //封装动画函数,结合css
    // play()
    function play(){
        $imgs.eq(index).addClass('curr').siblings().removeClass();
        $icons.eq(index).addClass('first').siblings().removeClass();
        // console.log($icons);
    }

    //鼠标经过小圆点的时候的变化
    $('.icon ul li').hover(function(){
        // console.log(this)
        index = $(this).index();
        play();
    });

    //鼠标移入擦除动画,移出播放，显示左右按钮
    $('.banner').hover(function(){
        clearInterval(timer);
        $('.btn').show();
        

    },function(){
        $('.btn').hide();
        timer = setInterval(autoplay,1500);
    });

    //给左右按钮绑定点击事件
    $('.left').click(function(){
            index--;
            if( index<0 ){
                index  = 3;
            }else if( index >3 ){
                index = 0;
            }
            play();
        });
    $('.right').click(function(){
        index++;
        if( index<0 ){
            index  = 3;
        }else if( index >3 ){
            index = 0;
    }
        play();
    });

    //自动播放
    function autoplay(){
        index++;
        if( index <0 ){
            index  = 3;
        }else if( index >3 ){
            index = 0;
        }
        play();
    }
    timer = setInterval(autoplay,1500);



})



        

