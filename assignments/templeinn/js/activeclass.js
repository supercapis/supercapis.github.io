$("#navbar a").click(function() {
    $(this).parent().addClass('selected').siblings().removeClass('selected');

});