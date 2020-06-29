module.exports = (error, req, res, next) => {
  return res.status(error.status || 500).json({
    status: error.status,
    message: error.message,
  });
};