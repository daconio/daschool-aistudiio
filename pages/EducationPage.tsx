import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner, SidebarContainer, MiniProfile } from '../components/Shared';
import { Course, RunningCourse, TrackCourse, LearningCourse, ProjectCourse, VideoCourse, RankerLecture } from '../types';
import { PlayCircle, Clock, BookOpen, Star, ChevronRight, ChevronDown, CheckCircle, Play, Trophy, Users, Award, Box, Zap, BarChart, Layers, MonitorPlay } from 'lucide-react';

// --- MOCK DATA ---

const mockVibeCoding: RunningCourse[] = [
    { id: 101, title: 'Google Antigravity Skills 제작하기', description: 'Google의 최신 Antigravity 기술을 활용한 스킬 제작 가이드', participants: 'New', gradient: 'from-slate-800 to-slate-900' },
    { id: 2, title: '생성형 AI 프롬프트 엔지니어링', description: '원하는 결과를 얻어내는 마법의 주문 작성법', participants: '2,103명', gradient: 'from-fuchsia-600 to-pink-600' },
    { id: 3, title: 'RAG 기반 챗봇 구축 마스터', description: '내 데이터로 똑똑한 AI 챗봇 만들기', participants: '980명', gradient: 'from-blue-600 to-cyan-600' },
    { id: 4, title: 'AI 에이전트와 오토노머스 시스템', description: '스스로 생각하고 행동하는 AI 에이전트 개발', participants: '850명', gradient: 'from-emerald-500 to-teal-600' },
];

const mockRunningCourses: RunningCourse[] = [
    { id: 1, title: '코딩 없이 시작하는 인공지능', description: '코드를 몰라도 AI를 이해하고 다뤄보는 첫걸음', participants: '6,342명', gradient: 'from-green-700 to-green-900' },
    { id: 2, title: '데이터 분석을 위한 파이썬 기본기', description: '데이터 다루기, 파이썬 문법부터 시각화까지', participants: '9,232명', gradient: 'from-amber-800 to-red-900' },
    { id: 3, title: '머신러닝 기초와 실전', description: '데이터로 배우는 예측과 학습의 원리', participants: '10,868명', gradient: 'from-teal-800 to-cyan-900' },
    { id: 4, title: '고급 머신러닝 기법과 응용', description: '성능 향상과 모델 고도화 실무', participants: '9,389명', gradient: 'from-emerald-700 to-teal-800' },
    { id: 5, title: 'LLM의 이해와 실전 활용', description: 'LLM의 구조를 이해하고 활용하기', participants: '5,891명', gradient: 'from-gray-700 to-gray-900' },
    { id: 6, title: '자연어 처리 기초와 응용', description: '인공지능이 언어를 이해하는 원리', participants: '4,551명', gradient: 'from-blue-700 to-indigo-900' },
    { id: 7, title: '컴퓨터 비전과 이미지 인식의 이해', description: '인공지능이 이미지를 이해하는 방식', participants: '7,144명', gradient: 'from-sky-700 to-blue-800' },
    { id: 8, title: '시계열 데이터 분석과 예측 모델링', description: '시간의 흐름 속 패턴을 발견하고 미래 예측하기', participants: '9,767명', gradient: 'from-indigo-800 to-purple-900' },
];

const mockTrackCourses: TrackCourse[] = [
    { id: 1, title: '(2026-S1) 파이썬 트랙', description: '경진대회 필수 파이썬 트랙', participants: '26명', season: 'Season 1', type: 'Py', color: 'bg-sky-400', tags: ['파이썬', '기초'] },
    { id: 2, title: '(2026-S1) 머신러닝 입문 트랙', description: '경진대회 중위권 목표 트랙', participants: '14명', season: 'Season 1', type: 'ML1', color: 'bg-blue-400', tags: ['머신러닝', '입문'] },
    { id: 3, title: '(2026-S1) 머신러닝 기초 트랙', description: '경진대회 중상위권 목표 트랙', participants: '6명', season: 'Season 1', type: 'ML2', color: 'bg-indigo-400', tags: ['머신러닝', '기초'] },
    { id: 4, title: '(2026-S1) 머신러닝 심화 트랙', description: '경진대회 상위권 목표 트랙', participants: '3명', season: 'Season 1', type: 'ML3', color: 'bg-blue-600', tags: ['머신러닝', '심화'] },
    { id: 5, title: '(2026-S1) 딥러닝 시계열 트랙', description: '딥러닝/시계열 예측 기본 역량 확보', participants: '6명', season: 'Season 1', type: 'DL1', color: 'bg-emerald-400', tags: ['딥러닝', '시계열'] },
    { id: 6, title: '(2026-S1) 딥러닝 이미지 분류 트랙', description: '딥러닝/이미지 분류 기본 역량 확보', participants: '8명', season: 'Season 1', type: 'DL2', color: 'bg-teal-600', tags: ['딥러닝', '이미지'] },
];

