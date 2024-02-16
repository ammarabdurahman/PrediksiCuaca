const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '', //Your API Key
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{ 
cityName.innerHTML = city 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        
        const sunriseUTC = new Date(response.sunrise);
        const sunsetUTC = new Date(response.sunset);

        // Format Waktu
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };

        sunrise.innerHTML = sunriseUTC.toLocaleDateString('de-DE', options);
        sunset.innerHTML = sunsetUTC.toLocaleDateString('de-DE', options);
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Jakarta")
