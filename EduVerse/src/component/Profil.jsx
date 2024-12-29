import React, { useState, useEffect } from 'react';
import Header3 from './Header3';
import '../css/Profil.css';
import user from '../image/user.png';
import UpdateService from '../rest/UpdateService';
import LogoutService from '../rest/LogoutService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profil() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/deneme/current-user-id', { withCredentials: true })
            .then(response => {
                const userId = response.data;
                if (userId) {
                    setIsLoggedIn(true);
                    localStorage.setItem('userId', userId);
                }
            })
            .catch(error => {
                console.error('Kullanıcı bilgileri alınırken hata oluştu:', error);
                setIsLoggedIn(false);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
            console.log(userId);
            if (userId) {
                await UpdateService.updateUser(formData, userId);
                alert("Bilgiler başarıyla güncellendi!");
            } else {
                alert('Kullanıcı ID bulunamadı.');
            }
        } catch (error) {
            console.error("Güncellenirken bir hata oluştu.", error);
            alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };

    const handleLogout = async () => {
        try {
            await LogoutService.logout();
            alert("Başarıyla çıkış yapıldı.");
            localStorage.removeItem('userId');
            navigate('/');
        } catch (error) {
            console.error("Çıkış yapılırken bir hata oluştu.", error);
            alert("Çıkış yapılırken bir hata oluştu.");
        }
    };

    const handleLearningContent = () => {
        navigate('/learn');
    };

    if (!isLoggedIn) {
        return (
            <div>
                <Header3 />
                <p>Giriş yapmanız gerekiyor.</p>
            </div>
        );
    }

    return (
        <div>
            <Header3 />
            <div className="profil-container">
                <div className="profil-card">
                    <img src={user} className='profil-image' alt="Kullanıcı" />
                    <h2>{formData.firstName} {formData.lastName}</h2>
                    <div className="profil-buttons">
                        <button className="btn orange" onClick={handleLearningContent}>ÖĞRENİM İÇERİKLERİM</button>
                        <button className="btn red" onClick={handleLogout}>ÇIKIŞ YAP</button>
                    </div>
                </div>

                <div className="profil-form">
                    <h3>Profil Bilgileri</h3>
                    <form onSubmit={handleUpdate}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Ad"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Soyad"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-posta"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Şifre"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn blue">
                            Güncelle
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profil;