import React, { useState } from 'react';
import './AddNewTeacher.css'; // Bạn có thể tạo một file CSS riêng cho giáo viên nếu muốn

const AddNewTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTeacher = { name, email, sex, phone };
        console.log(newTeacher);
        // Call your API or other functions to save the new teacher data
    };

    return (
        <div className="add-teacher-container">
            <h3>Thêm Giáo Viên Mới</h3>
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
