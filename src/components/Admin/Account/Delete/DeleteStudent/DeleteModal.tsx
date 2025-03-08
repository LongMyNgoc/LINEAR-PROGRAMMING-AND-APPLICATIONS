import React from 'react';
import '../../../../../styles/Modal.css';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    studentName: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, studentName }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h3>Bạn có chắc muốn xóa {studentName}?</h3>
                <div className="modal-actions">
                    <button type="button" className="cancel-button" onClick={onClose}>Hủy</button>
                    <button type="button" className="delete-button" onClick={onDelete}>Xóa</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
