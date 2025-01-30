import React from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Menu } from "lucide-react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="fixed w-full top-0 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                GitWrapped
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-yellow-400 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
              } overflow-hidden`}
          >
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-2 py-1"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-semibold text-center transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6 sm:space-y-8 py-12 sm:py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in px-4">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                GitWrapped
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Visualize your coding journey and celebrate your GitHub achievements in style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 px-4">
              <Link
                to="/login"
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gray-900/50 backdrop-blur-lg border-t border-gray-800 py-4 sm:py-6 mt-8 sm:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm sm:text-base text-center">
            © {new Date().getFullYear()} GitWrapped. Built with 💛 by @devarsheecodess.
          </p>
        </div>
      </footer>

      {/* Add required styles for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Landing;