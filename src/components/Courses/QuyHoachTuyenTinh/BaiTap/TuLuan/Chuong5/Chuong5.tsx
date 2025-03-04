// Chuong1.tsx
import { ArrowLeftOutlined, FilePdfOutlined } from "@ant-design/icons";
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import AssignmentFile from "../AssigmentFile/AssignmentFile.tsx";
import "./Chuong5.css";
import { useChuong5Logic } from "./Chuong5Logic";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Chuong5 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
    const {
        file,
        isModalOpen,
        fileUrl,
        fileType,
        fileData,
        setIsModalOpen,
        handleFileChange,
        handleSubmit,
        fetchFileData
    } = useChuong5Logic();

    const [user, setUser] = useState<{ username: string; name: string; phone: string; sex: string; mssv: string; class: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user && user.mssv) {
            fetchFileData(user.mssv); // Lấy thông tin file của user từ server
        }
    }, [user, fetchFileData]);

    return (
        <div className="chuong1-container">
            <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />

            <button className="turn-in-file-button" onClick={handleSubmit}>
                Turn in
            </button>

            <h2>Bài tập Chương 5</h2>

            {/* Hiển thị thông tin về file đề bài */}
            <AssignmentFile 
    fileName={"Baitaptuan5.pdf"} 
    fileUrl={"/documents/Baitap/Baitaptuan5.pdf"} 
/>

            {/* Modal hiển thị file */}
            <FileModal 
                visible={isModalOpen} 
                fileUrl={fileData?.fileUrl || fileUrl} 
                fileType={fileType} 
                onClose={() => setIsModalOpen(false)} 
            />

            <div className="submit-section">
                <h3>Nộp bài tập</h3>
                <p className="file-requirements">Nộp file <b>.pdf</b> và đặt tên là <b>MSSV</b> (VD: 48.01.104.082.pdf)</p>

                <div className="input-file-container">
                    <FilePdfOutlined className="file-icon" />
                    <p>Click to select file</p>
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Chọn file
                    </label>
                    <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} />

                    {file && <p className="selected-file">Đã chọn: {file.name}</p>}
                </div>
            </div>
            {/* Hiển thị thông tin về file bài nộp */}
            {fileData ? (
                <div className="file-info-container">
                    <div className="pdf-container" onClick={() => setIsModalOpen(true)}>
                        <FilePdfOutlined className="pdf-icon" />
                        <span className="pdf-filename">{fileData.fileName}</span>
                    </div>
                    <p><strong>Ngày nộp:</strong> {new Date(fileData.submissionDate).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Chưa nộp bài.</p>
            )}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Chuong5;
