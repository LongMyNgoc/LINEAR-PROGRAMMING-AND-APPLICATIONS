import { FilePdfOutlined } from "@ant-design/icons";
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import { useState } from "react";

interface AssignmentFileProps {
    fileName: string; // Bắt buộc truyền vào
    fileUrl: string; // Bắt buộc truyền vào
    fileType?: string;
}

const AssignmentFile: React.FC<AssignmentFileProps> = ({
    fileName,
    fileUrl,
    fileType = "pdf"
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="file-info-container">
            <div className="pdf-container" onClick={() => setIsModalOpen(true)}>
                <FilePdfOutlined className="pdf-icon" />
                <span className="pdf-filename">{fileName}</span>
            </div>

            <FileModal
                visible={isModalOpen}
                fileUrl={fileUrl}
                fileType={fileType}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AssignmentFile;
