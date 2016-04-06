$(function() {
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
});