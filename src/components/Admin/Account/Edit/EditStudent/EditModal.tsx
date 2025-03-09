import React, { useState, useEffect } from 'react';
import { editStudent } from '../../../../../hooks/editStudent'; // Đảm bảo đường dẫn chính xác
import '../../../../../styles/Modal.css';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    student: {
        mssv: string;
        name: string;
        class: string;
        sex: string;
        email: string;
        phone: string;
        BT1: number; // Thêm các trường này
        BT2: number;
        BT3: number;
        BT4: number;
        BT5: number;
    };
    onSave: (updatedStudent: {
        mssv: string;
        name: string;
        class: string;
        sex: string;
        email: string;
        phone: string;
        BT1: number;
        BT2: number;
        BT3: number;
        BT4: number;
        BT5: number;
    }) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, student, onSave }) => {
    const [updatedStudent, setUpdatedStudent] = useState({ ...student });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            setUpdatedStudent({ ...student });
        }
    }, [isOpen, student]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedStudent((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await editStudent(student.email, updatedStudent);
            if (result.success) {
                onSave(updatedStudent); // Cập nhật UI
                onClose();
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError("Có lỗi xảy ra khi cập nhật dữ liệu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3>Chỉnh sửa thông tin sinh viên</h3>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="add-teacher-form">
                    <div className="input-group">
                        <label htmlFor="name">Tên Sinh Viên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedStudent.name}
                            onChange={handleChange}
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
                            required
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="button" onClick={onClose} disabled={loading}>
                            Hủy
                        </button>
                        <button type="submit" disabled={loading}>
                            {loading ? "Đang lưu..." : "Lưu"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
