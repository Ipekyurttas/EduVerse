import React, { useEffect, useState } from 'react';
import { sendCourseName } from '../rest/Service';
import '../css/CoursePage.css';
import Header3 from './Header3';
import { useNavigate } from 'react-router-dom'; // Yeni sayfaya yönlendirme için
import java from '../photo/java.webp';
import python from '../photo/python.webp';
import sql from '../photo/sql.jpg';

function CoursePage() {
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Yönlendirme için

    // Kurs fotoğraflarını saklayacak dizi
    const [photos] = useState([
        { title: 'Java', url: java },
        { title: 'Python', url: python },
        { title: 'Sql', url: sql }
    ]);

    useEffect(() => {
        const courseName = localStorage.getItem('selectedCourseName'); // Kurs adını localStorage'dan al
        if (courseName) {
            const fetchData = async () => {
                try {
                    const data = await sendCourseName(courseName); // API'yi çağır
                    // Kurs verilerine fotoğraf URL'lerini ekle
                    const coursesWithPhotos = data.map(course => {
                        // Kurs adıyla eşleşen fotoğrafı bul
                        const coursePhoto = photos.find(photo => photo.title === course.courseName);
                        // Kurs verilerine fotoğraf URL'sini ekle
                        return {
                            ...course,
                            photoUrl: coursePhoto ? coursePhoto.url : null
                        };
                    });

                    setCourseData(coursesWithPhotos);
                } catch (err) {
                    setError('Kurs verileri alınırken bir hata oluştu.');
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        } else {
            setError('Kurs adı bulunamadı.');
            setLoading(false);
        }
    }, [photos]);

    const handleBuyClick = (courseId, paymentAmount) => {
        // Satın al butonuna tıklandığında yeni sayfaya yönlendirme
        navigate('/payment', { state: { courseId } });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Header3 />
            <div className="course-container">
                {courseData && courseData.map((course, index) => (
                    <div key={index} className="course-card">
                        {/* Kursa ait fotoğraf */}
                        {course.photoUrl ? (
                            <img src={course.photoUrl} alt={course.courseName} className="course-photo" />
                        ) : (
                            <p>Resim yok</p>
                        )}

                        <h1>{course.courseName}</h1> {/* courseName'i ekrana yazdır */}
                        <p>{course.courseDescription}</p> {/* courseDescription'u ekrana yazdır */}
                        {course.certifica ? (
                            <p>Certifika: {course.certifica.certificaTitle}</p>
                        ) : (
                            <p>No Certificate Available</p>
                        )}

                        <button
                            className="buy-button"
                            onClick={() => handleBuyClick(course.courseId, course.paymentAmount)}
                        >
                            Satın Al
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursePage;
