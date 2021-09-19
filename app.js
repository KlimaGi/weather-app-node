require("dotenv").config();
const request = require("request");

const key = process.env.ACCESS_KEY;
const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.4233`;

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
