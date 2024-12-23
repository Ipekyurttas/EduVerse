import axios from 'axios';

const API_URL = 'http://localhost:8080/deneme/update';

class UpdateService {
    updateUser(formData, userId) {
        console.log("Güncellenen formData:", formData);
        console.log("Kullanıcı ID'si:", userId);

        return axios.put(API_URL, {
            ...formData,
            userId: userId,
        })
            .then(response => {
                console.log("Gelen yanıt:", response.data);
                return response;
            })
            .catch(error => {
                console.error("API isteği hatası:", error);
                throw error;
            });
    }
}

export default new UpdateService();
