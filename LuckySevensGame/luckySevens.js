function playGame() {
	var begin = Number(document.forms["luckySevens"]["begin"].value);
	if (begin <= 0) {
		alert("Starting bet must be greater than zero.");
		document.forms["luckySevens"]["begin"].value = "";
		document.forms["luckySevens"]["begin"].focus();
		return false; 
	}
	var winArray = [begin];
	var rollCounter = 0;
	for (var money = begin; money >= 1; rollCounter++) {
		dieOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dieTwo = Math.ceil(Math.random() * (1 + 6 - 1));
		if (Number(dieOne + dieTwo) == 7) {
			money += 4;
			winArray[winArray.length] = money;
		} else {
			money -= 1;
			winArray[winArray.length] = money;
		}
	}

	var max = 0;
	for (var indexCounter = 0; indexCounter < winArray.length; indexCounter++) {
		if (winArray[indexCounter] > max) {
			max = winArray[indexCounter];
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("bet").innerText = ("$" + begin.toFixed(2));
	document.getElementById("rolls").innerText = rollCounter;
	document.getElementById("high").innerText = ("$" + max.toFixed(2));
	document.getElementById("count").innerText = winArray.indexOf(max);
	document.getElementById("submitButton").innerText = "Play Again";
	document.forms["luckySevens"]["begin"].focus();
	
	return false;
}