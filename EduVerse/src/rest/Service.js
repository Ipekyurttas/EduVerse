import axios from 'axios';

const API_URL = 'http://localhost:8080/relations/view';

export const sendCourseName = async (courseName) => {
    try {
        const courseData = { courseName }; // Gönderilecek veriyi oluştur
        const response = await axios.post(API_URL, courseData);
        return response.data; // Yanıtı döndür
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};