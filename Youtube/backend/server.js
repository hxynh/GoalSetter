const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const {errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000;


const app = express();

app.use(cors())
app.use('/api/getVideos', require('./routes/videosRoute'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
