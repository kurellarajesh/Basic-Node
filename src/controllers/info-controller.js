const { statusCodes, StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success : true,
        message : 'API is true',
        data : {}
    })
}

module.exports = {
    info
}