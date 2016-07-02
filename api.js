
const got = require('got')

function getNextTime (callback) {
  got.get(
    'http://api.metro.net/agencies/lametro/stops/29/predictions/',
    {json: true}
  )
    .then(res => callback(null, res.body.items[0]))
    .catch(callback)
}

module.exports = {
  getNextTime
}
