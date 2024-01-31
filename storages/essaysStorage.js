import AsyncStorage from '@react-native-community/async-storage';

const key = 'Essays';

const essaysStorage = {
  async get() {
    try {
      const rawEssays = await AsyncStorage.getItem(key);

      if (!rawEssays) {
        //저장된 데이터가 없으면 사용 x
        throw new Error('No saved todos');
      }

      //문자열을 객체로 바꿔 줌.
      const savedEssays = JSON.parse(rawEssays);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load Essays');
    }
  },
  async set(data) {
    try {
      //객체를 -> 문자열로 바꾼 뒤 asyncstorage에 저장.
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Falied to save Essays');
    }
  },
};

export default essaysStorage;
