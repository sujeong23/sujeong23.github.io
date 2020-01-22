  $(document).ready(function(){
            $(".xi-apps").click(function(){
               $("#gnb").fadeIn(500) 
            });
            $(".xi-close").click(function(){
               $("#gnb").fadeOut(500)
            });
            $(".sub2").click(function(){
               $(".sub_s").slideToggle(500); 
            });
            $(".sub_s li").click(function(){
               $(this).find("a").css("color", "gray"); 
            });
        });