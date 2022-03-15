const logger = (req, res, next) => {
  const { method, baseUrl } = req;
  const date = new Date(Date.now()).toISOString();
  console.log(date, method, baseUrl);
  next();
};

module.exports = logger;