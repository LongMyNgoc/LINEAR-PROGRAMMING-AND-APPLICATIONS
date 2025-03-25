import './Account.css';
import useStudents from '../../../../hooks/firebase/Get/useStudents.ts';
import { FaThumbtack, FaCaretDown, FaPlus, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import StudentTable from '../StudentTable/StudentTable';
import TeacherTable from '../TeacherTable/TeacherTable';
import useTeachers from '../../../../hooks/firebase/Get/useTeachers.ts';
import AddNewStudent from '../Add/AddStudent/AddNewStudent.tsx';
import AddNewTeacher from '../Add/AddTeacher/AddNewTeacher.tsx';

const Account = () => {
    const { students, loading, error } = useStudents();
    const { teachers } = useTeachers();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [role, setRole] = useState('Sinh viên'); // Mặc định là Sinh viên
    const [isModalOpen, setIsModalOpen] = useState(false); // Kiểm soát modal

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleRoleChange = (selectedRole: string) => {
        setRole(selectedRole);
        setIsDropdownOpen(false); // Đóng dropdown khi chọn role
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="account-container">
            <h2 className="table-title">
                <FaThumbtack className="pin-icon" /> Danh sách tài khoản
            </h2>

            {/* Button Role và Add New */}
            <div className="role-dropdown">
                <button onClick={toggleDropdown} className="role-button">
                    <span>{role}</span> <FaCaretDown />
                </button>
                {isDropdownOpen && (
                    <ul className="dropdown-list">
                        <li onClick={() => handleRoleChange('Sinh viên')}>Sinh viên</li>
                        <li onClick={() => handleRoleChange('Giáo viên')}>Giáo viên</li>
                    </ul>
                )}
                {/* Nút Add New */}
                <button onClick={openModal} className="add-new-button">
                    Add new <FaPlus />
                </button>
            </div>

            {/* Hiển thị bảng theo role */}
            {role === 'Sinh viên' && <StudentTable students={students} />}
            {role === 'Giáo viên' && <TeacherTable teachers={teachers} />}

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        {role === 'Sinh viên' ? <AddNewStudent /> : <AddNewTeacher />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Account;
