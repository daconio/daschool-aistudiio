import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContainer } from '../components/Shared';
import { Mail, Github, Youtube, Linkedin, HardDrive, CheckCircle, Eye, Megaphone, Info, Camera, Upload } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const radarData = [
  { subject: 'Profile', A: 20, fullMark: 100 },
  { subject: 'Raid', A: 0, fullMark: 100 },
  { subject: 'Hackathon', A: 100, fullMark: 100 },
  { subject: 'Discord', A: 100, fullMark: 100 },
  { subject: 'Community', A: 80, fullMark: 100 },
];

const badges = [
    { name: '커뮤니티', icon: '🦁', time: '2일 전', color: 'bg-yellow-900' },
    { name: '커뮤니티', icon: '🦁', time: '2일 전', color: 'bg-yellow-900' },
    { name: '커뮤니티', icon: '🦁', time: '3일 전', color: 'bg-yellow-900' },
    { name: '커뮤니티', icon: '🦁', time: '4일 전', color: 'bg-yellow-900' },
    { name: '커뮤니티', icon: '🦁', time: '4일 전', color: 'bg-yellow-900' },
];

const Heatmap = () => {
    // Mock heatmap data roughly matching screenshot
    // 7 rows (days), ~10 cols (weeks) displayed
    return (
        <div className="flex gap-1 justify-end">
            {Array.from({ length: 12 }).map((_, w) => (
                <div key={w} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, d) => {
                         // Randomize green levels for demo
                         const active = Math.random() > 0.6;
                         const intensity = active ? (Math.random() > 0.5 ? 'bg-green-500' : 'bg-green-300') : 'bg-gray-100 dark:bg-slate-700';
                         // Force some pattern
                         const isPattern = (w > 5 && w < 9 && d > 1 && d < 6);
                         const finalColor = isPattern ? 'bg-green-500' : intensity;
                         
                        return <div key={d} className={`w-2.5 h-2.5 rounded-sm ${finalColor}`}></div>
                    })}
                </div>
            ))}
        </div>
    )
}

const RoleTag: React.FC<{ text: string }> = ({ text }) => (
    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
        {text}
    </span>
);

