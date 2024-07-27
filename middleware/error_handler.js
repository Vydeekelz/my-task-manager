const { CustomAPIError } = require("../errors/custom_error")

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({message: err.message})
  }
  res.status(500).json({Failed:"Something went wrong. Try again later", error: err.message})
}

module.exports = errorHandlerMiddleware
