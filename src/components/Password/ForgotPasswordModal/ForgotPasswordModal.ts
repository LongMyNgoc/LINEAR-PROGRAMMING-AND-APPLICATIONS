// useForgotPassword.ts
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const useForgotPassword = () => {
    const resetPassword = async (email: string) => {
        const auth = getAuth();
        try {
            // Gửi yêu cầu đặt lại mật khẩu
            await sendPasswordResetEmail(auth, email);
            // Thông báo cho người dùng rằng yêu cầu đã được gửi
            toast.success("Nếu email hợp lệ, bạn sẽ nhận được thông báo đặt lại mật khẩu!");
        } catch (error) {
            // Có thể thông báo lỗi tổng quát mà không cần thông báo cụ thể về email không tồn tại
            toast.error("Có lỗi xảy ra khi gửi email!");
        }
    };

    return { resetPassword };
};

export default useForgotPassword;
