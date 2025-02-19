// src/components/Login/SignIn.tsx
import './SignIn.css';
import Logo from '../../../assets/Login/Logo.png';  // Logo của bạn
import useSignIn from './SignIn';  // Import hook xử lý đăng nhập
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS của Toastify

const SignIn = () => {
    const { username, setUsername, password, setPassword, role, setRole, error, loading, handleLogin } = useSignIn();

    // Hiển thị thông báo lỗi
    if (error) {
        toast.error(error);  // Hiển thị thông báo lỗi
    }

    return (
        <>
            <div className="signin-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="signin-container">
                <div className="signin-content">
                    <div className="signin-form">
                        <h1 className="text-login">LOGIN</h1>
                        <form onSubmit={handleLogin}>
                            <div className="signin-input">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder={role === 'student' ? "48.01.104.082" : "Email"}
                                    className="username-input"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="signin-input">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="signin-input">
                                <select
                                    id="role"
                                    name="role"
                                    className="role-select"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="student">Sinh Viên</option>
                                    <option value="teacher">Giáo Viên</option>
                                    <option value="admin">Quản Trị Viên</option>
                                </select>
                            </div>

                            <button type="submit" className="signin-button" disabled={loading}>
                                {loading ? 'Đang đăng nhập...' : 'Sign In'}
                            </button>

                            <div className="signin-links">
                                <a href="#forgot-password" className="forgot-password">
                                    Forgot password?
                                </a>
                                <a href="#sign-up" className="sign-up">
                                    Not yet a member? Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Thêm ToastContainer vào cuối trang */}
            <ToastContainer />
        </>
    );
};

export default SignIn;