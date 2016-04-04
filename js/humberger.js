$(function() {
		$('.humberger').hover(
		    function(){
					$('.rentagle2,.rentagle3').css({
					  width: '40px',
					  left:'0px'
					});
		    },function(){
					$('.rentagle2,.rentagle3').css({
					  width: '20px',
					  left:'10px'
					});
		    }
		);
	$('.humberger').click(
    function(){
    	 $("nav").toggleClass("opened");
       $(".rentagle1").toggleClass("rentagleClick1");
       $(".rentagle2").toggleClass("rentagleClick2");
       $(".rentagle3").toggleClass("rentagleClick3");
    }
	);
});