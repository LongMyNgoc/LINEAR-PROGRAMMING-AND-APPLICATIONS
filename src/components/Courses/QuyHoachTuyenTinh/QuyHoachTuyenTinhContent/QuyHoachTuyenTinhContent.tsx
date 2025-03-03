import { Collapse } from "antd";
import { PlusOutlined, PlayCircleOutlined, MinusSquareOutlined, CheckSquareOutlined } from "@ant-design/icons";
import "./QuyHoachTuyenTinhContent.css";
import QuyHoachTuyenTinhSidebar from "../QuyHoachTuyenTinhSidebar/QuyHoachTuyenTinhSidebar.tsx";
import VideoModal from "../../../VideoModal/VideoModal";
import { useQuyHoachTuyenTinhContent } from "./useQuyHoachTuyenTinhContent.ts";
import BaiTapRenderer from "../BaiTap/BaiTap/BaiTap.tsx";
import { useState } from "react";

const { Panel } = Collapse;

const QuyHoachTuyenTinhContent = () => {
    const { playedVideos, isModalVisible, currentVideo, chapters, handlePlayVideo, handleCancel } = useQuyHoachTuyenTinhContent();
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <>
            <div className="quy-hoach-tuyen-tinh">
                {/* Sử dụng BaiTapRenderer */}
                <BaiTapRenderer selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

                {!selectedItem && (
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
                                            <PlayCircleOutlined
                                                className="video-icon"
                                                onClick={() => {
                                                    const mapping: Record<string, string> = {
                                                        "1.5": "1.5", "2.7": "2.7", "3.3": "3.3",
                                                        "4.3": "4.3", "5.3": "5.3", "1.6": "1.6",
                                                        "2.8": "2.8", "3.4": "3.4", "4.4": "4.4",
                                                        "5.4": "5.4"
                                                    };

                                                    const matchedItem = Object.keys(mapping).find(key =>
                                                        content.title.startsWith(key)
                                                    );

                                                    if (matchedItem) {
                                                        setSelectedItem(mapping[matchedItem]);
                                                    } else {
                                                        handlePlayVideo(content.title, content.link);
                                                    }
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Panel>
                        ))}
                    </Collapse>
                )}
            </div>

            <QuyHoachTuyenTinhSidebar />

            <VideoModal visible={isModalVisible} videoUrl={currentVideo} onClose={handleCancel} getContainer={false} />
        </>
    );
};

export default QuyHoachTuyenTinhContent;