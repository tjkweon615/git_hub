
$(document).ready(function(){
    menu()
    init()
    slide()
    tab()
    popup()
})
function menu(){
    //$("#num1").hover(function(){
        //$(this).children(".lnb").stop().slideToggle(100)
    //})

    //$("#num2").hover(function(){
        //$(this).children(".lnb").stop().slideToggle(100)
    //})

    //$("#num3").hover(function(){
        //$(this).children(".lnb").stop().slideToggle(100)
    //})

    //$("#num4").hover(function(){
      //  $(this).children(".lnb").stop().slideToggle(100)
    //})
    var idx=0
    $(".gnb>li").hover(
        function(){
            idx=$(this).index()
            //console.log(idx)
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()
            //gnb 하위 li 중에서 idx번재 내부에서 lnb 찾는다.
            //find 는 지정한 요소의 하위 영역에서 뭘 찾을때... 사용한다.
        },
        function(){
            
            //console.log(idx)
            $(".lnb").stop().slideUp()
        }

    )
}
var idx=0
function init(){//initialize
    for(var i=0; i<=2; i++){
        $("#slide_contents>img").eq(i).hide()
    }
    $("#slide_contents>img").eq(0).show()
}

function slide(){
    setInterval(slide_fade,3000)

}

var slideIndex=0
function slide_fade(){
    
    //fadein, fadeOut
    //fadeOut 부터... 그 다음 fadeIn
    $("#slide_contents>img").eq(slideIndex).fadeOut(1000)
    
    
    
    if(slideIndex==2){
        slideIndex=0
        $("#slide_contents>img").eq(0).fadeIn(1000)
    }else{
        $("#slide_contents>img").eq(slideIndex+1).fadeIn(1000)
        slideIndex++
    }
    //초기 세팅 : 이미지를 다 숨기고 , 0번째만 보여진 상태
    //함수를 실행후 3초후 
    //0번째 이미지가 사리지고(fadeOut), 1번재 이미지가 나오고(fadeIn)
    //3초뒤에
    //1번째 이미지가 사리지고(fadeOut), 2번재 이미지가 나오고(fadeIn)
    //3초뒤에
    //2번째 이미지가 사리지고(fadeOut), 0번재 이미지가 나오고(fadeIn)
    //무한 반복..
    
    
    
    

}
function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(1).hide();
        $(".tab_contents>div").eq(0).show();
    })
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(1).show();
        $(".tab_contents>div").eq(0).hide();
    })    

}
function tab_advanced(){
    var idx=0
    $(".tab_btn>a").click(function(){
        idx=$(this).index()
        //alert(idx)//0,1
        $(".tab_contents>div").hide()
        //탭컨탠츠 밑에 있는  div 다 숨긴다.
        $(".tab_contents>div").eq(idx).show()
        ////탭컨탠츠 밑에 있는  div중에 idx번째 를 보여준다.
    })
}

function popup(){
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()    
    })
}   
