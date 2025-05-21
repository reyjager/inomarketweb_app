import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }

  // Create document
  createDocument(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }

  // Get documents
  getDocuments(collectionName: string) {
    return this.firestore.collection(collectionName).valueChanges({ idField: 'id' });
  }

  // Update document
  updateDocument(collectionName: string, docId: string, data: any) {
    return this.firestore.collection(collectionName).doc(docId).update(data);
  }

  // Delete document
  deleteDocument(collectionName: string, docId: string) {
    return this.firestore.collection(collectionName).doc(docId).delete();
  }
}