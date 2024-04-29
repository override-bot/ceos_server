import { Firestore, CollectionReference, QuerySnapshot, DocumentSnapshot, DocumentReference } from '@google-cloud/firestore';

class FirestoreOperations {
    private db: Firestore;
    private ref: CollectionReference;

    constructor(db: Firestore, private path: string) {
        this.db = db;
        this.ref = this.db.collection(path);
    }

    async getDocuments(): Promise<QuerySnapshot> {
        return await this.ref.get();
    }

    async getDocumentById(id: string): Promise<DocumentSnapshot> {
        return await this.ref.doc(id).get();
    }

    async getWhereIsEqualTo(param: any, field: string): Promise<QuerySnapshot> {
        return await this.ref.where(field, '==', param).get();
    }

    async addData(data: any): Promise<DocumentReference> {
        return await this.ref.add(data);
    }

    async setData(data: any, id: string): Promise<void> {
        await this.ref.doc(id).set(data);
    }

    async updateDocument(field: string, value: any, docId: string): Promise<void> {
        await this.ref.doc(docId).update({ [field]: value });
    }

    async deleteDocument(id: string): Promise<void> {
        await this.ref.doc(id).delete();
    }

    async updateDocumentMap(data: any, docId: string): Promise<void> {
        await this.ref.doc(docId).update(data);
    }
}

export default FirestoreOperations;
