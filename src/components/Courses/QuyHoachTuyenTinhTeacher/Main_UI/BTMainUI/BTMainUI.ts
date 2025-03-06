// src/hooks/useBTMainUI.ts
import { useState } from "react";
import useStudents from "../../../../../hooks/useStudents";

const useBTMainUI = () => {
  const [selectedTab, setSelectedTab] = useState("hoc-vien");
  const { students } = useStudents();

  const handleStudentTabClick = () => {
    setSelectedTab("hoc-vien");
  };

  return {
    selectedTab,
    setSelectedTab,
    students,
    handleStudentTabClick
  };
};

export default useBTMainUI;