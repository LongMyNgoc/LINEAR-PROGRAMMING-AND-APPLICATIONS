import React, { useState } from "react";
import "./ForgotPasswordModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from '../../../assets/Login/Logo.png'

interface ForgotPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            toast.error("Vui lòng nhập email!");
            return;
        }

        toast.success("Yêu cầu đặt lại mật khẩu đã được gửi!");
        setEmail(""); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="forgot-password-overlay">
            <div className="forgot-password-modal">
                <img src={Logo} alt="Logo" className="forgot-password-logo" />
                <h2 className="forgot-password-title">Quên Mật Khẩu</h2>
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <input
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="forgot-password-input"
                    />
                    <div className="forgot-password-buttons">
                        <button type="submit" className="forgot-password-submit">Gửi Yêu Cầu</button>
                        <button type="button" onClick={onClose} className="forgot-password-cancel">Hủy</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgotPasswordModal;
