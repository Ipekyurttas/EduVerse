import axios from 'axios';

const LOGIN_API_URL = "http://localhost:8080/deneme/login";

class AuthService {
    login(email, password) {
        return axios.post(LOGIN_API_URL, {
            email: email,
            password: password,
        });
    }

}

export default new AuthService();
