import './Navbar.css';  // Đảm bảo bạn đã tạo một file CSS riêng cho navbar

// Import ảnh và đặt tên cho ảnh
import Logo from '../../../assets/Main_UI/Navbar/Logo_DHSP.png';
import Logo_Word from '../../../assets/Main_UI/Navbar/Logo_DHSP_Word.png';
import HomeIcon from '../../../assets/Main_UI/Navbar/Home.png';
import AboutUsIcon from '../../../assets/Main_UI/Navbar/ABOUT US.png'
import ContactIcon from '../../../assets/Main_UI/Navbar/CONTACT.png'
import SignInIcon from '../../../assets/Main_UI/Navbar/Sign In.png'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Logo_Word} alt="Logo Word" className="logo-word" />
      </div>

      {/* Đặt các mục navbar vào container để đẩy về bên phải */}
      <div className="navbar-menu">
        <ul className="navbar-home">
          <li className="navbar-item">
            <Link to="/">
              <img src={HomeIcon} alt="Home" className="navbar-home-icon"/>
            </Link>
          </li>
          </ul>
          <ul className='navbar-list'>
          <li className='navbar-item'>
          <br></br><br></br>
          <Link to="/signin">
              <img src={SignInIcon} alt="Sign In" className="navbar-signin-icon" />
            </Link>
          </li>
          <li className="navbar-item">
            <br></br><br></br>
            <img src={AboutUsIcon} alt="AboutUs" className="navbar-aboutus-icon"/>
          </li>
          <li className="navbar-item">
          <br></br><br></br>
          <img src={ContactIcon} alt="Contact" className="navbar-contact-icon"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
