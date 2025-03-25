import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase"; // Import auth từ file Firebase config

/**
 * Đăng ký user với email và password
 * @param email - Email của user
 * @param password - Password của user
 * @returns Trả về thông tin user hoặc lỗi
 */
export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user, error: null };
    } catch (error: any) {
        return { user: null, error: error.message };
    }
};

/**
 * Đăng nhập user với email và password
 * @param email - Email của user
 * @param password - Password của user
 * @returns Trả về thông tin user hoặc lỗi
 */
export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user, error: null };
    } catch (error: any) {
        return { user: null, error: error.message };
    }
};

/**
 * Đăng xuất user khỏi hệ thống
 */
export const logoutUser = async () => {
    try {
        await signOut(auth);
        return { success: true, error: null };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
};
