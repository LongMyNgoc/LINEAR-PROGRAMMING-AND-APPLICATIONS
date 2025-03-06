// src/hooks/useFileData.ts
import { useState, useEffect } from "react";
import { getFileData } from "../../../../../hooks/fileService.ts"; // Đảm bảo đường dẫn đúng

// Định nghĩa kiểu dữ liệu cho fileData
interface FileData {
  [mssv: string]: {
    url: string;
    fileName: string;
    submissionDate: string;
  } | null; // Mỗi MSSV sẽ có dữ liệu file hoặc null nếu chưa có file
}

const useFileData = (students: Array<{ mssv: string }>) => {
  const [fileData, setFileData] = useState<FileData>({});

  useEffect(() => {
    // Hàm lấy dữ liệu file từ S3 cho từng sinh viên
    const fetchFileData = async (mssv: string) => {
      try {
        const data = await getFileData(mssv, "TuLuanChuong3"); // Thư mục tương ứng
        // Dữ liệu trả về có thể bao gồm URL, tên file và thời gian nộp
        const formattedData = {
          url: data.fileUrl, // URL từ S3
          fileName: data.fileName, // Tên file
          submissionDate: data.submissionDate, // Thời gian nộp
        };
        
        // Lưu dữ liệu vào state fileData với MSSV là khóa
        setFileData(prev => ({
          ...prev,
          [mssv]: formattedData,
        }));
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu file: ", error);
      }
    };

    // Duyệt qua tất cả sinh viên và lấy dữ liệu file cho từng người
    students.forEach(student => {
      if (student.mssv) {
        fetchFileData(student.mssv); // Đảm bảo mssv không phải null hoặc undefined
      }
    });
  }, [students]); // Chạy lại khi danh sách sinh viên thay đổi

  return fileData;
};

export default useFileData;
