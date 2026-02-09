import React from 'react';
import { PageBanner, SidebarContainer, MiniProfile, SearchFilterToolbar } from '../components/Shared';
import { Hackathon } from '../types';
import { Share2, Clock, Eye, Trophy } from 'lucide-react';

const mockHackathons: Hackathon[] = [
  { id: 1, title: '바이브 챌린지', organizer: 'DACON', tags: ['D-74'], prize: '1,650만원', participants: 144, daysLeft: 74, status: 'recruiting', imageColor: 'bg-blue-400' },
  { id: 2, title: '111 AI 데이터 분석 챌린지', organizer: 'DACON', tags: ['D-3'], prize: '650만원', participants: 364, daysLeft: 3, status: 'recruiting', imageColor: 'bg-orange-500' },
  { id: 3, title: 'AGI challenge', organizer: 'DACON', tags: ['종료'], prize: 'Prize Pool', participants: 100, daysLeft: 0, status: 'closed', imageColor: 'bg-red-400' },
  { id: 4, title: '엔비디아 H100', organizer: 'DACON', tags: ['종료'], prize: '650만원', participants: 4, daysLeft: 0, status: 'closed', imageColor: 'bg-emerald-400' },
  { id: 5, title: '222 AI 데이터 분석 챌린지', organizer: 'DACON', tags: ['종료'], prize: '650만원', participants: 9, daysLeft: 0, status: 'closed', imageColor: 'bg-teal-400' },
  { id: 6, title: '카카오 AI 데이터 분석 챌린지', organizer: 'DACON', tags: ['종료'], prize: '650만원', participants: 15, daysLeft: 0, status: 'closed', imageColor: 'bg-sky-300' },
];

const HackathonCard: React.FC<{ data: Hackathon }> = ({ data }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col dark:bg-slate-800 dark:border-slate-700">
    <div className={`h-32 ${data.imageColor} p-4 flex justify-between items-start text-white`}>
      <span className="bg-black/20 px-2 py-1 rounded text-xs font-medium">{data.status === 'recruiting' ? '모집중' : '종료'}</span>
      <div className="flex items-center space-x-2">
        <span className="text-xs font-bold">{data.tags[0]}</span>
        <Share2 className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-center space-x-2 mb-2">
        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold dark:bg-blue-900/50 dark:text-blue-300">D</span>
        <span className="text-xs text-gray-500 dark:text-slate-400">{data.organizer}</span>
      </div>
      <h3 className="font-bold text-gray-900 mb-4 line-clamp-2 dark:text-white">{data.title}</h3>
      
      <div className="mt-auto">
        <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium mb-2 dark:text-slate-300">
           <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500 dark:bg-slate-700 dark:text-slate-400">총 상금</span>
           <span>{data.prize}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 dark:text-slate-400">
          <span>3팀 참가</span>
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{data.participants}</span>
          </div>
        </div>
        <button className={`w-full py-2.5 rounded-lg text-sm font-bold text-white transition-colors ${data.status === 'recruiting' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-blue-300 cursor-not-allowed dark:bg-slate-600'}`}>
          {data.status === 'recruiting' ? '참가중' : '종료됨'}
        </button>
      </div>
    </div>
  </div>
);

const HackathonPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <SidebarContainer title="해커톤 메뉴">
        <div className="space-y-1">
            <button className="w-full flex justify-between items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium dark:bg-blue-900/30 dark:text-blue-400">
                <span>내가 참가한 해커톤</span>
                <span className="bg-white px-2 py-0.5 rounded text-xs shadow-sm dark:bg-slate-700 dark:text-white">28</span>
            </button>
             <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>전체</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">49</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>모집중</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">4</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>접수대기</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">0</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>종료</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">45</span>
            </button>
        </div>
        <div className="pt-6 border-t border-gray-100 dark:border-slate-700">
             <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-900/30">
                <div className="flex items-center space-x-2 text-yellow-700 font-bold text-sm mb-2 dark:text-yellow-500">
                    <Trophy className="w-4 h-4" />
                    <span>해커톤 가이드</span>
                </div>
                <button className="w-full py-2 bg-yellow-200 text-yellow-800 text-xs font-bold rounded-lg hover:bg-yellow-300 dark:bg-yellow-700 dark:text-yellow-100 dark:hover:bg-yellow-600">자세히 알아보기 →</button>
             </div>
        </div>
        <MiniProfile />
      </SidebarContainer>

      <div className="flex-1">
        <PageBanner />
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 text-sm dark:text-slate-400">총 28개의 해커톤 (전체 49개 중)</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm shadow-blue-200 dark:shadow-none">
                + 해커톤 만들기
            </button>
        </div>
        <SearchFilterToolbar placeholder="해커톤 검색..." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockHackathons.map(hackathon => (
            <HackathonCard key={hackathon.id} data={hackathon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;