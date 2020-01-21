 $(document).ready(function(){
          function nextAni(){
       $(".first").not(":animated").animate({"margin-top":"-100%"}, 300, function(){
           $(".first li").eq(0).appendTo($(".first"));
           $(".first").css("margin-top", "0px");
       });
   } 
   var intv = setInterval(function(){
        nextAni();
    }, 2900);
        $(".m2").click(function(){
            $(".sub2").slideToggle(500).css("background","rgba(255,255,255,0.4)");
        });
//        $(".sub2 li").click(function(){
//            $(".sub2 li a").css("color", "black"); 
//        });
//        $(".gnb li.m").click(function(){
//            $(".gnb li a.ma").css({"color":"black"}); 
//        });
       
        
    });