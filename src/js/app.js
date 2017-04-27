// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/TweenMax.min.js

sayHello();
$(document).ready(function(){
	var windowWidth = $(window).width(),
	h1 = $(".h1-js"),
	headerDecor = $(".decor-js"),
	headerImg = $(".img-js"),
	headerDecorLine = $(".decor-line-js");

	$(window).resize(function(){
		windowWidth = $(window).width();
	});

	if(windowWidth >=992){

		var	tl = new TimelineMax();

		tl
		.to(h1, .5, {opacity: 1}, .5)
		.to(headerImg, .5, {opacity: 0.1}, "=+0.15")
		.to(headerDecorLine, .5, {width: 270}, "=+0.15")
		.to(headerDecor, .5, {opacity: 1}, "=-0.25")	

	}else{
		h1.css("opacity", "1");
		headerDecor.css("opacity", "1");
		headerImg.css("opacity", "0.1");
		headerDecorLine.css({"opacity": "1", "width":"270px"});
	};

	if(windowWidth >=1024){
		var servicesTl = new TimelineMax()


		//$(".services-item-js").hover(function(e) {
		//	var servicesItem = $(this).find(".services-item-js"),
		//	servBotline = $(this).find(".serv-botline-js"),
		//	servTopline = $(this).find(".serv-topline-js"),
		//	servBg = $(this).find(".serv-bg-js"),
		//	servletter = $(this).find(".serv-letter-js"),
		//	servText = $(this).find(".serv-text-js");
		//	if (e.type == "mouseenter") {
		//		servicesTl
		//		.to(servBg, .2, {height	: 100 + "%", autoAlpha:1})
		//		.add("bg")
		//		.to(servBotline, .10, {width: 100 + "%"}, "bg-=.2")
		//		.to(servletter, .13, {left: 5}, "bg-=.10")
		//		.to(servText, .13, {paddingLeft: 70}, "bg-=.10")
		//		.to(servTopline, 0.2, {width:92}, "bg-=.1")
		//	}
		//	else { 
		//		servicesTl
		//		.to(servBg, .1, {height	: 0 + "%"})
		//		.add("bg")
		//		.to(servTopline, .1, {width:0}, "bg-=.03")
		//		.to(servletter, .1, {left: 50 + "%"}, "bg-=.04")
		//		.to(servText, .1, {paddingLeft: 0}, "bg-=.04")
		//		.to(servBotline, .1, {width: 0 + "%"}, "bg-=.08")
		//	}
		//});



	};
	//1024 end

	AOS.init({
		offset: 250,
		delay: 100,
		disable: function () {
			var maxWidth = 1024;
			return window.innerWidth < maxWidth;
		}
	});





// ready
});