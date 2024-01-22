const {youtube} = require ('../config/api')
const asyncHandler = require('express-async-handler')

// @desc Get videos
// @route GET /api/getVideos
// @access private
const getVideos =  asyncHandler (async(req, res) => {
    try {
        const response = await youtube.videos.list({
            part: 'snippet, contentDetails, statistics, player',
            chart: 'mostPopular',
            regionCode: 'US' 
        })
        res.status(200).json(response.data)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    } 
})

module.exports = {
    getVideos
}