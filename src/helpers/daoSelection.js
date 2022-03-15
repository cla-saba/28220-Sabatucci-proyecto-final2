const productDaoSelection = (name) => {
  switch (process.env.PRODUCT_DAO.toLowerCase()) {
    case 'filesystem':
      const ProductsDaoFileSystem = require('../daos/products/ProductsDaoFileSystem');
      return new ProductsDaoFileSystem();
    case 'mongodb':
      const ProductsDaoMongoDb = require('../daos/products/ProductsDaoMongoDb');
      return new ProductsDaoMongoDb();
    case 'firebase':
      const ProductsDaoFirebase = require('../daos/products/ProductsDaoFirebase');
      return new ProductsDaoFirebase();
    case 'memory':
    default:
      const ProductsDaoMemory = require('../daos/products/ProductsDaoMemory');
      return new ProductsDaoMemory();
  }
};

const cartDaoSelection = (name) => {
  switch (process.env.PRODUCT_DAO.toLowerCase()) {
    case 'filesystem':
      const CartDaoFileSystem = require('../daos/cart/CartDaoFileSystem');
      return new CartDaoFileSystem();
    case 'mongodb':
      const CartDaoMongoDb = require('../daos/cart/CartDaoMongoDb');
      return new CartDaoMongoDb();
    case 'firebase':
      const CartDaoFirebase = require('../daos/cart/CartDaoFirebase');
      return new CartDaoFirebase();
    case 'memory':
    default:
      const CartDaoMemory = require('../daos/cart/CartDaoMemory');
      return new CartDaoMemory();
  }
};

module.exports = {
  productDaoSelection,
  cartDaoSelection,
};