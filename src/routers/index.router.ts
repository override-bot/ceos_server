import express from "express";
import productRouter from "./product.router";
import userRouter from "./user.router";
import cartRouter from "./cart.router";


const router = express.Router();
router.use("/products", productRouter);
router.use("/user", userRouter);
router.use("/cart", cartRouter);
export default router;