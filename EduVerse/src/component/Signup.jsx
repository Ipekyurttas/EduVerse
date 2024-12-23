import React, { useState } from 'react';
import SignupService from '../rest/SignupService';
import signup from '../image/signup.png'
import '../css/Signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signupDto = {
            firstName,
            lastName,
            email,
            password
        };

        try {
            const response = await SignupService.signup(signupDto);

            if (response.data.success) {
                navigate('/login');
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div>
            <div className='signup-container'>
                <div className='signup-left'>
                    <img src={signup} />
                </div>
                <div className='signup-right'>
                    <h2>Kaydolun ve öğrenmeye <br /> başlayın</h2>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ad"
                            className="signup-input"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Soyad"
                            className="signup-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="E-posta"
                            className="signup-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Şifre"
                            className="signup-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="signup-button">Kaydol</button>
                    </form>
                    {message && <div className="signup-message">{message}</div>}
                    <div className="signup-footer">
                        <span>Zaten bir hesabınız var mı?</span>
                        <a href="/login" className="signup-link">Oturum aç</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
