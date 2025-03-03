import { useState } from "react";
import { ArrowLeftOutlined, FilePdfOutlined } from "@ant-design/icons"; // Import icon PDF
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import "./Chuong1.css";
import axios from "axios";

const Chuong1 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fileUrl = "/documents/Baitap/Baitaptuan1.pdf"; // File mẫu
    const fileType = "pdf"; // Định dạng file
    const fileName = "Baitaptuan1.pdf"; // Tên file hiển thị

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("Vui lòng chọn file trước khi nộp!");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", file); // Gửi file với tên key là 'file'
    
        try {
            const response = await axios.post("http://localhost:5000/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            console.log("Response từ server: ", response);  // Log response từ server
            alert("Bài tập đã được nộp thành công!");
            console.log("URL của file: ", response.data.url); // URL của file được upload lên S3
            setFile(null);
        } catch (error) {
            console.error("Lỗi khi nộp bài: ", error);  // Log lỗi chi tiết
            alert("Lỗi khi nộp bài tập");
        }
    };    

    return (
        <div className="chuong1-container">
            {/* Mũi tên quay lại */}
            <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />

            {/* Nút Turn in */}
            <button className="turn-in-file-button" onClick={handleSubmit}>
                Turn in
            </button>

            <h2>Bài tập Chương 1</h2>

            {/* Icon PDF mở modal + Hiển thị tên file */}
            <div className="pdf-container" onClick={() => setIsModalOpen(true)}>
                <FilePdfOutlined className="pdf-icon" />
                <span className="pdf-filename">{fileName}</span>
            </div>

            {/* Modal hiển thị file */}
            <FileModal visible={isModalOpen} fileUrl={fileUrl} fileType={fileType} onClose={() => setIsModalOpen(false)} />

            {/* Nộp bài tập */}
            <div className="submit-section">
                <h3>Nộp bài tập</h3>
                <p className="file-requirements">Nộp file <b>.pdf</b> và đặt tên là <b>BTC1_MSSV_HọTên</b> (VD: BTC1_4801104082_NguyenPhiLong.pdf)</p>

                {/* Khu vực chọn file */}
                <div className="input-file-container">
                    <FilePdfOutlined className="file-icon" />
                    <p>Click to select file</p>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Chọn file
                    </label>
                    <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} />

                    {file && <p className="selected-file">Đã chọn: {file.name}</p>}
                </div>
            </div>
        </div>
    );
};

export default Chuong1;
