import React, { useState } from 'react';
import '../StudentTable/StudentTable.css';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'; // Import icon edit và delete

interface Teacher {
    name: string;
    sex: string;
    email: string;
    phone: string;
}

interface TeacherTableProps {
    teachers: Teacher[];
}

const TeacherTable: React.FC<TeacherTableProps> = ({ teachers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách giáo viên theo search term
    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Thanh tìm kiếm */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm giáo viên..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <FaSearch className="search-icon" />
            </div>

            {/* Bảng giáo viên */}
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Giới tính</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTeachers.length > 0 ? (
                        filteredTeachers.map((teacher) => (
                            <tr key={teacher.email}>
                                <td>{teacher.name}</td>
                                <td>{teacher.sex}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.phone}</td>
                                <td>
                                    <button className="edit-button">
                                        <FaEdit />
                                    </button>
                                    <button className="delete-button">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Không tìm thấy kết quả</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TeacherTable;
