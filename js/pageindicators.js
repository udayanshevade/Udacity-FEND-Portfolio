var lastScrollTop = 0;
var delta = 1;

// sets var and checks if user has scrolled
var didScroll = false;
$(window).scroll(function(event){
  didScroll = true;
});

$(window).on('load', function() {
  downArrowToggle();
});

// run hasScrolled if didScroll is true
setInterval(function(){
  if (didScroll){
    downArrowToggle();
    didScroll = false;
  }
}, 50);

// responds to user scrolling
// header retract function
function downArrowToggle(){
  var scrolled = $(this).scrollTop();
  if (Math.abs(lastScrollTop - scrolled) <= delta) {
    return;
  }

  if (scrolled < 80) {
    $("footer").removeClass("invisible");
  }

  else if (scrolled > lastScrollTop) {
    // scrolling down
    $("footer").addClass("invisible");
  }

  lastScrollTop = scrolled;
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});