const express = require('express');
const router = express.Router();
const daoSelection = require('../helpers/daoSelection').cartDaoSelection;
const logger = require('../helpers/logger')
const middlewares = require('../middlewares/authorization');

router.use(logger);

const cart = daoSelection();

// Crea un carrito y devuelve su id -- (usuarios y administradores)
router.post('/', (req, res) => {
  res.send('POST Cart - Crea un carrito y devuelve su id');
});

// Vacia un carrito y lo elimina -- (usuarios y administradores)
router.delete('/:cartId', (req, res) => {
  res.send('DELETE Cart - Vacia un carrito y lo elimina');
});

// Me permite listar todos los productos guardados en un carrito -- (usuarios y administradores)
router.get('/:cartId/products', (req, res) => {
  res.send('Cart GET - Lista todos los productos de un carrito');
});

// Para incorporar productos al carrito por su id de carrito y id de producto -- (usuarios y administradores)
router.post('/:cartId/products/:productId', (req, res) => {
  res.send('Cart GET');
});

// Eliminar un producto al carrito por su id de carrito y id de producto -- (usuarios y administradores)
router.delete('/:cartId/products/:productId', (req, res) => {
  res.send('Cart POST');
});

module.exports = router;