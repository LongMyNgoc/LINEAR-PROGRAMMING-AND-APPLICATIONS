import { useState, useEffect } from 'react';

export const useTopbarLogic = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState<{ username: string; name: string } | null>(null);

    useEffect(() => {
        // Lấy dữ liệu người dùng từ localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); // Xóa dữ liệu user khỏi localStorage
        window.location.href = "/"; // Điều hướng về trang chủ hoặc trang đăng nhập
    };

    return { menuOpen, toggleMenu, handleLogout, user };
};
