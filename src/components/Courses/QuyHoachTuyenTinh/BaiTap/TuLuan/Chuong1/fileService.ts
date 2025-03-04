// fileService.ts
import axios from "axios";

// Hàm lấy thông tin file từ server
export const getFileData = async (mssv: string) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/file/${mssv}`);
        return response.data; // Trả về dữ liệu file từ server
    } catch (error) {
        console.error("Lỗi khi lấy file từ server: ", error);
        throw new Error("Không thể lấy dữ liệu file");
    }
};

// Hàm nộp bài
export const submitFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file); // Gửi file với tên key là 'file'

    try {
        const response = await axios.post("http://localhost:5000/api/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.url; // Trả về URL của file được upload lên server (hoặc S3)
    } catch (error) {
        console.error("Lỗi khi nộp bài: ", error);
        throw new Error("Lỗi khi nộp bài tập");
    }
};
