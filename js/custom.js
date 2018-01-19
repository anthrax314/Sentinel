jQuery(document).ready(function( $ ) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      
      $('#header').addClass('header-fixed');
    } else {
      
      $('#header').removeClass('header-fixed');
    }
  });
  $(".arrow").click(function() {
			$('html, body').animate({
				scrollTop: $("#next_section").offset().top + -100
			}, 500);
		});
		$(".sign_up").mouseover(function(){
			
        $(".cls-1").css("background-color", "#1c2836");
        });
  });
  