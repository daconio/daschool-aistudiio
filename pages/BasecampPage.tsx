import React from 'react';
import { PageBanner, SidebarContainer, MiniProfile, SearchFilterToolbar } from '../components/Shared';
import { Team } from '../types';
import { Share2, Users, Calendar } from 'lucide-react';

const mockTeams: Team[] = [
  { id: 1, name: '피지컬팀', leader: '도비콘', description: '체력과 코딩력을 겸비한...', members: 1, maxMembers: 4, hackathonName: '바이브 챌린지', status: 'recruiting' },
  { id: 2, name: '바이브 원정대', leader: 'Mather', description: '함께 성장하실 분', members: 2, maxMembers: 2, hackathonName: '바이브 챌린지', status: 'closed' },
  { id: 3, name: '펩시 제로', leader: '양말실밥', description: '제로슈거 코딩', members: 2, maxMembers: 2, hackathonName: '2026 서울시 교통 안전', status: 'closed' },
  { id: 4, name: '주토피아', leader: '랑이랑이', description: '누구나 환영합니다', members: 2, maxMembers: 2, hackathonName: '2026 서울시 교통 안전', status: 'closed' },
  { id: 5, name: 'test', leader: '랑이랑이', description: '테스트 팀입니다', members: 2, maxMembers: 2, hackathonName: '완료', status: 'closed' },
  { id: 6, name: '우리는 한놈이다', leader: 'DAKER', description: '집중 공략', members: 2, maxMembers: 3, hackathonName: '완료', status: 'closed' },
];

const TeamCard: React.FC<{ data: Team }> = ({ data }) => {
    const isRecruiting = data.status === 'recruiting';
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full dark:bg-slate-800 dark:border-slate-700">
            <div className={`p-4 ${isRecruiting ? 'bg-emerald-600' : 'bg-slate-700 dark:bg-slate-600'} text-white flex justify-between items-start`}>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isRecruiting ? 'bg-red-500' : 'bg-gray-500 dark:bg-gray-600'}`}>
                    {isRecruiting ? '모집종료' : '팀빌딩완료'}
                </span>
                <div className="flex items-center space-x-2">
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full truncate max-w-[100px]">{data.hackathonName}</span>
                    <Share2 className="w-4 h-4 cursor-pointer" />
                </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs dark:bg-pink-900/50">🧘</div>
                    <span className="text-xs text-gray-500 font-medium dark:text-slate-400">👑 {data.leader}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 dark:text-white">{data.name}</h3>
                
                <div className="mt-auto pt-6">
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{data.members}/{data.maxMembers}명</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{isRecruiting ? 'D-3' : '마감'}</span>
                        </div>
                        <div>01.31</div>
                    </div>
                    
                    <button className={`w-full py-2 rounded text-xs font-bold text-white ${isRecruiting ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-500 dark:bg-slate-600'}`}>
                        {isRecruiting ? '나의 팀' : '모집마감'}
                    </button>
                </div>
            </div>
        </div>
    );
}

const BasecampPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <SidebarContainer title="베이스캠프">
        <div className="space-y-1">
           <p className="text-xs text-gray-500 mb-4 dark:text-slate-400">다양한 원정대를 탐색하고 팀에 합류하세요.</p>
           <h4 className="text-xs font-bold text-gray-800 mb-2 dark:text-slate-200">나의 원정대</h4>
           <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>소속 팀</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">18</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>내가 주최한 팀</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">11</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>보낸 지원</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">2</span>
            </button>

            <h4 className="text-xs font-bold text-gray-800 mt-6 mb-2 dark:text-slate-200">원정대 탐색</h4>
            <button className="w-full flex justify-between items-center px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
                <span>전체</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">58</span>
            </button>
        </div>
        <MiniProfile />
      </SidebarContainer>

      <div className="flex-1">
        <PageBanner />
        <div className="flex justify-between items-center mb-4">
             <div className="flex items-center space-x-2">
                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1">
                    <span>원정대그룹 가기</span>
                 </button>
             </div>
             <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600">
                + 원정대 만들기
             </button>
        </div>
        
        <SearchFilterToolbar placeholder="원정대 검색..." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockTeams.map(team => (
                <TeamCard key={team.id} data={team} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BasecampPage;