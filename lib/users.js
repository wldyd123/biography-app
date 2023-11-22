import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export function createUser({id, userName, telNumber, birthday, nickname}) {
  return usersCollection.doc(id).set({
    id,
    userName,
    telNumber,
    birthday,
    nickname,
  });
}

export async function getUser(id) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}
