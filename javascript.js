//bagian menu
var homeButton = $(".home-button");
var menu = $("nav .menu ul");

function klikMenu(){
    homeButton.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}
$(document).ready(function(){
    var width = $(window).width();
    if(width < 990){
        klikMenu();
    }
})

//ceki ceki lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.logobesar").show();
            $("nav img.logobesar").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.logobesar").show();
            $("nav img.logobesar").hide();
        }
    })
});