import './StudentInformation.css';
import { useState } from 'react';

interface StudentInformationProps {
    mssv: string;
    name: string;
    sex: string;
    className: string;
    email: string;
    phone: string;
}

const StudentInformation: React.FC<StudentInformationProps> = ({ mssv, name, sex, className, email, phone }) => {
    const [formData, setFormData] = useState({
        mssv,
        name,
        sex,
        className,
        email,
        phone
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className='outer-information-container'>
            <div className='inner-information-container'>
                Thông Tin Sinh Viên
            </div>
            <div className='information-container'>
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
            </div>
        </div>
    );
};

export default StudentInformation;
