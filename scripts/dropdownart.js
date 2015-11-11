function blocking(nr) {
	expandText = (document.getElementById(nr).style.display == 'none') ? 'block' : 'none';	
	document.getElementById(nr).style.display = expandText;
};

function button(nr) {
	innerText = (document.getElementById(nr).innerText == 'READ MORE') ? 'HIDE' : 'READ MORE';	
	document.getElementById(nr).innerText = innerText;
};