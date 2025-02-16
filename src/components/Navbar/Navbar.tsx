import './Navbar.css';  // Đảm bảo bạn đã tạo một file CSS riêng cho navbar

// Import ảnh và đặt tên cho ảnh
import Logo from '../../assets/Logo_DHSP.png';
import Logo_Word from '../../assets/Logo_DHSP_Word.png';
import HomeIcon from '../../assets/Home.png';
import AboutUsIcon from '../../assets/ABOUT US.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Logo_Word} alt="Logo Word" className="logo-word" />
      </div>

      {/* Đặt các mục navbar vào container để đẩy về bên phải */}
      <div className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item">
            <img src={HomeIcon} alt="Home" className="navbar-home-icon" />
          </li>
          <li className="navbar-item">
            <img src={AboutUsIcon} alt="AboutUs" className="navbar-aboutus-icon"/>
          </li>
          <li className="navbar-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
