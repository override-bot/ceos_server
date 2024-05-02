import { db } from "..";
import FirestoreOperations from "./firestore_operations.service";

class UserService {
    async creatUser(data: object, uid: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "users");
        const user = firestoreOps.setData(data, uid)
        return user
    }
    async updateUser(data: object, uid: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "users");
        const newUser = firestoreOps.updateDocumentMap(data, uid)
        return newUser;
    }
    async deleteUser(uid: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "users");
        return firestoreOps.deleteDocument(uid);
    }
    async getUserById(uid: string) {
        const firestoreOps: FirestoreOperations = new FirestoreOperations(db, "users");
        const user = firestoreOps.getDocumentById(uid);
        return user;
    }
}
export default new UserService();