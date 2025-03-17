import { useEffect, useRef, useState } from "react";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

// eslint-disable-next-line
export default function AuthPage({handleCloseLogin}) {
    const [isLogin, setIsLogin] = useState(true);
    const modalRef = useRef(null);

    // Handle click outside modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseLogin(); // Close modal if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleCloseLogin]);

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div ref={modalRef}>
                {isLogin ? (
                    <LoginPage handleCloseLogin={handleCloseLogin} switchToSignup={() => setIsLogin(false)} />
                ) : (
                    <SignupPage handleCloseLogin={handleCloseLogin} switchToLogin={() => setIsLogin(true)} />
                )}
            </div>
        </div>
    );
}
