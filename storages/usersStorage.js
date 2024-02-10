import AsyncStorage from '@react-native-community/async-storage';

const line = 'oneliner';
const image = 'profileImage';
const name = 'nickname';
const key = 'User';

const usersStorage = {
  async getLine() {
    try {
      const rawLine = await AsyncStorage.getItem(line);

      if (!rawLine) {
        // No saved rawline
        return [];
      }

      return rawLine;
    } catch (error) {
      console.error('Failed to load line:', error);
      throw new Error('Failed to load line');
    }
  },

  async getImage() {
    try {
      const rawImage = await AsyncStorage.getItem(image);

      if (!rawImage) {
        // No saved rawimage
        return [];
      }

      return rawImage;
    } catch (error) {
      console.error('Failed to load image :', error);
      throw new Error('Failed to load image');
    }
  },
  async getNickname() {
    try {
      const rawNickname = await AsyncStorage.getItem(name);

      if (!rawNickname) {
        // No saved rawline
        return [];
      }

      return rawNickname;
    } catch (error) {
      console.error('Failed to load Nickname:', error);
      throw new Error('Failed to load Nickname');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(line, data.oneliner);
      await AsyncStorage.setItem(image, data.profileImage);
      await AsyncStorage.setItem(name, data.nickname);
      console.log('User profile updated successfully');
    } catch (e) {
      console.error('Failed to save users:', e);
      throw new Error('Failed to save users');
    }
  },
  async delete() {
    try {
      await AsyncStorage.setItem(image, '../assets/user.png');
      const getImage = await AsyncStorage.getItem(image);
      console.log(getImage);
      console.log('User profileImage deleted successfully');
    } catch (e) {
      console.error('Failed to remove profileImage');
    }
  },
  async clear() {
    try {
      await AsyncStorage.removeItem(key);
      console.log('AsyncStorage for users cleared successfully');
    } catch (error) {
      console.error('Failed to clear AsyncStorage for users:', error);
      throw new Error('Failed to clear AsyncStorage for users');
    }
  },
};

export default usersStorage;