const mockLearningFirstStep: LearningCourse[] = [
    { id: 1, title: '프롬프트! 이것만 알아도 된다고?: 하', description: '프롬프트 엔지니어링 기초', subTitle: '프롬프트 첫걸음 : 하', participants: '629명', badge: 'LLM', gradient: 'from-blue-800 to-blue-900', tags: ['새학습', '9 Stages'] },
    { id: 2, title: '강화 학습 입문', description: '강화학습의 기초 개념', subTitle: '강화 학습 첫걸음', participants: '502명', badge: '강화 학습', gradient: 'from-orange-400 to-orange-500', tags: ['새학습', '9 Stages'] },
    { id: 3, title: 'n8n, 데이터분석 챗봇 프로젝트', description: '자동화 챗봇 만들기', subTitle: 'n8n, 데이터 분석 챗봇', participants: '361명', badge: 'n8n', gradient: 'from-indigo-800 to-purple-900', tags: ['새학습', '8 Stages'] },
    { id: 4, title: 'n8n 전문가처럼 시작하기', description: '자동화 워크플로우 마스터', subTitle: 'n8n 전문가처럼 시작하기', participants: '409명', badge: 'n8n', gradient: 'from-blue-700 to-blue-900', tags: ['새학습', '6 Stages'] },
    { id: 5, title: 'AI 에이전트 첫걸음', description: '대화형 인공지능 시작하기', subTitle: 'AI 에이전트 첫걸음', participants: '812명', badge: 'LLM', gradient: 'from-sky-700 to-blue-800', tags: ['새학습', '8 Stages'] },
    { id: 6, title: '머신러닝 첫걸음 : 상', description: '지도/비지도 학습의 이해', subTitle: '머신러닝 첫걸음 : 상', participants: '965명', badge: 'ML', gradient: 'from-orange-400 to-yellow-500', tags: ['새학습', '10 Stages'] },
    { id: 7, title: '파이썬 : 하', description: '데이터 예측 학습', subTitle: '머신러닝 첫걸음 : 하', participants: '569명', badge: 'ML', gradient: 'from-yellow-600 to-yellow-700', tags: ['새학습', '10 Stages'] },
    { id: 8, title: '파이토치 첫걸음 : 하', description: '딥러닝 파이토치 시작하기', subTitle: '파이토치 첫걸음 : 하', participants: '886명', badge: 'PyTorch', gradient: 'from-red-400 to-orange-400', tags: ['8 Stages'] },
    { id: 9, title: '인공지능 첫걸음: 상', description: '인공지능, 머신러닝, 딥러닝', subTitle: '첫걸음 프로젝트', participants: '1,033명', badge: 'AI', gradient: 'from-violet-600 to-fuchsia-600', tags: ['새학습', '6 시간', '8 Stages'] },
];

const mockLearningDeep: LearningCourse[] = [
    { id: 1, title: 'GraphRAG 실습해보기', description: 'RAG GraphRAG Graph', subTitle: 'GraphRAG 실습', participants: '131명', badge: 'LLM', gradient: 'from-yellow-700 to-yellow-900', tags: ['새학습', '5 Stages'] },
    { id: 2, title: 'LangGraph로 만드는 자기소개서', description: 'LangGraph 조건부라우팅', subTitle: 'LangGraph 자기소개서', participants: '142명', badge: 'LLM', gradient: 'from-orange-500 to-orange-700', tags: ['새학습', '6 Stages'] },
    { id: 3, title: 'AI 에이전트와 LangGraph의 기초 (1)', description: 'LangGraph ToolNode AI Agent', subTitle: 'LangGraph & Agent', participants: '447명', badge: 'LLM', gradient: 'from-orange-500 to-orange-700', tags: ['새학습', '11 Stages'] },
    { id: 4, title: 'RAG 활용하기 : 하', description: 'LLM LangChain RAG', subTitle: 'RAG 활용하기 : 하', participants: '215명', badge: 'LLM', gradient: 'from-orange-400 to-orange-600', tags: ['새학습', '9 Stages'] },
];

