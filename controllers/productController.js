const db = require("../models");
const { where } = require("sequelize");

const Product = db.products;
const Review = db.review;

// 1. create product

const addProduct = async (req, res) => {

  let info = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  }

  const product = await Product.create(info)
  res.status(200).send(product)
  console.log(product)

}

// 2. get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

// 3. get single product
const getOneProduct = async (req, res) => {
  let products = await Product.findOne({
    id: id,
  });
  res.status(200).send(products);
};

// 4. Update
const updateProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.update(req, body, {
    where: {
      id: id,
    },
  });
  res.status(200).send(products);
};

// 5. delete product by id
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("Product is Deleted");
};

// 6. get published product
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({
    where: {
      published: true,
    },
  });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct
};
