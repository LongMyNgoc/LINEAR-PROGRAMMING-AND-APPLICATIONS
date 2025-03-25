// BT1.tsx
import { useState } from "react";
import useFileData from "./useBT1Logic.ts";
import FileModal from "../../../../FileModal/FileViewer.tsx";
import useStudents from "../../../../../hooks/firebase/Get/useStudents.ts";
import Filter from "../Filter/Filter/Filter.tsx";
import "../../../../../styles/BT.css";

const BT1 = () => {
  const { students, loading, error } = useStudents();
  const fileData = useFileData(students);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFileUrl, setCurrentFileUrl] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const assignmentKey = "BT1";

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
      <Filter 
        students={students} 
        fileData={fileData} 
        filter={filter} 
        onChange={setFilter} 
        openModal={openModal} 
        assignmentKey={assignmentKey}
      />
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
