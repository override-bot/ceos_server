import { Request } from "express";

export interface Product {
    sellerId: string,
    description: string,
    dateAdded: any,
    productName: string,
    price: number,
    isFlash: boolean,
    discountPrice: number,
    isDiscounted: boolean,
    productImage: string,
    amountLeft: number,
    category: string,
    subscribers: string[]
}
export interface ProductRequest extends Request {
    product?: {
        sellerId: string,
        description: string,
        dateAdded: any,
        productName: string,
        price: number,
        isFlash: boolean,
        amountLeft: number
        discountPrice: number,
        isDiscounted: boolean,
        productImage: string,
        category: string,
        subscribers: string[]
    }
}
export interface ProductUpdate {
    id: string,
    sellerId?: string,
    description?: string,
    dateAdded?: any,
    productName?: string,
    price?: number,
    isFlash?: boolean,
    discountPrice?: number,
    isDiscounted?: boolean,
    productImage?: string,
    amountLeft: number,
    category?: string,
    subscribers?: string[]
}
export interface ProductPublicData {
    id: string,
    sellerId: string,
    description: string,
    dateAdded: any,
    productName: string,
    price: number,
    isFlash: boolean,
    discountPrice: number,
    isDiscounted: boolean,
    productImage: string,
    category: string,
    subscribers: string[]
}
