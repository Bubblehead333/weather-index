function generateHoursHTML(hourData, index)
{

	//temperature colour fill

	var temperatureSize = (hourData.temp / 30) * 100;
	if(temperatureSize < 0){temperatureSize = 0;}
	if(temperatureSize > 100){temperatureSize = 100;}

	var tempatureColour = "hsl(" + temperatureSize * 2 + ", 81%, 83%)";

	var hourBlock = "<div style='background-image: linear-gradient(" + tempatureColour + ", " + tempatureColour + " 100%); background-size: 100%" + temperatureSize + "%; background-repeat: no-repeat; background-position: center bottom;' class='hour-block col-sm-2 col-md-2 col-lg-1'>" +
	"<div class='colour' id='colour-" + index + "'>" +
		"<div class='time' id='time-" + index + "'></div>" +
		"<div class='conditions' id='conditions-" + index + "'></div>" +
		"<div class='temp' id='temp-" + index + "'></div>" +
		"<div class='humidity hour-icon' title='Humidity' id='humidity-" + index + "'><i class='fas fa-water'></i> </div>" +
		"<div class='rain hour-icon' title='Precipitation Chance' id='rain-" + index + "'><i class='fas fa-tint'></i> </div>" +
		"</div>" +

	"</div>";

	document.getElementById("hour-bar").innerHTML += hourBlock;
}

function generateHourBlock(hourData, index)
{

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
	rainBlock.innerHTML += hourData.pop + '%';

	//Rain
	var conditionsBlock = document.getElementById("conditions-" + index);
	conditionsBlock.innerHTML += hourData.conditions;

}
