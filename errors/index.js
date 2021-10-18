const CustomAPIError = require('../errors/custom-error')
const BadRequestError = require('../errors/bad-request')
const UnautheticatedError = require('../errors/unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnautheticatedError
}