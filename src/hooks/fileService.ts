// fileService.ts
import axios from "axios";

// Hàm lấy thông tin file từ server
export const getFileData = async (mssv: string, folderName: string) => {
    try {
        const response = await axios.get(`https://nckh-qhtt-be.onrender.com/api/file/${mssv}?folderName=${folderName}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy file từ server: ", error);
        throw new Error("Không thể lấy dữ liệu file");
    }
};

// Hàm nộp bài
export const submitFile = async (file: File, folderName: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderName", folderName); // Gửi tên thư mục lên server

    try {
        const response = await axios.post("https://nckh-qhtt-be.onrender.com/api/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.url;
    } catch (error) {
        console.error("Lỗi khi nộp bài: ", error);
        throw new Error("Lỗi khi nộp bài tập");
    }
};

