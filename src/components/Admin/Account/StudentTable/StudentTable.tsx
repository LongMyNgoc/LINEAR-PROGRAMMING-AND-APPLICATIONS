import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'; // Import thêm icon tìm kiếm
import './StudentTable.css';

interface Student {
    mssv: string;
    name: string;
    class: string;
    sex: string;
    email: string;
    phone: string;
}

interface StudentTableProps {
    students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách sinh viên theo search term
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.mssv.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Thanh tìm kiếm */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Tìm kiếm sinh viên..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <FaSearch className="search-icon" />
            </div>

            {/* Bảng sinh viên */}
            <table className="student-table">
                <thead>
                    <tr>
                        <th>MSSV</th>
                        <th>Họ tên</th>
                        <th>Lớp</th>
                        <th>Giới tính</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th> {/* Thêm cột Thao tác */}
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (
                        <tr key={student.mssv}>
                            <td>{student.mssv}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.sex}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button className="edit-button">
                                    <FaEdit />
                                </button>
                                <button className="delete-button">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
