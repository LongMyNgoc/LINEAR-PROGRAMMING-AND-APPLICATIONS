import React, { useState, useEffect } from "react";
import "../../../../../styles/Modal.css";
import useEditTeacher from "../../../../../hooks/editTeacher.ts";

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    teacher: { name: string; sex: string; email: string; phone: string };
    onSave: (updatedTeacher: { name: string; sex: string; email: string; phone: string }) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, teacher, onSave }) => {
    const [updatedTeacher, setUpdatedTeacher] = useState({...teacher});
    const { editTeacher } = useEditTeacher(); // Gọi hook
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            if (isOpen) {
                setUpdatedTeacher({ ...teacher });
            }
        }, [isOpen, teacher]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedTeacher((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const result = await editTeacher(teacher.email, updatedTeacher);
            if (result.success) {
                onSave(updatedTeacher);
                onClose();
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError("Có lỗi xảy ra khi cập nhật dữ liệu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
                <h3>Chỉnh sửa thông tin giáo viên</h3>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="add-teacher-form">
                    <div className="input-group">
                        <label htmlFor="name">Tên Giáo Viên</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedTeacher.name}
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
                            value={updatedTeacher.sex}
                            onChange={handleChange}
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
