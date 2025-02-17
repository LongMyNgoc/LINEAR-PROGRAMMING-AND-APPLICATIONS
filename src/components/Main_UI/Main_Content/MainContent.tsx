import './MainContent.css';
import Background from '../../../assets/Main_UI/Main_Content/Background.png';

const MainContent = () => {
  return (
    <div className="main-content">
      <img src={Background} alt="Background" className="background" />
      <div className="overlay">
        <h1 className="overlay-text">
          HO CHI MINH CITY OF EDUCATION<br />
          <span className="small-text">ONLINE QUIZ SYSTEM FOR THE COURSE LINEAR PROGRAMMING AND APPLICATIONS</span>
        </h1>
      </div>
    </div>
  );
};

export default MainContent;
