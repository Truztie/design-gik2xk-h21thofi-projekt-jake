const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const cartService = require("../services/cartService");
const user = require("../models/user");

const constraints = {
  title: {
    numericality: {
      greaterThanOrEqualTo: 0.0,
      lessThanOrEqualTo: 10000000000000,
    },
  },
};

// "/" är rooten till products
router.get("/", (req, res) => {
  //här måste tabellerna skrivas i singular form.
  db.cart
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  const cart = req.body;
  const invalidData = validate(cart, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.cart
      .create(cart)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.post("/:cartId/addProduct", async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const productId = req.body.productId;

    const cart = await db.cart.findByPk(cartId);

    const product = await db.product.findByPk(productId);

    await cart.addProduct(product);

    res.send(`Product with ${productId} has been added to cart`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", (req, res) => {
  const cart = req.body;
  const id = cart.id;

  if (!id) {
    res.status(400).json("ID is mandatory");
  } else {
    db.cart
      .update(req.body, {
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any cart ID`);
        } else {
          res.send(`Cart with ID: ${id} has been updated`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.delete("/", (req, res) => {
  db.cart
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Product with ${req.body.id} has been deleted`);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  const cartId = req.params.id;

  cartService
    .getCartById(cartId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//detta exporteras till app.js
module.exports = router;
