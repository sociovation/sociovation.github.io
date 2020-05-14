/********************	slideshow	*****************/
var responsiveSlider = function() {
	var slider = document.getElementById("slider");
	var sliderWidth = slider.offsetWidth;
	var slideList = document.getElementById("slideWrap");
	var count = 1;
	var items = slideList.querySelectorAll("li").length;

	var wid = window.innerWidth;
	var fact = 1;
	if(wid>"1000")
		fact = 1.015;
	else
		fact = 1.001;

	window.addEventListener('resize', function() {
		sliderWidth = slider.offsetWidth;
	});

	var prevSlide = function() {
		if(count > 1) {
			count = count - 2;
			slideList.style.left = "-" + count * sliderWidth * fact + "px";
			count++;
		}
		else if(count = 1) {
			count = items - 1;
			slideList.style.left = "-" + count * sliderWidth * fact + "px";
			count++;
		}
	};

	var nextSlide = function() {
		if(count < items) {
			slideList.style.left = "-" + count * sliderWidth * fact + "px";
			count++;
			}
		else if(count = items) {
			slideList.style.left = "0px";
			count = 1;
		}
	};

	setInterval(function(){nextSlide()}, 5000);
};

window.onload = function() {
	responsiveSlider();
}
