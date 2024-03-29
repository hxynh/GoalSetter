const express = require ('express')
const {errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db')
const dotenv = require ('dotenv').config()
const port = process.env.PORT ||  5000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded( { extended: false }))

app.use('/api/goals', require('./routes/goalRoute'))
app.use('/api/users', require('./routes/userRoute'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))