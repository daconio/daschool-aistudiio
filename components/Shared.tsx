import React from 'react';
import { Filter, Search } from 'lucide-react';

export const PageBanner: React.FC = () => (
  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl p-3 mb-6 flex items-center justify-between text-sm md:text-base shadow-sm">
    <div className="flex items-center space-x-2 overflow-hidden">
      <span className="font-bold bg-white text-emerald-600 px-2 py-0.5 rounded-full text-xs shrink-0">공지</span>
      <span className="truncate">DAKER에서 함께해요! 🚀 팀원을 모아 더 큰 승리를 향해 달려가세요!</span>
    </div>
    <div className="hidden md:flex space-x-2">
      <div className="bg-white/20 px-2 py-0.5 rounded-full text-xs">#1 🏆 도비콘</div>
      <div className="bg-white/20 px-2 py-0.5 rounded-full text-xs">#2 🥈 닷쇠</div>
    </div>
  </div>
);

export const SidebarContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <aside className="w-full md:w-64 shrink-0 space-y-6">
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 dark:bg-slate-800 dark:border-slate-700">
      <h3 className="font-bold text-gray-800 mb-4 dark:text-white">{title}</h3>
      {children}
    </div>
  </aside>
);

export const MiniProfile: React.FC = () => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center dark:bg-slate-800 dark:border-slate-700">
    <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">👨‍💻</div>
    <h3 className="font-bold text-gray-900 dark:text-white">도비콘</h3>
    <div className="flex justify-center items-center space-x-2 text-xs text-gray-500 mt-1 dark:text-slate-400">
      <span>👁 58</span>
      <span className="text-green-500 font-bold">신뢰 0.81</span>
    </div>
    <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden dark:bg-slate-700">
      <div className="bg-gradient-to-r from-green-400 to-green-600 w-[81%] h-full"></div>
    </div>
    <div className="text-right text-[10px] text-gray-400 mt-1">2,100 XP → Gold</div>
  </div>
);

export const SearchFilterToolbar: React.FC<{ placeholder: string }> = ({ placeholder }) => (
  <div className="flex flex-col md:flex-row gap-3 mb-6">
    <div className="relative flex-1">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:ring-blue-600"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
    <div className="flex gap-2">
      <button className="p-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
        <Filter className="w-5 h-5" />
      </button>
      <div className="flex items-center space-x-1 bg-white border border-gray-200 rounded-lg px-2 dark:bg-slate-800 dark:border-slate-700">
        <button className="p-2 hover:bg-gray-100 rounded text-blue-600 dark:hover:bg-slate-700 dark:text-blue-400"><div className="w-4 h-4 bg-current rounded-sm"></div></button>
        <button className="p-2 hover:bg-gray-100 rounded text-gray-400 dark:hover:bg-slate-700 dark:text-slate-500"><div className="w-4 h-4 border-2 border-current rounded-sm"></div></button>
      </div>
    </div>
  </div>
);