const SkillTag: React.FC<{ text: string }> = ({ text }) => (
    <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-amber-500 transition-colors">
        {text}
    </span>
);

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      
      {/* --- LEFT SIDEBAR (Profile Menu & Trust Score) --- */}
      <SidebarContainer title="프로필 메뉴">
         <div className="space-y-1 text-sm font-medium">
             <button className="w-full text-left px-3 py-2 text-white bg-blue-600 rounded-lg shadow-sm font-bold">프로필 정보</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">소개 & 포트폴리오</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">역량 & 스킬</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">참여 활동</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">랭킹</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">연동 계정</button>
             <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors dark:text-slate-400 dark:hover:bg-slate-700">가용 시간 설정</button>
         </div>

         <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
             <div className="flex items-center justify-between mb-4">
                 <span className="text-sm font-bold text-gray-900 dark:text-white">신뢰 점수</span>
                 <Info className="w-3 h-3 text-gray-400 cursor-pointer" />
             </div>
             <div className="text-center py-2 mb-4">
                 <span className="text-4xl font-black text-blue-600 dark:text-blue-400">0.71</span>
                 <div className="text-xs text-gray-400 font-medium mt-1 dark:text-slate-500">/ 1.0 만점</div>
             </div>
             
             <div className="space-y-3 text-[11px] text-gray-500 font-medium dark:text-slate-400">
                 {[
                     { label: '역량 평가', pct: 35 },
                     { label: '랭킹 점수', pct: 25 },
                     { label: '활동 점수', pct: 20 },
                     { label: '인기도', pct: 10 },
                     { label: '커뮤니티', pct: 10 }
                 ].map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-center mb-1">
                            <span>{item.label}</span>
                            <span>{item.pct}%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden dark:bg-slate-700">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${item.pct}%` }}></div>
                        </div>
                    </div>
                 ))}
             </div>
         </div>
         
         <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
             <h4 className="text-sm font-bold mb-4 dark:text-white">역량 평가</h4>
             <div className="space-y-3">
                 {[
                     '직무 적합성', '포트폴리오', '책임감', '커뮤니케이션', '목표 일치', 
                     '학습 능력', '시간 관리', '협업 률', '적극성', '성격 조화'
                 ].map((skill, i) => (
                     <div key={i} className="flex items-center justify-between text-xs">
                         <span className="font-medium text-gray-600 w-24 dark:text-slate-400">{skill}</span>
                         <div className="flex-1 mx-2 relative h-1.5 bg-gray-100 rounded-full dark:bg-slate-700">
                             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2.5 h-2.5 border-2 border-blue-500 bg-white rounded-full z-10 dark:bg-slate-800 dark:border-blue-400"></div>
                             <div className="w-full h-full bg-blue-100 rounded-full dark:bg-blue-900/40"></div>
                         </div>
                         <span className="text-blue-600 font-bold dark:text-blue-400">5</span>
                     </div>
                 ))}
             </div>
         </div>
      </SidebarContainer>

      {/* --- MAIN CONTENT CENTER --- */}
      <div className="flex-1 min-w-0 space-y-6">
         
         {/* Black Banner */}
         <div className="bg-black text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-sm dark:bg-slate-800">
            <div className="flex items-center space-x-3 overflow-hidden">
                <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">공지</span>
                <span className="text-xs font-medium truncate">✨ DAKER 베타 서비스 오픈 및 이벤트 안내 ✨</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
                <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">공지</span>
                <span className="text-xs font-medium hidden sm:inline">✨ DAKER 베타 서비스 오픈 및 이벤트!</span>
            </div>
         </div>

         {/* Profile Header */}
         <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-start space-x-6">
                <div 
                    onClick={() => navigate('/my-learning')}
                    className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm overflow-hidden relative group cursor-pointer hover:ring-2 hover:ring-blue-200 transition-all dark:border-slate-600 dark:bg-emerald-900/30"
                >
                     {/* Placeholder Avatar Face */}
                     <div className="w-16 h-16 bg-emerald-500 rounded-full relative">
                        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-black rounded-full"></div>
                        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-black rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-6 h-3 bg-black/50 rounded-b-full"></div>
                     </div>
                     <div className="absolute bottom-1 bg-emerald-600 text-white text-[8px] px-1.5 rounded-full font-bold">CUMBIA!</div>
                     
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-6 h-6 text-white" />
                     </div>
                </div>
                
                <div className="flex-1 min-w-0 pt-1">
                    <h1 className="text-xl font-black text-gray-900 mb-2 dark:text-white">도비콘</h1>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 font-medium mb-4 dark:text-slate-400">
                        <span className="flex items-center space-x-1">
                            <Eye className="w-3.5 h-3.5" />
                            <span><strong className="text-gray-900 dark:text-white">88</strong> 조회수</span>
                        </span>
                        <span className="w-px h-3 bg-gray-300 dark:bg-slate-600"></span>
                        <span>신뢰 점수 <strong className="text-blue-600 dark:text-blue-400">0.71</strong> / 1.0</span>
                    </div>
                    
                    <div className="w-full max-w-md">
                        <div className="flex justify-between text-[10px] font-bold mb-1">
                            <span className="text-gray-800 dark:text-slate-300">EXP Bar</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-200/50 dark:bg-slate-700 dark:border-slate-600">
                            <div className="bg-gradient-to-r from-green-500 to-green-600 w-[40%] h-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        </div>
                        <div className="text-right text-[10px] text-gray-400 mt-1 font-medium dark:text-slate-500">10,490 XP to Gold</div>
                    </div>
                </div>
            </div>
         </div>

         {/* Intro Section */}
         <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-800 dark:text-white">소개</h3>
                <span className="text-xs text-gray-400">154/200자</span>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 dark:bg-slate-700 dark:border-slate-600">
                <p className="text-sm text-gray-700 leading-relaxed font-medium dark:text-slate-300">
                    "Code Your Life, Vibe with the World."<br/>
                    진정한 생산성이란 단순히 많은 일을 하는 것이 아니라, 소중한 것을 지킬 힘을 기르는 것입니다.<br/>
                    나아가 그 성장의 결실을 가족의 행복으로 연결하고, 남은 에너지로 사회의 문제를 해결하는 '생산적인 메이커'
                </p>
            </div>

            <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg mb-4 hover:border-blue-200 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:hover:border-blue-500">
                <div className="flex items-center space-x-3">
                    <div className="p-1.5 bg-blue-100 rounded-full text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                        <Megaphone className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-800 dark:text-white">모험가 모드</div>
                        <div className="text-xs text-gray-500 dark:text-slate-400">활성화하면 원정대에서 팀원 모집 시 검색됩니다</div>
                    </div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 cursor-pointer">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </div>
            </div>

            <div className="bg-amber-100/50 border border-amber-200 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors dark:bg-amber-900/20 dark:border-amber-900/40 dark:hover:bg-amber-900/30">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-4 bg-amber-400 rounded"></div>
                    <span className="text-sm font-bold text-gray-800 dark:text-slate-200">프로필 배너</span>
                </div>
                <CheckCircle className="w-4 h-4 text-gray-400" />
            </div>
         </div>

         {/* Contact & Portfolio */}
         <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
            <h3 className="font-bold text-gray-800 mb-6 dark:text-white">연락처 & 포트폴리오</h3>
            
            <div className="space-y-5">
                <div>
                    <label className="flex items-center space-x-1.5 text-xs font-bold text-gray-700 mb-1.5 dark:text-slate-300">
                        <Mail className="w-3.5 h-3.5" /> <span>이메일</span>
                    </label>
                    <div className="flex gap-2">
                        <input type="text" value="edgar@dacon.io" className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300" readOnly />
                        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 space-x-2 dark:bg-slate-700 dark:border-slate-600">
                            <Eye className="w-4 h-4 text-gray-500 dark:text-slate-400" />
                            <span className="text-xs font-bold text-gray-600 dark:text-slate-300">공개</span>
                            <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200 cursor-pointer dark:bg-slate-500">
                                <span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition" />
                            </div>
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1.5 dark:text-slate-500">비활성화 시 다른 사용자가 내 프로필에서 이메일을 볼 수 없습니다.</p>
                </div>

                <div>
                     <label className="flex items-center space-x-1.5 text-xs font-bold text-gray-700 mb-1.5 dark:text-slate-300">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">👤</div> <span>닉네임</span>
                    </label>
                    <div className="flex gap-2">
                        <input type="text" value="도비콘" className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none dark:bg-slate-700 dark:border-slate-600 dark:text-white" readOnly />
                        <button className="bg-blue-300 text-white font-bold px-4 rounded-lg text-sm hover:bg-blue-400 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">변경</button>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1.5 dark:text-slate-500">최대 20자, 특수문자 사용 가능. 닉네임은 30일에 1회만 변경할 수 있습니다.</p>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 dark:text-slate-300">포트폴리오 링크</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center space-x-1.5 mb-1.5">
                                <Github className="w-3.5 h-3.5 text-gray-700 dark:text-slate-300" /> <span className="text-xs font-bold text-gray-700 dark:text-slate-300">GitHub</span>
                            </div>
                            <input type="text" placeholder="https://github.com/username" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-blue-400" />
                        </div>
                        <div>
                            <div className="flex items-center space-x-1.5 mb-1.5">
                                <HardDrive className="w-3.5 h-3.5 text-gray-700 dark:text-slate-300" /> <span className="text-xs font-bold text-gray-700 dark:text-slate-300">Google Drive</span>
                            </div>
                            <input type="text" placeholder="https://drive.google.com/..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-blue-400" />
                        </div>
                        <div>
                            <div className="flex items-center space-x-1.5 mb-1.5">
                                <Youtube className="w-3.5 h-3.5 text-gray-700 dark:text-slate-300" /> <span className="text-xs font-bold text-gray-700 dark:text-slate-300">YouTube</span>
                            </div>
                            <input type="text" placeholder="https://www.youtube.com/c/channel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-blue-400" />
                        </div>
                        <div>
                             <div className="flex items-center space-x-1.5 mb-1.5">
                                <Linkedin className="w-3.5 h-3.5 text-gray-700 dark:text-slate-300" /> <span className="text-xs font-bold text-gray-700 dark:text-slate-300">LinkedIn</span>
                            </div>
                            <input type="text" placeholder="https://linkedin.com/in/username" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:focus:border-blue-400" />
                        </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Roles & Skills */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col h-full dark:bg-slate-800 dark:border-slate-700">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="font-bold text-gray-800 text-sm dark:text-white">나의 역할</h3>
                     <button className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">선택</button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                     {['Backend Developer', 'ML Engineer', 'Data Analyst', 'Frontend Developer', 'Data Scientist', 'PM (Product Manager)'].map(role => (
                         <RoleTag key={role} text={role} />
                     ))}
                 </div>
             </div>
             
             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col h-full dark:bg-slate-800 dark:border-slate-700">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="font-bold text-gray-800 text-sm dark:text-white">나의 스킬</h3>
                     <button className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">선택</button>
                 </div>
                 <div className="flex flex-wrap gap-2">
                     {['Computer Vision', 'NLP (Natural Language Processing)', 'Recommendation System', 'Audio Processing', 'Tabular Data', 'Time Series Analysis'].map(skill => (
                         <SkillTag key={skill} text={skill} />
                     ))}
                 </div>
             </div>
         </div>
      </div>

      {/* --- RIGHT SIDEBAR --- */}
      <div className="w-full xl:w-80 shrink-0 space-y-4">
           {/* Streak Card */}
           <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-800 text-sm dark:text-white">연속 활동</h3>
                </div>
                <div className="flex items-end justify-between text-xs text-gray-500 mb-2 dark:text-slate-400">
                    <span>활동일 <strong className="text-gray-900 dark:text-white">38</strong></span>
                    <span>연속 <strong className="text-orange-500">0일</strong></span>
                </div>
                <Heatmap />
                <div className="flex justify-between text-[10px] text-gray-400 mt-2 dark:text-slate-500">
                    <span>적음</span>
                    <span>많음</span>
                </div>
           </div>

           {/* Radar Chart Card */}
           <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800 text-sm dark:text-white">능력치 분석</h3>
                    <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[10px] font-bold border border-gray-200 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">⚪ Silver</span>
                </div>
                <div className="h-64 relative -ml-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                        <PolarGrid stroke="#e5e7eb" className="dark:stroke-slate-600" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="My Skills" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-[11px] mt-2 px-1 text-gray-800 dark:text-slate-300">
                    <div className="flex justify-between items-center pr-2">
                        <span className="flex items-center gap-1"><Github className="w-3 h-3"/> GitHub</span>
                        <span className="font-bold">0</span>
                    </div>
                    <div className="flex justify-between items-center pl-2">
                         <span className="flex items-center gap-1">🦁 Raid</span>
                         <span className="font-bold">0</span>
                    </div>
                    
                    <div className="flex justify-between items-center pr-2">
                        <span className="flex items-center gap-1">🐻 Hackathon</span>
                        <span className="font-bold">100</span>
                    </div>
                     <div className="flex justify-between items-center pl-2">
                        <span className="flex items-center gap-1">🎮 Discord</span>
                        <span className="font-bold">100</span>
                    </div>

                    <div className="flex justify-between items-center pr-2">
                        <span className="flex items-center gap-1">🦁 Community</span>
                        <span className="font-bold">2284</span>
                    </div>
                     <div className="flex justify-between items-center pl-2">
                        <span className="flex items-center gap-1">👤 Profile</span>
                        <span className="font-bold">221</span>
                    </div>
                </div>
           </div>

           {/* Badges Card */}
           <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800 text-sm dark:text-white">최근 획득 배지</h3>
                    <button className="text-blue-500 text-xs hover:underline">전체보기 &gt;</button>
                </div>
                <div className="space-y-3">
                    {badges.map((badge, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 border border-gray-50 rounded-lg hover:bg-gray-50 transition-colors dark:border-slate-700 dark:hover:bg-slate-700">
                             <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-yellow-900 rounded-full flex items-center justify-center text-sm shadow-sm border border-yellow-700/30">
                                    <span className="text-yellow-100 drop-shadow-md">🦁</span>
                                </div>
                                <span className="font-bold text-xs text-gray-800 dark:text-slate-300">{badge.name}</span>
                             </div>
                             <span className="text-[10px] text-gray-400">🕒 {badge.time}</span>
                        </div>
                    ))}
                </div>
           </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl transform scale-100 transition-transform dark:bg-slate-800">
                <h3 className="text-lg font-black text-gray-900 mb-2 dark:text-white">프로필 이미지 변경</h3>
                <p className="text-xs text-gray-500 mb-6 dark:text-slate-400">나를 표현하는 멋진 이미지를 업로드해주세요.</p>
                
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center mb-6 text-gray-400 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 cursor-pointer transition-all group dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-blue-500">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-white group-hover:shadow-sm transition-colors dark:bg-slate-700 dark:group-hover:bg-slate-600">
                        <Upload className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">이미지 업로드하기</span>
                    <span className="text-[10px] mt-1 opacity-70">JPG, PNG, GIF (Max 2MB)</span>
                </div>
                
                <div className="flex gap-3">
                    <button 
                        onClick={() => setIsUploadModalOpen(false)}
                        className="flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                    >
                        취소
                    </button>
                    <button 
                        onClick={() => setIsUploadModalOpen(false)}
                        className="flex-1 py-3 text-xs font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;