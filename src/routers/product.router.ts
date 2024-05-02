import express from "express";
import productsController from "../controllers/products.controller";
import authentication from "../middleware/auth.middleware";

const productRouter = express.Router();

productRouter.get("/products", authentication, productsController.getProducts);
productRouter.get("/products/:id", authentication, productsController.getProductById);
productRouter.get("/categories", authentication, productsController.getProductCategories);
productRouter.get("/:category/products", authentication, productsController.getProductsByCategory);
productRouter.post("/add", authentication, productsController.addProduct);
productRouter.put("/:id/update", authentication, productsController.updateProduct);
productRouter.get("/:sellerId/products", authentication, productsController.getProductsBySellerId);
export default productRouter;