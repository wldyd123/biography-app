import AsyncStorage from '@react-native-community/async-storage';

const key = 'Essays';

const essaysStorage = {
  async get() {
    try {
      const rawEssays = await AsyncStorage.getItem(key);

      if (!rawEssays) {
        //저장된 데이터가 없으면 사용 x
        return [];
      }

      //문자열을 객체로 바꿔 줌.
      const savedEssays = JSON.parse(rawEssays);
      return savedEssays;
    } catch (e) {
      console.error('Failed to load Essays:', e);
      throw new Error('Failed to load Essays');
    }
  },
  async set(data) {
    try {
      //기존의 essays 를 가져와서 새로운 essay를 추가해줘야 함.
      const rawEssays = await AsyncStorage.getItem(key);
      const existingEssays = rawEssays ? JSON.parse(rawEssays) : [];

      const newEssay = {
        id: Date.now(),
        createdAt: new Date(),
        title: data.title || '',
        body: data.body || '',
        question: data.question || '',
      };

      existingEssays.push(newEssay);

      //객체를 -> 문자열로 바꾼 뒤 asyncstorage에 저장.
      await AsyncStorage.setItem(key, JSON.stringify(existingEssays));
      console.log('Essays saved successfully');
    } catch (e) {
      console.error('Failed to save Essays:', e);
      throw new Error('Falied to save Essays');
    }
  },
  async clear() {
    try {
      await AsyncStorage.removeItem(key);
      console.log('AsyncStorage cleared successfully');
    } catch (error) {
      console.error('Failed to clear AsyncStorage:', error);
      throw new Error('Faled to clear AsyncStorage');
    }
  },
};

export default essaysStorage;
