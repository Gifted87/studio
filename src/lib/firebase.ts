/**
 * @fileoverview Firebase Admin SDK initialization.
 * This file should be imported only on the server side.
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    // When deployed to App Hosting, GOOGLE_CLOUD_PROJECT is automatically set.
    // When running locally, you may need to specify the project ID.
    // projectId: 'your-project-id',
  });
}

export const firestore = admin.firestore();
