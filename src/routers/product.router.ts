import express from "express";
import productsController from "../controllers/products.controller";
import authentication from "../middleware/auth.middleware";

const productRouter = express.Router();

productRouter.get("/products", authentication, productsController.getProducts)
productRouter.get("/products/:id", authentication, productsController.getProductById)
productRouter.get("/categories", authentication, productsController.getProductCategories)
export default productRouter;