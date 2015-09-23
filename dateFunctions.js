/* 
   Author: Peter Nikolauson
   Created: 20150608
   Purpose: Handle general date manipulations. This started from a college project and is being expanded as needs arise for standard date uses.

   Variables
   checkDay: A date object containing the given date
   year: The 4-digit year value of the given date
   day: December 31 in the year of the given date
   dayCount: The number of days between New Year's Eve and the given date
*/

function endYearDayCount(date) {
   var year=date.getFullYear();
   var day=new Date("December, 31, 2014");
   day.setFullYear(year);
   var dayCount = (day-date)/(1000*60*60*24);
   /* round to whole number */
   dayCount = Math.round(dayCount);
   return dayCount;
} /* use 'name of date value' = new Date() to get the passed date value in main web page.*/

function getMonthName(monthNum){
var month = new Array();
month[0]= "";
month[1] = "January";
month[2] = "February";
month[3] = "March";
month[4] = "April";
month[5] = "May";
month[6] = "June";
month[7] = "July";
month[8] = "August";
month[9] = "September";
month[10] = "October";
month[11] = "November";
month[12] = "December";
return month[monthNum]; 
} /* use 'name of date value' = new Date() to get the passed date value in main web page.*/

function getDayName(date){
var day = new Array();
day[0]=  "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
return day[date.getDay()]
} /* use 'name of date value' = new Date() to get the passed date value in main web page.*/

function getDayNumber(date){
	var day = date.getDay();
	if (day < 10)
	{day = '0' + day;}
	return day;
}