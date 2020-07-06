function generateDayBlock(todayData){
	var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	var dateTime = new Date(todayData.datetimeStr);

	//Render Date
	var day = " " + dateTime.getDate();
	var month = dateTime.getMonth(); //Be careful! January is 0 not 1
	var year = dateTime.getFullYear();

	var dateString = DAYS[dateTime.getDay() - 1] +  day + " " + MONTHS[month] + " " + year;
	var dateBlock = document.getElementById("date");
	dateBlock.innerHTML += dateString;

	//Sunrise
	var sunriseBlock = document.getElementById("sunrise");
	var sunriseTime = new Date(todayData.sunrise);
	sunriseBlock.innerHTML += sunriseTime.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

	//Sunset
	var sunsetBlock = document.getElementById("sunset");
	var sunsetTime = new Date(todayData.sunset);
	sunsetBlock.innerHTML += sunsetTime.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

}
