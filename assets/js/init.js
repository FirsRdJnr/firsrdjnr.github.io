
// Touch listener
// -------------------------------------------------------------------------------

var listener = 'click';
    if ('ontouchstart' in window || window.navigator.maxTouchPoints) {
        listener = 'touchstart';
    }



// open side menu on mobile
// -------------------------------------------------------------------------------

function openMenu() {
    $('.mobile-nav').on(listener, function() {
        $('body').toggleClass('mobile-nav-open');
    });
}

// open commonui tab
// -------------------------------------------------------------------------------

function openCommonUi() {
    $('.common-ui__mobile-toggle').on('click', function() {

        $('.common-ui').toggleClass('common-ui__mobile-isOpen');

        if ($(this).html() === 'Menu') {
            $(this).text('Close');
        }
        else {
            $(this).text('Menu');
        }
    });
}





// Load functions
// -------------------------------------------------------------------------------

$(document).ready(function(){
    openMenu();
    openCommonUi();

    // $.get('templates/footernew.mustache', function(template) {
    //     var html = Mustache.render(template, {
    //       footernew: template
    //     });
    // }, 'html');

    // $.get('path/template.mustache', function (partialTemplate) {
    //   var html = Mustache.render(template, obj, {
    //     templateRef: partialTemplate
    //   });
    //
    //   // ...
    //
    // }, 'text');

});

$(window).resize(function() {
});

$(window).scroll(function(){
});
