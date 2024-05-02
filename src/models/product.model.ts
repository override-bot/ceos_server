import { Product } from "../interfaces/product.interface";

export class ProductModel implements Product {
    constructor(
        public sellerId: string,
        public description: string,
        public dateAdded: any,
        public productName: string,
        public price: number,
        public isFlash: boolean,
        public discountPrice: number,
        public isDiscounted: boolean,
        public productImage: string,
        public category: string,
        public subscribers: string[]
    ) {
        // Ensure required fields are provided
        if (!sellerId || !productName || !price || !productImage || !category) {
            throw new Error("Required fields are missing.");
        }
    }

    toMap(): Map<string, any> {
        const productMap = new Map<string, any>();
        productMap.set('sellerId', this.sellerId);
        productMap.set('description', this.description);
        productMap.set('dateAdded', this.dateAdded);
        productMap.set('productName', this.productName);
        productMap.set('price', this.price);
        productMap.set('isFlash', this.isFlash);
        productMap.set('discountPrice', this.discountPrice);
        productMap.set('isDiscounted', this.isDiscounted);
        productMap.set('productImage', this.productImage);
        productMap.set('category', this.category);
        productMap.set('subscribers', this.subscribers);
        return productMap;
    }
}
