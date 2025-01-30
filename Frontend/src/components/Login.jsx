import React from "react";
import { Github } from "lucide-react";

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:3000/auth/github';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
                    <div className="text-center space-y-6 flex justify-center items-center flex-col">
                        {/* Logo placeholder - you can replace this with your actual logo */}
                        <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <svg
                                className="w-10 h-10 text-purple-900"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-white">
                                Welcome to GitWrapped
                            </h1>
                            <p className="text-gray-300">
                                Discover your GitHub coding journey for the year!
                            </p>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Github className="w-5 h-5" />
                            <span className="font-medium">Login with GitHub</span>
                        </button>

                        <p className="text-sm text-gray-400">
                            View your personalized GitHub statistics and insights
                        </p>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
