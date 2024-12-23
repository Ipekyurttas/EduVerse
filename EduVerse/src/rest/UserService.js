import axios from 'axios';

const API_URL = 'http://localhost:8080/deneme/current-user-id';

class UserService {
    getLoggedInUserData() {
        return axios.get(API_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
}

export default new UserService();
