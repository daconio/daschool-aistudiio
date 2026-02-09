import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Trophy, Star, Zap, Target, Book, Lock, CheckCircle, ChevronRight, Flame, Map, PlayCircle, Shield, Gift } from 'lucide-react';

const radarData = [
  { subject: 'Python', A: 80, fullMark: 100 },
  { subject: 'ML', A: 45, fullMark: 100 },
  { subject: 'DL', A: 30, fullMark: 100 },
  { subject: 'Data Viz', A: 90, fullMark: 100 },
  { subject: 'Math', A: 60, fullMark: 100 },
];

const quests = [
    { id: 1, title: '연속 3일 학습하기', progress: 3, total: 3, reward: '50 XP', completed: true },
    { id: 2, title: '퀴즈 100점 맞기', progress: 0, total: 1, reward: '100 XP', completed: false },
    { id: 3, title: '새로운 강의 수강 신청', progress: 1, total: 1, reward: 'Badge', completed: true },
];

const learningPath = [
    { id: 1, title: 'Python 기초 문법', type: 'lecture', status: 'completed' },
    { id: 2, title: '데이터 분석 라이브러리 (Pandas)', type: 'lecture', status: 'completed' },
    { id: 3, title: '데이터 시각화 실습 (Matplotlib)', type: 'project', status: 'completed' },
    { id: 4, title: '머신러닝 개론', type: 'lecture', status: 'active' },
    { id: 5, title: 'Scikit-learn 실습', type: 'project', status: 'locked' },
    { id: 6, title: '타이타닉 생존자 예측', type: 'boss', status: 'locked' },
];

const MyLearningPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
        
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 mb-8 text-white shadow-lg relative overflow-hidden dark:from-slate-950 dark:to-slate-900">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-slate-700">
                        27
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            도비콘의 모험
                            <span className="bg-slate-700 text-xs px-2 py-1 rounded-full text-blue-300 border border-slate-600">Silver Tier</span>
                        </h1>
                        <div className="text-slate-400 text-sm mb-2">다음 레벨까지 2,100 XP 남음</div>
                        <div className="w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-[70%] h-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full mx-auto mb-1 text-orange-500">
                            <Flame className="w-6 h-6 fill-current" />
                        </div>
                        <div className="text-xl font-bold">12</div>
                        <div className="text-xs text-slate-400">Day Streak</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full mx-auto mb-1 text-yellow-400">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <div className="text-xl font-bold">5</div>
                        <div className="text-xs text-slate-400">Badges</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-full mx-auto mb-1 text-blue-400">
                            <Zap className="w-6 h-6 fill-current" />
                        </div>
                        <div className="text-xl font-bold">12k</div>
                        <div className="text-xs text-slate-400">Total XP</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Main Quest & Path */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Current Main Quest */}
                <div className="bg-white rounded-2xl p-1 shadow-sm border border-blue-100 relative overflow-hidden group hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-700">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1 dark:text-blue-400">
                                    <Target className="w-4 h-4" /> Current Main Quest
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">머신러닝 개론: 지도학습의 이해</h2>
                            </div>
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 dark:bg-slate-700 dark:text-blue-400">
                                <PlayCircle className="w-8 h-8 fill-current opacity-80" />
                            </div>
                        </div>
                        <p className="text-slate-600 mb-6 text-sm dark:text-slate-300">
                            지도학습의 핵심 개념인 회귀와 분류에 대해 학습하고, 간단한 예측 모델을 만들어봅니다.
                        </p>
                        
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                                <span>Chapter 4 / 12</span>
                                <span>45% Completed</span>
                            </div>
                            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-700">
                                <div className="bg-blue-600 w-[45%] h-full rounded-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => navigate('/project/first-step/stage/1')}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 dark:shadow-none"
                        >
                            <PlayCircle className="w-5 h-5" />
                            퀘스트 계속하기
                        </button>
                    </div>
                </div>

                {/* Adventure Map */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2 dark:text-white">
                        <Map className="w-5 h-5 text-emerald-500" /> Adventure Map
                    </h3>
                    
                    <div className="relative pl-4 space-y-0">
                        {/* Connecting Line */}
                        <div className="absolute top-4 bottom-10 left-[27px] w-0.5 bg-slate-200 dark:bg-slate-600"></div>

                        {learningPath.map((item, index) => (
                            <div key={item.id} className="relative flex items-center gap-4 py-4 group cursor-pointer hover:bg-slate-50 rounded-xl px-2 transition-colors dark:hover:bg-slate-700">
                                <div className={`w-6 h-6 rounded-full border-4 shrink-0 z-10 transition-all
                                    ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-100 dark:border-emerald-900' : 
                                      item.status === 'active' ? 'bg-blue-500 border-blue-200 scale-125 shadow-lg shadow-blue-200 dark:border-blue-900 dark:shadow-none' : 
                                      'bg-slate-200 border-slate-100 dark:bg-slate-600 dark:border-slate-700'}`}>
                                    {item.status === 'completed' && <CheckCircle className="w-full h-full text-white p-0.5" />}
                                    {item.status === 'locked' && <Lock className="w-full h-full text-slate-400 p-1 dark:text-slate-300" />}
                                </div>
                                <div className="flex-1">
                                    <div className={`text-sm font-bold ${item.status === 'locked' ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>
                                        {item.title}
                                    </div>
                                    <div className="text-xs text-slate-500 capitalize dark:text-slate-400">{item.type}</div>
                                </div>
                                {item.status === 'active' && (
                                    <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-300">
                                        IN PROGRESS
                                    </div>
                                )}
                                {item.type === 'boss' && item.status === 'locked' && (
                                    <div className="px-2 py-1 bg-red-100 text-red-500 text-[10px] font-bold rounded border border-red-200 dark:bg-red-900/30 dark:border-red-900/50 dark:text-red-400">
                                        BOSS STAGE
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Column: Stats & Daily */}
            <div className="space-y-6">
                
                {/* Stats Radar */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2 dark:text-white">
                        <Shield className="w-4 h-4 text-purple-500" /> Skill Stats
                    </h3>
                    <div className="h-64 -ml-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#e2e8f0" className="dark:stroke-slate-600" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="My Skills" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Daily Quests */}
                <div className="bg-gradient-to-br from-indigo-900 to-violet-800 rounded-2xl p-6 text-white shadow-md">
                    <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" /> Daily Quests
                    </h3>
                    <div className="space-y-4">
                        {quests.map(quest => (
                            <div key={quest.id} className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className={`text-xs font-bold ${quest.completed ? 'text-slate-300 line-through' : 'text-white'}`}>
                                        {quest.title}
                                    </span>
                                    {quest.completed ? (
                                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <span className="text-[10px] bg-yellow-400 text-black px-1.5 py-0.5 rounded font-bold">
                                            {quest.reward}
                                        </span>
                                    )}
                                </div>
                                <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${quest.completed ? 'bg-emerald-400' : 'bg-blue-400'}`} 
                                        style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Badges */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2 dark:text-white">
                        <Gift className="w-4 h-4 text-pink-500" /> Recent Rewards
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                        {[1,2,3,4].map((_, i) => (
                            <div key={i} className="aspect-square bg-slate-50 rounded-xl flex items-center justify-center text-2xl border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600">
                                {['🦁', '🎓', '🔥', '⚡'][i]}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default MyLearningPage;