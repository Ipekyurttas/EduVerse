import axios from 'axios';

const API_URL = 'http://localhost:8080/relations/getInstructor/{userId}';

class EducationService {
    submitInstructorDetails(formData, userId) {
        console.log("Form verisi:", formData);
        console.log("Kullanıcı ID'si:", userId);

        return axios.post(API_URL.replace('{userId}', userId), {
            profession: formData.profession,
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

export default new EducationService();


