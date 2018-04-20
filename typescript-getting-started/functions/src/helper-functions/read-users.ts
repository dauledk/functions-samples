import { firestore } from '../firebase';

export async function readUsersFromFirestore(): Promise<any[]> {
    try {
        const usersRef = firestore.collection('users');
        const snapshot = await usersRef.get();
        const users = snapshot.docs.map(doc => doc.data());
        return users; 
    } catch (error) {
        throw error;
    }
}
