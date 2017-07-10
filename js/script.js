$(window).on("load", function () {
  var makeScrollVertical = ($(window).outerHeight() - $(document).outerHeight() < 0) ? true : false;

  if (makeScrollVertical) {
    $(".ns-form__buttons").css({bottom: "20px"})
  }

  $(window).resize(function () {
    makeScrollVertical = ($(window).outerHeight() - $(document).outerHeight() < 0) ? true : false;
    if (makeScrollVertical) {
      $(".ns-form__buttons").css({bottom: "20px"});
    } else {
      $(".ns-form__buttons").css({bottom: "auto"});
    }
  });

  $(document).on("scroll", function () {
    var scrollingTop = ($(document).scrollTop() > 0) ? true : false;
    var scrollingLeft = ($(document).scrollLeft() > 0) ? true : false;
    if (scrollingTop) {
      $(".ns-form__buttons").css({bottom: 20 - $(document).scrollTop()});
    }

    if (scrollingLeft) {
      $(".ns-form__buttons").css({left: 20 + $(document).scrollLeft()});
      $(".ns-form__cell--caption").each(function (index, element) {
        var left = $(this).outerWidth() * (index + 1) - $(document).scrollLeft();
        $(this).css({left: left});
      });
    } else {
      $(".ns-form__cell--caption").css({position: "fixed"})
    }
  });
});

