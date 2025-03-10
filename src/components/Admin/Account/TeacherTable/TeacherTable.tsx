import React, { useState } from 'react';
import '../StudentTable/StudentTable.css';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa'; // Import icon edit và delete
import EditModal from '../Edit/EditTeacher/EditModal.tsx'; // Import EditModal cho Teacher
import DeleteModal from '../Delete/DeleteTeacher/DeleteModal.tsx'; // Import DeleteModal cho Teacher

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
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Lọc danh sách giáo viên theo search term
    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.sex.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        setIsEditModalOpen(true);
    };

    const handleDelete = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
        setIsDeleteModalOpen(true);
    };

    const handleSave = (updatedTeacher: Teacher) => {
        // Cập nhật dữ liệu của giáo viên ở đây (ví dụ: gọi API hoặc Firestore)
        console.log('Saved teacher:', updatedTeacher);
        setIsEditModalOpen(false);
    };

    const handleDeleteConfirm = () => {
        // Xóa giáo viên ở đây (ví dụ: gọi API hoặc Firestore)
        console.log('Deleted teacher:', selectedTeacher);
        setIsDeleteModalOpen(false);
    };

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
                                    <button className="edit-button" onClick={() => handleEdit(teacher)}>
                                        <FaEdit />
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(teacher)}>
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

            {/* Modals */}
            {selectedTeacher && (
                <>
                    <EditModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        teacher={selectedTeacher}
                        onSave={handleSave}
                    />
                    <DeleteModal
                        isOpen={isDeleteModalOpen}
                        onClose={() => setIsDeleteModalOpen(false)}
                        onDelete={handleDeleteConfirm}
                        teacher={selectedTeacher}
                    />
                </>
            )}
        </>
    );
};

export default TeacherTable;
