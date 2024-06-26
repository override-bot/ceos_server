import express from "express";
import productsController from "../controllers/products.controller";
import authentication from "../middleware/auth.middleware";
import validator from "../validators/validator";
import { productSchema, productUpdateSchema } from "../validators/product.validator";

const productRouter = express.Router();

productRouter.get("/", productsController.getProducts);
productRouter.get("/:id", authentication, productsController.getProductById);
productRouter.get("/categories", authentication, productsController.getProductCategories);
productRouter.get("/:category/products", authentication, productsController.getProductsByCategory);
productRouter.post("/", authentication, validator(productSchema), productsController.addProduct);
productRouter.patch("/:id", authentication, validator(productUpdateSchema), productsController.updateProduct);
productRouter.delete("/:d", authentication, productsController.deleteProduct)
productRouter.get("/:sellerId/products", authentication, productsController.getProductsBySellerId);
export default productRouter;