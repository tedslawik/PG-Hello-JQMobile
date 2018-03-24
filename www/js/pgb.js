function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	interests();
}

function interests() {

	info = 
			'Tutaj jest moje moja funkcja interests w pliku pgb.js'<br>';

	document.getElementById("interests").innerHTML = info;	
}