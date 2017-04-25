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