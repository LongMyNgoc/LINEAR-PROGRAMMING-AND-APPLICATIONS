import { useState } from "react";
import { chapters } from "./QuyHoachTuyenTinhContent.ts";

export const useQuyHoachTuyenTinhContent = () => {
    const [playedVideos, setPlayedVideos] = useState<{ [key: string]: boolean }>({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const handlePlayVideo = (key: string, videoUrl: string) => {
        if (videoUrl.includes("youtube")) {
            setPlayedVideos((prev) => ({ ...prev, [key]: true }));
            setCurrentVideo(videoUrl);
            setIsModalVisible(true);
        } else {
            window.open(videoUrl, "_blank");
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCurrentVideo(""); // Reset video URL when modal is closed
    };

    return {
        playedVideos,
        isModalVisible,
        currentVideo,
        chapters,
        handlePlayVideo,
        handleCancel,
    };
};
