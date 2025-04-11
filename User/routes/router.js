//  User/Customer Can Controls All Its Routes:
import express from "express";
import {
  signup as userSignup,
  signin,
} from "../../User/controllers/authuserController.js";

import {
  addToCart,
  deleteFromCart,
  updateCartQuantity,
  getCart,
} from "../../User/controllers/cartController.js";

import {
  userAllOrders,
  placeOrder,
} from "../../User/controllers/orderController.js";

import { authenticateUser, isAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Customer/User routes
router.post("/userSignup", userSignup);
router.post("/signin", signin);

// Cart routes
router.post("/addToCart", authenticateUser, isAdmin, addToCart);
router.delete(
  "/deleteFromCart/:productId",
  authenticateUser,
  isAdmin,
  deleteFromCart
);
router.post(
  "/updateCartQuantity",
  authenticateUser,
  isAdmin,
  updateCartQuantity
);
router.get("/getCart/:userId", authenticateUser, isAdmin, getCart);
router.delete("/removeAllProducts/:userId", authenticateUser, isAdmin, getCart);

// Placed/Order routes For Customer
router.get("/userAllOrders/:userId", authenticateUser, isAdmin, userAllOrders);
router.post("/placeOrder", authenticateUser, isAdmin, placeOrder);

export default router;
