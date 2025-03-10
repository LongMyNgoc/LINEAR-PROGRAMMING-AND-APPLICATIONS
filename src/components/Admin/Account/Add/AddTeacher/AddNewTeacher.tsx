import React, { useState } from 'react';
import './AddNewTeacher.css';
import { addTeacher } from '../../../../../hooks/addTeacher';
import { registerUser } from '../../../../../hooks/authService';

const AddNewTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [password] = useState('123456'); // Mật khẩu mặc định

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setMessage("Vui lòng nhập email!");
            return;
        }

        try {
                    // Bước 1: Đăng ký tài khoản Firebase Authentication
                    await registerUser(email, password);
                } catch (error: any) {
                    // Kiểm tra nếu lỗi là do tài khoản đã tồn tại
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('Tài khoản đã tồn tại, tiếp tục thêm thông tin vào Firestore...');
                    } else {
                        setMessage(`Lỗi đăng ký tài khoản: ${error.message}`);
                        return;
                    }
                }

        const newTeacher = { name, email, sex, phone };

        try {
            const response = await addTeacher(newTeacher);
            if (response.success) {
                setMessage(`Đã thêm giáo viên: ${name}`);
                setName('');
                setEmail('');
                setSex('');
                setPhone('');
            } else {
                setMessage(`Lỗi: ${response.error}`);
            }
        } catch (error: any) {
            setMessage(`Lỗi: ${error.message}`);
        }
    };

    return (
        <div className="add-teacher-container">
            <h3>Thêm Giáo Viên Mới</h3>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="add-teacher-form">
                <div className="input-group">
                    <label htmlFor="name">Tên Giáo Viên</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên giáo viên"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="sex">Giới Tính</label>
                    <input
                        type="text"
                        id="sex"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        placeholder="Nhập giới tính"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Số Điện Thoại</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Thêm</button>
            </form>
        </div>
    );
};

export default AddNewTeacher;
