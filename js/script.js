$(function () {
  var buttonsPositionLeft = $(".ns-form__buttons").offset().left;
  var buttonsPositionTop = $(document).outerHeight() - $(".ns-form__buttons").outerHeight() - 220;
  if ($(document).scrollTop() > 0) {
    $(".ns-form__buttons").offset({
      top: buttonsPositionTop + $(document).scrollTop(),
      left: buttonsPositionLeft + $(document).scrollLeft()
    });
  }
  $(document).scroll(function () {
    if ($(document).scrollLeft() > 0 || $(document).scrollTop() > 0) {
      $(".ns-form__column--left").offset({top: 0, left: $(document).scrollLeft()});
      $(".ns-form__buttons").offset({
        top: buttonsPositionTop + $(document).scrollTop(),
        left: buttonsPositionLeft + $(document).scrollLeft()
      });
      $(".ns-form__cell--caption").each(function (index, element) {
        var left = $(this).outerWidth() * (index + 1);
        $(this).offset({top: $(document).scrollTop(), left: left});
      });
    }
  });
});
