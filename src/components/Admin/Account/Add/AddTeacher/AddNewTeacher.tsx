import '../AddStudent/AddNewStudent.css';

const AddNewTeacher = () => {
    return (
        <div>
            <h3>Thêm Giáo Viên Mới</h3>
            <form>
                <input type="text" placeholder="Tên giáo viên" />
                <input type="email" placeholder="Email" />
                <button type="submit">Thêm</button>
            </form>
        </div>
    );
};

export default AddNewTeacher;
