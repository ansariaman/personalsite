var $win = $(window);
var $stat = $(".lanuages-img"); // Change this to affect your desired element.

$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();
      	console.log(scrollTop);
        console.log(prev.top);
        if ( (scrollTop - prev.top) > -300) {
          $self.css('opacity', '1').addClass('animated fadeInLeft ');
        } else {
          console.log('n');
        }

    });
 console.log("scrooling");
}).scroll();
