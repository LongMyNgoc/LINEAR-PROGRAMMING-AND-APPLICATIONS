// useChangePassword.ts
import { useState } from 'react';
import { getAuth, updatePassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'; // Import toast

const useChangePassword = (userEmail: string, navigate: (path: string) => void) => { // Thêm tham số navigate
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleOldPasswordChange = (value: string) => {
        setOldPassword(value);
    };

    const handleNewPasswordChange = (value: string) => {
        setNewPassword(value);
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            const auth = getAuth();
            try {
                // Xác thực người dùng với mật khẩu cũ
                await signInWithEmailAndPassword(auth, userEmail, oldPassword);
                
                // Nếu xác thực thành công, cập nhật mật khẩu mới
                const user = auth.currentUser;
                if (user) {
                    await updatePassword(user, newPassword);
                    toast.success('Đổi mật khẩu thành công!'); // Hiển thị toast thành công
                    setTimeout(() => {
                        navigate('/'); // Chuyển hướng về trang chính
                    }, 2000);
                    return true;
                }
            } catch (error) {
                setError("Mật khẩu cũ không chính xác: ");
                toast.error("Mật khẩu cũ không chính xác!"); // Hiển thị toast lỗi
                return false;
            }
        } else {
            setError("Mật khẩu xác nhận không khớp!");
            toast.error("Mật khẩu xác nhận không khớp!"); // Hiển thị toast lỗi
            return false;
        }
    };

    return {
        oldPassword,
        newPassword,
        confirmPassword,
        error,
        handleOldPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
    };
};

export default useChangePassword;
