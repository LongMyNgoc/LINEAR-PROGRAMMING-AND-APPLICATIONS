import './Account.css';
import useStudents from '../../../../hooks/useStudents';
import { FaThumbtack, FaCaretDown, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import StudentTable from '../StudentTable/StudentTable';
import TeacherTable from '../TeacherTable/TeacherTable';
import useTeachers from '../../../../hooks/useTeachers';

const Account = () => {
    const { students, loading, error } = useStudents();
    const { teachers } = useTeachers();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [role, setRole] = useState('Sinh viên'); // Mặc định là Sinh viên

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleRoleChange = (selectedRole: string) => {
        setRole(selectedRole);
        setIsDropdownOpen(false); // Đóng dropdown khi chọn role
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
                <button className="add-new-button">
                    Add new <FaPlus />
                </button>
            </div>

            {/* Chỉ hiển thị bảng khi role là 'Sinh viên' */}
            {role === 'Sinh viên' && <StudentTable students={students} />}
            {role === 'Giáo viên' && <TeacherTable teachers={teachers} />}
        </div>
    );
};

export default Account;
