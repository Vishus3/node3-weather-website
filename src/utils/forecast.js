const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=4fd9355cde00d3880e176e6f54da96ac&query='+ latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Weather right now is '+body.current.weather_descriptions[0]+' and temperature is '+body.current.temperature)
        }
    })
}

module.exports = forecast