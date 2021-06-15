// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/pc.png", 
	 		 "images/pc1.png", 
			 "images/pc2.png",
			 "images/pc3.png",
			 "images/pc4.png",
	 			], 	{duration: 3200, fade: 1300});
		});
})