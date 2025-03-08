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
                <h2>Are you sure you want to delete {studentName}?</h2>
                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
