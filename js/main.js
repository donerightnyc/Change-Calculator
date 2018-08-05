function moneyBack(itemPrice, billGiven) {

	let fifties = 0;
	let tens = 0;
	let fives = 0;
	let ones = 0;
	let quarters = 0;
	let dimes = 0;
	let pennies = 0;
	let twenties = 0;
	let nickel = 0;
	let returnedMoney = "";
  let change = billGiven - itemPrice;

 if (change >= 50) {
	  fifties = fifties + 1;
		change = change - 50;
		returnedMoney = returnedMoney + fifties + " $50 bill, ";

 } if (change >= 20) {
	  twenties = Math.floor(change /20);
		change = change -(twenties * 20)
			if (twenties >= 2) {
				returnedMoney = returnedMoney + twenties + " $20 bills, ";
			} else {
				returnedMoney = returnedMoney + twenties + " $20 bill, ";
			}

	} if (change >= 10) {
		  tens = Math.floor(change /10);
			change = change - (tens * 10);
			returnedMoney = returnedMoney + tens + " $10 bill, ";

	} if (change >= 5) {
		  fives = Math.floor(change / 5);
			change = change - (fives * 5);
			returnedMoney = returnedMoney + fives + " $5 bill, ";

	} if (change >= 1) {
		  ones = Math.floor(change / 1);
			change = change -(ones * 1);
			if (ones >= 2) {
				returnedMoney = returnedMoney + ones + " $1 bills, ";
			} else {
				returnedMoney = returnedMoney + one + " $1 bill, "
			}

	} if (change  >= 0.25) {
		  quarters = Math.floor(change / 0.25);
			change = change - (quarters * 0.25);
		if (quarters >= 2) {
			returnedMoney = returnedMoney + quarters + " quarters, ";
		} else {
			returnedMoney = returnedMoney + quarters + " quarter, "
		}

	} if (change >= 0.10) {
		  dimes = Math.floor(change / 0.10);
			change = change - (dimes * 0.10);
			if (dimes >= 2) {
				returnedMoney = returnedMoney + dimes + "  dimes, ";
			} else  if (dimes === 1){
				returnedMoney = returnedMoney + dimes + " dime, "
		}

	} if (change >= 0.05) {
		  nickles = Math.floor(change / 0.05);
			change = change - (nickles * 0.05);
			returnedMoney = returnedMoney + nickles + " nickle, ";

	} if (change >= 0.01) {
	   pennies = Math.ceil(change / 0.01);
		 returnedMoney = returnedMoney + pennies + ' pennies  '
	}

	returnedMoney = returnedMoney.slice(0, -2);

	let returnedMessage = 'Your change is: ' + returnedMoney;

	document.getElementById('answerMessage').innerHTML = returnedMessage;

}
