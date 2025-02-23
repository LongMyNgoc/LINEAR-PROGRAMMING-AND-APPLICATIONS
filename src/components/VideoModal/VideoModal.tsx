// VideoModal.tsx
import React from 'react';
import { Modal } from 'antd';
import './VideoModal.css'; // Import file CSS

interface VideoModalProps {
    visible: boolean;
    videoUrl: string;
    onClose: () => void;
    getContainer?: string | HTMLElement | false | (() => HTMLElement);
}

const VideoModal: React.FC<VideoModalProps> = ({ visible, videoUrl, onClose, getContainer = false }) => {
    return (
        <Modal
            title="Video"
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={800}
            style={{ zIndex: 9999 }} // Đặt z-index cao
            getContainer={getContainer}
            mask={false} // Loại bỏ lớp phủ mờ
        >
            <div className="video-container">
                <iframe
                    width="100%"
                    height="400"
                    src={videoUrl.replace("watch?v=", "embed/")} // Chuyển đổi link
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </Modal>
    );
};

export default VideoModal;
