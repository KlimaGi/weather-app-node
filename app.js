require("dotenv").config();
const request = require("request");

const weatherKey = process.env.WEATHER_KEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=37.8267,-122.4233&units=m`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    const temp = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weatherDescription = response.body.current.weather_descriptions[0];
    console.log(
      `${weatherDescription}. It is currently ${temp} degress out. It feels like ${feelsLike} degress out.`
    );
  }
});

//Geocoding
//adress -> Lat/Long -> Weather
const locationKey = process.env.LOCATION_KEY;
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/vilnius.json?access_token=${locationKey}&limit=1`;
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find the location.Try another search.");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(`latitude: ${latitude}`);
    console.log(`longitude: ${longitude}`);
  }
});
