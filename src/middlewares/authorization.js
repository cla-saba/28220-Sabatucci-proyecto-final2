const isAdmin = true;

const checkAuthorization = (req, res, next) => {
  if (!isAdmin) {
    const { method, baseUrl } = req;
    return res.status(500).json({
      error: -1,
      descripcion: `ruta ${baseUrl} metodo ${method} no autorizada`
    });
  }
  next();
}

module.exports = {
  checkAuthorization,
}