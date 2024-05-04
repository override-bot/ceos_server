import { db } from "..";
import { SuperCartRequest } from "../interfaces/cart.interface";
import SubCollectionOperations from "./subcollection_operations.service";

class CartService {
    async updateCart(data: SuperCartRequest, uid: string) {
        const firestoreOps: SubCollectionOperations = new SubCollectionOperations(db, uid, "carts", "user")
        data.carts.forEach(async cartRequest => {
            firestoreOps.setData({
                items: cartRequest.items
            },
                cartRequest.cartId
            );
        })
    }
    async getCart(uid: string) {
        const firestoreOps: SubCollectionOperations = new SubCollectionOperations(db, uid, "carts", "user");
        const data = await firestoreOps.getDocuments();
        return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

}
export default new CartService();