import React from "react";
import { Modal } from "antd";
import "./FileViewer.css";

interface FileModalProps {
    visible: boolean;
    fileUrl: string;
    fileType: string;
    onClose: () => void;
    getContainer?: string | HTMLElement | false | (() => HTMLElement);
}

const FileModal: React.FC<FileModalProps> = ({ visible, fileUrl, fileType, onClose, getContainer = false }) => {
    const renderFileViewer = () => {
        if (fileType.includes("pdf")) {
            return <iframe src={fileUrl} width="100%" height="600px" style={{ border: "none" }} />;
        } else if (fileType.includes("word") || fileType.includes("doc")) {
            return (
                <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                />
            );
        } else if (fileType.includes("ppt")) {
            return (
                <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`}
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                />
            );
        } else {
            return <p>Không thể hiển thị file này.</p>;
        }
    };

    return (
        <Modal
            title="Xem Tệp"
            open={visible}
            onCancel={onClose}
            footer={null}
            width={900}
            style={{ zIndex: 9999 }}
            getContainer={getContainer}
            mask={false}
        >
            <div className="file-container">{renderFileViewer()}</div>
        </Modal>
    );
};

export default FileModal;
