//smooth scroll to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("#loading").delay(600).fadeOut("fast");


/*
//make button appear when at bottom of page
$(window).scroll(function() {   
	if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
	 $(".paginate").removeClass("animated fadeOutDownBig");
	 $(".paginate").addClass("animated fadeInUpBig");
	 $(".paginate").show();
	}
});

//make button hide when scrolling back up
$(window).scroll(function() {   
	if($(window).scrollTop() + $(window).height() < $(document).height() - 250) {
		$(".paginate").removeClass("animated fadeInUpBig");
		$(".paginate").addClass("animated fadeOutDownBig");
	}
});
*/

setTimeout(function() {
  		$(".paginate").show();
}, 2000);