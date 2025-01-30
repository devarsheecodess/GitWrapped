import React, { useState } from 'react';
import { Star, GitPullRequest, Users, GitCommit, Code, Calendar, Share2, X, Play } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import FinalWrap from './Stats/FinalWrap'

// Rest of the component code remains exactly the same...
const GitHubWrapped = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen flex justify-center mt-8 hover:cursor-pointer">
            {!isOpen ? (
                <div className="max-w-md w-full">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-9 shadow-2xl transform transition-all hover:scale-105">
                        <div className="flex justify-center mb-6">
                            <Code size={48} className="text-green-400" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 text-center">
                            Your GitHub Wrapped
                        </h2>
                        <p className="text-gray-300 mb-8 text-center">
                            Celebrate your coding journey of 2024
                        </p>
                        <button
                            onClick={handleOpen}
                            className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
                        >
                            <Play size={20} />
                            <span>View Your Year</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                    <div className="relative w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-50"
                        >
                            <X size={24} />
                        </button>

                        <FinalWrap />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GitHubWrapped;