import './TeacherInformation.css';
import { useState } from 'react';

interface TeacherInformationProps {
    name: string;
    sex: string;
    phone: string;
    email: string;
}

const TeacherInformation: React.FC<TeacherInformationProps> = ({ name, sex, phone, email }) => {
    const [formData, setFormData] = useState({
        name,
        sex,
        phone,
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
                Thông Tin Giáo Viên
            </div>
            <div className='info-container'>
                <div className='separator'></div>
                {/* Các trường thông tin */}
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

export default TeacherInformation;
