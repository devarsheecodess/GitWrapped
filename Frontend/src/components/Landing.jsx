import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-yellow-400">GitWrapped</h1>
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* GitHub-Themed Background */}
        <div className="absolute inset-0 bg-[url('https://github.githubassets.com/images/modules/site/home/globe.jpg')] bg-cover bg-center opacity-10 z-0"></div>

        {/* Welcome Section */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
            Welcome to <span className="text-yellow-400">GitWrapped</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-400 mb-6">
            Discover your year in code with GitHub.
          </p>
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} GitWrapped. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
