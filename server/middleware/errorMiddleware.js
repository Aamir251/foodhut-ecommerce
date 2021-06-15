export const routeNotFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}` )
    res.status(404)
    next(error)
}

export const errorHandler = (err,req,res,next) => {
    const code = res.statusCode === 200 ? 500 : res.statusCode
    res.status(code)
    res.json({
        message : err.message
    })

};