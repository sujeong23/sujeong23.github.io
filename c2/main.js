$(document).ready(function(){
   function nextAni(){
       $(".slide_box").not(":animated").animate({"margin-left":"-1280px"}, 500, function(){
           $(".slide_box li").eq(0).appendTo($(".slide_box"));
           $(".slide_box").css("margin-left", "0px");
       });
   } 
   var intv = setInterval(function(){
        nextAni();
    }, 2900);  
    $(".item2").click(function(){
       $(".sub1").fadeToggle(300);
    });
    $(".item3").click(function(){
    $(".sub2").fadeToggle(300);
    });
});



