function calculateShowSymbols(todayData){

    //Umbrella
    if(todayData.precip > 0 || todayData.pop > 0){
		toggleSymbol("umbrella");
	}
    //Sunglasses
    if(todayData.temp > 15 && todayData.conditions == "Clear"){
		toggleSymbol("sunglasses");
	}
    //Wind
    if(todayData.wgust > 25){
		toggleSymbol("wind");
	}
    //Sunscreen
    if(todayData.temp > 18 && todayData.conditions == "Clear"){
		toggleSymbol("sunscreen");
        toggleSymbol("ice-cream");
	}
    //Pills
    //Gloves
    if(todayData.temp < 5){
		toggleSymbol("gloves");
	}
    //Ice
    if(todayData.temp < 3){
		toggleSymbol("ice");
	}
    //Snow
    if(todayData.conditions == "Snow"){
		toggleSymbol("snow");
	}
    //Pollen
    //Fog
    //Air pollution
}

function toggleSymbol(id)
{
    document.getElementById(id).style.display = 'inline-block';
}
