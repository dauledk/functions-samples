import * as _test from 'firebase-functions-test';
const test = _test();

import * as sinon from 'sinon';
import { expect, assert } from 'chai';

// If index.js calls admin.initializeApp at the top of the file,
// we need to stub it out before requiring index.js. This is because the
// functions will be executed as a part of the require process.
// Here we stub admin.initializeApp to be a dummy function that doesn't do anything.
import * as admin from 'firebase-admin';

describe('Cloud Functions', () => {
    let myFunctions, adminInitStub;
    before(() => {
        // [START stubAdminInit]
        // If index.js calls admin.initializeApp at the top of the file,
        // we need to stub it out before requiring index.js. This is because the
        // functions will be executed as a part of the require process.
        // Here we stub admin.initializeApp to be a dummy function that doesn't do anything.
        adminInitStub = sinon.stub(admin, 'initializeApp');
        // Now we can require index.js and save the exports inside a namespace called myFunctions.
        myFunctions = require('../src/index.js');
        // [END stubAdminInit]
    });
    after(() => {
        // Restore admin.initializeApp() to its original method.
        adminInitStub.restore();
        // Do other cleanup tasks.
        // test.cleanup(); // Does not work?
    });

    describe('Getting typescript tests up and running', () => {
        it('Testing Typescript function, hello world!', (done) => {
            const firestoreStub = sinon.stub();
            Object.defineProperty(admin, 'firestore', {
                get: () => {
                    return {
                        collection: (path) => Promise.resolve({mocka: 'user'})
                    }
                }
            });

            const req = {} as any;
            const res = {
                send: (object: any) => {
                    console.log(object);
                    expect(object).to.equal('hello world');
                    done();
                }
                };
            console.log('Lets role!');
            myFunctions.helloWorld(req, res)
        });    
    });
});
