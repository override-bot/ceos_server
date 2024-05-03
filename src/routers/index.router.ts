import express from "express";
import productRouter from "./product.router";
import userRouter from "./user.router";


const router = express.Router();
router.use("/products", productRouter);
router.use("/users", userRouter)
export default router;