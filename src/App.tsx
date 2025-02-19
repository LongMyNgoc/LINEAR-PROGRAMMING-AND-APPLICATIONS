import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Main_UI/Navbar/Navbar.tsx';
import Footer from './components/Main_UI/Footer/Footer.tsx';
import SignIn from './components/Login/Sign_In/SignIn.tsx';
import Student from './components/Student/Navbar/Student.tsx';
import MainContent from './components/Main_UI/Main_Content/MainContent.tsx';
import Teacher from './components/Teacher/Navbar/Teacher.tsx';
import Admin from './components/Admin/Navbar/Admin.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route Trang Chủ */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainContent />
              <Footer />
            </>
          }
        />
        
        {/* Route Đăng Nhập */}
        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <SignIn />
              <Footer />
            </>
          }
        />

        {/* Route Student với StudentNavbar */}
        <Route
          path="/student"
          element={
            <>
              <Student />
            </>
          }
        />
        <Route path='/teacher' element={
            <>
               <Teacher />
            </>
          } 
        />
        <Route path='/admin' element={
          <>
          <Admin />
          </>
        }
         />
      </Routes>
    </Router>
  );
}

export default App;
