#!/usr/bin/env node

const {getNextTime} = require('./api')

getNextTime((err, resp) => {
  if (err) return console.log('Could not get next arrival time')
  console.log(`
    Next bus to 2nd / Santa Monica is arriving in
    ${resp.minutes} minutes and ${resp.seconds} seconds
  `)
})
