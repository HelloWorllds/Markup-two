$(document).ready(function() {

	$.stellar({
		responsive: true,
		horizontalOffset: 40
	});

	$("#owl").owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		},
		navText: ""
	});

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	function jResize() {
		$(".join").css("min-height", $(window).height());
	};
	jResize();
	$(window).resize(function() {
		jResize()
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	})).eq(0).addClass("active");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	
	
});

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_right").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomIn", "fadeOut");
});