import axios from 'axios';

const createProfile = async (nickname, introduce, profilePicture) => {
  try {
    const response = await axios.post('/api/profile', {
      nickname: nickname,
      introduce: introduce,
      profilePicture: profilePicture,
    });

    console.log('프로필이 성공적으로 저장되었습니다 : ', response.data);
    return response.data;
  } catch (error) {
    console.error('게시글을 올리는 도중 오류 발생함:', error);
    throw error;
  }
};

const updateProfile = async (nickname, introduce, profilePicture) => {
  try {
    const response = await axios.put('/api/profile', {
      nickname: nickname,
      introduce: introduce,
      profilePicture: profilePicture,
    });

    console.log('프로필이 성공적으로 수정되었습니다: ', response.date);
    return response.data;
  } catch (error) {
    console.error('게시글을 수정하는 도중 오류 발생함: ', error);
    throw error;
  }
};

export default profileApi;
