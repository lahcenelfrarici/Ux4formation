$(document).ready(function () {
  $("#customers_work_1").owlCarousel({
    margin: 5,
    loop: true,
    dots: true,
    nav: true,
    items: 1,


    navText: ["<img src='./public/images/left-arrow-1.png'>", "<img src='./public/images/right-arrow-1.png'>"],

    responsive: {
      0: {
        items: 1
      },
      600: {

        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  var owl_work = $('#customers_work_1');
  var totalItems = owl_work.find('.item').length;
  var currentSlide = 1;

  function updateCounter() {
    $('.counter').text(currentSlide + ' of ' + totalItems);
  }
  var owl_work = $('#customers_work_1');
  var totalItems = owl_work.find('.item').length;
  var currentSlide = 1;

  function updateCounter() {
    $('.counter').text(currentSlide + ' of ' + totalItems);
  }

  owl_work.owlCarousel({
    loop: true,
    center: true,

    autoplayTimeout: 5000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      600: {

        items: 2
        
      },
      1000: {
        items: 1
      }
    }
  });

  let targetNumber = 30; // Set the target number you want to reach
  let speed = 50;        // Set the speed of the counter (in milliseconds)
  
  function countUp(element, target) {
    let current = 0;
    let increment = Math.ceil(target / (2000 / speed)); // Adjust increment based on speed

    let counterInterval = setInterval(function() {
      if (current < target) {
        current += increment;
        if (current > target) {
          current = target; // Make sure the count stops at the target number
        }
        $(element).text(current + " +");
      } else {
        clearInterval(counterInterval);
      }
    }, speed);
  }
  
  // Call the counter function
  countUp('.number', targetNumber);
    var owl = $('#customers-work');
    var totalItems = owl.find('.item').length;  // Number of total items
    var currentSlide = 1;

    // Initialize Owl Carousel with 1 item visible
    owl.owlCarousel({
        items: 1,  // Show 1 image at a time
        loop: true,
        margin: 10,
        nav: false,  // Disable default nav
        dots: false,  // Disable dots
        smartSpeed: 450
    });

    // Update counter on slide change
    function updateCounter() {
        $('.counter').text(currentSlide + ' of ' + totalItems);
    }

    // Custom Previous Button
    $('.prev-btn').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // Custom Next Button
    $('.next-btn').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Update counter when carousel changes
    owl.on('changed.owl.carousel', function (event) {
        currentSlide = event.item.index - event.relatedTarget._clones.length / 2 + 1;
        if (currentSlide > totalItems) {
            currentSlide = currentSlide - totalItems;
        }
        if (currentSlide <= 0) {
            currentSlide = totalItems + currentSlide;
        }
        updateCounter();
    });

    // Initial counter setup
    updateCounter();
});