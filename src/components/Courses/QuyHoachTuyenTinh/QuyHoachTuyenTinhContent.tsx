import { Collapse } from 'antd';
import { PlusOutlined, PlayCircleOutlined, MinusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './QuyHoachTuyenTinhContent.css';
import { chapters } from './QuyHoachTuyenTinhContent';

const { Panel } = Collapse;

const QuyHoachTuyenTinhContent = () => {
    const [playedVideos, setPlayedVideos] = useState<{ [key: string]: boolean }>({});

    const handlePlayVideo = (key: string, videoUrl: string) => {
        setPlayedVideos((prev) => ({ ...prev, [key]: true }));
        window.open(videoUrl, "_blank");
    };

    return (
        <div className="quy-hoach-tuyen-tinh">
            <Collapse
                expandIcon={({ isActive }) => (
                    <PlusOutlined rotate={isActive ? 45 : 0} />
                )}
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
                                        onClick={() => handlePlayVideo(content.title, content.video)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default QuyHoachTuyenTinhContent;
