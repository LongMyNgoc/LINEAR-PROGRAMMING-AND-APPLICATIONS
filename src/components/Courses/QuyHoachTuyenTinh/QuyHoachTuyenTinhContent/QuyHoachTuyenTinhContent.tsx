import { Collapse } from 'antd';
import { PlusOutlined, PlayCircleOutlined, MinusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './QuyHoachTuyenTinhContent.css';
import { chapters } from './QuyHoachTuyenTinhContent';
import QuyHoachTuyenTinhSidebar from '../QuyHoachTuyenTinhSidebar/QuyHoachTuyenTinhSidebar.tsx';
import VideoModal from '../../../VideoModal/VideoModal';

const { Panel } = Collapse;

const QuyHoachTuyenTinhContent = () => {
    const [playedVideos, setPlayedVideos] = useState<{ [key: string]: boolean }>({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const handlePlayVideo = (key: string, videoUrl: string) => {
        // Kiểm tra xem link có phải là video không
        if (videoUrl.includes("youtube")) {
            setPlayedVideos((prev) => ({ ...prev, [key]: true }));
            setCurrentVideo(videoUrl);
            setIsModalVisible(true);
        } else {
            // Nếu không phải video, mở link trong tab mới
            window.open(videoUrl, '_blank');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCurrentVideo(''); // Reset video URL when modal is closed
    };

    return (
        <>
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
                                        onClick={() => handlePlayVideo(content.title, content.link)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Panel>
                ))}
            </Collapse>
        </div>
        
        <QuyHoachTuyenTinhSidebar />

        <VideoModal 
            visible={isModalVisible} 
            videoUrl={currentVideo} 
            onClose={handleCancel} 
            getContainer={false} 
        />
        </>
    );
};

export default QuyHoachTuyenTinhContent;
