import { useState } from "react";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex items-center justify-center min-h-screen ">
            {isLogin ? (
                <LoginPage switchToSignup={() => setIsLogin(false)} />
            ) : (
                <SignupPage switchToLogin={() => setIsLogin(true)} />
            )}
        </div>
    );
}
