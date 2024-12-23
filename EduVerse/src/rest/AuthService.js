import axios from 'axios';

const LOGIN_API_URL = "http://localhost:8080/deneme/login";
const USER_ID_API_URL = "http://localhost:8080/deneme/current-user-id";

class AuthService {

    login(email, password) {
        return axios.post(LOGIN_API_URL, {
            email: email,
            password: password,
        }, {
            withCredentials: true
        });
    }

    getLoggedInUserId() {
        return axios.get(USER_ID_API_URL, {
            withCredentials: true
        });
    }
}

export default new AuthService();

