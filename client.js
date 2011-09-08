//Accelerometer Javascript example by @karlwestin, Nerd Communications, Berlin

// Firefox, works on desktop too
window.addEventListener("MozOrientation", updateText, true);

// Mobile Safari
window.addEventListener("devicemotion", updateText, true);

function updateText(e) {

	if(!!e.x)
		// Firefox
		updateCounter(e.x*10, e.y*10, e.z*10);
	else if (!!e.accelerationIncludingGravity)
		// Mobile Safari
		updateCounter(e.accelerationIncludingGravity.x, e.accelerationIncludingGravity.y, e.accelerationIncludingGravity.z);	
	else
		alert("you don't really support devicemotion, do you?");

}

function updateCounter(x, y, z) {
	document.getElementById("xAxis").innerHTML = x;
	document.getElementById("yAxis").innerHTML = y;
	document.getElementById("zAxis").innerHTML = z;
}
