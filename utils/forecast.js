const request = require("request");

const forecast = (lat, lon, callback) => {
  const weatherKey = process.env.WEATHER_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${lat},${lon}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temp = body.current.temperature;
      const feelsLike = body.current.feelslike;
      const weatherDescription = body.current.weather_descriptions[0];
      console.log();

      callback(
        undefined,
        `${weatherDescription}. It is currently ${temp} degress out. It feels like ${feelsLike} degress out.`
      );
    }
  });
};

module.exports = forecast;
