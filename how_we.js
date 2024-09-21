
$(document).ready(function () {
    $('.brand-carouselhow').owlCarousel({
    dots: false,
    autoplayTimeout: 700,
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
});
