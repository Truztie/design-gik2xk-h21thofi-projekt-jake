const { async } = require("validate.js");
const db = require("../models");

async function getCartById(cartId) {
  try {
    const cart = await db.cart.findOne({
      where: { id: cartId },
      include: [db.product]
    });

    return cart;
  } catch (error) {
    return error;
  }
}
module.exports = { getCartById };