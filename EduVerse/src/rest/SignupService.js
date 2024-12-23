import axios from 'axios';

const SIGNUP_API_URL = "http://localhost:8080/deneme/signup";

class SignupService {
    signup(signupDto) {
        return axios.post(SIGNUP_API_URL, signupDto);
    }
}

export default new SignupService();

