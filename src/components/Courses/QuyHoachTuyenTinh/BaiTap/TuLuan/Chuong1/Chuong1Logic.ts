import { useState } from "react";
import axios from "axios";

export const useChuong1Logic = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fileUrl = "/documents/Baitap/Baitaptuan1.pdf"; // File mẫu
    const fileType = "pdf"; // Định dạng file
    const fileName = "Baitaptuan1.pdf"; // Tên file hiển thị

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]); // Lưu file đã chọn
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
            setFile(null); // Reset file sau khi nộp
        } catch (error) {
            console.error("Lỗi khi nộp bài: ", error);  // Log lỗi chi tiết
            alert("Lỗi khi nộp bài tập");
        }
    };

    return {
        file,
        isModalOpen,
        fileUrl,
        fileType,
        fileName,
        setIsModalOpen, // Không cần setFile vì nó đã được xử lý trong logic
        handleFileChange,
        handleSubmit
    };
};
