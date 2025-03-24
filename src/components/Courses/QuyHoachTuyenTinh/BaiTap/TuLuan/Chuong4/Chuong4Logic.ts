import { useState } from "react";
import { getFileData, submitFile } from "../../../../../../hooks/fileService"; // Import các hàm từ fileService
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import style của react-toastify

export const useChuong4Logic = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileData, setFileData] = useState<{ fileUrl: string; fileName: string; submissionDate: string } | null>(null);

    const fileUrl = "/documents/Baitap/Baitaptuan4.1.pdf";
    const fileType = "pdf";
    const fileName = "Baitaptuan4.pdf";

    const fetchFileData = async (mssv: string) => {
        try {
            const data = await getFileData(mssv, "TuLuanChuong4");
            setFileData(data);
        } catch (error) {
            console.error("Lỗi khi lấy file dữ liệu: ", error);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (mssv: string) => {
        if (!file) {
            toast.warn("Vui lòng chọn file trước khi nộp!");
            return;
        }
    
        const fileNameWithoutExtension = file.name.substring(0, file.name.lastIndexOf(".")); // Lấy phần tên file trước dấu chấm cuối cùng
        if (fileNameWithoutExtension !== mssv) {
            toast.warn(`Tên file phải là ${mssv}.`);
            return;
        }        
    
        try {
            await submitFile(file, "TuLuanChuong1");
            toast.success("Bài tập đã được nộp thành công!");
            setFile(null);
            fetchFileData(mssv);
        } catch (error) {
            console.error("Lỗi khi nộp bài: ", error);
            toast.error("Lỗi khi nộp bài tập, vui lòng thử lại!");
        }
    };    

    return {
        file,
        isModalOpen,
        fileUrl,
        fileType,
        fileName,
        fileData,
        setIsModalOpen,
        handleFileChange,
        handleSubmit,
        fetchFileData
    };
};
