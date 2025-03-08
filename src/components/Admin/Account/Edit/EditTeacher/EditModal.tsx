import React, { useState } from 'react';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    teacher: { name: string; sex: string; email: string; phone: string };
    onSave: (updatedTeacher: { name: string; sex: string; email: string; phone: string }) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, teacher, onSave }) => {
    const [name, setName] = useState(teacher.name);
    const [sex, setSex] = useState(teacher.sex);
    const [email, setEmail] = useState(teacher.email);
    const [phone, setPhone] = useState(teacher.phone);

    const handleSubmit = () => {
        const updatedTeacher = { name, sex, email, phone };
        onSave(updatedTeacher); // gọi hàm onSave để lưu thông tin
        onClose(); // đóng modal sau khi lưu
    };

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Chỉnh sửa thông tin giáo viên</h2>
                    <label>
                        Họ tên:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Giới tính:
                        <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Số điện thoại:
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <div>
                        <button onClick={handleSubmit}>Lưu</button>
                        <button onClick={onClose}>Đóng</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default EditModal;
