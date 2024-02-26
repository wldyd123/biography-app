import axios from 'axios';

const sendemailCert = async email => {
  try {
    const response = axios.post('/auth/email', {email: email});
    //post했을 때 얻는 응답값(response)

    const {certification_key} = (await response).data;
    console.log('Certification key:', certification_key);

    return certification_key; //return할 수도 안할 수도 있음.
  } catch (error) {
    console.error('이메일 인증 요청 실패 : ', error);
    return '';
  }
};

const val_emailCert = async (certification_key, certification_code) => {
  try {
    const response = axios.post('/auth/email/validation', {
      certification_key: certification_key,
      certification_code: certification_code,
    });
    const {is_validated} = (await response).data; //{}이걸 꼭 넣어줘야 하는 건가?
    //is_validated는 0또는 1을 가지고 있을 것.
    //인증 성공시 0반환, 실패시 1반환.
    return is_validated;
  } catch (error) {
    console.error('이메일 인증확인 실패 : ', error);
  }
};

const signUp = async (email, password, name, tel, birth) => {
  try {
    const response = axios.post('/auth/sign-up', {
      email: email,
      password: password,
      name: name,
      tel: tel,
      birth: birth,
    });

    const success = (await response).data.success;
    const detail = (await response).data.detail;
    console.log('success : ', success, 'detail : ', detail);
    console.log(
      'sucess가 0이면 성공, 1이면 실패, 실패인 경우 detail이 이유를 반환함. ',
    );
  } catch (error) {
    console.error('일반 회원가입 중 실패 : ', error);
  }
};
