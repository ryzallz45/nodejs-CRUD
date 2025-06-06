import Product from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    await Product.create({ name, price, description });
    res.status(201).json({ msg: "Product created" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};
