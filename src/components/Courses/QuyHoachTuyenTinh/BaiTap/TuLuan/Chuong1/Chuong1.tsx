import { ArrowLeftOutlined, FilePdfOutlined } from "@ant-design/icons"; // Import icon PDF
import FileModal from "../../../../../FileModal/FileViewer.tsx";
import "./Chuong1.css";
import { useChuong1Logic } from "./Chuong1Logic"; // Import hook xử lý logic

const Chuong1 = ({ setSelectedItem }: { setSelectedItem: (value: string | null) => void }) => {
    const {
        file,
        isModalOpen,
        fileUrl,
        fileType,
        fileName,
        setIsModalOpen,
        handleFileChange,
        handleSubmit
    } = useChuong1Logic(); // Sử dụng hook logic

    return (
        <div className="chuong1-container">
            {/* Mũi tên quay lại */}
            <ArrowLeftOutlined className="back-icon" onClick={() => setSelectedItem(null)} />

            {/* Nút Turn in */}
            <button className="turn-in-file-button" onClick={handleSubmit}>
                Turn in
            </button>

            <h2>Bài tập Chương 1</h2>

            {/* Icon PDF mở modal + Hiển thị tên file */}
            <div className="pdf-container" onClick={() => setIsModalOpen(true)}>
                <FilePdfOutlined className="pdf-icon" />
                <span className="pdf-filename">{fileName}</span>
            </div>

            {/* Modal hiển thị file */}
            <FileModal visible={isModalOpen} fileUrl={fileUrl} fileType={fileType} onClose={() => setIsModalOpen(false)} />

            {/* Nộp bài tập */}
            <div className="submit-section">
                <h3>Nộp bài tập</h3>
                <p className="file-requirements">Nộp file <b>.pdf</b> và đặt tên là <b>BTC1_MSSV_HọTên</b> (VD: BTC1_4801104082_NguyenPhiLong.pdf)</p>

                {/* Khu vực chọn file */}
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
        </div>
    );
};

export default Chuong1;
