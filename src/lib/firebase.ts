/**
 * @fileoverview Firebase Admin SDK initialization.
 * This file should be imported only on the server side.
 */
import * as admin from 'firebase-admin';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  // When running in a Google Cloud environment, the SDK will automatically
  // use the service account credentials. For local development, you may
  // need to set up a service account and point to the key file.
  // See: https://firebase.google.com/docs/admin/setup
  initializeApp();
}

export const firestore = getFirestore();
export const adminSDK = admin;
