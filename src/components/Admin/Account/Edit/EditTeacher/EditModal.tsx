import React, { useState } from 'react';
import '../../../../../styles/Modal.css'; // Bạn có thể chỉnh sửa CSS nếu cần

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    teacher: { name: string; sex: string; email: string; phone: string };
    onSave: (updatedTeacher: { name: string; sex: string; email: string; phone: string }) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, teacher, onSave }) => {
    const [updatedTeacher, setUpdatedTeacher] = useState(teacher);

    // Cập nhật thông tin giáo viên khi thay đổi trường input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedTeacher((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(updatedTeacher); // Gọi hàm onSave để lưu thông tin
        onClose(); // Đóng modal sau khi lưu
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3>Chỉnh sửa thông tin giáo viên</h3>
                <form onSubmit={handleSubmit} className="add-teacher-form">
                    <div className="input-group">
                        <label htmlFor="name">Tên Giáo Viên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedTeacher.name}
                            onChange={handleChange}
                            placeholder="Nhập tên giáo viên"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={updatedTeacher.email}
                            onChange={handleChange}
                            placeholder="Nhập email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sex">Giới Tính</label>
                        <input
                            type="text"
                            id="sex"
                            name="sex"
                            value={updatedTeacher.sex}
                            onChange={handleChange}
                            placeholder="Nhập giới tính"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Số Điện Thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={updatedTeacher.phone}
                            onChange={handleChange}
                            placeholder="Nhập số điện thoại"
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>Đóng</button>
                        <button type="submit">Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
