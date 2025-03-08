import React, { useState } from 'react';
import '../../../../../styles/Modal.css';

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

    const handleSubmit = () => {
        onSave(updatedStudent);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>Edit Student</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={updatedStudent.name} onChange={handleChange} />
                </label>
                <label>
                    Class:
                    <input type="text" name="class" value={updatedStudent.class} onChange={handleChange} />
                </label>
                <label>
                    Sex:
                    <input type="text" name="sex" value={updatedStudent.sex} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={updatedStudent.email} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={updatedStudent.phone} onChange={handleChange} />
                </label>
                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
