let nav = document.getElementById('navigation')
window.onscroll = function() {
    nav.style.backgroundColor = '#F5F7FE'
};


        
$(document).ready(function(){
    $("#player-next-btn").click(function(){
        $("#player-info").fadeOut("fast")
        $("#academy-info").fadeIn("slow")
        $("#first-sec").removeClass("current-sec")
        $("#secound-sec").addClass("current-sec")
       
    })
    $("#academy-next-btn").click(function(){
        $("#academy-info").fadeOut("fast")
        $("#coach-info").fadeIn("slow")
        $("#secound-sec").removeClass("current-sec")
        $("#third-sec").addClass("current-sec")
   
    })
    $("#academy-prev-btn").click(function(){
        $("#academy-info").fadeOut("fast")
        $("#player-info").fadeIn("slow")
        $("#secound-sec").removeClass("current-sec")
        $("#first-sec").addClass("current-sec")
  
    })
    $("#coach-prev-btn").click(function(){
        $("#coach-info").fadeOut("fast")
        $("#academy-info").fadeIn("slow")
        $("#third-sec").removeClass("current-sec")
        $("#secound-sec").addClass("current-sec")
   
    })
    });



