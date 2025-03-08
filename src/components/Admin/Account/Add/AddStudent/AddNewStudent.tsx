import './AddNewStudent.css';

const AddNewStudent = () => {
    return (
        <div>
            <h3>Thêm Sinh Viên Mới</h3>
            <form>
                <input type="text" placeholder="Tên sinh viên" />
                <input type="email" placeholder="Email" />
                <button type="submit">Thêm</button>
            </form>
        </div>
    );
};

export default AddNewStudent;