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

  $(document).scroll(function () {
    var scrollingTop = ($(document).scrollTop() > 0) ? true : false;
    var scrollingLeft = ($(document).scrollLeft() > 0) ? true : false;

    if (scrollingTop) {
      $(".ns-form__buttons").css({bottom: 20 - $(document).scrollTop()});
      $(".ns-form__cell--caption").each(function (index, element) {
        var left = $(this).outerWidth() * (index + 1);
        $(this).css({top: $(document).scrollTop(), left: left});
        // $(this).offset({top: $(document).scrollTop(), left: left});
      });
    }

    if (scrollingLeft) {
      $(".ns-form__column--left").css({left: $(document).scrollLeft()});
      // $(".ns-form__column--left").offset({top: 0, left: $(document).scrollLeft()});
      $(".ns-form__buttons").css({left: 20 + $(document).scrollLeft()});
    }
  });
});

