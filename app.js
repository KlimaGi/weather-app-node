require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("vilnius", (error, data) => {
  console.log("Error ", error);
  console.log("Data ", data);
});

forecast(25.32833, 54.6833, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
