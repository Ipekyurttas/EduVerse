import axios from 'axios';

const BASE_URL = 'http://localhost:8080/relations';

const createCourse = async (courseData) => {
    try {
        const response = await axios.post(`${BASE_URL}/getCourse`, courseData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Kurs oluşturulurken bir hata oluştu:', error);
        throw error;
    }
};

export default { createCourse };