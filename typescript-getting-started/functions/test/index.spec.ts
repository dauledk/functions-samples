import { join } from 'path';

console.log(join(__dirname, `./app-engine-test.json`))
const test = require('firebase-functions-test')({
    databaseURL: 'https://eddystone-test-e4cd3.firebaseio.com',
    storageBucket: 'eddystone-test-e4cd3.appspot.com',
    projectId: 'eddystone-test-e4cd3',
}, join(__dirname, `./app-engine-issue.json`));

import { expect, assert } from 'chai';

describe('Cloud Functions', () => {
    let readUsers;
    
    before(async () => {
        readUsers = await import('../src/helper-functions/read-users');
    });

    it('Testing read users', async () => {
        try {
            console.log('Now testing: read users');
            console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
            const result = await readUsers.readUsersFromFirestore();
            console.log(result);
        } catch (err) {
            console.log(`Testing read users failed with: '${err.message}'`);
        }
    });    

});
