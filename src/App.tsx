import './App.css';
import Navbar from './components/Navbar/Navbar';  // Import Navbar component

function App() {
  return (
    <>
      <Navbar />  {/* Đưa component Navbar vào đây */}
      <div className="content">
        {/* Nội dung khác của bạn sẽ được hiển thị dưới Navbar */}
        <h1>Welcome to our Website</h1>
        <p>This is the home page.</p>
      </div>
    </>
  );
}

export default App;
