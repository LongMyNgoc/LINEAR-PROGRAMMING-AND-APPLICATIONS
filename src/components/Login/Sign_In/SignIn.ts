// src/components/Login/SignIn.ts
import { useState } from 'react';
import { db } from '../../../hooks/firebase';  // Import Firebase từ file firebase.ts
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';  // Import toast

const useSignIn = () => {
    const [username, setUsername] = useState(''); // MSSV hoặc ID sinh viên
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Vai trò
    const [error, setError] = useState(''); // Thông báo lỗi
    const [loading, setLoading] = useState(false); // Trạng thái loading

    // Xử lý đăng nhập
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu loading khi đăng nhập
        setError(''); // Reset lỗi trước khi thử đăng nhập lại

        try {
            // Kiểm tra thông tin người dùng trong Firestore
            const userDocRef = doc(db, "Students", username); // Truy vấn theo ID sinh viên (username)
            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                setError('MSSV không tồn tại trong hệ thống.');
                toast.error('MSSV không tồn tại trong hệ thống.');
                setLoading(false);
                return;
            }

            // Lấy thông tin người dùng từ Firestore
            const userDoc = userDocSnap.data();

            // Kiểm tra mật khẩu trong Firestore
            if (userDoc.password !== password) {
                setError('Mật khẩu không đúng.');
                toast.error('Mật khẩu không đúng.');
                setLoading(false);
                return;
            }
            // Tạo đối tượng mới chứa cả username và userDoc
            const userWithUsername = {
                username: username,  // Lưu username
                ...userDoc  // Lấy tất cả các trường trong userDoc
            };
          
            // Lưu đối tượng mới vào localStorage
            localStorage.setItem('user', JSON.stringify(userWithUsername));
            
            console.log("Đăng nhập thành công!");
            toast.success('Đăng nhập thành công!');
        } catch (error) {
            console.error("Đăng nhập thất bại: ", error);
            setError('Lỗi đăng nhập, vui lòng thử lại sau.');
            toast.error('Lỗi đăng nhập, vui lòng thử lại sau.');
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    return { username, setUsername, password, setPassword, role, setRole, error, loading, handleLogin };
};

export default useSignIn;
