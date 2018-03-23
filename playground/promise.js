const config = require('../config');
const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.GEO_CODEING_API_KEY}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to google service.");
            } else if (body.status === "ZERO_RESULTS") {
                reject("Unable to find the address.");
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};


geocodeAddress('21117').then((location) => {
    console.log(JSON.stringify(location, null, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})