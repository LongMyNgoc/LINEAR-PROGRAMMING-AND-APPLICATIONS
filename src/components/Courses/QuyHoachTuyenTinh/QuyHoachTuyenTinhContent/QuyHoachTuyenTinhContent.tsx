import { Collapse } from "antd";
import { PlusOutlined, PlayCircleOutlined, MinusSquareOutlined, CheckSquareOutlined } from "@ant-design/icons";
import "./QuyHoachTuyenTinhContent.css";
import QuyHoachTuyenTinhSidebar from "../QuyHoachTuyenTinhSidebar/QuyHoachTuyenTinhSidebar.tsx";
import VideoModal from "../../../VideoModal/VideoModal";
import { useQuyHoachTuyenTinhContent } from "./useQuyHoachTuyenTinhContent.ts";

const { Panel } = Collapse;

const QuyHoachTuyenTinhContent = () => {
    const { playedVideos, isModalVisible, currentVideo, chapters, handlePlayVideo, handleCancel } = useQuyHoachTuyenTinhContent();

    return (
        <>
            <div className="quy-hoach-tuyen-tinh">
                <Collapse
                    expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
                    expandIconPosition="end"
                    accordion
                >
                    {chapters.map((chapter) => (
                        <Panel header={chapter.title} key={chapter.key}>
                            <ul>
                                {chapter.contents.map((content, index) => (
                                    <li key={index}>
                                        {playedVideos[content.title] ? (
                                            <CheckSquareOutlined className="battery-icon full" />
                                        ) : (
                                            <MinusSquareOutlined className="battery-icon empty" />
                                        )}
                                        {content.title}
                                        <PlayCircleOutlined className="video-icon" onClick={() => handlePlayVideo(content.title, content.link)} />
                                    </li>
                                ))}
                            </ul>
                        </Panel>
                    ))}
                </Collapse>
            </div>

            <QuyHoachTuyenTinhSidebar />

            <VideoModal visible={isModalVisible} videoUrl={currentVideo} onClose={handleCancel} getContainer={false} />
        </>
    );
};

export default QuyHoachTuyenTinhContent;
