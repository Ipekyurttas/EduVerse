import { useState } from 'react';
import AuthService from '../rest/AuthService';
import login from '../image/login.png';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthService.login(email, password);

            if (response.data.success) {
                navigate('/home');
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('Giriş işlemi sırasında bir hata oluştu.');
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-image-container">
                    <img src={login} alt="Login Illustration" />
                </div>
            </div>

            <div className="login-form-container">
                <h2 className="login-title">Öğrenim yolculuğunuza devam etmek için oturum açın</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="E-posta"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">
                        Oturum Aç
                    </button>
                </form>
            </div>

            {message && <div className="login-message">{message}</div>}

            <div className="login-links">
                <p>
                    Hesabınız yok mu? <a href="#" className="login-link">Kaydol</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
