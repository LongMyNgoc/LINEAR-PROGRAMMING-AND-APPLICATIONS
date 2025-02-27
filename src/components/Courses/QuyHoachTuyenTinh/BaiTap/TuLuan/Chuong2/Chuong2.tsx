import { useState } from "react";
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import "./Chuong2.css";

const Chuong2 = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // File mẫu trên SharePoint / Google Drive
    const fileUrl = "/documents/Baitap/Baitaptuan2.pdf"; // Thay bằng file thật
    const fileType = "pdf"; // Định dạng file

    // Xử lý khi người dùng chọn file để nộp bài
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div className="chuong1-container">
            <h2>Bài tập Chương 1</h2>

            {/* Nút mở modal */}
            <button onClick={() => setIsModalOpen(true)}>Xem Đề Bài</button>

            {/* Modal hiển thị file */}
            <FileModal visible={isModalOpen} fileUrl={fileUrl} fileType={fileType} onClose={() => setIsModalOpen(false)} />

            {/* Nộp bài tập */}
            <div className="submit-section">
                <h3>Nộp bài tập</h3>
                <input type="file" accept=".doc,.docx,.pdf,.ppt" onChange={handleFileChange} />
                {file && <p>Đã chọn: {file.name}</p>}
            </div>
        </div>
    );
};

export default Chuong2;
