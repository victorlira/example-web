import { firestore } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, getDocs, getDoc, doc, query, where } from 'firebase/firestore';

class DAOService {
  constructor(collectionPath) {
    if (!collectionPath) {
      throw new Error('Collection path must be provided');
    }
    this.collectionRef = collection(firestore, collectionPath);
  }

  async insert(object) {
    try {
      const docRef = await addDoc(this.collectionRef, object);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document: ', error);
      throw new Error('Error adding document');
    }
  }

  async update(id, object) {
    try {
      const docRef = doc(firestore, this.collectionRef.path, id);
      await updateDoc(docRef, object);
    } catch (error) {
      console.error('Error updating document: ', error);
      throw new Error('Error updating document');
    }
  }

  async delete(id) {
    try {
      const docRef = doc(firestore, this.collectionRef.path, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting document: ', error);
      throw new Error('Error deleting document');
    }
  }

  async getAll() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      const documents = [];

      querySnapshot.forEach(doc => {
        documents.push({ id: doc.id, ...doc.data() });
      });

      return documents;
    } catch (error) {
      console.error('Error getting documents: ', error);
      throw new Error('Error getting documents');
    }
  }

  async get(id) {
    try {
      const docRef = doc(firestore, this.collectionRef.path, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error('No such document!');
      }
    } catch (error) {
      console.error('Error getting document: ', error);
      throw new Error('Error getting document');
    }
  }

  async search(property, value) {
    try {
      const q = query(this.collectionRef, where(property, '==', value));
      const querySnapshot = await getDocs(q);
      const documents = [];

      querySnapshot.forEach(doc => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      
      return documents;
    } catch (error) {
      console.error('Error searching documents: ', error);
      throw new Error('Error searching documents');
    }
  }
}

export default DAOService;
