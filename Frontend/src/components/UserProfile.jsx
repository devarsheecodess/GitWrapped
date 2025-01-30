import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Wrapped from './Wrapped';
import { LogOut, Terminal, ChevronDown, Github, Cookie } from 'lucide-react';
import Cookies from 'js-cookie';

function UserProfile() {
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3000/profile', { withCredentials: true })
      .then(response => {
        setUsername(response.data.username);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('avatar_url', response.data.avatar_url);
        setAvatarUrl(response.data.avatar_url);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching user data', err);
        setError('Failed to load user data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLogoutPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = (e) => {
    e.stopPropagation();
    const cf = window.confirm('Are you sure you want to logout?');
    if (!cf) return;
    axios.get('http://localhost:3000/logout', { withCredentials: true })
      .then(() => {
        window.location.href = '/';
      })
      .catch(err => {
        console.error('Error logging out', err);
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <Terminal className="w-8 sm:w-12 h-8 sm:h-12 text-green-400 animate-spin" />
          <p className="mt-4 text-sm sm:text-base text-green-400">Initializing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 sm:p-6 max-w-md w-full">
          <p className="text-red-400 text-sm sm:text-base text-center">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black text-white">
      {/* Matrix-like animated background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex justify-around animate-matrix-fall">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="text-green-500 text-xs font-mono whitespace-nowrap transform rotate-180 writing-vertical">
              {[...Array(50)].map((_, j) => (
                <span key={j} className="block">
                  {String.fromCharCode(33 + Math.random() * 93)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm border-b border-green-500/20">
        <div className="flex items-center space-x-2">
          <Github className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            GitWrapped
          </h1>
        </div>

        <div className="relative" ref={popupRef}>
          <button
            onClick={() => setShowLogoutPopup(!showLogoutPopup)}
            className="flex items-center space-x-2 bg-gray-800 rounded-full pr-3 sm:pr-4 pl-1 py-1 hover:bg-gray-700 transition duration-200"
          >
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-green-400/50"
            />
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {showLogoutPopup && (
            <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-gray-800 rounded-lg shadow-lg p-2 border border-green-500/20 backdrop-blur-sm z-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-3 sm:px-4 py-2 text-red-400 hover:bg-gray-700 rounded-lg transition duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-10">
        {/* Main Profile Section */}
        <main className="relative z-10 w-full lg:w-1/2 flex flex-col items-center transform transition-all hover:scale-105">
          <div className="flex flex-col items-center p-4 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-green-500/20 w-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="relative rounded-full w-24 sm:w-32 h-24 sm:h-32 border-4 border-green-400/50"
              />
            </div>

            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center">
              Welcome back, {username}!
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 text-center max-w-md">
              Ready to see your coding journey? Explore your GitHub year in review! 🚀
            </p>
          </div>
        </main>

        {/* Wrapped Component */}
        <div className="w-full lg:w-1/2">
          <Wrapped />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
        }
        
        @keyframes matrix-fall {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }
        
        .animate-matrix-fall {
          animation: matrix-fall 20s linear infinite;
        }
        
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  );
}

export default UserProfile;