function generateHoursHTML(index){

	var hourBlock = "<div class='hour-block col-sm-3 col-md-2'>" +
		"<div class='time' id='time-" + index + "'></div>" +

		"<div class='conditions' id='conditions-" + index + "'></div>" +
		"<div class='temp' id='temp-" + index + "'></div>" +
		"<div class='humidity' id='humidity-" + index + "'>Humidity: </div>" +
		"<div class='rain' id='rain-" + index + "'>Rain: </div>" +
	"</div>";

	document.getElementById("hour-bar").innerHTML += hourBlock;
}

function generateHourBlock(hourData, index){

	//Render Time
	var timeBlock = document.getElementById("time-" + index);
	var dateTime = new Date(hourData.datetimeStr);
	timeBlock.innerHTML += dateTime.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit', hour12: false });

	//Temperature
	var temperatureBlock = document.getElementById("temp-" + index);
	temperatureBlock.innerHTML = hourData.temp + '°C';

	//Humidity
	var humidityBlock = document.getElementById("humidity-" + index);
	humidityBlock.innerHTML += hourData.humidity + '%';

	//Rain
	var rainBlock = document.getElementById("rain-" + index);
	rainBlock.innerHTML += hourData.precip + 'mm';

	//Rain
	var conditionsBlock = document.getElementById("conditions-" + index);
	conditionsBlock.innerHTML += hourData.conditions;

}
