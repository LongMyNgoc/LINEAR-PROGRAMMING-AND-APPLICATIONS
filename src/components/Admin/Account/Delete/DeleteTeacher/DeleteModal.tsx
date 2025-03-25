import React from 'react';
import { useState } from 'react';
import '../../../../../styles/Modal.css';
import { deleteTeacher } from '../../../../../hooks/firebase/CRUD/deleteTeacher';

interface Teacher {
    name: string;
    sex: string;
    email: string;
    phone: string;
}

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    teacher: Teacher | null;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, teacher }) => {
    const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);
    if (!isOpen || !teacher) return null; // Đảm bảo modal chỉ hiện khi có dữ liệu
    const handleDelete = async () => {
            if (teacher) {
                setLoading(true);
                setError(null);
                try {
                    const result = await deleteTeacher(teacher.email);
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
                <h3>Bạn có chắc muốn xóa giáo viên {teacher.name}?</h3>
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
