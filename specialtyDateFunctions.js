/*
Author: Peter Nikolauson
Created: 20150615
Purpose: This will be expanded with useful editable date handling and time handling tasks. Bellow is a list of existing functions.

date: Is the variable object holding the current date information and time.
timeBasedGreetings: This is editable to provide messages on a web page based on the current time. This is a heavily simplified versions of the many scripts out there. Duplicate this for date based actions as well.
*/

var date = new Date();
/* use 'name of date value' = new Date() to get the passed date value in main web page.*/

function timeBasedGreeting(date){
	var time = date.getHours();
	if (time > 17) {document.write("Good Evening");}
	else if (time > 12) {document.write("Good Afternoon");}
	else if (time < 12) {document.write("Good Morning");}
}