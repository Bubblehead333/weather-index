function generateDayBlock(todayData)
{
	var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var dateTime = new Date(todayData.datetimeStr);

	//Render Date
	var day = " " + dateTime.getDate();
	var month = dateTime.getMonth(); //Be careful! January is 0 not 1
	var year = dateTime.getFullYear();

	var dateString = DAYS[dateTime.getDay() - 1] +  day + " " + MONTHS[month] + " " + year;
	var dateBlock = document.getElementById("date");
	dateBlock.innerHTML += dateString;


	var today = new Date();
	var minutes;
	if(today.getMinutes() < 10){
		minutes = "0" + today.getMinutes();
	} else {
		minutes = today.getMinutes();
	}

	var time = today.getHours() + ":" + minutes;
	document.getElementById("current-time").innerHTML = time;


	//Sunrise
	var sunriseBlock = document.getElementById("sunrise");
	var sunriseTime = new Date(todayData.sunrise);
	sunriseBlock.innerHTML += sunriseTime.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

	//Sunset
	var sunsetBlock = document.getElementById("sunset");
	var sunsetTime = new Date(todayData.sunset);
	sunsetBlock.innerHTML += sunsetTime.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

	//Symbols
	var temperatureSize = (todayData.temp / 30) * 100;
	if(temperatureSize < 0){temperatureSize = 0;}
	if(temperatureSize > 100){temperatureSize = 100;}

	var tempatureColour1 = "hsl(" + temperatureSize * 2 + ", 81%, 83%)";
	var tempatureColour2 = "hsl(" + (temperatureSize + 20) * 2 + ", 81%, 83%)";

	document.getElementById("phrase-header").style.backgroundImage = 'linear-gradient('+ tempatureColour2 + ', '+ tempatureColour1 + ' 100%)';

	var icons = document.getElementsByClassName("icon");

	for (var i = 0; i < 12; i++) {
		icons[i].style.backgroundImage = 'linear-gradient('+ tempatureColour1 + ', '+ tempatureColour2 + ' 100%)';
	}

	calculateShowSymbols(todayData);
}
