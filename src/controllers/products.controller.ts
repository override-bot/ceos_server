import { Request, Response } from "express";
import { ProductRequest, Product, ProductUpdate } from "../interfaces/product.interface";
import productService from "../services/product.service";
import { ProductModel } from "../models/product.model";
import authentication from "../middleware/auth.middleware"
import { productSchema } from "../validators/product.validator";

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
                message: "internal server error"
            })
        }
    }
    async getProductsByCategory(req: ProductRequest, res: Response) {
        try {
            const { category } = req.params;
            const products = await productService.getProductsbyCategory(category);

            return res.status(200).json({
                success: true,
                message: "products retrieved successfully",
                data: products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "internal server error"
            })
        }
    }
    async getProductsBySellerId(req: ProductRequest, res: Response) {
        try {
            const { sellerId } = req.params;
            const products = await productService.getProductsbySellerId(sellerId)
            return res.status(200).json({
                success: true,
                message: "products retrieved successfully",
                data: products
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "internal server error"
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
                message: "internal server error"
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
                message: "internal server error"
            })
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        const data: ProductUpdate = req.body;
        try {
            const { id } = req.params;

            const update = await productService.updateProduct(data, id);
            res.status(201).json({
                success: true,
                message: "Product updated successfully",
                data: data
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async addProduct(req: ProductRequest, res: Response) {
        try {
            const sellerId: string = (req as any).userId;
            const data = {
                "description": req.body.description,
                "dateAdded": req.body.dateAdded,
                "productName": req.body.productName,
                "price": req.body.price,
                "isFlash": req.body.isFlash ?? false,
                "discountPrice": req.body.discountPrice ?? 0,
                "isDiscounted": req.body.isDiscounted ?? false,
                "productImage": req.body.productImage,
                "category": req.body.category,
                "amountLeft": req.body.amountLeft,
                "sellerId": sellerId,
                "subscribers": req.body.subscribers ?? []
            };
            console.log(req.body)


            const add = await productService.addProduct(data);
            res.status(201).json({
                success: true,
                message: "product added successfully",
                data: { "id": add.id, ...data }
            });
        }
        catch (error) {
            console.log(error)
            console.log(req.body.sellerId);
            res.status(500).json({
                success: false,
                message: "internal server error"
            });
        }
    }
    async deleteProduct(req: ProductRequest, res: Response) {
        const { id } = req.params
        try {
            const remove = await productService.deleteProduct(id);
            res.status(201).json({
                success: true,
                message: "product deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: true,
                message: "internal server error"
            });
        }
    }
}
export default new ProductController();