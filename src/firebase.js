import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBY37RqCIsWD6xph1bZHMG09XmAVYEOJ48',
	authDomain: 'fabebook-clone.firebaseapp.com',
	databaseURL: 'https://fabebook-clone.firebaseio.com',
	projectId: 'fabebook-clone',
	storageBucket: 'fabebook-clone.appspot.com',
	messagingSenderId: '1068492282994',
	appId: '1:1068492282994:web:8e5b156b7185c155b176eb',
	measurementId: 'G-FVXB9EF9J9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
