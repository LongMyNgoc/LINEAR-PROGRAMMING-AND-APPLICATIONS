import { useState, useEffect } from 'react';
import './TeacherProfile.css';
import Logo from '../../../assets/Student/Logo.png';
import Avatar from '../../../assets/Student/avatar.png';
import { FaCog, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import TeacherInformation from './TeacherInformation.tsx';
import ChangePasswordModal from '../../Password/ChangePasswordModal/ChangePasswordModal.tsx'; // Import modal

const TeacherProfile = () => {
    const [user, setUser] = useState<{ username: string; name: string; phone: string; sex: string; } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State để kiểm soát modal

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); 
        }
    }, []);

    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <img src={Avatar} alt="Avatar" className="avatar" />
                    <img src={Logo} alt="Logo" className="Logo" />
                </div>

                <div className="user-information">
                    <p>
                        <strong>{user?.name || 'Người dùng'}</strong> <br />
                        Giáo Viên
                    </p>
                </div>
                <div className="contact-info">
                    <p>
                        <FaPhone className="icon-info" /> {user?.phone || 'Chưa cập nhật'}
                        <FaEnvelope className="icon-info" /> {user?.username || 'Chưa cập nhật'}
                    </p>
                </div>

                <div className="button-container">
                    <button className="change-password" onClick={() => setIsModalOpen(true)}>
                        <FaCog className="icon" /> Đổi mật khẩu
                    </button>
                </div>
            </div>
            {user && (
                <TeacherInformation
                    name={user.name}
                    sex={user.sex}
                    phone={user.phone}
                    email={user.username} // Giả sử username là email
                />
            )}
            <ChangePasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default TeacherProfile;
