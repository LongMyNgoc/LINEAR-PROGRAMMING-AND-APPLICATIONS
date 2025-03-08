import React, { useState } from 'react';
import '../../../../../styles/Modal.css'; // Chỉnh sửa CSS nếu cần

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    student: { mssv: string; name: string; class: string; sex: string; email: string; phone: string };
    onSave: (updatedStudent: { mssv: string; name: string; class: string; sex: string; email: string; phone: string }) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, student, onSave }) => {
    const [updatedStudent, setUpdatedStudent] = useState(student);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedStudent((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(updatedStudent);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3>Chỉnh sửa thông tin sinh viên</h3>
                <form onSubmit={handleSubmit} className="add-teacher-form">
                    <div className="input-group">
                        <label htmlFor="name">Tên Sinh Viên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedStudent.name}
                            onChange={handleChange}
                            placeholder="Nhập tên sinh viên"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="class">Lớp</label>
                        <input
                            type="text"
                            id="class"
                            name="class"
                            value={updatedStudent.class}
                            onChange={handleChange}
                            placeholder="Nhập lớp"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sex">Giới Tính</label>
                        <input
                            type="text"
                            id="sex"
                            name="sex"
                            value={updatedStudent.sex}
                            onChange={handleChange}
                            placeholder="Nhập giới tính"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={updatedStudent.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Số Điện Thoại</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={updatedStudent.phone}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>Hủy</button>
                        <button type="submit">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
