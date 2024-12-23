import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // URL parametresi almak için useParams kullanıyoruz
import axios from 'axios';
import '../css/Certifica.css';
import certificaPhoto from '../photo/certifica.png';
import Header3 from './Header3';

const Certifica = () => {
    const { courseId } = useParams();  // courseId parametresini URL'den alıyoruz
    const [certifica, setCertifica] = useState(null);
    const [user, setUser] = useState(null);
    const [courseName, setCourseName] = useState(null);

    useEffect(() => {
        // Backend'den ilgili kursun sertifika bilgilerini almak için istek yapıyoruz
        axios.get('http://localhost:8080/relations/getCertifica', { withCredentials: true })
            .then(response => {
                // response.data.course, sertifikayı içeren kurs bilgilerini içeriyor
                console.log(response.data);
                const courses = response.data.course;
                console.log(courses);
                const userData = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName
                };
                setUser(userData);
                const course = courses.find(course => course.courseId === parseInt(courseId));
                setCourseName(course ? course.courseName : null);  // Kurs adını alıyoruz
                setCertifica(course ? course.certifica : null);  // Sertifikayı alıyoruz
            })
            .catch(error => {
                console.error('Sertifika bilgileri alınırken hata oluştu:', error);
            });
    }, [courseId]);  // courseId değiştiğinde yeniden veri çek

    if (!certifica) {
        return (
            <div>
                <h2>Sertifika bilgileri yükleniyor...</h2>
            </div>
        );
    }

    return (
        <div>
            <Header3 />
            <div className="certifica-container">
                <h2>İşte Sertifikan Burada!</h2>
                <div className="certifica-details">
                    <img src={certificaPhoto} className='certifica-photo' />
                    <p><strong>Sertifika Başlığı:</strong> {certifica.certificaTitle}</p>
                    <p><strong>Sertifika Açıklaması:</strong> {certifica.certificaDescription}</p>
                    <p><strong>Öğrenci Adı:</strong> {user.firstName} {certifica.lastName}</p>
                    <p><strong>Kurs Adı:</strong> {courseName}</p>
                </div>
            </div>
        </div>
    );
};

export default Certifica;
