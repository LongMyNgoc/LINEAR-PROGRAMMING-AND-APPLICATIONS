import { useState, useMemo } from "react";
import BT1 from "../BT1/BT1";
import BT2 from "../BT2/BT2";
import BT3 from "../BT3/BT3";
import BT4 from "../BT4/BT4";
import BT5 from "../BT5/BT5";
import useStudents from "../../../../../hooks/firebase/Get/useStudents";

export type Assignment = {
  chapter: string;
  quantity: number;
};

const useAssignments = () => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const { students } = useStudents(); // Lấy dữ liệu từ useStudents

  const chapters = ["Chương 1", "Chương 2", "Chương 3", "Chương 4", "Chương 5"];

  // Tính toán lại số lượng dựa trên số sinh viên
  const assignments: Assignment[] = useMemo(() => {
    const studentCount = students.length; // Đếm số lượng sinh viên

    let updatedAssignments: Assignment[] = [];

    // Duyệt qua các chương và tính số lượng sinh viên
    chapters.forEach((chapter) => {
      updatedAssignments.push({
        chapter,
        quantity: studentCount, // Số lượng sinh viên
      });
    });

    return updatedAssignments;
  }, [students]); // Chạy lại khi dữ liệu sinh viên thay đổi

  // Ánh xạ chương -> Component tương ứng
  const chapterComponents: Record<string, React.FC> = {
    "Chương 1": BT1,
    "Chương 2": BT2,
    "Chương 3": BT3,
    "Chương 4": BT4,
    "Chương 5": BT5,
  };

  const SelectedComponent = selectedChapter ? chapterComponents[selectedChapter] : null;

  return {
    selectedChapter,
    setSelectedChapter,
    assignments,
    SelectedComponent,
  };
};

export default useAssignments;
