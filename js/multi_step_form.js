var count = 0;

function validation(event) {
	var radio_check = document.getElementsByName('favouritePet');
	var input_field = document.getElementsByClassName('text_field');
	var text_area = document.getElementsByTagName('textarea');

	if (radio_check[0].checked == false && radio_check[1].checked == false) {
		var y = 0;
	} else {
		var y = 1;
	}
	
	for (var i = input_field.length; i > count; i--) {
		if (input_field[i - 1].value == '' || text_area.value == '') {
			count = count + 1;
		} else {
			count = 0;
		}
	}
	if (count != 0 || y == 0) {
		alert("Wszystkie pola są wymagane"); 
		event.preventDefault();
	} else {
		return true;
	}
}

function next_step1() {
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("active2").style.color = "red";
}

function prev_step1() {
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "none";
	document.getElementById("active1").style.color = "red";
	document.getElementById("active2").style.color = "gray";
}

function next_step2() {
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("active3").style.color = "red";
}

function prev_step2() {
	document.getElementById("third").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("active2").style.color = "red";
	document.getElementById("active3").style.color = "gray";
}