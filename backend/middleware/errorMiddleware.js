// All middleware is they are just function that executes when you make a request

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json( { 
        message: err.message,
        stack: process.env.NODE_env === 'production' ? null : err.stack //only show stack when we're in development and not when we're in production
    })

}


module.exports = {
    errorHandler
}