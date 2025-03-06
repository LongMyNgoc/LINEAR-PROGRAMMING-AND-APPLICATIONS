import { useState } from "react";
import useFileData from "./useBT1Logic.ts";
import FileModal from "../../../../FileModal/FileViewer.tsx";
import useStudents from "../../../../../hooks/useStudents.ts";
import Filter from "../Filter/Filter/Filter.tsx"; // Import Filter component
import "../../../../../styles/BT.css";

const BT1 = () => {
  const { students, loading, error } = useStudents(); // Giữ nguyên việc gọi students
  const fileData = useFileData(students); // Sử dụng hook để lấy dữ liệu file
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFileUrl, setCurrentFileUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const openModal = (fileUrl: string) => {
    setCurrentFileUrl(fileUrl);
    setIsModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bt1-container">
      {/* Nhúng component Filter và truyền dữ liệu */}
      <Filter 
        students={students} 
        fileData={fileData} 
        filter={filter} 
        onChange={setFilter} 
        openModal={openModal} // Truyền hàm openModal xuống Filter
      />

      {/* Modal hiển thị file PDF */}
      {currentFileUrl && (
        <FileModal
          visible={isModalOpen}
          fileUrl={currentFileUrl}
          fileType="pdf"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default BT1;