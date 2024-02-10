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
        isPublic: data.isPublic,
      };
      //와 *** data.isPullic || true로 쓰면 그냥 무조건 true구나... 바보다 진심.....
      existingEssays.push(newEssay);

      //객체를 -> 문자열로 바꾼 뒤 asyncstorage에 저장.
      await AsyncStorage.setItem(key, JSON.stringify(existingEssays));
      console.log('Essays saved successfully');
    } catch (e) {
      console.error('Failed to save Essays:', e);
      throw new Error('Falied to save Essays');
    }
  },
  async update(id, newData) {
    try {
      const rawEssays = await AsyncStorage.getItem(key);
      const existingEssays = rawEssays ? JSON.parse(rawEssays) : [];

      const updatedEssays = existingEssays.map(essay => {
        if (essay.id === id) {
          return {
            ...essay,
            title: newData.title || essay.title,
            body: newData.body || essay.body,
            createdAt: new Date(),
            isPublic: newData.isPublic || essay.isPublic,
          };
        }
        return essay;
      });

      await AsyncStorage.setItem(key, JSON.stringify(updatedEssays));
      console.log('Essay updated successfully');
      console.log('Updated Essays:', updatedEssays);
    } catch (error) {
      console.error('Failed to update Essay:', error);
      throw new Error('Failed to update Essay');
    }
  },

  async remove(id) {
    try {
      const rawEssays = await AsyncStorage.getItem(key);
      const existingEssays = rawEssays ? JSON.parse(rawEssays) : [];

      // 해당 id와 일치하는 에세이를 필터링하여 제외한 후 다시 저장
      const updatedEssays = existingEssays.filter(essay => essay.id !== id);

      await AsyncStorage.setItem(key, JSON.stringify(updatedEssays));
      console.log('Essay deleted successfully');
    } catch (error) {
      console.error('Failed to delete Essay:', error);
      throw new Error('Failed to delete Essay');
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
