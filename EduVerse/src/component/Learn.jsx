import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Learn.css';
import Header3 from './Header3';
import java from '../photo/java.webp';
import python from '../photo/python.webp';
import sql from '../photo/sql.jpg';

function Learn() {
    const [courses, setCourses] = useState([]);
    const [certifica, setCertifica] = useState(null);
    const navigate = useNavigate();

    // Kurs fotoğraflarını saklayacak dizi
    const [photos] = useState([
        { id: 1, url: java, title: 'Java' },
        { id: 2, url: python, title: 'Python' },
        { id: 3, url: sql, title: 'Sql' }
    ]);

    useEffect(() => {
        axios.get('http://localhost:8080/relations/getUser', { withCredentials: true })
            .then(response => {
                // Kurs verilerine fotoğraf URL'lerini ekle
                const coursesWithPhotos = response.data.map(course => {
                    // Kurs adını kullanarak doğru fotoğrafı bul
                    const coursePhoto = photos.find(photo => photo.title === course.courseName);

                    // Kurs verilerine fotoğraf URL'sini ekle
                    return {
                        ...course,
                        photoUrl: coursePhoto ? coursePhoto.url : null
                    };
                });

                setCourses(coursesWithPhotos);
            })
            .catch(error => {
                console.error('Kurs verileri alınırken hata oluştu:', error);
            });
    }, [photos]);

    const handleGetCertifica = (courseId) => {
        axios.get('http://localhost:8080/relations/getCertifica', { withCredentials: true })
            .then(response => {
                setCertifica(response.data.certifica);
                navigate(`/certifica/${courseId}`);
            })
            .catch(error => {
                console.error('Sertifika verisi alınırken hata oluştu:', error);
            });
    };

    return (
        <div>
            <Header3 />
            <div className="learn-container">
                <h1>Öğrenim İçeriklerim</h1>

                <div>
                    {courses.map(course => (
                        <div key={course.courseId} className="course-card">
                            {/* Kursa ait fotoğraf */}
                            {course.photoUrl ? (
                                <img src={course.photoUrl} alt={course.courseName} className="course-photo" />
                            ) : (
                                <p>Resim yok</p>
                            )}

                            <h2>{course.courseName}</h2>
                            <p>{course.courseDescription}</p>

                            {course.module && course.module.length > 0 ? (
                                <div>
                                    <h4>Modüller:</h4>
                                    {course.module.map(module => (
                                        <div key={module.moduleId}>
                                            <p className="module-details">{module.moduleTitle} - {module.moduleTime}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-module">Bu kursun modülü yok.</p>
                            )}

                            {course.certifica ? (
                                <div className="certifica">
                                    <button onClick={() => handleGetCertifica(course.courseId)}>Sertifika Al</button>
                                </div>
                            ) : (
                                <p>Bu kursun sertifikası yok</p>
                            )}
                        </div>
                    ))}
                </div>

                {certifica && (
                    <div className="course-card">
                        <h2>Sertifika Bilgisi</h2>
                        <p><strong>Sertifika Başlığı:</strong> {certifica.certificaTitle}</p>
                        <p><strong>Sertifika Açıklaması:</strong> {certifica.certificaDescription}</p>
                        <p><strong>Öğrenci Adı:</strong> {certifica.firstName} {certifica.lastName}</p>
                        <p><strong>Kurs Adı:</strong> {certifica.courseName}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Learn;
