import React from 'react';
import { useState } from 'react';
import '../../../../../styles/Modal.css';
import { deleteStudent } from '../../../../../hooks/firebase/CRUD/deleteStudent';

interface Student {
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
}

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    student: Student | null; // Định nghĩa student, có thể null nếu chưa chọn
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, student }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    if (!isOpen || !student) return null; // Đảm bảo modal chỉ hiện khi có dữ liệu
    const handleDelete = async () => {
        if (student) {
            setLoading(true);
            setError(null);
            try {
                const result = await deleteStudent(student.email);
                if (result.success) {
                    onClose();  // Đóng modal sau khi xóa thành công
                } else {
                    setError(result.error);  // Nếu có lỗi, hiển thị lỗi
                }
            } catch (error: any) {
                setError('Có lỗi xảy ra khi xóa sinh viên.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3>Bạn có chắc muốn xóa sinh viên <strong>{student.name}</strong>?</h3>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="modal-actions">
                    <button type="button" className="cancel-button" onClick={onClose} disabled={loading}>Hủy</button>
                    <button type="button" className="delete-button" onClick={handleDelete} disabled={loading}>
                        {loading ? 'Đang xóa...' : 'Xóa'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
