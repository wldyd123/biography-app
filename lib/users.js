import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export function createUser({
  id,
  password,
  userName,
  telNumber,
  birthday,
  nickname,
}) {
  return usersCollection.doc(id).set({
    id,
    password,
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

export async function setUserOneliner(oneliner, id) {
  const ref = firestore().collection('users');
  await ref.add({
    oneliner: oneliner,
  });
}
