import './App.css';
import Navbar from './components/Main_UI/Navbar/Navbar';  // Import Navbar component
import MainContent from './components/Main_UI/Main_Content/MainContent';
import Footer from './components/Main_UI/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />  {/* Đưa component Navbar vào đây */}
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
