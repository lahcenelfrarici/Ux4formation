$("#navbarNavDropdown .nav-item").hover(
    function () {
      $(this).addClass("hover-stable-line");
    },
    function () {
      $(this).removeClass("hover-stable-line");
    }
  );
   // HEADER SEARCH
   $("header .search-btn").on("click", function () {
    $("header .search--bar").slideToggle();
    $(".search--bar input").focus();
  });

  $("header .search--bar button").on("click", function (e) {
    e.preventDefault();
    $("header .search--bar").slideToggle();
  });
  var headerHeight = $('.header-transparent').outerHeight();

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var $mainMenu = $('.custom-header');

    if (scrollTop > headerHeight) {
      $mainMenu.addClass('is-sticky').css({
        'position': 'fixed',
        'width': '100%', // Adjust width as needed
        'left': '0',
        'top': '0'
      });
    } else {
      $mainMenu.removeClass('is-sticky').removeAttr('style');
    }
  });
    // Show the preloader for 3 seconds
    setTimeout(function() {
      // Hide the preloader
      $('#preloader').fadeOut('slow', function() {
          // Show the main content
          $('#content').fadeIn('slow');

          // Allow scrolling again
          $('body').css('overflow', 'auto');
      });
  }, 3000); // 3 seconds delay
   // Initialize the Bootstrap carousel with autoplay and interval
   $('#carouselExampleCaptions').carousel({
    interval: 3000, // 3 seconds interval
    pause: 'hover'  // Pause the carousel on hover
  });

  // Add animation to the carousel captions when the slide changes
  $('#carouselExampleCaptions').on('slide.bs.carousel', function (e) {
    var $nextSlide = $(e.relatedTarget); // The slide being transitioned to
    var $caption = $nextSlide.find('.carousel-caption');

    // Add animation class
    $caption.addClass('animate__animated animate__fadeInUp');

    // Remove the animation class after the animation completes (optional)
    $caption.one('animationend', function () {
      $caption.removeClass('animate__animated animate__fadeInUp');
    });
  });