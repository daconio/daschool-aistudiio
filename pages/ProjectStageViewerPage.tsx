import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, FileText, HelpCircle, ChevronRight, Menu, 
  Play, Pause, Volume2, Maximize, MoreVertical, 
  Lightbulb, Check, ChevronDown, MonitorPlay, Key, RotateCcw
} from 'lucide-react';

const ProjectStageViewerPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('설명');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex flex-col h-screen bg-white font-sans overflow-hidden dark:bg-slate-900 transition-colors duration-200">
            {/* Top Navigation Bar */}
            <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shrink-0 z-20 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex items-center space-x-4">
                     <button onClick={() => navigate('/project/first-step')} className="p-2 hover:bg-gray-100 rounded-full transition-colors dark:hover:bg-slate-800 text-gray-600 dark:text-slate-400">
                        <ArrowLeft className="w-5 h-5" />
                     </button>
                     <div className="flex items-center space-x-2 text-sm">
                        <span className="font-bold text-blue-600 dark:text-blue-400">DAKER</span>
                        <span className="text-gray-300 dark:text-slate-600">|</span>
                        <h1 className="font-bold text-gray-800 dark:text-white truncate max-w-md hidden md:block">코드없이 배우는 머신러닝 첫걸음: 하</h1>
                     </div>
                </div>
                <div className="flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-slate-400">
                    <button className="hover:text-blue-600 transition-colors dark:hover:text-white">커뮤니티</button>
                    <button className="hover:text-blue-600 transition-colors dark:hover:text-white">대회</button>
                    <button className="text-blue-600 font-bold dark:text-blue-400">학습</button>
                    <button className="hover:text-blue-600 transition-colors dark:hover:text-white">랭킹</button>
                    <button className="hover:text-blue-600 transition-colors dark:hover:text-white">더보기</button>
                    <div className="flex items-center space-x-2 border-l border-gray-200 pl-4 dark:border-slate-700">
                        <button className="p-1 hover:bg-gray-100 rounded dark:hover:bg-slate-800">
                            <MonitorPlay className="w-5 h-5" />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold dark:bg-indigo-900 dark:text-indigo-300">
                            D
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                
                {/* Left Panel: Content Viewer */}
                <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-900">
                    {/* Toolbar */}
                    <div className="h-10 flex items-center justify-between px-6 border-b border-gray-100 bg-white dark:bg-slate-900 dark:border-slate-800">
                        <div className="flex space-x-6 h-full">
                            <button 
                                className={`text-sm font-bold h-full border-b-2 px-1 transition-colors ${activeTab === '설명' ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 border-transparent hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200'}`}
                                onClick={() => setActiveTab('설명')}
                            >
                                설명
                            </button>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 font-medium dark:text-slate-400">
                            <button className="hover:text-blue-600 dark:hover:text-blue-400">가이드</button>
                            <span>|</span>
                            <button className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400">
                                <span>문의</span>
                                <HelpCircle className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-8 md:p-12 scroll-smooth">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white">인공지능 첫걸음: 상</h2>
                            
                            {/* Banner Image */}
                            <div className="w-full h-48 bg-orange-500 rounded-xl mb-8 flex items-center justify-end px-12 relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400 to-amber-500 opacity-90"></div>
                                {/* 3D Key Icon Representation */}
                                <div className="relative z-10 transform -rotate-12 hover:scale-105 transition-transform duration-500">
                                    <Key className="w-32 h-32 text-white/90 drop-shadow-xl" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-8 dark:text-white">
                                스테이지1. 인공지능(AI)의 과거, 현재, 그리고 미래를 만나다.
                            </h3>

                            {/* Character Bubble */}
                            <div className="flex items-start gap-4 mb-10 animate-fade-in-up">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-200 overflow-hidden dark:bg-yellow-900 dark:border-yellow-700">
                                        <span className="text-2xl">👦</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400">D-SCHOOL</span>
                                </div>
                                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-6 py-4 text-gray-800 font-medium text-sm relative shadow-sm dark:bg-slate-800 dark:text-slate-200">
                                    데이스쿨러 여러분! 스테이지1 출발! 🚀
                                </div>
                            </div>

                            {/* Learning Objectives Box (Mock Video Player Style) */}
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm dark:bg-slate-800 dark:border-slate-700">
                                <div className="bg-gray-50 p-3 flex justify-between items-center border-b border-gray-100 dark:bg-slate-700 dark:border-slate-600">
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-300">DACON</span>
                                </div>
                                <div className="p-8 md:p-10 bg-white dark:bg-slate-800">
                                    <h4 className="text-xl font-bold text-gray-900 mb-6 dark:text-white">학습 목표 (Learning Objectives)</h4>
                                    <p className="text-sm text-gray-500 mb-8 dark:text-slate-400">인공지능(AI)의 과거, 현재, 그리고 미래를 만나다</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold text-sm shrink-0 dark:bg-blue-900 dark:text-blue-300">1</div>
                                            <div>
                                                <div className="text-sm font-bold text-blue-600 mb-1 dark:text-blue-400">AI의 인식-학습-판단 능력과 작동 원리</div>
                                                <div className="text-xs text-gray-400 dark:text-slate-500">인공지능이 사람처럼 정보를 처리하고 문제를 해결하는 핵심 과정을 이해합니다</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-6 h-6 bg-gray-100 text-gray-600 rounded flex items-center justify-center font-bold text-sm shrink-0 dark:bg-slate-700 dark:text-slate-400">2</div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-800 mb-1 dark:text-slate-300">컴퓨터 과학 내 AI의 위치와 발전 역사</div>
                                                <div className="text-xs text-gray-400 dark:text-slate-500">AI가 컴퓨터 과학의 한 분야로서 어떻게 성장해왔는지 주요 사건을 중심으로 살펴봅니다</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-6 h-6 bg-gray-100 text-gray-600 rounded flex items-center justify-center font-bold text-sm shrink-0 dark:bg-slate-700 dark:text-slate-400">3</div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-800 mb-1 dark:text-slate-300">AI가 바꾸는 사회와 미래의 과제</div>
                                                <div className="text-xs text-gray-400 dark:text-slate-500">AI가 실제 생활과 사회에 미치는 영향, 그리고 앞으로 우리가 함께 고민해야 할 과제를 탐구합니다</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Fake Player Controls */}
                                <div className="bg-gray-800 text-white p-3 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <Pause className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                                        <RotateCcw className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                                        <div className="flex items-center space-x-2 group cursor-pointer">
                                            <Volume2 className="w-4 h-4 group-hover:text-blue-400" />
                                            <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
                                                <div className="w-2/3 h-full bg-white group-hover:bg-blue-400"></div>
                                            </div>
                                        </div>
                                        <span className="text-xs font-mono text-gray-300">-15:14</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-xs font-bold bg-white/20 px-1.5 py-0.5 rounded cursor-pointer hover:bg-white/30">1x</span>
                                        <Maximize className="w-4 h-4 cursor-pointer hover:text-blue-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Additional Content Spacer */}
                            <div className="h-24"></div>
                        </div>
                    </div>
                    
                    {/* Bottom Tabs/Action Bar for Content */}
                    <div className="h-10 border-t border-gray-200 bg-white flex items-center px-6 dark:bg-slate-900 dark:border-slate-800">
                        <button className="text-sm font-bold text-gray-600 mr-6 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white">풀이</button>
                        <button className="text-sm font-bold text-gray-600 mr-6 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white">댓글</button>
                        <div className="flex-1"></div>
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="p-1 hover:bg-gray-100 rounded dark:hover:bg-slate-800">
                            <ChevronDown className="w-4 h-4 transform rotate-180 text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Right Panel: Sidebar (Resizable conceptually, fixed for now) */}
                <div className={`w-[400px] border-l border-gray-200 bg-white flex flex-col shrink-0 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full hidden md:flex'} dark:bg-slate-900 dark:border-slate-800`}>
                    {/* Sidebar Header */}
                    <div className="h-12 flex items-center justify-between px-4 border-b border-gray-100 bg-white z-10 dark:bg-slate-900 dark:border-slate-800">
                        <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-100 rounded dark:hover:bg-slate-800">
                                <Menu className="w-4 h-4 text-gray-500 dark:text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded dark:hover:bg-slate-800">
                                <ArrowLeft className="w-4 h-4 text-gray-500 dark:text-slate-400" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded dark:hover:bg-slate-800">
                                <RotateCcw className="w-4 h-4 text-gray-500 dark:text-slate-400" />
                            </button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-600 flex items-center gap-1 dark:bg-slate-800 dark:text-slate-300">
                                <span>☀ Light</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Content (TOC) */}
                    <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-slate-900">
                        <div className="flex items-start gap-2 mb-6">
                            <div className="w-1 h-12 bg-blue-600 rounded-full dark:bg-blue-500"></div>
                            <h2 className="text-lg font-bold text-gray-900 leading-tight dark:text-white">스테이지1. 인공지능(AI)의 과거, 현재, 그리고 미래를 만나다.</h2>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3 text-gray-500 font-medium text-sm dark:text-slate-400">
                                <FileText className="w-4 h-4" />
                                <span>목차</span>
                            </div>
                            
                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="font-bold text-gray-800 mb-2 dark:text-slate-200">1. 인공지능(AI)이란?</div>
                                    <ul className="space-y-2 pl-4 text-gray-600 border-l border-gray-100 ml-1 dark:text-slate-400 dark:border-slate-700">
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">1.1. 인공지능(AI)란 무엇일까?</li>
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">1.2. 컴퓨터과학과 AI, 둘은 어떤 사이일까?</li>
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">1.3. 인공지능(AI)는 어떻게 성장했을까?</li>
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">1.4. 지금의 AI, 그리고 다가올 미래의 모습은?</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="font-bold text-gray-800 mb-2 dark:text-slate-200">2. AI의 능력과 한계</div>
                                    <ul className="space-y-2 pl-4 text-gray-600 border-l border-gray-100 ml-1 dark:text-slate-400 dark:border-slate-700">
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">2.1. AI는 뭐든 잘할까? 잘하는 세 가지를 알아보자!</li>
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">2.2. AI의 부족한 부분, 우리가 채워줄 수 있을까?</li>
                                        <li className="hover:text-blue-600 cursor-pointer transition-colors">2.3. A하나만 잘하는 "현재의 AI"와 모든 걸 잘하는 "미래의 AI"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2 text-yellow-600 font-bold text-sm dark:text-yellow-500">
                                <Lightbulb className="w-4 h-4" />
                                <span>이것만은 꼭 알아두세요!</span>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg text-xs text-gray-700 leading-relaxed border border-yellow-100 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-100">
                                인공지능은 만능이 아닙니다. 현재의 AI(Weak AI)는 특정 영역에서 뛰어난 성능을 보이지만, 인간처럼 모든 상황을 이해하고 판단하는 일반 인공지능(Strong AI)과는 거리가 있습니다.
                            </div>
                        </div>
                    </div>

                    {/* Bottom Pagination Bar */}
                    <div className="h-16 border-t border-gray-200 bg-white flex items-center justify-between px-4 shrink-0 dark:bg-slate-900 dark:border-slate-800">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors dark:hover:bg-slate-800">
                            <RotateCcw className="w-5 h-5" />
                        </button>
                        
                        <div className="flex items-center space-x-1">
                            {[1,2,3,4,5,6,7,8].map(num => (
                                <button 
                                    key={num}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                        num === 1 
                                        ? 'bg-blue-600 text-white shadow-md scale-110' 
                                        : 'text-blue-300 hover:bg-blue-50 dark:text-slate-600 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        <button className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                            채점하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStageViewerPage;