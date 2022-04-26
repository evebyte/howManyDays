// how many seconds between two dates
function howManySeconds(firstDate, secondDate) {
	let firstDateInSeconds = firstDate.getTime() / 1000;
	let secondDateInSeconds = secondDate.getTime() / 1000;
	let difference = secondDateInSeconds - firstDateInSeconds;
	return difference;
}

// how many seconds test
console.log(howManySeconds(new Date("2020-01-01"), new Date("2020-01-02")));

// how many minutes between two dates
function howManyMinutes(firstDate, secondDate) {
	firstDate = new Date(firstDate);
	secondDate = new Date(secondDate);
	let difference = secondDate - firstDate;
	let minutes = Math.floor(difference / 1000 / 60);
	return minutes;
}

// how many minutes test
console.log(howManyMinutes("2020-01-01", "2020-01-02"));

// how many hours between two dates
function howManyHours(firstDate, secondDate) {
	firstDate = new Date(firstDate);
	secondDate = new Date(secondDate);
	let difference = secondDate - firstDate;
	let hours = Math.floor(difference / 1000 / 60 / 60);
	return hours;
}

// how many hours test
console.log(howManyHours("2020-01-01", "2020-01-02"));

//  how many days between two dates
function howManyDays(firstDate, secondDate) {
	firstDate = new Date(firstDate);
	secondDate = new Date(secondDate);
	let days = Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
	return days;
}

// how many days test
console.log(howManyDays("09/14/2019", "04/25/2022"));

// how many months between two dates
function howManyMonths(firstDate, secondDate) {
	firstDate = new Date(firstDate);
	secondDate = new Date(secondDate);
	let months = Math.round(
		(secondDate - firstDate) / (1000 * 60 * 60 * 24 * 30)
	);
	return months;
}

// how many months test
console.log(howManyMonths("09/14/2019", "04/25/2022"));

// how many years between two dates
function howManyYears(firstDate, secondDate) {
	firstDate = new Date(firstDate);
	secondDate = new Date(secondDate);
	let years = Math.round(
		(secondDate - firstDate) / (1000 * 60 * 60 * 24 * 365)
	);
	return years;
}

// how many years test
console.log(howManyYears("09/14/2019", "04/25/2022"));

// #########################################################################

// let firstDate = document.getElementById("firstDate");
// let secondDate = document.getElementById("secondDate");

// calculate the results onclick of submit button
function calculate() {
	// get the values from the input fields
	let firstDate = document.getElementById("firstDate").value;
	let secondDate = document.getElementById("secondDate").value;

	// if firstDate or secondDate is empty, alert the user
	if (firstDate == "" || secondDate == "") {
		alert("Please enter two dates.");
	} else {
		// if both dates are not empty, calculate the results

		// convert the dates to Date objects
		firstDate = new Date(firstDate);
		secondDate = new Date(secondDate);

		// get the difference between the two dates
		let difference = secondDate - firstDate;

		// convert the difference to seconds
		let seconds = Math.floor(difference / 1000);

		// convert the difference to minutes
		let minutes = Math.floor(difference / 1000 / 60);

		// convert the difference to hours
		let hours = Math.floor(difference / 1000 / 60 / 60);

		// convert the difference to days
		let days = Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));

		// convert the difference to months
		let months = Math.round(
			(secondDate - firstDate) / (1000 * 60 * 60 * 24 * 30)
		);

		// convert the difference to years
		let years = Math.round(
			(secondDate - firstDate) / (1000 * 60 * 60 * 24 * 365)
		);

		// toggle the visibility of the results
		document.getElementById("result").classList.remove("hidden");

		// display the results
		document.getElementById("days").innerHTML = days;
	}
}
