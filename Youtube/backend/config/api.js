const {google} = require('googleapis')
const dotenv = require('dotenv')

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.AUTH_KEY
})

module.exports = {
    youtube
}