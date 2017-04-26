var give = $('.newcalc__segment.give .newcalc__amount span').html().slice(1);
$('.newcalc__segment.give .newcalc__marker').width(give + '%');

var Val = {
    $el: $('#depositVal'),
};

var changeValue = function(amount) {
    var v = parseInt(Val.$el.val().slice(1), 10);
    Val.$el.val('£' + (v+amount));
    Val.$el.trigger('change');
}

$('.right').on('click', changeValue.bind(this, 10));
$('.left').on('click', changeValue.bind(this, -10));

Val.$el.on('change', function() {
    var updated = $(this).val().slice(1);

    if (updated > 100) {
        var limitVal = 100;
        var totalVal = parseInt(limitVal) + parseInt(updated);

        $('.newcalc__segment.give .newcalc__amount span').text('£' + limitVal);
        $('.newcalc__segment.play .newcalc__amount').text('£' + totalVal);
    } else {
        $('.newcalc__error').addClass('hide');
        $('.newcalc__segment.give .newcalc__amount span').text('£' + updated);
        $('.newcalc__segment.give .newcalc__marker').width(updated + '%');
        $('.newcalc__segment.play .newcalc__amount').text('£' + updated*2);
        $('.newcalc__segment.give .newcalc__marker').removeClass('hit');
    }

    if (updated >= 100 ) {
        $('.newcalc__segment.give .newcalc__marker').addClass('hit');
        $('.newcalc__error').removeClass('hide');
    }

})
