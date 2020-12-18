const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1Ijoic3R1YXJ0NDgwNSIsImEiOiJja2lyN20wYXQwczdxMnFvMDZsNGgxcjY2In0.pl5K_yNIhtsdITistWR-6g&limit=1'

    request({ url, json: true}, (error,response) => {
       if(error){
           callback('Unable to connect to location services!', undefined)
       }else if(response.body.features.length === 0) {
            callback ('Unable to find location!', undefined)
       }else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
       }
    })
}

module.exports = geocode