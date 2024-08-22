exports.routeError = (req, res, next)=> {
    const error = new error("Not Found")
    error.status = 404
    next()
}