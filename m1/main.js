        $(document).ready(function(){
         $(".xi-bars").click(function(){
            $(".menu").slideToggle(500);
                     });
        $(".xi-profile-o").click(function(){
            $(".login").slideToggle(500);
        });
        $(".xi-close-circle-o").click(function(){
            $(".login").slideUp(500);
        });
        function nextAni(){
        $(".slide_box").not(":animated").animate({"margin-left":"-100%"}, 300, function(){
           $(".slide_box li").eq(0).appendTo($(".slide_box"));
           $(".slide_box").css("margin-left", "0px");
       });
   } 
   var intv = setInterval(function(){
        nextAni();
    }, 2900);  
         $(".sub_m1").click(function(){
            $(".sub1-1").slideToggle(500).css("color", "black");
         });
        $(".sub_m2").click(function(){
            $(".sub2-1").slideToggle(500).css("color", "black");
         });
        $(".sub_m3").click(function(){
            $(".sub3-1").slideToggle(500).css("color", "black");
         });
        $(".sub_m4").click(function(){
            $(".sub4-1").slideToggle(500).css("color", "black");
         });
        

                    });