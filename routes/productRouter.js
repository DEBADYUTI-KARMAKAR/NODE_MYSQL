const productController = require('../controllers/productController.js')

const router = require('express').Router();
// getAllProducts,
// getPublishedProduct,
// getOneProduct,
// addProduct,
// updateProduct,
// deleteProduct,
router.get('/allProducts',productController.getAllProducts);
router.get('/published',productController.getPublishedProduct);
router.get('/:id',productController.getOneProduct);
router.post('/addProduct',productController.addProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);

module.exports = router;