import React, { useState } from 'react';
import './AddNewStudent.css';
import { addStudent } from '../../../../../hooks/addStudent';
import { registerUser } from '../../../../../hooks/authService';

const AddNewStudent = () => {
    const [mssv, setMssv] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [className, setClassName] = useState('');
    const [phone, setPhone] = useState('');
    const [password] = useState('123456'); // Mật khẩu mặc định
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Bước 1: Đăng ký tài khoản Firebase Authentication
            await registerUser(email, password);
        } catch (error: any) {
            // Kiểm tra nếu lỗi là do tài khoản đã tồn tại
            if (error.code === 'auth/email-already-in-use') {
                console.log('Tài khoản đã tồn tại, tiếp tục thêm thông tin vào Firestore...');
            } else {
                setMessage(`Lỗi đăng ký tài khoản: ${error.message}`);
                setLoading(false);
                return;
            }
        }

        // Bước 2: Thêm sinh viên vào database
        const newStudent = { mssv, name, email, sex, class: className, phone };

        try {
            const result = await addStudent(newStudent);
            if (result.success) {
                setMessage('Thêm sinh viên thành công!');
                setMssv('');
                setName('');
                setEmail('');
                setSex('');
                setClassName('');
                setPhone('');
            } else {
                setMessage(`Lỗi thêm sinh viên: ${result.error}`);
            }
        } catch (error) {
            setMessage('Đã xảy ra lỗi khi thêm sinh viên.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-student-container">
            <h3>Thêm Sinh Viên Mới</h3>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="add-student-form">
                <div className="input-group">
                    <label htmlFor="mssv">MSSV</label>
                    <input
                        type="text"
                        id="mssv"
                        value={mssv}
                        onChange={(e) => setMssv(e.target.value)}
                        placeholder="Nhập MSSV"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="name">Tên Sinh Viên</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nhập tên sinh viên"
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
                    <label htmlFor="className">Lớp</label>
                    <input
                        type="text"
                        id="className"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        placeholder="Nhập lớp"
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
                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Đang thêm...' : 'Thêm'}
                </button>
            </form>
        </div>
    );
};

export default AddNewStudent;
