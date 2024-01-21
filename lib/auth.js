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

export async function sendMailAuth(email) {
  let response = await fetch(
    'https://us-central1-autobiography-9d461.cloudfunctions.net/sendMail/auth/email',
    {
      method: 'POST',
      body: JSON.stringify({email: email}),
    },
  );
  console.log(response);
}
