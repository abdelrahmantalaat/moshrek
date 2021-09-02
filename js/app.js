let nav = document.getElementById('navigation')
window.onscroll = function() {
    nav.style.backgroundColor = '#F5F7FE'
};

$(document).ready(function(){
    $("#player-next-btn").click(function(){
        $("#player-info").fadeOut()
        $("#academy-info").fadeIn("slow")
    })
    $("#academy-next-btn").click(function(){
        $("#academy-info").fadeOut()
        $("#coach-info").fadeIn("slow")
    })
    $("#academy-prev-btn").click(function(){
        $("#academy-info").fadeOut()
        $("#player-info").fadeIn("slow")
    })
    $("#coach-prev-btn").click(function(){
        $("#coach-info").fadeOut()
        $("#academy-info").fadeIn("slow")
    })
    });



