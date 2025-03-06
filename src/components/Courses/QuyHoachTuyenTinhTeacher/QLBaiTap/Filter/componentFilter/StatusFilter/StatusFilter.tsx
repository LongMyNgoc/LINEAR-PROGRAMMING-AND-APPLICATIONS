import React from "react";

interface StatusFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ filter, onFilterChange }) => (
  <div>
    <label htmlFor="filter">Lọc theo tình trạng:</label>
    <select id="filter" value={filter} onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">Tất cả</option>
      <option value="submitted">Đã nộp</option>
      <option value="notSubmitted">Chưa nộp</option>
      <option value="graded">Đã chấm</option>
      <option value="notGraded">Chưa chấm</option>
    </select>
  </div>
);

export default StatusFilter;
