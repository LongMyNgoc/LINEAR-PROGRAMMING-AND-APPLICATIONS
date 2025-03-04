// AssignmentFile.tsx
import { FilePdfOutlined } from "@ant-design/icons";
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import { useState } from "react";

interface AssignmentFileProps {
    fileName?: string;
    fileUrl?: string;
    fileType?: string;
}

const AssignmentFile: React.FC<AssignmentFileProps> = ({
    fileName = "Baitaptuan1.pdf",
    fileUrl = "/documents/Baitap/Baitaptuan1.pdf",
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