const mockProjectIntro: ProjectCourse[] = [
    { id: 1, title: '따라하면서 배우는 시계열 예측 프로젝트 3', participants: '110명', imageColor: 'bg-slate-400', tags: ['입문', '정형', '시계열'], stages: '5 Stages', isCertified: true },
    { id: 2, title: '따라하면서 배우는 시계열 예측 프로젝트 1', participants: '396명', imageColor: 'bg-teal-200', tags: ['입문', '정형', '교통', '시계열'], stages: '6 Stages', isCertified: true },
    { id: 3, title: '따라하면서 배우는 시계열 예측 프로젝트 2', participants: '107명', imageColor: 'bg-sky-200', tags: ['입문', '정형', '교통'], stages: '8 Stages', isCertified: true },
    { id: 4, title: '따라하면서 배우는 머신러닝 프로젝트', participants: '738명', imageColor: 'bg-blue-300', tags: ['입문', '정형', '의료'], stages: '15 Stages', isCertified: true },
    { id: 5, title: '영화 관객 수 예측 프로젝트 🎥', participants: '3,200명', imageColor: 'bg-indigo-300', tags: ['입문', '정형', '회귀', '산업'], stages: '8 Stages', isCertified: true },
    { id: 6, title: '태양광 발전량 예측 프로젝트 ☀️', participants: '2,576명', imageColor: 'bg-sky-300', tags: ['입문', '정형', '회귀', '산업'], stages: '6 Stages', isCertified: true },
];

const mockProjectBeginner: ProjectCourse[] = [
    { id: 1, title: 'KPI 도출 비즈니스 전략 아이디어 경진...', participants: '266명', imageColor: 'bg-blue-800', tags: ['KPI', '아이디어', '비즈니스'], stages: '5 Stages', isCertified: true },
    { id: 2, title: '재정 데이터 시각화 프로젝트', participants: '617명', imageColor: 'bg-teal-500', tags: ['시각화', 'matplotlib'], stages: '6 Stages', isCertified: true },
    { id: 3, title: '패션 의류 이미지 분류 프로젝트 2', participants: '222명', imageColor: 'bg-blue-400', tags: ['CNN', '학습/검증'], stages: '3 Stages', isCertified: true },
    { id: 4, title: '손대화 이미지 분류하기', participants: '276명', imageColor: 'bg-pink-300', tags: ['CNN', 'AlexNet'], stages: '4 Stages', isCertified: true },
    { id: 5, title: '아파트 경매가격 예측 프로젝트 🏢', participants: '1,195명', imageColor: 'bg-blue-500', tags: ['정형', '회귀', '초급'], stages: '7 Stages', isCertified: true },
    { id: 6, title: '보스턴 집값 예측 프로젝트 🏠', participants: '1,511명', imageColor: 'bg-blue-600', tags: ['정형', '회귀', '초급'], stages: '6 Stages', isCertified: true },
];

const mockVideoCourses: VideoCourse[] = [
    { id: 1, title: '[따라코딩] 인구 소득 예측 프로젝트 중급 3', participants: '136명', imageColor: 'bg-slate-500', episode: 3 },
    { id: 2, title: '[따라코딩] 인구 소득 예측 프로젝트 중급 2', participants: '44명', imageColor: 'bg-slate-500', episode: 2 },
    { id: 3, title: '[따라코딩] 인구 소득 예측 프로젝트 중급 1', participants: '148명', imageColor: 'bg-slate-500', episode: 1 },
];

const mockHackathons: ProjectCourse[] = [
    { id: 1, title: '데이콘 Basic 고객 지원 등급 분류', participants: '581명', imageColor: 'bg-orange-300', tags: ['데이콘 해커톤', '알고리즘', '입문'], isCertified: false, url: 'https://dacon.io/hackathon' },
    { id: 2, title: '데이콘 Basic 스트레스 지수 예측', participants: '621명', imageColor: 'bg-stone-600', tags: ['데이콘 해커톤', '알고리즘', '입문'], isCertified: false, url: 'https://dacon.io/hackathon' },
    { id: 3, title: '사이버 공격 유형 예측 해커톤', participants: '362명', imageColor: 'bg-slate-800', tags: ['데이콘 해커톤', '알고리즘', '입문'], isCertified: false, url: 'https://dacon.io/hackathon' },
    { id: 4, title: '이미지 분류 해커톤: 데이터 속 아이콘...', participants: '746명', imageColor: 'bg-gray-700', tags: ['데이콘 해커톤', '알고리즘', '입문'], isCertified: false, url: 'https://dacon.io/hackathon' },
    { id: 5, title: '채무 불이행 여부 예측 해커톤', participants: '1,072명', imageColor: 'bg-blue-200', tags: ['데이콘 해커톤', '알고리즘', '정형'], isCertified: true, url: 'https://dacon.io/hackathon' },
    { id: 6, title: '전기차 가격 예측 해커톤: 데이터로 EV...', participants: '1,311명', imageColor: 'bg-teal-700', tags: ['데이콘 해커톤', '알고리즘', '정형'], isCertified: false, url: 'https://dacon.io/hackathon' },
];

