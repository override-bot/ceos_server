import Joi from "joi";
import { Product, ProductRequest, ProductUpdate } from "../interfaces/product.interface";
export const productSchema = Joi.object<Product>({
    dateAdded: Joi.any().required(),
    productName: Joi.string().required(),
    price: Joi.number().required(),
    isFlash: Joi.boolean(),
    discountPrice: Joi.number(),
    isDiscounted: Joi.boolean(),
    productImage: Joi.string().required(),
    category: Joi.string().required(),
    amountLeft: Joi.number().required(),
    sellerId: Joi.string().required(),
    description: Joi.string().required(),
    subscribers: Joi.array().items(Joi.string())
}).options({ allowUnknown: false });
export const productUpdateSchema = Joi.object<ProductUpdate>({
    isFlash: Joi.boolean().optional,
    discountPrice: Joi.number().optional(),
    isDiscounted: Joi.boolean().optional(),
    price: Joi.number().optional(),
    amountLeft: Joi.number().optional()
}).options({ allowUnknown: false });