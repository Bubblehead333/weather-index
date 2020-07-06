function getDayPhrase(todayData){
	if(todayData.temp < -5){
		phrase1 = "Baltic"
	} else if (todayData.temp > -5 && todayData.temp < 5) {
		phrase1 = "Freezing ma tits off"
	} else if (todayData.temp > 5 && todayData.temp < 8) {
		phrase1 = "Nippy"
	} else if (todayData.temp > 8 && todayData.temp < 12) {
		phrase1 = "Mild"
	} else if (todayData.temp > 12 && todayData.temp < 16) {
		phrase1 = "Pleasant"
	} else if (todayData.temp > 16 && todayData.temp < 20) {
		phrase1 = "Taps aff"
	} else if (todayData.temp > 20 && todayData.temp < 24) {
		phrase1 = "Hot"
	} else if (todayData.temp > 24 && todayData.temp < 28) {
		phrase1 = "Pure Roastin'"
	} else if (todayData.temp > 28) {
		phrase1 = "Fuckin' Hot"
	}

	//Phrase precipitation
	if (todayData.precip == 0) {
		phrase2 = "Clear"
	} else if(todayData.precip > 0 && todayData.humidity < 2.5) {
		phrase2 = "Spitting"
	} else if(todayData.precip > 2.5 && todayData.humidity < 10) {
		phrase2 = "a Braw Day for Ducks"
	} else if (todayData.precip > 10 && todayData.humidity < 50) {
		phrase2 = "Phishin' Doon"
	} else if (todayData.precip > 50) {
		phrase2 = "Fuckin' Wet"
        phrase2 = "Drookit"

	}

	//Phrase humidity
	if (todayData.humidity < 50) {
		phrase3 = "Thin"
	} else if(todayData.humidity > 50 && todayData.humidity < 70) {
		phrase3 = "Moist"
	} else if (todayData.humidity > 70 && todayData.humidity < 85) {
		phrase3 = "Thick"
	} else if (todayData.humidity > 85 && todayData.humidity < 95) {
		phrase3 = "Sticky"
	} else if (todayData.humidity > 95) {
		phrase3 = "Soggy"
	}


	//Wind
	// if (todayData.humidity > 30 && todayData.humidity < 50) {
	//     phrase2 = "Clear"
	// } else if(todayData.humidity > 50 && todayData.humidity < 60) {
	//     phrase2 = "Moist"
	// } else if (todayData.humidity > 60 && todayData.humidity < 75) {
	//     phrase2 = "Thick"
	// } else if (todayData.humidity < 80) {
	//     phrase1 = "Sticky"
	// }

	var phraseString = phrase1 + ", " + phrase3 + " and " + phrase2;
	document.getElementById("phrase").innerHTML = phraseString;
}

/*
Drab - Cloudy
Haar - Mist
Pea souper - Fog

Blowing a hooley - Windy
pelting it down - rain
chucking it down - rain

awfully murky the day - cloudy
 */
