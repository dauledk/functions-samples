'use strict';

import * as functions from 'firebase-functions'

// if you need to use the Firebase Admin SDK, uncomment the following:
import * as admin from 'firebase-admin'
admin.initializeApp();


// Create and Deploy Cloud Function with TypeScript using script that is
// defined in functions/package.json:
//    cd functions
//    npm run deploy

export const helloWorld = functions.https.onRequest(async (request, response) => {
    const firestore = admin.firestore();
    const users = await firestore.collection('users').get();
    // const users = await firestore.collection('users').get();
    // response.send({users});
    response.send('hello world');
    return;
});
