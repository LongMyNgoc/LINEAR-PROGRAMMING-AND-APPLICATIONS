import { useState, useEffect } from "react";
import "./SignIn.css";
import Logo from "../../../assets/Login/Logo.png";
import useSignIn from "./SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPasswordModal from "../../Password/ForgotPasswordModal/ForgotPasswordModal"; // Import modal

const SignIn = () => {
    const { username, setUsername, password, setPassword, role, setRole, error, loading, handleLogin } = useSignIn();
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); // State để mở modal

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

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
                                    placeholder="Email"
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
                                {loading ? "Đang đăng nhập..." : "Sign In"}
                            </button>

                            <div className="signin-links">
                                <a href="#" onClick={() => setIsForgotPasswordOpen(true)} className="forgot-password">
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

            {/* Modal Quên Mật Khẩu */}
            <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />

            <ToastContainer />
        </>
    );
};

export default SignIn;
