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

/*****************************	Tablinks	****************************************/
//horizontal
function openPage(pageName,elmnt) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = "#aaa";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//vertical
function openCity(evt, cityName) {
	var i, tab2content, tab2links;
	tab2content = document.getElementsByClassName("tab2content");
	for (i = 0; i < tab2content.length; i++) {
		tab2content[i].style.display = "none";
	}
	tab2links = document.getElementsByClassName("tab2links");
	for (i = 0; i < tab2links.length; i++) {
		tab2links[i].className = tab2links[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();