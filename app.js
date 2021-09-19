require("dotenv").config();
const request = require("request");

const key = process.env.ACCESS_KEY;
const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233&units=m`;

request({ url: url, json: true }, (error, response) => {
  const temp = response.body.current.temperature;
  const feelsLike = response.body.current.feelslike;
  const weatherDescription = response.body.current.weather_descriptions[0];
  console.log(
    `${weatherDescription}. It is currently ${temp} degress out. It feels like ${feelsLike} degress out.`
  );
});
