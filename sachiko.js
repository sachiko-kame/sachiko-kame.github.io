$(function() {
    $('#sachiko-main-img').ready(function() {
        $('[data-toggle="popover"]').popover();
    });

    $('#oldSachiko-icon').click(function() {
      const oldSachikoImage = 'images/old_sachiko.png';
      const nowSachikoImage = 'images/sachiko.png';
        if ($('#sachiko-main-img').attr('src') == nowSachikoImage) {
            $('#sachiko-main-img').attr('src', oldSachikoImage);
        } else {
            $('#sachiko-main-img').attr('src', nowSachikoImage);
        }
    });
});