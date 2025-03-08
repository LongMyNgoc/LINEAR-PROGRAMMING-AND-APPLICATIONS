import React from 'react';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    teacherName: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, teacherName }) => {
    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Chắc chắn muốn xóa giáo viên {teacherName}?</h2>
                    <div>
                        <button onClick={onDelete}>Xóa</button>
                        <button onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default DeleteModal;
