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

        // Giả lập gửi yêu cầu đặt lại mật khẩu
        toast.success("Yêu cầu đặt lại mật khẩu đã được gửi!");
        setEmail(""); // Xóa email sau khi gửi
        onClose(); // Đóng modal
    };

    if (!isOpen) return null; // Nếu modal không mở, không render gì cả

    return (
        <div className="modal-forgot-overlay">
            <div className="modal-fogot-content">
            <img src={Logo} alt="Logo" className='logo-forgotpassword' />
                <h1>Quên Mật Khẩu</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Gửi Yêu Cầu</button>
                    <button type="button" onClick={onClose} className="cancel-button">Hủy</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ForgotPasswordModal;
