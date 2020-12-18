const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0da1cc6a3d6b4f06761f104ac961ce13&query=' + longitude + ',' + latitude
    
    request({ url, json: true}, (error,{body}) => {
       if(error){
           callback('Unable to connect to weather services!', undefined)
       }else if(body.error) {
            callback ('Unable to find weather data!', undefined)
       }else {
            callback(undefined, body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees outside. It feels like " + body.current.feelslike)
       }
    })
}

module.exports = forecast