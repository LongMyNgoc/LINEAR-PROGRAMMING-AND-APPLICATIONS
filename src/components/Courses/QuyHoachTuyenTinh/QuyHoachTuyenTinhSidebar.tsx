import QuyHoachTuyenTinhPicture from '../../../assets/Courses/QuyHoachTuyenTinh.png';
import './QuyHoachTuyenTinhSidebar.css'; // Nếu bạn có CSS riêng cho Sidebar

const QuyHoachTuyenTinhSidebar = () => {
    return (
        <div className="quy-hoach-tuyen-tinh-sidebar">
            <img src={QuyHoachTuyenTinhPicture} alt="Logo" className='logo-qhtt' />
            <div className="quy-hoach-tuyen-tinh-title">
                <h2>QUY HOẠCH TUYẾN TÍNH VÀ ỨNG DỤNG</h2>
                <h3 className="summary-title">Summary</h3>
                <p className="summary-text">
                    <b>1. Giới thiệu khóa học</b> <br />
                    Học phần này cung cấp các kiến thức cơ bản được gói gọn trong các vấn đề: bài toán quy hoạch tuyến tính giải bằng
                    phương pháp đơn hình, phương pháp đơn hình mở rộng, lý thuyết đối ngẫu, bài toán vận tải và phương pháp phân phối.
                    Tính ứng dụng được chú trọng quan tâm trong học phần này. Các vấn đề ở cấp độ cao hơn có liên quan đến quy hoạch tuyến tính
                    được giới thiệu sơ lược trong quá trình học và là vấn đề mở cho sinh viên làm các nghiên cứu nhỏ. <br />
                    <b>2. Số tiết khóa học</b> <br />
                    45 tiết
                </p>
                <h3 className='summary-title'>Objective</h3>
                <p className='summary-text'>
                    Học phần "Quy hoạch tuyến tính và ứng dụng" nhằm trang bị cho sinh viên những kiến thức cơ bản và chuyên sâu về các
                    phương pháp tối ưu hóa trong quy hoạch tuyến tính, từ đó giúp sinh viên hiểu rõ cách xây dựng và giải quyết các bài
                    toán tối ưu trong thực tế. Sau khi hoàn thành học phần, sinh viên sẽ đạt được các mục tiêu sau:
                    <br />
                    - Hiểu rõ các khái niệm, định nghĩa và nguyên lý cơ bản của quy hoạch tuyến tính. <br />
                    - Nắm vững các phương pháp giải các dạng bài toán quy hoạch tuyến tính như bài toán đơn hình, bài toán đối ngẫu,
                    bài toán vận tải, v.v. <br />
                    - Ứng dụng quy hoạch tuyến tính để giải quyết các bài toán tối ưu hóa trong nhiều lĩnh vực thực tế. <br />
                    - Phát triển kỹ năng tư duy logic, phân tích vấn đề và ra quyết định dựa trên mô hình toán học. <br />
                    - Nâng cao khả năng làm việc nhóm và trình bày kết quả nghiên cứu, ứng dụng một cách hiệu quả.
                </p>
                <h3 className='summary-title'>Duration</h3>
                <p className='summary-text'>
                    12 week(s) and 3 day(s)
                </p>
            </div>
        </div>
    );
};

export default QuyHoachTuyenTinhSidebar;
