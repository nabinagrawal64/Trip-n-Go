import { useState } from "react";
import { Eye, EyeOff, } from "lucide-react";

//eslint-disable-next-line
export default function LoginForm( {switchToSignup } ) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center bg-[#1E1E1E]/80 backdrop-blur-lg">
            <div className="bg-[#3A3A3A] sm:p-6 p-4 rounded-lg shadow-lg sm:w-80 w-60">
                
                <h1 className={`transition-colors duration-100 flex items-center justify-center`}>
                    <img src="./logoDark.gif" alt="logo" className="xl:size-32 lg:size-28 md:size-24 size-20" />
                </h1>
                
                <form action="">
                    <div>
                        <label className="block text-white sm:text-sm text-xs mb-1">Email/Username</label>
                        <input
                            type="text"
                            autoFocus
                            placeholder="Enter email/username"
                            className="w-full sm:pt-2 pt-1 mb-2 sm:placeholder:text-sm placeholder:text-xs text-white border-b-2 border-gray-500 focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-white sm:text-sm text-xs mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="w-full sm:pt-2 pt-1 sm:placeholder:text-sm placeholder:text-xs text-white border-b-2 border-gray-500 focus:outline-none"
                            />
                            <button
                                type="button"
                                className="absolute cursor-pointer right-2 top-2 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Eye className="sm:h-5 sm:w-5 h-4 w-4" />
                                ) : (
                                    <EyeOff className="sm:h-5 sm:w-5 h-4 w-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </form>

                <p className="text-center cursor-pointer text-white sm:text-xs text-[10px] sm:my-4 my-3">
                    Forgot password?
                </p>

                <button 
                    className="w-full cursor-pointer bg-[#00E1FF] hover:bg-[#00e1ffa8] text-black sm:p-2 p-1 rounded-lg font-bold"
                >
                    Log In
                </button>
                
                <p className="text-left mx-1 text-gray-400 sm:text-xs text-[10px] sm:mt-3 mt-1">
                    Don’t have an account?{" "}
                    <span className="text-white cursor-pointer font-bold" onClick={switchToSignup}> Sign up</span>
                </p>
            </div>
        </div>
    );
}
