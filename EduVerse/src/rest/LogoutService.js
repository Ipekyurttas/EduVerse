import axios from 'axios';

const API_URL = 'http://localhost:8080/deneme/logout';

class LogoutService {
    // Çıkış yapma işlemi
    logout() {
        return axios.post(API_URL).then(() => {
            localStorage.removeItem('userId');
        });
    }
}

export default new LogoutService();


