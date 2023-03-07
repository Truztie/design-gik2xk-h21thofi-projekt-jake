const { async } = require("validate.js");
const db = require("../models");

async function getAllProducts() {
  try {
    const allProducts = await db.product.findAll({ include: [db.rating] });
    return allProducts;
  } catch (error) {
    return error;
  }
}

async function getByProduct(productId) {
    try {
      const product = await db.product.findOne({ 
          where: { id: productId }, 
          include: [db.rating] 
      });
      /* Om allt blev bra, returnera allPosts */
      return product
    } catch (error) {
      return error.status, error.message;
    }
  }


module.exports = { getAllProducts, getByProduct};