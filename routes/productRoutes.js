const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.get('/:barcode', controller.getByBarcode);
router.post('/', controller.create);

module.exports = router;