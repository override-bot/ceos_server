
import { db } from "..";
import { Product } from "../interfaces/product.interface";
import FirestoreOperations from "./firestore_operations.service";

class ProductService {

    async addProduct(data: Product) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");

        const product = await firestoreOps.addData(data);
        return product;

    }
    async getProducts() {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const products = await firestoreOps.getDocuments();
            return products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }


    async getProductById(id: string) {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const product = await firestoreOps.getDocumentById(id);
            if (!product.exists) {
                throw "Product not found";
            }
            return { id: product.id, ...product.data() };
        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    }

    async updateProduct(data: { [key: string]: any }, id: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
        const products = await firestoreOps.updateDocumentMap(data, id);
        return products;
    }

    async getAllCategories(
    ): Promise<any[]> {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
        const products = await firestoreOps.getDocuments();
        const uniqueFieldValues: Set<string> = new Set();
        products.forEach((doc) => {
            const category: string = doc.data().category;
            uniqueFieldValues.add(category);
        });
        return Array.from(uniqueFieldValues);
    }
}
export default new ProductService();