$(function () {
  $(".order").scroll(function () {
    console.log('w');
    if ($(".order").scrollLeft() > 0) {
      $(".order__column--left").css({position: "fixed", marginLeft: "-150px"});
      $(".order__wrapper").css("paddingLeft", "150px");
    }
  });
});