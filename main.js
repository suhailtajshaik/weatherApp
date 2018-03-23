const config = require('./config');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoLocationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.GEO_CODEING_API_KEY}`;
axios.get(geoLocationURL)
    .then((response) => {
        if (response.status === "ZERO_RESULTS") {
            throw new Error("Unable to find the address.");
        }

        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        let weatherURL = `https://api.darksky.net/forecast/${config.WEATHER_API_KEY}/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    }).then((response)=>{
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`Its currently ${temperature} and feels like ${apparentTemperature}.`)
    }).catch((error) => {
        if (error.status === 'ENOTFOUND') {
            console.log("Unable to connect to API service.");
        } else {
            console.log(error.message);
        }

    });