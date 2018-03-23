const config = require('../config');
const request = require('request');

const getweather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${config.WEATHER_API_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(null, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unabel to fetch weather.');
        };
    });
};


module.exports = {
    getweather
}