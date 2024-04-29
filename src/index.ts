import express from 'express';
import middleware from './middleware/index.middleware';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const serviceAccount = require('./configs/ceos-47a98-a530966b35b1.json');
initializeApp({
    credential: cert(serviceAccount)
});

const firestore = getFirestore();
export const db = firestore;

const app: express.Application = express();
middleware(app);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});