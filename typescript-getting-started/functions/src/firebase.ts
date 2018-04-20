import * as admin from 'firebase-admin'
console.log('firebase admin is now calling initializeApp()');
admin.initializeApp();

const firestore = admin.firestore();

export { firestore };