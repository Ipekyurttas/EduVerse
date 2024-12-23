import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // State'e ve yönlendirme için
import axios from 'axios';
import '../css/Payment.css';
import Header3 from './Header3';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { courseId } = location.state || {}; // State'ten courseId'yi al

    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentNo, setPaymentNo] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(null);

    // PaymentAmount ve PaymentNo'nun güncellenmesi
    const handlePaymentAmountChange = (e) => setPaymentAmount(e.target.value);
    const handlePaymentNoChange = (e) => setPaymentNo(e.target.value);

    const handlePayment = async () => {
        if (!paymentAmount || !paymentNo) {
            setPaymentStatus('Lütfen tüm alanları doldurun.');
            return;
        }

        try {
            // API'ye courseId, paymentAmount ve paymentNo gönderiyoruz
            const response = await axios.post(`http://localhost:8080/relations/getPayment/${courseId}`, {
                paymentAmount,
                paymentNo
            });

            setPaymentStatus('Ödeme başarıyla tamamlandı.');
            alert('Ödeme başarıyla tamamlandı.');
            navigate('/learn');
        } catch (error) {
            setPaymentStatus('Ödeme işlemi başarısız oldu.');
        }
    };

    return (
        <div>
            <Header3 />
            <div className="payment-container">
                <h2 className="payment-header">Ödeme Sayfası</h2>
                <p className="payment-description">Kurs ID: {courseId}</p>

                <div>
                    <label className="payment-label">Ödeme Tutarı (TL):</label>
                    <input
                        type="number"
                        className="payment-input"
                        value={paymentAmount}
                        onChange={handlePaymentAmountChange}
                        placeholder="Ödeme tutarını girin"
                    />
                </div>

                <div>
                    <label className="payment-label">Ödeme Numarası:</label>
                    <input
                        type="text"
                        className="payment-input"
                        value={paymentNo}
                        onChange={handlePaymentNoChange}
                        placeholder="Ödeme numarasını girin"
                    />
                </div>

                <button className="payment-button" onClick={handlePayment}>
                    Ödemeyi Tamamla
                </button>

                {paymentStatus && (
                    <p
                        className={`payment-status ${paymentStatus.includes('başarıyla')
                            ? 'payment-status-success'
                            : 'payment-status-error'
                            }`}
                    >
                        {paymentStatus}
                    </p>
                )}
            </div>
        </div>
    );
}

export default PaymentPage;
