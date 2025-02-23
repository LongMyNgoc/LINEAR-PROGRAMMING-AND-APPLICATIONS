import './StudentInformation.css';
import { useState } from 'react';

interface StudentInformationProps {
    mssv: string;
    name: string;
    sex: string;
    className: string;
    email: string;
}

const StudentInformation: React.FC<StudentInformationProps> = ({ mssv, name, sex, className, email }) => {
    const [formData, setFormData] = useState({
        mssv,
        name,
        sex,
        className,
        email,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        // Thực hiện hành động cập nhật thông tin ở đây
        console.log('Thông tin sinh viên đã được cập nhật:', formData);
        // Bạn có thể thêm logic để gửi thông tin đến server hoặc thực hiện hành động khác
    };

    return (
        <div className='outer-info-container'>
            <div className='inner-info-container'>
                Thông Tin Sinh Viên
            </div>
            <div className='info-container'>
                <div className='separator'></div>
                {/* Các trường thông tin */}
                <div className='info-item'>
                    <div className='label-container'>
                        <label htmlFor='mssv'>MSSV:</label>
                    </div>
                    <div className='input-container'>
                        <input
                            type='text'
                            id='mssv'
                            name='mssv'
                            value={formData.mssv}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                </div>
                <div className='separator'></div>
                <div className='info-item'>
                    <div className='label-container'>
                        <label htmlFor='name'>Họ tên:</label>
                    </div>
                    <div className='input-container'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                </div>
                <div className='separator'></div>
                <div className='info-item'>
                    <div className='label-container'>
                        <label htmlFor='sex'>Giới tính:</label>
                    </div>
                    <div className='input-container'>
                        <input
                            type='text'
                            id='sex'
                            name='sex'
                            value={formData.sex}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                </div>
                <div className='separator'></div>
                <div className='info-item'>
                    <div className='label-container'>
                        <label htmlFor='className'>Lớp:</label>
                    </div>
                    <div className='input-container'>
                        <input
                            type='text'
                            id='className'
                            name='className'
                            value={formData.className}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                </div>
                <div className='separator'></div>
                <div className='info-item'>
                    <div className='label-container'>
                        <label htmlFor='email'>Email:</label>
                    </div>
                    <div className='input-container'>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                </div>
                <div className='separator'></div>

                {/* Nút Cập Nhật Thông Tin */}
                <div className='info-item-button-container'>
                    <button onClick={handleUpdate} className='update-button'>
                        Cập Nhật Thông Tin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentInformation;
