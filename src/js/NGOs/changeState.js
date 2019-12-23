function changeState(name)	{
	var elements = document.getElementsByClassName('box');
//	var j = 0;
	for (var i = elements.length - 1; i >= 0; i--) {
		if(elements[i].dataset.state!=name)
			elements[i].style.display = "none";
		else	{
			elements[i].style.display = "block";
//			j++;
		}
	}
//	document.getElementById("numberOfPages").innerHTML = "Showing " + j + " results";
	var check = document.getElementById('check');
	check.click();
	if(window.innerWidth<700)
		formHandleClose();
	document.getElementById("stateName").innerHTML = name;
	window.scrollTo(0, 400);
}
/*
function formHandle(form)	{
	var selected = form.States.value;
	changeState(selected);
}
*/
function formHandle()	{
	document.getElementById("leftleft").style.display = "inline";
	document.getElementById("leftleft").style.width = "100%";
	document.getElementById("leftright").style.display = "none";
	document.getElementsByClassName('rightcolum')[0].style.display = "none";
}

function formHandleClose()	{
	document.getElementById("leftleft").style.display = "none";
	document.getElementById("leftleft").style.width = "0%";
	document.getElementById("leftright").style.display = "inline";
	document.getElementsByClassName('rightcolum')[0].style.display = "inline";
	window.scrollTo(0, 400);
	var check = document.getElementById('check');
	check.click();
}