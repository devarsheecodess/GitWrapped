import React, { useState } from 'react';
import { Star, GitPullRequest, Users, GitCommit, Code, Calendar, Share2, X, Play } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Rest of the component code remains exactly the same...
const GitHubWrapped = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStory, setCurrentStory] = useState(0);

    // Sample data - replace with actual user data
    const userData = {
        commits: 2847,
        stars: 523,
        followers: 246,
        prsCount: 187,
        issuesCount: 156,
        mostProductiveDay: "Wednesday",
        mostActiveMonth: "October",
        languages: [
            { name: "JavaScript", percentage: 45 },
            { name: "Python", percentage: 30 },
            { name: "TypeScript", percentage: 15 },
            { name: "Java", percentage: 10 }
        ],
        monthlyActivity: [
            { name: "Jan", commits: 180 },
            { name: "Feb", commits: 220 },
            { name: "Mar", commits: 280 },
            { name: "Apr", commits: 310 },
            { name: "May", commits: 350 },
            { name: "Jun", commits: 290 },
            { name: "Jul", commits: 420 },
            { name: "Aug", commits: 390 },
            { name: "Sep", commits: 450 },
            { name: "Oct", commits: 520 },
            { name: "Nov", commits: 480 },
            { name: "Dec", commits: 410 }
        ]
    };

    const stories = [
        {
            title: "Your Commits",
            subtitle: "You've been busy this year!",
            content: (
                <div className="space-y-6 animate-fade-in">
                    <GitCommit size={48} className="text-green-400 mb-4" />
                    <div className="text-7xl font-bold text-green-400 mb-2 animate-number">
                        {userData.commits}
                    </div>
                    <div className="text-xl">Total Commits</div>
                    <div className="text-gray-400">That's an average of {Math.round(userData.commits / 365)} commits per day!</div>
                </div>
            )
        },
        {
            title: "Stars & Followers",
            subtitle: "Your impact on the community",
            content: (
                <div className="space-y-8 animate-fade-in">
                    <div>
                        <Star size={40} className="text-yellow-400 mb-4" />
                        <div className="text-5xl font-bold text-yellow-400 mb-2">{userData.stars}</div>
                        <div className="text-lg">Stars Received</div>
                    </div>
                    <div>
                        <Users size={40} className="text-blue-400 mb-4" />
                        <div className="text-5xl font-bold text-blue-400 mb-2">{userData.followers}</div>
                        <div className="text-lg">New Followers</div>
                    </div>
                </div>
            )
        },
        {
            title: "Contributions",
            subtitle: "Making open source better",
            content: (
                <div className="space-y-8 animate-fade-in">
                    <div>
                        <GitPullRequest size={40} className="text-purple-400 mb-4" />
                        <div className="text-5xl font-bold text-purple-400 mb-2">{userData.prsCount}</div>
                        <div className="text-lg">PRs Merged</div>
                    </div>
                    <div>
                        <Code size={40} className="text-orange-400 mb-4" />
                        <div className="text-5xl font-bold text-orange-400 mb-2">{userData.issuesCount}</div>
                        <div className="text-lg">Issues Opened</div>
                    </div>
                </div>
            )
        },
        {
            title: "Most Active Times",
            subtitle: "When you shine the brightest",
            content: (
                <div className="space-y-6 animate-fade-in">
                    <Calendar size={48} className="text-blue-400 mb-4" />
                    <div>
                        <div className="text-3xl font-bold mb-2">{userData.mostProductiveDay}s</div>
                        <div className="text-gray-400">Most Productive Day</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold mb-2">{userData.mostActiveMonth}</div>
                        <div className="text-gray-400">Most Active Month</div>
                    </div>
                </div>
            )
        },
        {
            title: "Your Languages",
            subtitle: "Your code composition",
            content: (
                <div className="w-full h-64 animate-fade-in">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userData.languages} layout="vertical">
                            <XAxis type="number" domain={[0, 100]} />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="percentage" fill="#4ade80" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )
        },
        {
            title: "Yearly Activity",
            subtitle: "Your GitHub journey",
            content: (
                <div className="w-full h-64 animate-fade-in">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={userData.monthlyActivity}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="commits" fill="#4ade80" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )
        },
        {
            title: "Your 2024 GitHub Wrapped",
            subtitle: "Share your amazing year!",
            content: (
                <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="font-bold text-green-400">{userData.commits}</div>
                            <div>Commits</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="font-bold text-yellow-400">{userData.stars}</div>
                            <div>Stars</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="font-bold text-blue-400">{userData.followers}</div>
                            <div>New Followers</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="font-bold text-purple-400">{userData.prsCount}</div>
                            <div>PRs Merged</div>
                        </div>
                    </div>
                    <button
                        className="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center space-x-2"
                        onClick={() => {/* Add share functionality */ }}
                    >
                        <Share2 size={20} />
                        <span>Share to Instagram</span>
                    </button>
                </div>
            )
        }
    ];

    const handleNext = () => {
        if (currentStory < stories.length - 1) {
            setCurrentStory(curr => curr + 1);
        } else {
            handleClose();
        }
    };

    const handlePrev = () => {
        if (currentStory > 0) {
            setCurrentStory(curr => curr - 1);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        setCurrentStory(0);
    };

    const handleClose = () => {
        setIsOpen(false);
        setCurrentStory(0);
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

                        <div className="h-[600px] p-8 flex flex-col items-center justify-center text-white text-center">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-1">{stories[currentStory].title}</h3>
                                <p className="text-sm text-gray-400">{stories[currentStory].subtitle}</p>
                            </div>

                            <div className="flex-1 flex items-center justify-center w-full">
                                {stories[currentStory].content}
                            </div>

                            <div className="w-full flex justify-center space-x-2 mt-8">
                                {stories.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1 rounded-full transition-all duration-300 ${index === currentStory ? 'w-16 bg-green-500' : 'w-8 bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-0 flex items-center">
                            <button
                                onClick={handlePrev}
                                className={`w-1/3 h-full opacity-0 ${currentStory === 0 ? 'cursor-default' : 'cursor-pointer'}`}
                            />
                            <button
                                onClick={handleNext}
                                className="w-2/3 h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GitHubWrapped;