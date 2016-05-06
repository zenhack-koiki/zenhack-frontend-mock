$(function() {

	// Scroll
  var time = 400;

  // Get all of anchor link
  $('a[href^=#]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // Close humberget button
    $('nav').toggleClass('opened');
    $('.rentagle1').toggleClass('rentagleClick1');
    $('.rentagle2').toggleClass('rentagleClick2');
    $('.rentagle3').toggleClass('rentagleClick3');
    return false;
  });

  // Delayload
  var setElm = $('.article > .gridmaster > .grid '),
  		delayTime = 600;

  $(window).load(function(){
  	setElm.each(function(i){
  		$(this).delay(i * delayTime).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'}, 1000);
  	});
  });

  //FastClick load
	if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
	}

	//Lazyload load
  $("img.lazyload").lazyload({
  	effect: "fadeIn",
  	effect_speed: 500
  });
});