import React, {useEffect, useState} from 'react';
import { Users, GitBranch, X } from 'lucide-react';
import axios from 'axios'

const GitHubDashboard = () => {
    const [userData, setUserData] = useState({repos: 0, followers: 0});
    const [user, setUser] = useState(localStorage.getItem('username'));

    const fetchData = async () => {
        try {
            const repos = await axios.get("http://localhost:3000/repos", { params: { user } });
            const followers = await axios.get("http://localhost:3000/followers", { params: { user } });
    
            setUserData({ repos: repos.data.repoCount, followers: followers.data });
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full max-w-md mx-auto bg-slate-900 p-10 rounded-3xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src={localStorage.getItem('avatar_url')}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-300">
                        <span className="font-semibold">{localStorage.getItem('username')}</span>
                        <span className="mx-1">-</span>
                        <span className="text-gray-400">Github Stats</span>
                    </span>
                </div>
            </div>

            {/* Stats Column */}
            <div className="flex flex-col space-y-4">
                {/* Repositories */}
                <div className="bg-[#1e1b2e] rounded-2xl p-6 h-60 flex flex-col">
                    <div className="flex justify-between items-center mb-auto">
                        <GitBranch className="text-purple-400 w-6 h-6" />
                        <span className="text-purple-400 text-sm">Total</span>
                    </div>
                    <div className="text-purple-400">
                        <div className="text-6xl font-bold mb-2">{userData.repos}</div>
                        <div className="text-xl">Repositories</div>
                    </div>
                </div>

                {/* Followers */}
                <div className="bg-[#1a2332] rounded-2xl p-6 h-60 flex flex-col">
                    <div className="flex justify-between items-center mb-auto">
                        <Users className="text-blue-400 w-6 h-6" />
                        <span className="text-blue-400 text-sm">Total</span>
                    </div>
                    <div className="text-blue-400">
                        <div className="text-6xl font-bold mb-2">{userData.followers}</div>
                        <div className="text-xl">Followers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubDashboard;