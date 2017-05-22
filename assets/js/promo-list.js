// mobile nav
// -------------------------------------------------------------------------------

function nav() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".promos-0522__active, .promos-0522__available").not(tab).css("display", "none");

        if ($(window).width() > 800) {
           $(".promos-0522__active, .promos-0522__available").not(tab).css("display", "flex");
        }
        $(tab).fadeIn();
    });
}

// Load functions
// -------------------------------------------------------------------------------

$(document).ready(function(){
    nav();

});
