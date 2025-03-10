// questions.ts
export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    image?: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      question: "Bài toán quy hoạch tuyến tính là bài toán:",
      options: [
        "A. Tối ưu hóa hàm mục tiêu tuyến tính với các ràng buộc tuyến tính",
        "B. Tối ưu hóa hàm mục tiêu phi tuyến với các ràng buộc tuyến tính",
        "C. Tối ưu hóa hàm mục tiêu tuyến tính với các ràng buộc phi tuyến",
        "D. Tối ưu hóa hàm mục tiêu phi tuyến với các ràng buộc phi tuyến"
      ],
      answer: "A. Tối ưu hóa hàm mục tiêu tuyến tính với các ràng buộc tuyến tính"
    },
    {
      id: 2,
      question: "Hàm mục tiêu trong bài toán quy hoạch tuyến tính thường được biểu diễn dưới dạng:",
      options: [
        "A. max hoặc min của một hàm tuyến tính",
        "B. max hoặc của một hàm phi tuyến",
        "C. max hoặc min của một hàm bậc hai",
        "D. max hoặc min của một hàm logarit"
      ],
      answer: "A. max hoặc min của một hàm tuyến tính"
    },
    {
      id: 3,
      question: "Trong bài toán quy hoạch tuyến tính, các ràng buộc thường được biểu diễn dưới dạng:",
      options: [
        "A. Phương trình hoặc bất phương trình tuyến tính",
        "B. Phương trình hoặc bất phương trình phi tuyến",
        "C. Phương trình vi phân",
        "D. Phương trình tích phân"
      ],
      answer: "A. Phương trình hoặc bất phương trình tuyến tính"
    },
    {
      id: 4,
      question: "Biến trong bài toán quy hoạch tuyến tính thường là:",
      options: [
        "A. Biến liên tục",
        "B. Biến rời rạc",
        "C. Biến ngẫu nhiên",
        "D. Biến phức tạp"
      ],
      answer: "A. Biến liên tục"
    },
    {
      id: 5,
      question: "Bài toán quy hoạch tuyến tính có thể có:",
      options: [
        "A. Một nghiệm tối ưu duy nhất",
        "B. Vô số nghiệm tối ưu",
        "C. Không có nghiệm tối ưu",
        "D. Tất cả các phương án trên"
      ],
      answer: "D. Tất cả các phương án trên"
    },
    {
      id: 6,
      question: "Bài toán quy hoạch tuyến tính dạng chuẩn là bài toán có:",
      options: [
        "A. Hàm mục tiêu là max và các ràng buộc là ≤",
        "B. Hàm mục tiêu là min và các ràng buộc là ≥",
        "C. Hàm mục tiêu là max hoặc min và các ràng buộc là ≤, ≥, hoặc =",
        "D. Hàm mục tiêu là max hoặc min và các ràng buộc là ≤"
      ],
      answer: "C. Hàm mục tiêu là max hoặc min và các ràng buộc là ≤, ≥, hoặc ="
    },
    {
      id: 7,
      question: "Bài toán quy hoạch tuyến tính dạng chính tắc là bài toán có:",
      options: [
        "A. Hàm mục tiêu là max và các ràng buộc là ≤",
        "B. Hàm mục tiêu là min và các ràng buộc là ≥",
        "C. Hàm mục tiêu là max hoặc min và các ràng buộc là =",
        "D. Hàm mục tiêu là max hoặc min và các ràng buộc là ≤"
      ],
      answer: "C. Hàm mục tiêu là max hoặc min và các ràng buộc là ="
    },
    {
      id: 8,
      question: "Để chuyển bài toán quy hoạch tuyến tính về dạng chuẩn, ta có thể:",
      options: [
        "A. Thêm biến phụ",
        "B. Nhân hai vế của ràng buộc với -1",
        "C. Chuyển đổi hàm mục tiêu từ max sang min hoặc ngược lại",
        "D. Tất cả các phương án trên"
      ],
      answer: "D. Tất cả các phương án trên"
    },
    {
      id: 9,
      question: "Trong bài toán quy hoạch tuyến tính, biến phụ thường được sử dụng để:",
      options: [
        "A. Chuyển đổi ràng buộc bất đẳng thức thành đẳng thức",
        "B. Chuyển đổi ràng buộc đẳng thức thành bất đẳng thức",
        "C. Loại bỏ ràng buộc",
        "D. Thêm ràng buộc mới"
      ],
      answer: "A. Chuyển đổi ràng buộc bất đẳng thức thành đẳng thức"
    },
    {
      id: 10,
      question: "Bài toán quy hoạch tuyến tính có thể được giải bằng phương pháp:",
      options: [
        "A. Đơn hình (Simplex)",
        "B. Gradient",
        "C. Newton",
        "D. Euler"
      ],
      answer: "A. Đơn hình (Simplex)"
    },
    {
      id: 11,
      question: "Cho bài toán quy hoạch tuyến tính sau:\n\nSố biến quyết định trong bài toán này là:",
      image: "/documents/1.11.jpg", 
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "B. 2"
    },
    {
      id: 12,
      question: "Trong bài toán quy hoạch tuyến tính, miền ràng buộc là:",
      options: [
        "A. Tập hợp các nghiệm thỏa mãn tất cả các ràng buộc",
        "B. Tập hợp các nghiệm không thỏa mãn ràng buộc",
        "C. Tập hợp các nghiệm tối ưu",
        "D. Tập hợp các nghiệm không tối ưu"
      ],
      answer: "A. Tập hợp các nghiệm thỏa mãn tất cả các ràng buộc"
    },
    {
      id: 13,
      question: "Nếu miền ràng buộc của bài toán quy hoạch tuyến tính là rỗng, thì bài toán:",
      options: [
        "A. Có nghiệm tối ưu",
        "B. Không có nghiệm tối ưu",
        "C. Có vô số nghiệm tối ưu",
        "D. Có một nghiệm tối ưu duy nhất"
      ],
      answer: "B. Không có nghiệm tối ưu"
    },
    {
      id: 14,
      question: "Nếu hàm mục tiêu của bài toán quy hoạch tuyến tính không bị chặn trên (hoặc dưới), thì bài toán:",
      options: [
        "A. Có nghiệm tối ưu",
        "B. Không có nghiệm tối ưu",
        "C. Có vô số nghiệm tối ưu",
        "D. Có một nghiệm tối ưu duy nhất"
      ],
      answer: "B. Không có nghiệm tối ưu"
    },
    {
      id: 15,
      question: "Trong bài toán quy hoạch tuyến tính, nếu miền ràng buộc là một đa giác lồi, thì nghiệm tối ưu (nếu có) sẽ nằm tại:",
      options: [
        "A. Đỉnh của đa giác",
        "B. Cạnh của đa giác",
        "C. Trung điểm của đa giác",
        "D. Tâm của đa giác"
      ],
      answer: "A. Đỉnh của đa giác"
    },
    {
      id: 16,
      question: "Phương pháp đơn hình (Simplex) được sử dụng để giải bài toán quy hoạch tuyến tính:",
      options: [
        "A. Dạng chuẩn",
        "B. Dạng chính tắc",
        "C. Dạng tổng quát",
        "D. Tất cả các phương án trên"
      ],
      answer: "D. Tất cả các phương án trên"
    },
    {
      id: 17,
      question: "Trong phương pháp đơn hình, bước đầu tiên là:",
      options: [
        "A. Tìm một nghiệm cơ sở khả thi",
        "B. Tìm hàm mục tiêu",
        "C. Xác định miền ràng buộc",
        "D. Loại bỏ ràng buộc"
      ],
      answer: "A. Tìm một nghiệm cơ sở khả thi"
    },
    {
      id: 18,
      question: "Trong phương pháp đơn hình, nếu tất cả các hệ số trong hàng cuối của bảng đơn hình đều không âm, thì:",
      options: [
        "A. Bài toán có nghiệm tối ưu",
        "B. Bài toán không có nghiệm tối ưu",
        "C. Bài toán có vô số nghiệm tối ưu",
        "D. Bài toán cần tiếp tục lặp"
      ],
      answer: "A. Bài toán có nghiệm tối ưu"
    },
    {
      id: 19,
      question: "Phương pháp đồ thị thường được sử dụng để giải bài toán quy hoạch tuyến tính có:",
      options: [
        "A. 2 biến quyết định",
        "B. 3 biến quyết định",
        "C. 4 biến quyết định",
        "D. Nhiều biến quyết định"
      ],
      answer: "A. 2 biến quyết định"
    },
    {
      id: 20,
      question: "Trong bài toán quy hoạch tuyến tính, nếu có nhiều hơn một nghiệm tối ưu, thì:",
      options: [
        "A. Tất cả các nghiệm trên miền ràng buộc đều là nghiệm tối ưu",
        "B. Chỉ có một nghiệm duy nhất là tối ưu",
        "C. Không có nghiệm tối ưu",
        "D. Bài toán không thể giải được"
      ],
      answer: "A. Tất cả các nghiệm trên miền ràng buộc đều là nghiệm tối ưu"
    }
  ];
  