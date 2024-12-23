import React, { useState, useEffect } from 'react';
import '../css/Education.css';
import Header1 from './Header1';
import Header3 from './Header3';
import writing from '../image/writing.png';
import pencil from '../image/pencil.png';
import trophy from '../image/trophy.png';
import EducationService from '../rest/EducationService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Education = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        userId: null
    });
    const [professionInput, setProfessionInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setIsLoggedIn(true);
            fetchUserDetails(userId);
        } else {
            console.error('Kullanıcı giriş yapmamış.');
            setIsLoggedIn(false);
        }
    }, []);

    const fetchUserDetails = async (userId) => {
        try {
            const userDetails = await axios.get(`http://localhost:8080/deneme/list/${userId}`);
            const userData = userDetails.data;
            setUser({
                firstName: userData.firstName,
                lastName: userData.lastName,
                userId: userId
            });
        } catch (error) {
            console.error('Kullanıcı detayları alınırken hata oluştu:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = {
                profession: professionInput,
            };

            const response = await EducationService.submitInstructorDetails(formData, user.userId);

            alert('Başarıyla eğitmen olarak kaydoldunuz!');

            navigate('/course');
            console.log(response.data);
        } catch (error) {
            setResponseMessage('Eğitmen olma sırasında hata oluştu.');
            alert('Eğitmen olma sırasında hata oluştu.');
            console.error("Bir hata oluştu:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header1 />
            <Header3 />
            <div className="education-container">
                <h1>Başlamak için birçok neden var</h1>
                <div className="reasons-container">
                    <div className="reason">
                        <img src={writing} alt="Kendi tarzınızda öğretin" />
                        <h3>Kendi tarzınızda öğretin</h3>
                        <p>
                            Dilediğiniz kursu, dilediğiniz şekilde yayınlayın ve kendi içeriğiniz üzerinde her zaman kontrol sahibi olun.
                        </p>
                    </div>
                    <div className="reason">
                        <img src={pencil} alt="Öğrencilere ilham verin" />
                        <h3>Öğrencilere ilham verin</h3>
                        <p>
                            Bildiklerinizi öğretin ve öğrencilerin ilgi alanlarını keşfetmesine, yeni yetkinlikler edinmesine ve kariyerlerinde ilerlemesine yardımcı olun.
                        </p>
                    </div>
                    <div className="reason">
                        <img src={trophy} alt="Kazançlı çıkın" />
                        <h3>Kazançlı çıkın</h3>
                        <p>
                            Profesyonel ağınızı genişletin, uzmanlık alanınızı oluşturun ve her ücretli kayıttan para kazanın.
                        </p>
                    </div>
                </div>
                <div className="form-container">
                    <h2>Şimdi siz de bir eğitmen olun</h2>
                    <form className="educator-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ad"
                            name="firstName"
                            value={user.firstName}
                            readOnly
                        />
                        <input
                            type="text"
                            placeholder="Soyad"
                            name="lastName"
                            value={user.lastName}
                            readOnly
                        />
                        <input
                            type="text"
                            placeholder="Uzmanlık"
                            name="expertise"
                            value={professionInput}
                            onChange={(e) => setProfessionInput(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Yükleniyor...' : 'Eğitmen Ol'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Education;