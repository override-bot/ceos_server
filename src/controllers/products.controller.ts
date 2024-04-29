import { Response } from "express";
import { ProductRequest } from "../interfaces/product.interface";
import productService from "../services/product.service";

class ProductController {
    async getProducts(req: ProductRequest, res: Response) {
        try {
            const products = await productService.getProducts();

            return res.status(200).json({
                success: true,
                message: "products retrieved successfully",
                data: products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "something went wrong"
            })
        }
    }
    async getProductCategories(req: ProductRequest, res: Response) {
        try {
            const categories = await productService.getAllCategories();
            return res.status(200).json({
                success: true,
                message: "categories fetched successfully",
                data: categories
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "something went wrong"
            })
        }
    }
    async getProductById(req: ProductRequest, res: Response) {
        const { id } = req.params;
        try {
            const product = await productService.getProductById(id);
            return res.status(200).json({
                success: true,
                message: "product retrieved successfully",
                data: product
            })
        } catch (error) {
            if (error == "Product not found") {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                })
            }
            return res.status(500).json({
                success: false,
                message: "something went wrong"
            })
        }
    }
}
export default new ProductController();