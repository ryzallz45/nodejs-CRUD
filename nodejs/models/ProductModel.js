import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  description: DataTypes.TEXT
}, {
  freezeTableName: true
});

export default Product;

(async () => {
  await db.sync();

  const newProducts = [
    {
      name: "Jaket Bomber Hitam",
      price: 180000,
      description: "Jaket bomber warna hitam berbahan parasut, desain trendy dan cocok untuk hangout."
    },
    {
      name: "Rok Plisket Panjang",
      price: 90000,
      description: "Rok plisket panjang warna navy, cocok dipadukan dengan berbagai atasan."
    },
    {
      name: "Sweater Rajut Abu Muda",
      price: 130000,
      description: "Sweater rajut warna abu muda, hangat dan stylish untuk dipakai sehari-hari."
    }
  ];

  for (const product of newProducts) {
    const exists = await Product.findOne({ where: { name: product.name } });
    if (!exists) {
      await Product.create(product);
      console.log(`✔ Produk "${product.name}" berhasil ditambahkan.`);
    } else {
      console.log(`ℹ Produk "${product.name}" sudah ada, tidak ditambahkan.`);
    }
  }
})();
