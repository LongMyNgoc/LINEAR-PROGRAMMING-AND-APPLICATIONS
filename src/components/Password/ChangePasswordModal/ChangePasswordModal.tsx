// ChangePasswordModal.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ChangePasswordModal.css'; 
import Logo from '../../../assets/Login/Logo.png';
import useChangePassword from './ChangePasswordModal'; // Import hook logic
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    const [user, setUser] = useState<{ username: string; name: string; password: string; sex: string; mssv: string; class: string } | null>(null);
    const navigate = useNavigate(); // Sử dụng useNavigate để chuyển hướng

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); 
        }
    }, []);

    const {
        oldPassword,
        newPassword,
        confirmPassword,
        error,
        handleOldPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
    } = useChangePassword(user?.username ?? '', navigate); // Truyền navigate vào hook

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <img src={Logo} alt="Logo" className='logo-changepassword' />
                    <h1>ĐỔI MẬT KHẨU</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Mật khẩu cũ:</label>
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => handleOldPasswordChange(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Mật khẩu mới:</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => handleNewPasswordChange(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Nhập lại mật khẩu:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit">Xác nhận</button>
                        <button type="button" onClick={onClose} className="cancel-button">Hủy</button>
                    </form>
                </div>
            </div>
            <ToastContainer /> {/* Thêm ToastContainer để hiển thị thông báo */}
        </>
    );
};

export default ChangePasswordModal;
