const Product = require('../models/productModel');

exports.getAll = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getByBarcode = async (req, res) => {
  const product = await Product.findOne({ barcode: req.params.barcode });
  if (!product) return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
  res.json(product);
};

exports.create = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json(newProduct);
};