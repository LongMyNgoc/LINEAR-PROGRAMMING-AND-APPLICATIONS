import { deleteUser } from "firebase/auth";
import { auth } from "./firebase";

/**
 * Xóa tài khoản của người dùng hiện tại
 * @returns Trả về kết quả xóa thành công hoặc lỗi
 */
export const deleteCurrentUser = async () => {
    try {
        if (auth.currentUser) {
            await deleteUser(auth.currentUser);
            return { success: true, error: null };
        } else {
            return { success: false, error: "No user is signed in." };
        }
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};
