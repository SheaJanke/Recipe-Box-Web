import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBToaieUDWOUkoGP989Mm2ND-jY0-3MSPw',
	authDomain: 'recipe-archive-v2.firebaseapp.com',
	projectId: 'recipe-archive-v2',
	storageBucket: 'recipe-archive-v2.appspot.com',
	messagingSenderId: '86838221971',
	appId: '1:86838221971:web:8b532e5759898b9a904166',
	measurementId: 'G-1B4TH0CQCS'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(firebaseApp);

// Cloud Storage
const storage = getStorage();

export { firebaseApp, auth, db, googleProvider, storage };
