import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Sun, Moon, MessageSquare, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: Logo & Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-black text-blue-600 tracking-tighter dark:text-blue-500">DAKER</Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <Link to="/" className={isActive('/')}>해커톤</Link>
              <Link to="/basecamp" className={isActive('/basecamp')}>베이스캠프</Link>
              <Link to="/community" className={isActive('/community')}>커뮤니티</Link>
              <Link to="/ranking" className={isActive('/ranking')}>랭킹</Link>
              <Link to="/education" className={isActive('/education')}>교육</Link>
            </nav>
          </div>

          {/* Center: Search (Hidden on small screens) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text" 
              placeholder="원정대, 해커톤, 사용자 검색..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-100 outline-none dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900 transition-colors duration-200"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full dark:text-gray-400 dark:hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded-lg dark:hover:bg-slate-800 transition-colors">
              <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center text-xs font-bold text-pink-700">도</div>
              <span className="text-sm font-medium hidden sm:block dark:text-gray-200">도비콘</span>
              <span className="text-xs text-gray-500 hidden sm:block dark:text-gray-400">로그아웃</span>
            </div>
            <button 
              onClick={toggleTheme} 
              className="text-gray-500 hover:bg-gray-100 p-2 rounded-full dark:text-gray-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 md:p-6">
        {children}
      </main>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white p-4 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Layout;