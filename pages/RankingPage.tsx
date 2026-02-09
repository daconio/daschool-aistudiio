import React from 'react';
import { PageBanner, SidebarContainer } from '../components/Shared';
import { RankUser } from '../types';
import { Search } from 'lucide-react';

const mockRankUsers: RankUser[] = [
  { rank: 1, name: '도비콘', xp: 12900, tier: 'Silver', avatarColor: 'bg-pink-100' },
  { rank: 2, name: '닷쇠', xp: 9871, tier: 'Silver', avatarColor: 'bg-red-100' },
  { rank: 5, name: 'Mather', xp: 5641, tier: 'Silver', avatarColor: 'bg-purple-100' },
  { rank: 6, name: '이대권', xp: 4930, tier: 'Silver', avatarColor: 'bg-blue-100' },
  { rank: 4, name: '랑이랑이', xp: 4776, tier: 'Silver', avatarColor: 'bg-yellow-100' },
  { rank: 4, name: '랑희', xp: 3370, tier: 'Silver', avatarColor: 'bg-green-100' },
  { rank: 7, name: 'Public User', xp: 2835, tier: 'Silver', avatarColor: 'bg-orange-100' },
  { rank: 9, name: '겸쓰', xp: 2456, tier: 'Silver', avatarColor: 'bg-teal-100' },
  { rank: 8, name: 'Team Leader', xp: 2035, tier: 'Silver', avatarColor: 'bg-indigo-100' },
  { rank: 10, name: 'DACONIO', xp: 1935, tier: 'Silver', avatarColor: 'bg-blue-500 text-white' },
  { rank: 10, name: 'Test Leader', xp: 1935, tier: 'Silver', avatarColor: 'bg-rose-200' },
];

const RankingItem: React.FC<{ user: RankUser; isTop?: boolean }> = ({ user, isTop }) => (
  <div className={`flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-3 dark:bg-slate-800 dark:border-slate-700 ${isTop ? 'bg-orange-50 border-orange-100 dark:bg-orange-900/10 dark:border-orange-900/30' : ''}`}>
    <div className={`w-8 font-bold text-center ${isTop ? 'text-orange-500' : 'text-gray-400 dark:text-slate-500'}`}>
        {isTop ? '👑' : user.rank > 20 ? '-' : `#${user.rank}`}
    </div>
    <div className="w-8 mx-4 text-gray-300 dark:text-slate-600">-</div>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${user.avatarColor} dark:text-slate-800`}>
        {user.name.substring(0, 1)}
    </div>
    <div className="flex-1 ml-4">
        <h4 className="font-bold text-gray-900 text-sm dark:text-white">{user.name}</h4>
        <span className="text-xs text-gray-500 dark:text-slate-400">{user.xp.toLocaleString()} XP</span>
    </div>
    <div className="bg-gray-200 rounded px-3 py-1 text-xs font-bold flex items-center space-x-1 text-gray-600 dark:bg-slate-700 dark:text-slate-300">
        <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-slate-500"></div>
        <span>{user.tier} Lv.27</span>
    </div>
  </div>
);

const RankingPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
       <SidebarContainer title="랭킹 메뉴">
           <div className="space-y-1">
             <button className="w-full flex justify-between items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">🌍</div>
                    <span>전체</span>
                </div>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">102</span>
             </button>
             {['해커톤', '원정대', '커뮤니티', '성장'].map(cat => (
                 <button key={cat} className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-900/10 flex items-center justify-center text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">🏅</div>
                        <span>{cat}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">{Math.floor(Math.random() * 100)}</span>
                 </button>
             ))}
           </div>
           
           <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-sm dark:text-white">나의 랭킹</h4>
                </div>
                <div className="bg-white border-2 border-gray-900 rounded-lg p-3 dark:bg-slate-800 dark:border-slate-600">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-lg">👨‍💻</div>
                        <div>
                            <div className="font-bold text-sm dark:text-white">LV.27 도비콘</div>
                            <div className="text-xs text-gray-500 dark:text-slate-400">Silver · #1</div>
                        </div>
                    </div>
                    <div className="text-xs font-bold mb-1 dark:text-slate-300">EXP Bar</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1 dark:bg-slate-700">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 w-[80%] h-full"></div>
                    </div>
                    <div className="text-right text-[10px] text-gray-400 dark:text-slate-500">2,100 XP to Gold</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="border border-gray-200 rounded p-2 text-center dark:border-slate-700 dark:bg-slate-800">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full mx-auto mb-1 flex items-center justify-center dark:bg-yellow-900/30">🏆</div>
                        <div className="text-[10px] font-bold dark:text-white">해커톤</div>
                        <div className="text-[10px] text-gray-500 dark:text-slate-400">Lv.44</div>
                    </div>
                    <div className="border border-gray-200 rounded p-2 text-center dark:border-slate-700 dark:bg-slate-800">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full mx-auto mb-1 flex items-center justify-center dark:bg-yellow-900/30">⚔️</div>
                        <div className="text-[10px] font-bold dark:text-white">원정대</div>
                        <div className="text-[10px] text-gray-500 dark:text-slate-400">Lv.37</div>
                    </div>
                </div>
           </div>
       </SidebarContainer>
       
       <div className="flex-1">
            <PageBanner />
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <input type="text" placeholder="사용자 검색..." className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg text-sm outline-none dark:bg-slate-800 dark:text-white" />
                    <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                </div>
                <select className="px-4 py-3 bg-gray-100 rounded-lg text-sm outline-none text-gray-600 min-w-[120px] dark:bg-slate-800 dark:text-slate-300">
                    <option>All Tiers</option>
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Bronze</option>
                </select>
            </div>

            <div className="flex items-center space-x-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-yellow-700/80 flex items-center justify-center text-xl text-white shadow-lg shadow-yellow-200 dark:shadow-none">🏆</div>
                 <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">종합 랭킹</h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400">모든 활동의 종합 점수</p>
                 </div>
                 <div className="ml-auto bg-gray-100 px-3 py-1 rounded text-xs font-bold text-gray-600 dark:bg-slate-800 dark:text-slate-300">102 users</div>
            </div>

            <div>
                {/* Top 1 Highlight */}
                <RankingItem user={mockRankUsers[0]} isTop={true} />
                
                {/* Rest of the list */}
                {mockRankUsers.slice(1).map((user, index) => (
                    <RankingItem key={index} user={user} />
                ))}
            </div>
       </div>
    </div>
  );
};

export default RankingPage;