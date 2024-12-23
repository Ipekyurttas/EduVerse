import { useState } from 'react';
import AuthService from '../rest/AuthService';
import { useNavigate } from 'react-router-dom';
import login from '../image/login.png';
import '../css/Login.css';

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
                const userIdResponse = await AuthService.getLoggedInUserId();

                if (userIdResponse.data) {
                    console.log('User ID:', userIdResponse.data);
                    localStorage.setItem('userId', userIdResponse.data);
                }

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
                    <img src={login} alt="Login Illustration" className='left-image' />
                </div>

                <div className="login-form-container">
                    <h2 className="login-title">Öğrenim yolculuğunuza <br />devam etmek için oturum<br /> açın</h2>
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

                    {message && <div className="login-message">{message}</div>}

                    <div className="login-links">
                        <p>
                            Hesabınız yok mu? <a href="/signup" className="login-link">Kaydol</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;


