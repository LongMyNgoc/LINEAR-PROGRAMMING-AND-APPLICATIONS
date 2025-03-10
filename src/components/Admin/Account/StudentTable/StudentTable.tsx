import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'; // Import thêm icon tìm kiếm
import EditModal from '../Edit/EditStudent/EditModal.tsx'; // Import EditModal
import DeleteModal from '../Delete/DeleteStudent/DeleteModal.tsx'; // Import DeleteModal
import './StudentTable.css';

interface Student {
    mssv: string;
    name: string;
    class: string;
    sex: string;
    email: string;
    phone: string;
    BT1: number;
        BT2: number;
        BT3: number;
        BT4: number;
        BT5: number;
}

interface StudentTableProps {
    students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.mssv.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (student: Student) => {
        setSelectedStudent(student);
        setIsEditModalOpen(true);
    };

    const handleDelete = (student: Student) => {
        setSelectedStudent(student);
        setIsDeleteModalOpen(true);
    };

    const handleSave = (updatedStudent: Student) => {
        // Cập nhật dữ liệu của student ở đây (ví dụ: gọi API hoặc Firestore)
        console.log('Saved student:', updatedStudent);
    };

    const handleDeleteConfirm = () => {
        // Xóa student ở đây (ví dụ: gọi API hoặc Firestore)
        console.log('Deleted student:', selectedStudent);
        setIsDeleteModalOpen(false);
    };

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
                        <th className="action-column">Thao tác</th> {/* Thêm cột Thao tác */}
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
                                <button className="edit-button" onClick={() => handleEdit(student)}>
                                    <FaEdit />
                                </button>
                                <button className="delete-button" onClick={() => handleDelete(student)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modals */}
            {selectedStudent && (
                <>
                    <EditModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        student={selectedStudent}
                        onSave={handleSave}
                    />
                    <DeleteModal
                        isOpen={isDeleteModalOpen}
                        onClose={() => setIsDeleteModalOpen(false)}
                        onDelete={handleDeleteConfirm}
                        student={selectedStudent}
                    />
                </>
            )}
        </div>
    );
};

export default StudentTable;
