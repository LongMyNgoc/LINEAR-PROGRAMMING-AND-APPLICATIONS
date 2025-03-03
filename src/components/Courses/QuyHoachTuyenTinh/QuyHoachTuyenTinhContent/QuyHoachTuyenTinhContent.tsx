import { Collapse } from "antd";
import { PlusOutlined, PlayCircleOutlined, MinusSquareOutlined, CheckSquareOutlined } from "@ant-design/icons";
import "./QuyHoachTuyenTinhContent.css";
import QuyHoachTuyenTinhSidebar from "../QuyHoachTuyenTinhSidebar/QuyHoachTuyenTinhSidebar.tsx";
import VideoModal from "../../../VideoModal/VideoModal";
import { useQuyHoachTuyenTinhContent } from "./useQuyHoachTuyenTinhContent.ts";
import Chuong1 from "../BaiTap/TuLuan/Chuong1/Chuong1.tsx";
import Chuong2 from "../BaiTap/TuLuan/Chuong2/Chuong2.tsx";
import Chuong3 from "../BaiTap/TuLuan/Chuong3/Chuong3.tsx";
import Chuong4 from "../BaiTap/TuLuan/Chuong4/Chuong4.tsx";
import Chuong5 from "../BaiTap/TuLuan/Chuong5/Chuong5.tsx";
import { useState } from "react";
import TN1 from "../BaiTap/TracNghiem/Chuong1/TN1.tsx";

const { Panel } = Collapse;

const QuyHoachTuyenTinhContent = () => {
    const { playedVideos, isModalVisible, currentVideo, chapters, handlePlayVideo, handleCancel } = useQuyHoachTuyenTinhContent();
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <>
            <div className="quy-hoach-tuyen-tinh">
                {selectedItem === "1.5" ? (
                    <Chuong1 setSelectedItem={setSelectedItem} />
                ) : selectedItem === "2.7" ? (
                    <Chuong2 />
                ) : selectedItem === "3.3" ? (
                    <Chuong3 />
                ) : selectedItem === "4.3" ? (
                    <Chuong4 />
                ) : selectedItem === "5.3" ? (
                    <Chuong5 />
                ) : selectedItem === "1.6" ? (
                    <TN1 setSelectedItem={setSelectedItem}/>
                )
                : (
                    <>
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
                                                    if (content.title.startsWith("1.5")) {
                                                        setSelectedItem("1.5");
                                                    } else if (content.title.startsWith("2.7")){
                                                        setSelectedItem("2.7");
                                                    } else if (content.title.startsWith("3.3")){
                                                        setSelectedItem("3.3")
                                                    } else if (content.title.startsWith("4.3")){
                                                        setSelectedItem("4.3")
                                                    } else if (content.title.startsWith("5.3")){
                                                        setSelectedItem("5.3")
                                                    } else if(content.title.startsWith("1.6")){
                                                        setSelectedItem("1.6");
                                                    } else if(content.title.startsWith("2.8")){
                                                        setSelectedItem("2.8");
                                                    } else if(content.title.startsWith("3.4")){
                                                        setSelectedItem("3.4");
                                                    } else if(content.title.startsWith("4.4")){
                                                        setSelectedItem("4.4");
                                                    } else if(content.title.startsWith("5.4")){
                                                        setSelectedItem("5.4");
                                                    } else
                                                    {
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
                    </>
                )}
            </div>
                <QuyHoachTuyenTinhSidebar />

            <VideoModal visible={isModalVisible} videoUrl={currentVideo} onClose={handleCancel} getContainer={false} />
        </>
    );
};

export default QuyHoachTuyenTinhContent;
