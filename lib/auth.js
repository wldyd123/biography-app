import auth from '@react-native-firebase/auth';

export function signIn({email, password}) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

export function sendMailAuth(email) {
  fetch('https://server-oen6ndwaoq-uc.a.run.app/email', {
    method: 'POST',
    body: {email: email},
  });
}
