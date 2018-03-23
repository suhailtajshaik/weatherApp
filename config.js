const config = () => {
    return {
        "GEO_CODEING_API_KEY": process.env.GEO_CODEING_API_KEY || 'AIzaSyDN9TxTY56NNsE8P_J-fYc6wOhuSkSOud0',
        "WEATHER_API_KEY" : process.env.WEATHER_API_KEY || '1131f0bcb3b1b86d269a175a0272bbb2',
    }
}
// https://api.darksky.net/forecast/1131f0bcb3b1b86d269a175a0272bbb2/37.8267,-122.4233
module.exports = config();