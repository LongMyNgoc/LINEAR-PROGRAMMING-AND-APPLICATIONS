import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { db } from '../../../hooks/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth

const useSignIn = () => {
    const [username, setUsername] = useState(''); // Đây là email
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Mặc định là 'student'
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const auth = getAuth(); // Khởi tạo Firebase Authentication

        // Kiểm tra vai trò
        try {
            let userDocRef;
            if (role === 'admin') {
                // Đăng nhập với Firebase Authentication cho admin
                await signInWithEmailAndPassword(auth, username, password);
                
                userDocRef = doc(db, "Admins", username);
                const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                setError('Tài khoản không tồn tại trong hệ thống.');
                toast.error('Tài khoản không tồn tại trong hệ thống.');
                setLoading(false);
                return;
            }
                const userDoc = userDocSnap.data();

                const userWithUsername = {
                username: username,
                ...userDoc
            };

            localStorage.setItem('user', JSON.stringify(userWithUsername));
                
                toast.success('Đăng nhập thành công!');

                // Điều hướng đến trang admin
                setTimeout(() => {
                    navigate('/admin');
                }, 1000);
                return; // Kết thúc hàm sau khi đăng nhập thành công
            }

            if (role === 'student') {
                userDocRef = doc(db, "Students", username);
            } else if (role === 'teacher') {
                userDocRef = doc(db, "Teachers", username);
            } else {
                setError('Vai trò không hợp lệ.');
                toast.error('Vai trò không hợp lệ.');
                setLoading(false);
                return;
            }

            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                setError('Tài khoản không tồn tại trong hệ thống.');
                toast.error('Tài khoản không tồn tại trong hệ thống.');
                setLoading(false);
                return;
            }

            const userDoc = userDocSnap.data();

            // Kiểm tra mật khẩu
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

            // Điều hướng đến trang tương ứng sau khi đăng nhập thành công
            setTimeout(() => {
                if (role === 'student') {
                    navigate('/student');
                } else if (role === 'teacher') {
                    navigate('/teacher'); // Thay đổi đường dẫn nếu cần
                }
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