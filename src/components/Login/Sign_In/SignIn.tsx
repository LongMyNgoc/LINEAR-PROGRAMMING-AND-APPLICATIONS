import './SignIn.css';
import Logo from '../../../assets/Login/Logo.png';  // Logo của bạn

const SignIn = () => {
    return (
        <>
        <div className="signin-logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="signin-container">
            <div className="signin-content">

                {/* Form đăng nhập */}
                <div className="signin-form">
                    <h1 className='text-login'>LOGIN</h1>
                    <form>
                        <div className="signin-input">
                            {/* Trường input cho username */}
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="48.01.104.082" 
                                className="username-input" 
                            />
                        </div>
                        <div className="signin-input">
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>

                        <div className="signin-input">
                            <select id="role" name="role" className="role-select">
                                <option value="student">Sinh Viên</option>
                                <option value="teacher">Giáo Viên</option>
                                <option value="admin">Quản Trị Viên</option>
                            </select>
                        </div>

                        <button type="submit" className="signin-button">Sign In</button>

                        {/* Forgot Password và Sign Up */}
                        <div className="signin-links">
                            <a href="#forgot-password" className="forgot-password">Forgot password?</a>
                            
                            <a href="#sign-up" className="sign-up">Not yet a member? Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignIn;
