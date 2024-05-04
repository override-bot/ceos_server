import { Firestore, CollectionReference, QuerySnapshot, DocumentSnapshot, DocumentReference } from '@google-cloud/firestore';

class SubCollectionOperations {
    private subCollectionRef: CollectionReference;

    constructor(private db: Firestore, private parentDocId: string, private subCollectionPath: string, parentCollection: string) {
        const parentDocRef = this.db.collection(parentCollection).doc(parentDocId);
        this.subCollectionRef = parentDocRef.collection(subCollectionPath);
    }

    async getDocuments(): Promise<QuerySnapshot> {
        return await this.subCollectionRef.get();
    }

    async getDocumentById(id: string): Promise<DocumentSnapshot> {
        return await this.subCollectionRef.doc(id).get();
    }

    async getWhereIsEqualTo(param: any, field: string): Promise<QuerySnapshot> {
        return await this.subCollectionRef.where(field, '==', param).get();
    }

    async addData(data: any): Promise<DocumentReference> {
        return await this.subCollectionRef.add(data);
    }

    async setData(data: any, id: string): Promise<void> {
        await this.subCollectionRef.doc(id).set(data);
    }

    async updateDocument(field: string, value: any, docId: string): Promise<void> {
        await this.subCollectionRef.doc(docId).update({ [field]: value });
    }

    async deleteDocument(id: string): Promise<void> {
        await this.subCollectionRef.doc(id).delete();
    }

    async updateDocumentMap(data: any, docId: string): Promise<void> {
        await this.subCollectionRef.doc(docId).update(data);
    }
}

export default SubCollectionOperations;
