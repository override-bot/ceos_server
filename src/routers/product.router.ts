import express from "express";
import productsController from "../controllers/products.controller";

const productRouter = express.Router();

productRouter.get("/products", productsController.getProducts)
productRouter.get("/products/:id", productsController.getProductById)
productRouter.get("/categories", productsController.getProductCategories)
export default productRouter;