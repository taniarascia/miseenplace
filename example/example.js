$(document).ready(function () {
  $(document).on("scroll", onScroll);

  // Smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 300, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

// Active scroll
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('aside a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('aside nav ul li a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  // Toggle nav
  $('.toggle-nav').click(function (e) {
    if ($('.toggle-nav').hasClass('active')) {
      $('.toggle-nav').removeClass('active');
    } else {
      $('.toggle-nav').addClass('active');
    }
    $('aside nav').toggle();
    e.stopPropagation();
  });
  $('html').click(function () {
    $('aside nav').hide();
    $('.toggle-nav').removeClass('active');
  });
});
