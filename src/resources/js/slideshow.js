$(function() {
  "use strict";

	$('.slideshow > .slides > .slide:first').addClass('active').animate({ opacity: 1 },200);
	$('.slideshow-nav li:first').addClass('active');

	function rotate(index) {
		$('.slideshow > .slides > .slide.active').removeClass('active').animate({ opacity: 0 },200, function() {
			$('.slideshow > .slides > .slide:eq(' + index + ')').addClass('active').animate({ opacity: 1 },200);
		});
		$('.slideshow-nav li.active').removeClass('active');
		$('.slideshow-nav li:eq(' + index + ')').addClass('active');
	}

	var cycler = setInterval(function() {
		var $next = $('.slideshow > .slides > .slide.active').next();

		if ($next.length === 0) {
      $next = $('.slideshow > .slides > .slide:first');
    }

		rotate($next.index());
	}, 8000);

	$('.slideshow-nav li').click(function() {
		clearInterval(cycler);
		var index = $(this).index();
		rotate(index);
		return false;
	});
	$('.slideshow').on('swiperight',function(){
		clearInterval(cycler);
		var $next = $('.slideshow > .slides > .slide.active').next();
		if ($next.length === 0) {
      $next = $('.slideshow > .slides > .slide:first');
    }
		rotate($next.index());
	});
	$('.slideshow').on('swipeleft',function(){
		clearInterval(cycler);
		var $prev = $('.slideshow > .slides > .slide.active').prev();
		if ($prev.length === 0) {
      $prev = $('.slideshow > .slides > .slide:last');
    }
		rotate($prev.index());
	});
});
