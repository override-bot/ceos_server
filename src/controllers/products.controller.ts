import { Request, Response } from "express";
import { ProductRequest, Product } from "../interfaces/product.interface";
import productService from "../services/product.service";
import { ProductModel } from "../models/product.model";

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
                message: "something went wrong"
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
    async addProduct(req: ProductRequest, res: Response) {
        try {
            const data: { [key: string]: any } = {
                "sellerId": req.body.sellerId,
                "description": req.body.description,
                "dateAdded": req.body.dateAdded ?? new Date(),
                "productName": req.body.productName,
                "price": req.body.price,
                "isFlash": req.body.isFlash ?? false,
                "discountPrice": req.body.discountPrice ?? 0,
                "isDiscounted": req.body.isDiscounted ?? false,
                "productImage": req.body.productImage,
                "category": req.body.category,
                "subscribers": req.body.subscribers ?? []
            };
            console.log(req.body)
            const requiredFields = ['sellerId', 'productName', 'price', 'productImage', 'category', 'description'];
            const missingFields: string[] = [];

            requiredFields.forEach(field => {
                if (!(field in data) || data[field] === null || typeof data[field] == "undefined") {
                    missingFields.push(field);
                }
            });
            if (missingFields.length > 0) {
                res.status(422).json({
                    success: false,
                    message: `Required fields are missing or null: ${missingFields.join(', ')}`
                });

            } else if (typeof "price" != "number" || typeof "discountPrice" != "number") {
                res.status(422).json({
                    success: false,
                    message: `wrong format`
                });
            } else {
                const add = await productService.addProduct(data);
                res.status(201).json({
                    success: true,
                    message: "product added successfully",
                    data: { "id": add.id, ...data }
                });
            }



        } catch (error) {
            console.log(req.body.sellerId);
            res.status(500).json({
                success: false,
                message: error
            });
        }


    }
}
export default new ProductController();