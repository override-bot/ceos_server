
import { db } from "..";
import { Product } from "../interfaces/product.interface";
import FirestoreOperations from "./firestore_operations.service";

class ProductService {

    async getProducts() {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const products = await firestoreOps.getDocuments();
            return products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProductsbyCategory(category: string) {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const products = await firestoreOps.getWhereIsEqualTo(category, "category");
            return products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProductsbySellerId(sellerId: string) {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const products = await firestoreOps.getWhereIsEqualTo(sellerId, "sellerId");
            return products.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteProduct(id: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
        return firestoreOps.deleteDocument(id);
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
            console.log(error);
            throw error;
        }
    }

    async updateProduct(data: object, id: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
        const products = await firestoreOps.updateDocumentMap(data, id);
        return products;
    }

    async getAllCategories(
    ): Promise<string[]> {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
        const products = await firestoreOps.getDocuments();
        const uniqueFieldValues: Set<string> = new Set();
        products.forEach((doc) => {
            const category: string = doc.data().category;
            uniqueFieldValues.add(category);
        });
        return Array.from(uniqueFieldValues);
    }

    async addProduct(data: object) {
        try {
            const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "products");
            const response = await firestoreOps.addData(data);
            return response;
        } catch (error) {
            throw error;
        }


    }
}

export default new ProductService();