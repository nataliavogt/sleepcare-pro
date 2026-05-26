import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';
import { User as UserType } from '../types';

export async function registerUser(
  email: string,
  cpf: string,
  name: string,
  password: string = 'temp-' + Math.random().toString(36).slice(2, 12)
): Promise<User> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const userData: UserType = {
    uid: user.uid,
    email,
    cpf,
    name,
    lgpdAccepted: true,
    tcleAccepted: true,
    tcleDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };

  await setDoc(doc(db, 'users', user.uid), userData);

  return user;
}

export async function loginUser(
  email: string,
  password: string = 'temp-' + Math.random().toString(36).slice(2, 12)
): Promise<User> {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function getUserData(uid: string): Promise<UserType | null> {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserType;
  }

  return null;
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}

export function getCurrentUser(): User | null {
  return auth.currentUser;
}
