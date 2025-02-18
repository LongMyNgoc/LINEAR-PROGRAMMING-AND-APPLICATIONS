import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Routes, Route từ react-router-dom
import Navbar from './components/Main_UI/Navbar/Navbar';  // Import Navbar component
import MainContent from './components/Main_UI/Main_Content/MainContent'; // Import MainContent component
import Footer from './components/Main_UI/Footer/Footer'; // Import Footer component
import SignIn from './components/Login/Sign_In/SignIn.tsx';

function App() {
  return (
    <Router> {/* Bọc toàn bộ ứng dụng trong Router */}
      <Navbar />  {/* Đưa component Navbar vào đây */}

      {/* Định nghĩa các route */}
      <Routes>
        <Route path="/" element={<>
        <MainContent />
        <Navbar />
        <Footer />
      </>} />  {/* Trang chủ */}
        <Route path="/signin" element={<>
        <SignIn />
        <Navbar />
        <Footer />
      </>} />
      </Routes>

      <Footer />  {/* Đưa Footer vào đây */}
    </Router>
  );
}

export default App;
