function rapAnswers() {
	var getAnswers =document.getElementById("rappers");
	var userInput =getAnswers.options[getAnswers.selectedIndex].value;
if (userInput == "2") {
	document.getElementById("You Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("you Guessed It").style.visibility ="hidden";
} 
return false;
}



function apAnswers() {
	var aetAnswers =document.getElementById("appers");
	var lserInput =aetAnswers.options[aetAnswers.selectedIndex].value;
if (lserInput == "0") {
	document.getElementById("wou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("wou Guessed It").style.visibility ="hidden";
} 
return false;
}






function dapAnswers() {
	var setAnswers =document.getElementById("dappers");
	var cserInput =setAnswers.options[setAnswers.selectedIndex].value;
if (cserInput == "3") {
	document.getElementById("bou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("bou Guessed It").style.visibility ="hidden";
} 
return false;
}









function sapAnswers() {
	var petAnswers =document.getElementById("sappers");
	var pserInput =petAnswers.options[petAnswers.selectedIndex].value;
if (pserInput == "1") {
	document.getElementById("fou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("fou Guessed It").style.visibility ="hidden";
} 
return false;
}






function capAnswers() {
	var letAnswers =document.getElementById("cappers");
	var oserInput =letAnswers.options[letAnswers.selectedIndex].value;
if (oserInput == "3") {
	document.getElementById("dou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("dou Guessed It").style.visibility ="hidden";
} 
return false;
}






function tapAnswers() {
	var wetAnswers =document.getElementById("tappers");
	var wserInput =wetAnswers.options[wetAnswers.selectedIndex].value;
if (wserInput == "1") {
	document.getElementById("pou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("pou Guessed It").style.visibility ="hidden";
} 
return false;
}







function zapAnswers() {
	var zetAnswers =document.getElementById("zappers");
	var zserInput =zetAnswers.options[zetAnswers.selectedIndex].value;
if (zserInput == "0") {
	document.getElementById("zou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("zou Guessed It").style.visibility ="hidden";
} 
return false;
}





function bapAnswers() {
	var hetAnswers =document.getElementById("bappers");
	var hserInput =hetAnswers.options[hetAnswers.selectedIndex].value;
if (hserInput == "2") {
	document.getElementById("lou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("lou Guessed It").style.visibility ="hidden";
} 
return false;
}





function fapAnswers() {
	var vetAnswers =document.getElementById("fappers");
	var vserInput =vetAnswers.options[vetAnswers.selectedIndex].value;
if (vserInput == "3") {
	document.getElementById("aou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("aou Guessed It").style.visibility ="hidden";
} 
return false;
}






function lapAnswers() {
	var qetAnswers =document.getElementById("lappers");
	var qserInput =qetAnswers.options[qetAnswers.selectedIndex].value;
if (qserInput == "1") {
	document.getElementById("rou Guessed It!").style.visibility ="visible";
} else { 
    document.getElementById("rou Guessed It").style.visibility ="hidden";
} 
return false;
}




function me() {
	$('.js-you').text('Now youre learning Smart Ass!').css('color','blue')

}
me();

















$(function() {
var rappersDropdown = $('#rappers')
console.log(rappersDropdown);
var theSelectedRapper = $('#rappers').val();
console.log(theSelectedRapper);
rappersDropdown.change(function(event) {
console.log(event.currentTarget.value)
});
});