const mockRankerLectures: RankerLecture[] = [
    { id: 1, title: '[랭커특강] goorm 님 AI 그림 생성, 어렵지 않아요!', thumbnailText: 'AI 그림 생성, 어렵지 않아요! 누구나 따라하는 ComfyUI 사용법', instructor: '김성국 님', gradient: 'from-cyan-400 to-teal-500', tags: ['새강의', '1 Sessions'], avatarId: 1 },
    { id: 2, title: '[랭커특강] 공주대학교예산캠퍼스지방... 님', thumbnailText: 'ML 성능을 위한 자동화 라이브러리를 배워보자!', instructor: '공주대학교예산캠퍼스지방방 님', gradient: 'from-purple-500 to-indigo-600', tags: ['새강의', '1 Sessions'], avatarId: 2 },
    { id: 3, title: '[랭커특강] ji.n._.n.ii 님 머신러닝 시작...', thumbnailText: '머신러닝 시작하고 싶은데 뭐부터 해야 할지 모르겠다면?', instructor: 'ji.n._.n.ii 님', gradient: 'from-blue-400 to-blue-600', tags: ['1 Sessions'], avatarId: 3 },
    { id: 4, title: '[랭커특강] ai_ann 님 수상으로 가는 지름길', thumbnailText: '수상으로 가는 지름길, Feature Engineering', instructor: 'ai_ann 님', gradient: 'from-orange-400 to-red-400', tags: ['1 Sessions'], avatarId: 4 },
    { id: 5, title: '[랭커특강] 닉네임이다. RAG는 실제 AI 서비스...', thumbnailText: 'RAG는 실제 AI 서비스에 어떻게 적용될까?', instructor: '닉네임이다. 님', gradient: 'from-orange-300 to-orange-500', tags: ['1 Sessions'], avatarId: 5 },
    { id: 6, title: '[랭커특강] 이힘찬 님 왜 AI는 너 말만 듣지?', thumbnailText: '왜 AI는 너 말만 듣지? 그 비밀은 프롬프트 엔지니어링!', instructor: '이힘찬 님', gradient: 'from-blue-700 to-blue-900', tags: ['1 Sessions'], avatarId: 6 },
    { id: 7, title: '[랭커특강] bullbear 님 RAG의 핵심인 검색...', thumbnailText: 'RAG의 핵심인 검색 기술에 대해 알려드려요!', instructor: 'bullbear 님', gradient: 'from-blue-300 to-blue-500', tags: ['1 Sessions'], avatarId: 7 },
    { id: 8, title: '[랭커특강] 이힘찬 님 왜 모든 AI 개발자가...', thumbnailText: '왜 모든 AI 개발자가 RAG를 찾을까?', instructor: '이힘찬 님', gradient: 'from-green-400 to-emerald-500', tags: ['1 Sessions'], avatarId: 6 },
    { id: 9, title: '[랭커특강] 닉네임 님 LLM 활용법과 실전...', thumbnailText: 'LLM 활용법과 실전 적용 방법을 알려드려요!', instructor: '닉네임 님', gradient: 'from-purple-400 to-purple-600', tags: ['1 Sessions'], avatarId: 8 },
    { id: 10, title: '[랭커특강] KuriosKat 님 막막한 캡스톤...', thumbnailText: '막막한 캡스톤 디자인!! AI와 함께한다면?', instructor: 'KuriosKat 님', gradient: 'from-red-400 to-pink-500', tags: ['1 Sessions'], avatarId: 9 },
    { id: 11, title: '[랭커특강] 박솜 님 AI 경진대회, 참가...', thumbnailText: 'AI 경진대회, 참가하면 뭐가 좋아요?', instructor: '박솜 님', gradient: 'from-blue-400 to-indigo-500', tags: ['1 Sessions'], avatarId: 10 },
    { id: 12, title: '[랭커특강] All_day 님 AI 비전공자도...', thumbnailText: 'AI 비전공자도 우승하는 기획법, 알려드려요!', instructor: 'All_day 님', gradient: 'from-orange-400 to-amber-500', tags: ['1 Sessions'], avatarId: 11 },
    { id: 13, title: '[랭커특강] hector21 님 함께 경진대회...', thumbnailText: '함께 경진대회 상위권자의 노하우를 학습해요!', instructor: 'hector21 님', gradient: 'from-green-400 to-lime-500', tags: ['1 Sessions'], avatarId: 12 },
    { id: 14, title: '[랭커특강] co1dtype 님 쌩초보를 위한...', thumbnailText: '쌩초보를 위한 시계열 데이터 뽀개기!', instructor: 'co1dtype 님', gradient: 'from-sky-500 to-cyan-600', tags: ['1 Sessions'], avatarId: 13 },
    { id: 15, title: '[랭커특강] 정새 님 비전 전문가의 문제...', thumbnailText: '비전 전문가의 문제 해결 방식을 배워보세요!', instructor: '정새 님', gradient: 'from-purple-400 to-fuchsia-500', tags: ['1 Sessions'], avatarId: 14 },
    { id: 16, title: '[랭커특강] 고세구 님 대회를 통해 성장...', thumbnailText: '대회를 통해 성장하는 방법을 배워보세요!', instructor: '고세구 님', gradient: 'from-red-300 to-pink-400', tags: ['1 Sessions'], avatarId: 15 },
];


