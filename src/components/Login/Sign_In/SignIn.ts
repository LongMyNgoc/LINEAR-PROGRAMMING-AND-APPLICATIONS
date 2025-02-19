import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { db } from '../../../hooks/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const useSignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  // Khởi tạo useNavigate để điều hướng

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userDocRef = doc(db, "Students", username);
            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                setError('MSSV không tồn tại trong hệ thống.');
                toast.error('MSSV không tồn tại trong hệ thống.');
                setLoading(false);
                return;
            }

            const userDoc = userDocSnap.data();

            if (userDoc.password !== password) {
                setError('Mật khẩu không đúng.');
                toast.error('Mật khẩu không đúng.');
                setLoading(false);
                return;
            }

            const userWithUsername = {
                username: username,
                ...userDoc
            };

            localStorage.setItem('user', JSON.stringify(userWithUsername));
            
            toast.success('Đăng nhập thành công!');

            // Điều hướng đến trang /student sau khi đăng nhập thành công
            setTimeout(() => {
                navigate('/student');
            }, 1000); // Chờ 1 giây để hiển thị thông báo

        } catch (error) {
            console.error("Đăng nhập thất bại: ", error);
            setError('Lỗi đăng nhập, vui lòng thử lại sau.');
            toast.error('Lỗi đăng nhập, vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    return { username, setUsername, password, setPassword, role, setRole, error, loading, handleLogin };
};

export default useSignIn;
