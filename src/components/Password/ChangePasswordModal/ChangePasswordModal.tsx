import React, { useState } from 'react';
import './ChangePasswordModal.css'; 
import Logo from '../../../assets/Login/Logo.png';

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            // Xử lý đổi mật khẩu tại đây
            console.log('Đổi mật khẩu thành công:', newPassword);
            onClose(); // Đóng modal sau khi đổi mật khẩu
        } else {
            alert("Mật khẩu xác nhận không khớp!");
        }
    };

    if (!isOpen) return null; // Nếu modal không mở, không render gì cả

    return (

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
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Mật khẩu mới:</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Nhập lại mật khẩu:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Xác nhận</button>
                    <button type="button" onClick={onClose} className="cancel-button">Hủy</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordModal;
