module.exports = (err, request, response, next) => {
    if (err) {
        return response.status(400).json({
            error: err.message
        })
    }

    next();
}