// --- COMPONENTS ---

const TrackCard: React.FC<{ course: TrackCourse }> = ({ course }) => (
    <div className="group cursor-pointer">
        <div className={`h-40 ${course.color} rounded-xl relative overflow-hidden flex items-center justify-between p-6 shadow-sm group-hover:shadow-md transition-all`}>
             <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                 {course.participants} 참여중
             </div>
             
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 flex items-center justify-center text-9xl font-black text-white pointer-events-none">
                {course.type.substring(0,2)}
             </div>

             <div className="z-10 text-white flex flex-col items-center w-full">
                 <div className="text-sm font-bold opacity-80 mb-2">{course.season}</div>
                 <Zap className="w-12 h-12 mb-2 fill-current" />
                 <div className="text-3xl font-black tracking-tighter">{course.type}</div>
             </div>
        </div>
        <div className="mt-3">
             <h4 className="font-bold text-gray-900 text-sm mb-1 dark:text-white">{course.title}</h4>
             <div className="flex flex-wrap gap-1">
                 {course.description && (
                     <span className="bg-blue-50 text-blue-600 text-[10px] px-1.5 py-0.5 rounded dark:bg-blue-900/30 dark:text-blue-300">
                         {course.description}
                     </span>
                 )}
             </div>
        </div>
    </div>
);

const LearningCard: React.FC<{ course: LearningCourse }> = ({ course }) => {
    // Check by ID for the special course
    const isSpecial = course.id === 9; // '인공지능 첫걸음: 상' card

    const content = (
        <div className={`h-40 bg-gradient-to-br ${course.gradient} rounded-xl p-4 relative flex flex-col shadow-sm group-hover:shadow-md transition-all`}>
            <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                {course.participants} 참여중
            </div>
            
            <div className="mt-auto">
                 <div className="border border-white/30 rounded inline-block px-2 py-0.5 text-white text-xs font-bold mb-2">
                     {course.badge}
                 </div>
                 <h3 className="text-white font-bold text-lg leading-tight">{course.subTitle}</h3>
            </div>
        </div>
    );

    if (isSpecial) {
        return (
            <Link to="/project/first-step" className="group cursor-pointer block">
                {content}
                <div className="mt-3">
                     <h4 className="font-bold text-gray-900 text-sm mb-1 dark:text-white">{course.title}</h4>
                     <div className="text-xs text-gray-500 mb-2 dark:text-slate-400">{course.description}</div>
                     <div className="flex gap-1">
                         {course.tags.map((tag, i) => (
                             <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded ${tag === '새학습' ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-slate-400'}`}>
                                 {tag}
                             </span>
                         ))}
                     </div>
                </div>
            </Link>
        );
    }

    return (
        <div className="group cursor-pointer">
            {content}
            <div className="mt-3">
                 <h4 className="font-bold text-gray-900 text-sm mb-1 dark:text-white">{course.title}</h4>
                 <div className="text-xs text-gray-500 mb-2 dark:text-slate-400">{course.description}</div>
                 <div className="flex gap-1">
                     {course.tags.map((tag, i) => (
                         <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded ${tag === '새학습' ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-slate-400'}`}>
                             {tag}
                         </span>
                     ))}
                 </div>
            </div>
        </div>
    );
};

const ProjectCard: React.FC<{ course: ProjectCourse }> = ({ course }) => {
    const content = (
        <>
            <div className={`h-40 ${course.imageColor} rounded-xl relative p-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all overflow-hidden`}>
                <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm z-10">
                    {course.participants} 참여중
                </div>
                {course.isCertified && (
                    <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                        인증서
                    </div>
                )}
                
                {/* Mock 3D Icon Representation */}
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                    {course.tags.includes('회귀') ? <BarChart className="w-12 h-12 text-white opacity-80" /> : 
                    course.tags.includes('시계열') ? <Clock className="w-12 h-12 text-white opacity-80" /> :
                    course.tags.includes('데이콘 해커톤') ? <Trophy className="w-12 h-12 text-white opacity-80" /> :
                    <Box className="w-12 h-12 text-white opacity-80" />}
                </div>
            </div>
            <div className="mt-3">
                <h4 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 min-h-[40px] dark:text-white">{course.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                    {course.tags.slice(0,4).map((tag, i) => (
                        <span key={i} className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-400">
                            {tag}
                        </span>
                    ))}
                </div>
                {course.stages && (
                    <div className="mt-2 flex gap-1">
                        <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.5 rounded">새학습</span>
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-400">{course.stages}</span>
                    </div>
                )}
            </div>
        </>
    );

    if (course.url) {
        return (
            <a href={course.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                {content}
            </a>
        );
    }

    return (
        <div className="group cursor-pointer">
            {content}
        </div>
    );
};

