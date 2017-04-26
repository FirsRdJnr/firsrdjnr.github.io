
// Touch listener
// -------------------------------------------------------------------------------

var listener = 'click';
    if ('ontouchstart' in window || window.navigator.maxTouchPoints) {
        listener = 'touchstart';
    }



// Top row drop down -- game-info
// -------------------------------------------------------------------------------

function topRowGameInfo() {
    $('.tile.top-row').on('click', function() {

        $('.tile__info.top-row').toggleClass('top-row--open');
        $('.game-tiles__columns').toggleClass('info-open');
        $('.tile.selected').toggleClass('info-open');
    });
}



// Top row drop down -- game-info
// -------------------------------------------------------------------------------

function infoNav() {
    $('.tile__info--nav li').on('click', function() {

        var tab_id = $(this).attr('data-tab');

        $('.tile__info--nav li').removeClass('selected');
        $('.tab-content').removeClass('selected');

        $(this).addClass('selected');
        $("#"+tab_id).addClass('selected');
    });


}


// Change preview image
// -------------------------------------------------------------------------------

function changePreviewImage() {
    $('.tile__info__bonus .icon').on('click', function() {

        var images = [
            'info-game-play.jpg',
            'info-gamble.jpg',
            'info-stacked-wilds.jpg',
            'info-expanding-wilds.jpg',
            'info-colosol-wilds.jpg'
        ];
        var content = ('<div style="background-image: url(/assets/img/game-info/' + images[Math.floor(Math.random() * images.length)] + ')"></div>')
        $('.tile__info__bonus--content').html(content);

    });
}




// Load functions
// -------------------------------------------------------------------------------

$(document).ready(function(){
    topRowGameInfo();
    infoNav();
    changePreviewImage();

    (function() {
      $(function() {
        var odometer, value;
        odometer = $('.odometer');
        button = $('.tile.top-row');
        value = +odometer.text();
        return button.on('click', function() {
          value += 4425825;
          return odometer.html(value);
        });
      });

    }).call(this);

});

$(window).resize(function() {
});

$(window).scroll(function(){
});
