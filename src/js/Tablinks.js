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
	elmnt.style.backgroundColor = "#483D8B";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
	var i, tab2content, tab2links;
	tab2content = document.getElementsByClassName("tab2content");
	for (i = 0; i < tab2content.length; i++) {
		tab2content[i].style.display = "none";
	}
	tab2links = document.getElementsByClassName("tab2links");
	for (i = 0; i < tab2links.length; i++) {
		tab2links[i].className = tab2links[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();