const VideoCard: React.FC<{ course: VideoCourse }> = ({ course }) => (
    <div className="group cursor-pointer">
         <div className={`h-40 ${course.imageColor} rounded-xl relative flex items-center justify-center shadow-sm group-hover:shadow-md transition-all`}>
             <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm z-10">
                {course.participants} 참여중
            </div>
             <Play className="w-12 h-12 text-white fill-current opacity-80 group-hover:scale-110 transition-transform z-10" />
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
             </div>
             <div className="absolute bottom-4 left-4 border border-white text-white text-lg font-bold px-2 py-0.5 rounded">
                 따라코딩
             </div>
             <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded flex items-center justify-center text-slate-800 font-bold">
                 {course.episode}
             </div>
         </div>
         <div className="mt-3">
             <h4 className="font-bold text-gray-900 text-sm mb-2 dark:text-white">{course.title}</h4>
             <div className="flex gap-1">
                 <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-400">따라하기</span>
                 <span className="bg-red-400 text-white text-[10px] px-1.5 py-0.5 rounded">새학습</span>
                 <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-400">1 Stages</span>
             </div>
         </div>
    </div>
);

const RunningCourseCard: React.FC<{ course: RunningCourse }> = ({ course }) => {
    // Check by ID for the special course
    const isSpecial = course.id === 101;
    const content = (
        <div className={`h-40 bg-gradient-to-br ${course.gradient} rounded-xl p-4 relative flex flex-col justify-between shadow-sm group-hover:shadow-md transition-all`}>
            <div>
                <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded mb-2">
                    {course.participants} {course.participants === 'New' ? '러닝코스' : '참여중'}
                </span>
                {!isSpecial && <div className="text-white/60 text-[10px] font-medium bg-white/10 inline-block px-1.5 py-0.5 rounded ml-2">러닝코스</div>}
            </div>
            <h3 className="text-white font-bold text-lg leading-snug whitespace-pre-line">{course.title.replace(' ', '\n')}</h3>
        </div>
    );
    
    if (isSpecial) {
        return (
            <Link to="/course/antigravity" className="group cursor-pointer block">
                {content}
                <div className="mt-3 px-1">
                    <h4 className="font-bold text-gray-900 text-sm mb-1 dark:text-white">{course.title}</h4>
                    <div className="inline-block bg-blue-50 text-blue-600 text-[11px] font-medium px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                        {course.description}
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <div className="group cursor-pointer">
            {content}
            <div className="mt-3 px-1">
                <h4 className="font-bold text-gray-900 text-sm mb-1 dark:text-white">{course.title}</h4>
                <div className="inline-block bg-blue-50 text-blue-600 text-[11px] font-medium px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                    {course.description}
                </div>
            </div>
        </div>
    );
};

const RankerLectureCard: React.FC<{ course: RankerLecture }> = ({ course }) => (
    <div className="group cursor-pointer">
        <div className={`h-40 bg-gradient-to-br ${course.gradient} rounded-xl p-4 relative flex flex-col justify-between shadow-sm group-hover:shadow-md transition-all overflow-hidden`}>
            <div>
                <span className="inline-block text-white/80 font-bold text-[10px] mb-1">
                   랭커특강
                </span>
                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">{course.thumbnailText}</h3>
            </div>
            
            <div className="flex items-end justify-between mt-auto">
                 <div className="text-white text-xs font-medium truncate max-w-[60%]">
                     {course.instructor}
                 </div>
                 {/* Avatar Placeholder */}
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-end justify-center overflow-hidden border border-white/30">
                     {/* Random Avatar Logic for visual variety */}
                     {course.avatarId && course.avatarId % 3 === 0 ? (
                         <div className="w-8 h-8 bg-yellow-300 rounded-full mb-[-5px]"></div>
                     ) : course.avatarId && course.avatarId % 3 === 1 ? (
                         <div className="w-8 h-8 bg-blue-300 rounded-full mb-[-5px]"></div>
                     ) : (
                         <div className="w-8 h-8 bg-pink-300 rounded-full mb-[-5px]"></div>
                     )}
                 </div>
            </div>
        </div>
        <div className="mt-3">
             <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1 dark:text-white">{course.title}</h4>
             <div className="text-xs text-gray-400 mb-2 dark:text-slate-500">데이스쿨</div>
             <div className="flex gap-1">
                 {course.tags.map((tag, i) => (
                     <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded ${tag === '새강의' ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-slate-400'}`}>
                         {tag}
                     </span>
                 ))}
             </div>
        </div>
    </div>
);

// --- MAIN COMPONENT ---

const EducationPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('바이브 코딩');
    const [expandedGroups, setExpandedGroups] = useState<{[key: string]: boolean}>({
        '학습': true,
        '프로젝트': true,
        '영상': true
    });

    const toggleGroup = (group: string) => {
        setExpandedGroups(prev => ({...prev, [group]: !prev[group]}));
    };

    const sidebarItems = [
        { type: 'item', name: '바이브 코딩', count: 4 },
        { type: 'item', name: '러닝코스', count: 8 },
        { type: 'item', name: '트랙 학습', count: 6 },
        { 
            type: 'group', 
            name: '학습', 
            items: [
                { name: '첫걸음 학습', count: 26 },
                { name: '딥러닝 학습', count: 20 },
                { name: '중점 학습', count: 22 }
            ]
        },
        { 
            type: 'group', 
            name: '프로젝트', 
            items: [
                { name: '프로젝트 입문', count: 10 },
                { name: '프로젝트 초급', count: 17 },
                { name: '프로젝트 중급', count: 6 }
            ]
        },
        { 
            type: 'group', 
            name: '영상', 
            items: [
                { name: '따라코딩', count: 3 },
                { name: '랭커특강', count: 34 }
            ]
        },
        { type: 'item', name: '해커톤', count: 57 },
    ];

    const renderContent = () => {
        switch (activeCategory) {
            case '바이브 코딩':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                바이브 코딩 <span className="text-gray-500 font-normal text-base dark:text-slate-400">4개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">리듬타며 즐겁게 배우는 코딩의 새로운 흐름</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockVibeCoding.map(course => <RunningCourseCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '러닝코스':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                러닝코스 <span className="text-gray-500 font-normal text-base dark:text-slate-400">8개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">데이스쿨이 제안하는 맞춤형 학습 코스</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockRunningCourses.map(course => <RunningCourseCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '트랙 학습':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                트랙 학습 <span className="text-gray-500 font-normal text-base dark:text-slate-400">6개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">이론과 해커톤을 통합한 실력 검증형 AI 전문화 과정</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockTrackCourses.map(course => <TrackCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '첫걸음 학습':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                첫걸음 학습 🦶 <span className="text-gray-500 font-normal text-base dark:text-slate-400">26개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">인공지능 세계로의 첫발을 내딛는 입문 과정</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockLearningFirstStep.map(course => <LearningCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '딥러닝 학습':
                return (
                     <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                딥러닝 학습 🧠 <span className="text-gray-500 font-normal text-base dark:text-slate-400">20개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">딥러닝 모델의 원리와 구현을 익히는 실습 중심 과정</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockLearningDeep.map(course => <LearningCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '중점 학습':
                 return (
                     <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                중점학습 📚 <span className="text-gray-500 font-normal text-base dark:text-slate-400">22개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">AI 핵심 역량을 체계적으로 강화하는 심화 과정</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Reusing beginner projects as placeholders for demonstration */}
                            {mockProjectBeginner.map(course => <ProjectCard key={course.id} course={{...course, isCertified: false}} />)}
                        </div>
                    </div>
                );
            case '프로젝트 입문':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                프로젝트 입문 <span className="text-gray-500 font-normal text-base dark:text-slate-400">10개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">실무형 AI 프로젝트의 기초를 다지는 첫 단계 여정</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockProjectIntro.map(course => <ProjectCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            case '프로젝트 초급':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                프로젝트 초급 <span className="text-gray-500 font-normal text-base dark:text-slate-400">17개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">다양한 문제 해결 방법론을 습득하는 응용 단계</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockProjectBeginner.map(course => <ProjectCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
             case '따라코딩':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                따라코딩 <span className="text-gray-500 font-normal text-base dark:text-slate-400">3개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">실전 코딩의 시작! 보는 것을 넘어, 직접 따라하며 배우는 순간</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockVideoCourses.map(course => <VideoCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
             case '랭커특강':
                return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                랭커특강 동영상 🎥 <span className="text-gray-500 font-normal text-base dark:text-slate-400">34개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">입문부터 리더보드 상위권에 진입하기 위한 노하우</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockRankerLectures.map(course => <RankerLectureCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
             case '해커톤':
                 return (
                    <div className="animate-fade-in">
                        <div className="mb-6">
                             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 dark:text-white">
                                해커톤 📝 <span className="text-gray-500 font-normal text-base dark:text-slate-400">57개</span>
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 dark:text-slate-400">랭커로 성장하는 입문 대회!</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockHackathons.map(course => <ProjectCard key={course.id} course={course} />)}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                        <BookOpen className="w-12 h-12 mb-4 opacity-20" />
                        <p>준비 중인 카테고리입니다.</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <SidebarContainer title="교육 카테고리">
                <div className="space-y-1">
                    {sidebarItems.map((item) => {
                        if (item.type === 'group') {
                            const isExpanded = expandedGroups[item.name];
                            return (
                                <div key={item.name} className="space-y-1">
                                    <button 
                                        onClick={() => toggleGroup(item.name)}
                                        className="w-full flex justify-between items-center px-3 py-2 text-gray-800 font-bold hover:bg-gray-50 rounded-lg text-sm dark:text-slate-200 dark:hover:bg-slate-700"
                                    >
                                        <div className="flex items-center space-x-2">
                                            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                            <span>{item.name}</span>
                                        </div>
                                    </button>
                                    {isExpanded && item.items?.map(subItem => (
                                        <button 
                                            key={subItem.name}
                                            onClick={() => setActiveCategory(subItem.name)}
                                            className={`w-full flex justify-between items-center pl-8 pr-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                activeCategory === subItem.name 
                                                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                                                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700'
                                            }`}
                                        >
                                            <span>{subItem.name}</span>
                                            <span className={`${activeCategory === subItem.name ? 'bg-white shadow-sm dark:bg-slate-800' : 'bg-gray-100 dark:bg-slate-700'} px-2 py-0.5 rounded text-xs`}>
                                                {subItem.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            );
                        } else {
                            return (
                                <button 
                                    key={item.name}
                                    onClick={() => setActiveCategory(item.name)}
                                    className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        activeCategory === item.name 
                                            ? 'bg-blue-50 text-blue-600 font-bold dark:bg-blue-900/30 dark:text-blue-400' 
                                            : 'text-gray-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-700'
                                    }`}
                                >
                                    <span>{item.name}</span>
                                    <span className={`${activeCategory === item.name ? 'bg-white shadow-sm dark:bg-slate-800' : 'bg-gray-100 dark:bg-slate-700'} px-2 py-0.5 rounded text-xs`}>
                                        {item.count}
                                    </span>
                                </button>
                            );
                        }
                    })}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700">
                     <h4 className="text-xs font-bold text-gray-800 mb-3 dark:text-slate-300">나의 학습 현황</h4>
                     <Link to="/my-learning" className="block bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group dark:bg-slate-800 dark:border-slate-600">
                         <div className="flex items-center space-x-2 mb-2">
                             <BookOpen className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                             <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">진행중인 학습</span>
                         </div>
                         <div className="text-[10px] text-gray-400 mb-1 dark:text-slate-500">최근 학습: 데이터 분석 실전...</div>
                         <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden dark:bg-slate-700">
                             <div className="bg-blue-500 w-[45%] h-full"></div>
                         </div>
                     </Link>
                </div>
                <MiniProfile />
            </SidebarContainer>

            <div className="flex-1">
                <PageBanner />
                {renderContent()}
            </div>
        </div>
    );
};

export default EducationPage;