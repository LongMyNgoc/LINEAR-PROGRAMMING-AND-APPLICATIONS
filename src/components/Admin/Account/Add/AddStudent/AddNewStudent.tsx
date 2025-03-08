import React, { useState } from 'react';
import './AddNewStudent.css';

const AddNewStudent = () => {
    const [mssv, setMssv] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [className, setClassName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newStudent = { mssv, name, email, sex, className, phone };
        console.log(newStudent);
        // Call your API or other functions to save the new student data
    };

    return (
        <div className="add-student-container">
            <h3>Thêm Sinh Viên Mới</h3>
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
                <button type="submit" className="submit-btn">Thêm</button>
            </form>
        </div>
    );
};

export default AddNewStudent;
