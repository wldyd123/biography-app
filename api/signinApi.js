import axios from 'axios';
const signIn = async (email, password) => {
  try {
    const response = axios.post('/auth/sign-in', {
      email: email,
      password: password,
    });

    const success = (await response).data.success;
    const access_token = (await response).data.access_token;
    const refresh_token = (await response).data.refresh_token;
    
    console.log("success", success, "access_token : ",access_token, "refresh_token : ",refresh_token);

  } catch (error) {
    console.error("일반 로그인 중 실패 : ", error);
  }
};

//카카오 로그인은 잘 모르겠다. 
const kakaoLogin = async() => {
    try {
        const

    }catch(error) {

    }
}


const sign_out = async() => {
    try{
    const response = await axios.post('/auth/sign-out', {access_token});
    console.log }catch(error){
        console.error('로그아웃 실패 : ', error);
    }
}