import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bug, Clock, Globe, FileText, Folder, Terminal, AlignLeft, UserCircle, Copy, Code, Link as LinkIcon, Play, Check, Trophy, Download } from 'lucide-react';

const CourseViewerPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const steps = [
    "소개",
    "왜 스킬인가?",
    "에이전트 스킬과 Antigravity",
    "스킬 만들기",
    "스킬 제작하기",
    "축하합니다"
  ];

  useEffect(() => {
    // Scroll to top when step changes
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  }, [activeStep]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
      if (activeStep > 0) setActiveStep(activeStep - 1);
      else navigate('/education');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 text-white h-14 flex items-center px-6 shadow-md z-50 sticky top-0 dark:bg-slate-950">
        <button onClick={() => navigate('/education')} className="mr-4 hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-medium tracking-tight">Google Antigravity Skills 제작하기</h1>
        <div className="ml-auto flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 opacity-80">
                <Clock className="w-4 h-4" />
                <span>67분 남음</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4" />
                <span>한국어</span>
            </div>
             {/* User Avatar Placeholder */}
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold border-2 border-slate-700">
                DB
            </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar (Steps) */}
        <aside className="w-64 bg-slate-50 border-r border-gray-200 overflow-y-auto hidden md:block py-6 px-4 shrink-0 dark:bg-slate-900 dark:border-slate-800">
            <div className="space-y-1">
                {steps.map((step, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium flex items-center space-x-3 transition-colors ${
                            activeStep === index 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                            : 'text-gray-600 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                    >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                            activeStep === index ? 'bg-blue-600 text-white' : 'bg-gray-300 text-white dark:bg-slate-700'
                        }`}>
                            {index + 1}
                        </span>
                        <span className="truncate">{step}</span>
                    </button>
                ))}
            </div>
        </aside>

        {/* Main Content Area */}
        <main ref={mainContentRef} className="flex-1 overflow-y-auto p-6 md:p-12 max-w-5xl mx-auto w-full scroll-smooth dark:bg-slate-900">
            {activeStep === 0 && (
                // Step 1: Introduction
                <div className="animate-fade-in space-y-8">
                    {/* About this codelab Box */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-2xl font-normal text-gray-800 mb-6 dark:text-white">이 코드랩에 대하여</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
                                <AlignLeft className="w-5 h-5 text-gray-500 dark:text-slate-500" />
                                <span className="text-sm font-medium">마지막 업데이트: 2026년 1월 21일</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
                                <UserCircle className="w-5 h-5 text-gray-500 dark:text-slate-500" />
                                <span className="text-sm font-medium">작성자: Romin Irani</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">1. 소개 (Introduction)</h2>

                    <div className="space-y-5 text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        <p>
                            Google Antigravity는 Google의 에이전트형 IDE(Agentic IDE)입니다. 이 코드랩에서는 Antigravity를 사용하여 <strong>에이전트 스킬(Agent Skills)</strong>을 구축해 봅니다.
                        </p>
                        <p>
                            에이전트 스킬은 전문 지식과 워크플로우로 AI 에이전트의 기능을 확장하기 위한 가볍고 개방적인 포맷입니다. 여러분은 에이전트 스킬이 무엇인지, 그 이점은 무엇이며 어떻게 구성되는지 배우게 됩니다. 또한 Git 포맷터, 템플릿 생성기, 도구 코드 스캐폴딩 등 다양한 에이전트 스킬을 직접 제작하여 Antigravity 내에서 사용해 볼 수 있습니다.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 dark:text-white">사전 조건 (Prerequisites):</h3>
                        <ul className="list-disc list-outside ml-5 space-y-3 text-gray-700 dark:text-slate-300">
                            <li>Google Antigravity가 설치 및 구성되어 있어야 합니다.</li>
                            <li>
                                Google Antigravity에 대한 기본 이해가 필요합니다. <span className="text-blue-600 font-bold hover:underline cursor-pointer dark:text-blue-400">Google Antigravity 시작하기</span> 코드랩을 완료하는 것을 권장합니다.
                            </li>
                        </ul>
                    </div>

                    {/* Google Cloud Credits Box */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8 dark:bg-green-900/20 dark:border-green-800">
                        <h4 className="font-bold text-gray-900 mb-2 dark:text-green-100">Google Cloud 크레딧</h4>
                        <p className="text-sm text-gray-800 leading-relaxed dark:text-green-200">
                            Google Cloud 프로젝트와 함께 Antigravity를 원활하게 사용할 수 있도록, <a href="#" className="text-blue-600 underline font-medium hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">이 링크</a>를 통해 무료 Google Cloud 크레딧을 받으세요. <a href="#" className="text-blue-600 underline font-medium hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">여기</a>의 지침에 따라 크레딧을 활성화하고 새로운 프로젝트를 생성할 수 있습니다.
                        </p>
                    </div>
                </div>
            )}

            {activeStep === 1 && (
                // Step 2: Why Skills
                <div className="animate-fade-in space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">2. 왜 스킬인가?</h2>
                    
                    <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        현대의 AI 에이전트는 단순한 청취자에서 로컬 파일 시스템 및 외부 도구(MCP 서버 등)와 통합하여 복잡한 추론을 수행하는 존재로 발전했습니다. 그러나 에이전트에 전체 코드베이스와 수백 개의 도구를 무차별적으로 로드하면 <strong>컨텍스트 포화(Context Saturation)</strong>와 "도구 비대화(Tool Bloat)"가 발생합니다. 컨텍스트 윈도우가 아무리 크더라도, 사용하지 않는 40~50k 토큰 분량의 도구를 활성 메모리에 쏟아붓는 것은 높은 지연 시간과 비용 낭비를 초래하며, 모델이 관련 없는 데이터로 인해 혼란스러워하는 "컨텍스트 부패(context rot)"를 유발합니다.
                    </p>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 dark:text-white">해결책: 에이전트 스킬 (Agent Skills)</h3>
                        <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                            이 문제를 해결하기 위해 Anthropic은 <strong>에이전트 스킬</strong>을 도입하여 아키텍처를 모놀리식 컨텍스트 로딩에서 <strong>점진적 공개(Progressive Disclosure)</strong> 방식으로 전환했습니다. 세션 시작 시 데이터베이스 마이그레이션이나 보안 감사와 같은 모든 특정 워크플로우를 모델이 "암기"하도록 강요하는 대신, 이러한 기능을 모듈식으로 검색 가능한 단위로 패키징합니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 dark:text-white">작동 방식</h3>
                        <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                            모델은 처음에 경량화된 메타데이터 "메뉴"에만 노출됩니다. 사용자의 의도가 특정 스킬과 명확하게 일치할 때만 무거운 절차적 지식(지침 및 스크립트)을 로드합니다. 이를 통해 개발자가 인증 미들웨어 리팩토링을 요청할 때 관련 없는 CSS 파이프라인을 로드하지 않고 보안 컨텍스트만 가져오게 하여, 컨텍스트를 가볍고 빠르며 비용 효율적으로 유지할 수 있습니다.
                        </p>
                    </div>

                    <div className="my-10">
                        <h3 className="text-xl font-bold text-center mb-6 dark:text-white">효율성의 아키텍처: 점진적 공개 vs 정적 컨텍스트</h3>
                        
                        {/* Diagram Representation */}
                        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                            
                            {/* Left Diagram: Traditional */}
                            <div className="flex-1 p-6 border border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center dark:bg-slate-800 dark:border-slate-700">
                                <h4 className="font-bold mb-4 text-sm dark:text-white">기존 방식 (Traditional)</h4>
                                <div className="text-xs text-center text-gray-500 mb-2 dark:text-slate-400">메타데이터, 지침, 리소스 (모두 로드됨)</div>
                                <div className="w-full h-32 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden dark:bg-red-900/20 dark:border-red-800">
                                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBMMTAgMEgwVjEwWiIgZmlsbD0icmdiYSgyNTIsIDE2NSwgMTY1LCAwLjIpIi8+PC9zdmc+')] opacity-50"></div>
                                     <span className="text-red-800 font-bold z-10 dark:text-red-200">컨텍스트 비대화</span>
                                </div>
                                <div className="text-red-500 font-bold text-2xl mb-2">↓</div>
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">AI 모델</div>
                                <div className="mt-4 text-xs font-bold text-gray-500 dark:text-slate-400">과도한 토큰 부하</div>
                            </div>

                            {/* Right Diagram: Skill Approach */}
                            <div className="flex-1 p-6 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col items-center relative overflow-hidden dark:bg-slate-800 dark:border-slate-700">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-bl-full dark:bg-green-500/20"></div>
                                <h4 className="font-bold mb-4 text-sm dark:text-white">스킬 방식 (점진적 공개)</h4>
                                
                                <div className="w-full space-y-2 mb-4 relative">
                                    <div className="border border-green-300 bg-green-50 p-2 rounded text-xs text-green-800 text-center shadow-sm dark:bg-green-900/30 dark:border-green-800 dark:text-green-200">
                                        레벨 1: 메타데이터 (YAML)
                                    </div>
                                    <div className="border border-green-300 bg-green-100 p-2 rounded text-xs text-green-800 text-center shadow-sm opacity-60 dark:bg-green-900/50 dark:border-green-800 dark:text-green-200">
                                        레벨 2: 지침 (Markdown)
                                    </div>
                                    <div className="border border-green-300 bg-green-200 p-2 rounded text-xs text-green-800 text-center shadow-sm opacity-30 dark:bg-green-900/70 dark:border-green-800 dark:text-green-200">
                                        레벨 3: 리소스 (Scripts)
                                    </div>
                                    
                                    {/* Arrow connecting to AI */}
                                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full">
                                        <div className="w-8 h-0.5 bg-green-400"></div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                     <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">AI 모델</div>
                                </div>
                                
                                <div className="mt-4 text-xs font-bold text-green-600 dark:text-green-400">효율적인 토큰 부하</div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4 text-center max-w-2xl mx-auto dark:text-slate-400">
                            점진적 공개 모델(오른쪽)은 기존 컨텍스트 로딩(왼쪽)에 비해 초기 토큰 부하를 획기적으로 줄여줍니다. 레벨 1은 가벼운 메타데이터만 로드합니다. 레벨 2는 트리거가 발생할 때만 절차적 지침을 주입합니다. 레벨 3은 온디맨드로 스크립트를 실행하고 에셋을 읽어옵니다.
                        </p>
                    </div>
                </div>
            )}

            {activeStep === 2 && (
                // Step 3: Agent Skills and Antigravity
                <div className="animate-fade-in space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">3. 에이전트 스킬과 Antigravity</h2>
                    
                    <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        Antigravity 생태계에서 에이전트 매니저(Agent Manager)가 '두뇌'이고 에디터(Editor)가 '캔버스'라면, <strong>스킬(Skills)</strong>은 범용 Gemini 3 모델과 사용자의 특정 컨텍스트 간의 격차를 해소하는 전문화된 교육 모듈 역할을 합니다. 스킬을 통해 에이전트는 데이터베이스 마이그레이션 표준이나 보안 검사와 같은 일련의 지침과 프로토콜을 "장착(equip)"할 수 있습니다. 이러한 실행 프로토콜을 동적으로 로드함으로써, 스킬은 AI를 일반적인 프로그래머에서 조직의 성문화된 모범 사례(Best Practices)와 안전 표준을 엄격히 준수하는 전문가로 효과적으로 전환합니다.
                    </p>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 dark:text-white">Antigravity에서 스킬이란 무엇인가?</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 dark:text-slate-300">
                            Google Antigravity의 컨텍스트에서 스킬은 정의 파일 (<code>SKILL.md</code>)과 선택적인 지원 자산(스크립트, 참조 자료, 템플릿)을 포함하는 디렉토리 기반 패키지입니다.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 dark:text-slate-300">
                            이는 <strong>온디맨드(On-Demand) 기능 확장 메커니즘</strong>입니다:
                        </p>

                        <ul className="space-y-4 pl-4">
                            <li className="flex gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                <div className="text-gray-700 leading-relaxed dark:text-slate-300">
                                    <strong>온디맨드 (On-Demand):</strong> 항상 로드되는 시스템 프롬프트(System Prompt)와 달리, 스킬은 에이전트가 사용자의 현재 요청과 관련이 있다고 판단할 때만 에이전트의 컨텍스트에 로드됩니다. 이는 컨텍스트 윈도우를 최적화하고 에이전트가 관련 없는 지침에 의해 주의가 산만해지는 것을 방지합니다. 수십 개의 도구가 있는 대규모 프로젝트에서 이러한 선택적 로딩은 성능과 추론 정확도에 매우 중요합니다.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                <div className="text-gray-700 leading-relaxed dark:text-slate-300">
                                    <strong>기능 확장 (Capability Extension):</strong> 스킬은 단순한 지시를 넘어 '실행'할 수 있습니다. Python이나 Bash 스크립트를 번들링함으로써, 스킬은 사용자가 수동으로 명령을 실행할 필요 없이 로컬 머신이나 외부 네트워크에서 복잡하고 다단계 작업을 수행할 수 있는 능력을 에이전트에게 부여합니다. 이는 에이전트를 텍스트 생성기에서 도구 사용자로 변화시킵니다.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">스킬 vs 생태계 (도구, 규칙, 워크플로우)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4 dark:text-slate-300">
                            모델 컨텍스트 프로토콜(MCP)이 GitHub나 PostgreSQL과 같은 외부 시스템에 대한 강력하고 지속적인 연결을 제공하는 에이전트의 "손(Hands)" 기능을 한다면, 스킬은 이를 지시하는 "두뇌(Brains)" 역할을 합니다.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 dark:text-slate-300">
                            MCP는 상태 저장 인프라를 처리하는 반면, 스킬은 이러한 도구를 사용하기 위한 방법론을 패키징하는 가볍고 일시적인 작업 정의입니다. 이러한 서버리스 접근 방식을 통해 에이전트는 지속적인 프로세스를 실행하는 운영 오버헤드 없이 임시 작업(변경 로그 생성 또는 마이그레이션 등)을 실행할 수 있으며, 작업이 활성화될 때만 컨텍스트를 로드하고 직후에 해제합니다.
                        </p>
                        <p className="text-gray-700 leading-relaxed dark:text-slate-300">
                            기능적으로 스킬은 "규칙(Rules - 수동적, 항상 켜져 있는 가드레일)"과 "워크플로우(Workflows - 능동적, 사용자 트리거 매크로)" 사이의 독특한 중간 지점을 차지합니다. <code>/test</code>와 같이 특정 명령이 필요한 워크플로우와 달리, 스킬은 <strong>에이전트가 트리거(agent-triggered)</strong>합니다. 모델은 사용자의 의도를 자동으로 감지하고 필요한 특정 전문 지식을 동적으로 장착합니다. 이 아키텍처는 강력한 구성 가능성(composability)을 허용합니다. 예를 들어, 전역 규칙은 데이터베이스 변경 중에 "안전한 마이그레이션" 스킬의 사용을 강제할 수 있으며, 단일 워크플로우는 여러 스킬을 조율하여 강력한 배포 파이프라인을 구축할 수 있습니다.
                        </p>
                    </div>
                </div>
            )}

            {activeStep === 3 && (
                // Step 4: Creating Skills
                <div className="animate-fade-in space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">4. 스킬 만들기</h2>
                    
                    <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        Antigravity에서 스킬을 생성하는 것은 특정 디렉토리 구조와 파일 형식을 따릅니다. 이러한 표준화는 스킬의 이식성을 보장하고 에이전트가 이를 안정적으로 파싱하고 실행할 수 있게 합니다. 이 디자인은 의도적으로 단순하며 Markdown 및 YAML과 같이 널리 이해되는 형식에 의존하여 개발자가 IDE의 기능을 확장하는 진입 장벽을 낮춥니다.
                    </p>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">디렉토리 구조 (Directory Structure)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4 dark:text-slate-300">
                            스킬은 두 가지 범위(Scope)에서 정의할 수 있어 프로젝트별 및 사용자별 사용자 정의가 모두 가능합니다:
                        </p>
                        
                        <ol className="list-decimal list-outside ml-5 space-y-3 mb-6 text-gray-700 dark:text-slate-300">
                            <li>
                                <strong>워크스페이스 범위 (Workspace Scope):</strong> <code>&lt;workspace-root&gt;/.agent/skills/</code>에 위치합니다. 이 스킬들은 특정 프로젝트 내에서만 사용할 수 있습니다. 해당 앱을 위한 배포 스크립트, 데이터베이스 관리, 또는 독점 프레임워크를 위한 상용구 코드 생성과 같은 프로젝트별 스크립트에 이상적입니다.
                            </li>
                            <li>
                                <strong>전역 범위 (Global Scope):</strong> <code>~/.gemini/antigravity/skills/</code>에 위치합니다. 이 스킬들은 사용자의 머신에 있는 모든 프로젝트에서 사용할 수 있습니다. "JSON 포맷팅", "UUID 생성", "코드 스타일 리뷰" 또는 개인 생산성 도구와의 통합과 같은 일반적인 유틸리티에 적합합니다.
                            </li>
                        </ol>

                        <p className="text-sm text-gray-500 mb-2 dark:text-slate-400">일반적인 스킬 디렉토리 구조는 다음과 같습니다:</p>
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md overflow-x-auto border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> my-skill/</div>
                            <div className="flex items-center ml-4 text-white mb-1"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md <span className="text-gray-500 ml-2"># 정의 파일 (The definition file)</span></div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> scripts/ <span className="text-gray-500 ml-2"># [선택] Python, Bash, Node 스크립트</span></div>
                            <div className="flex items-center ml-8 text-green-400 mb-1"><Terminal className="w-4 h-4 mr-2" /> run.py</div>
                            <div className="flex items-center ml-8 text-green-400 mb-1"><Terminal className="w-4 h-4 mr-2" /> util.sh</div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> references/ <span className="text-gray-500 ml-2"># [선택] 문서 또는 템플릿</span></div>
                            <div className="flex items-center ml-8 text-gray-300 mb-1"><FileText className="w-4 h-4 mr-2" /> api-docs.md</div>
                            <div className="flex items-center ml-4 text-gray-400"><Folder className="w-4 h-4 mr-2" /> assets/ <span className="text-gray-500 ml-2"># [선택] 정적 자산 (이미지, 로고)</span></div>
                        </div>
                        <p className="text-gray-600 text-sm mt-3 dark:text-slate-400">
                            이 구조는 관심사를 효과적으로 분리합니다. 로직(<code>scripts</code>)은 지시(<code>SKILL.md</code>) 및 지식(<code>references</code>)과 분리되어 표준 소프트웨어 엔지니어링 관행을 반영합니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">SKILL.md 정의 파일</h3>
                        <p className="text-gray-700 leading-relaxed mb-4 dark:text-slate-300">
                            <code>SKILL.md</code> 파일은 스킬의 두뇌입니다. 이 파일은 에이전트에게 스킬이 무엇인지, 언제 사용해야 하는지, 어떻게 실행해야 하는지 알려줍니다.
                        </p>
                        <p className="text-gray-700 mb-4 dark:text-slate-300">두 부분으로 구성됩니다:</p>
                        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-700 ml-2 dark:text-slate-300">
                            <li>YAML 프론트매터 (Frontmatter)</li>
                            <li>마크다운 본문 (Markdown Body)</li>
                        </ul>

                        <h4 className="text-lg font-bold text-gray-800 mb-2 dark:text-white">YAML 프론트매터 (YAML Frontmatter)</h4>
                        <p className="text-gray-700 leading-relaxed mb-3 dark:text-slate-300">
                            이것은 메타데이터 계층입니다. 에이전트의 상위 레벨 라우터가 인덱싱하는 스킬의 유일한 부분입니다. 사용자가 프롬프트를 보내면, 에이전트는 사용 가능한 모든 스킬의 설명 필드와 프롬프트를 의미론적으로 매칭(semantic-match)합니다.
                        </p>
                        
                        <div className="relative group">
                            <div className="absolute top-2 right-2 flex gap-2">
                                <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
                            </div>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
{`---
name: database-inspector
description: Use this skill when the user asks to query the database, check table schemas, or investigate data rows.
---`}
                            </pre>
                        </div>

                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 dark:bg-yellow-900/20 dark:border-yellow-600">
                            <h5 className="font-bold text-yellow-800 text-sm mb-2 dark:text-yellow-500">주요 필드 (Key Fields):</h5>
                            <ul className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
                                <li><strong>name:</strong> 필수 항목은 아닙니다. 범위 내에서 고유해야 합니다. 소문자와 하이픈 사용이 가능합니다 (예: <code>postgres-query</code>, <code>pr-reviewer</code>). 제공되지 않으면 디렉토리 이름이 기본값이 됩니다.</li>
                                <li><strong>description:</strong> 필수 항목이며 <strong>가장 중요한 필드</strong>입니다. 이것은 "트리거 문구(trigger phrase)" 역할을 합니다. LLM이 의미적 연관성을 인식할 수 있을 만큼 충분히 설명적이어야 합니다. "데이터베이스 도구"와 같이 모호한 설명은 불충분합니다. "로컬 PostgreSQL 데이터베이스에 대해 읽기 전용 SQL 쿼리를 실행하여 사용자 또는 트랜잭션 데이터를 검색합니다. 데이터 상태를 디버깅할 때 이 스킬을 사용하세요"와 같이 정확한 설명은 스킬이 올바르게 선택되도록 보장합니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-3 dark:text-white">마크다운 본문 (The Markdown Body)</h4>
                        <p className="text-gray-700 leading-relaxed mb-4 dark:text-slate-300">
                            본문에는 지시 사항이 포함되어 있습니다. 이것은 파일에 저장된 "프롬프트 엔지니어링"입니다. 스킬이 활성화되면 이 콘텐츠가 에이전트의 컨텍스트 윈도우에 주입됩니다.
                        </p>
                        <p className="text-gray-700 mb-3 dark:text-slate-300">본문에는 다음이 포함되어야 합니다:</p>
                        <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700 ml-2 dark:text-slate-300">
                            <li><strong>Goal:</strong> 스킬이 달성하는 것에 대한 명확한 진술.</li>
                            <li><strong>Instructions:</strong> 단계별 논리.</li>
                            <li><strong>Examples:</strong> 모델의 성능을 안내하기 위한 입출력의 퓨샷(Few-shot) 예제.</li>
                            <li><strong>Constraints:</strong> "Do not" 규칙 (예: "DELETE 쿼리를 실행하지 마십시오").</li>
                        </ol>

                        <div className="relative group mt-4">
                            <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                            <pre className="bg-gray-50 text-gray-800 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-200 leading-relaxed dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
{`Database Inspector

Goal
To safely query the local database and provide insights on the current data state.

Instructions
- Analyze the user's natural language request to understand the data need.
- Formulate a valid SQL query.
- CRITICAL: Only SELECT statements are allowed.
- Use the script scripts/query_runner.py to execute the SQL.
- Command: python scripts/query_runner.py "SELECT * FROM..."
- Present the results in a Markdown table.

Constraints
- Never output raw user passwords or API keys.
- If the query returns > 50 rows, summarize the data instead of listing it all.`}
                            </pre>
                        </div>
                    </div>

                    <div>
                         <h3 className="text-2xl font-bold text-gray-800 mb-3 dark:text-white">스크립트 통합 (Script Integration)</h3>
                         <p className="text-gray-700 leading-relaxed dark:text-slate-300">
                            스킬의 가장 강력한 기능 중 하나는 실행을 스크립트에 위임할 수 있는 능력입니다. 이를 통해 에이전트는 LLM이 직접 수행하기 어렵거나 불가능한 작업(바이너리 실행, 복잡한 수학적 계산 또는 레거시 시스템과의 상호 작용 등)을 수행할 수 있습니다.
                         </p>
                         <p className="text-gray-700 mt-2 dark:text-slate-300">
                            스크립트는 <code>scripts/</code> 하위 디렉토리에 배치됩니다. <code>SKILL.md</code>는 상대 경로로 이를 참조합니다.
                         </p>
                    </div>
                </div>
            )}

            {activeStep === 4 && (
                // Step 5: Authoring Skills
                <div className="animate-fade-in space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">5. 스킬 제작하기 (Authoring Skills)</h2>
                        
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 dark:text-slate-300">
                            이 섹션의 목표는 Antigravity에 통합되는 스킬을 구축하고, 리소스, 스크립트 등 다양한 기능을 점진적으로 활용하는 방법을 배우는 것입니다.
                        </p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3 text-sm text-blue-800 mb-6 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300">
                            <LinkIcon className="w-5 h-5 shrink-0" />
                            <span>
                                GitHub 저장소에서 스킬 예제를 다운로드할 수 있습니다: <a href="https://github.com/rominirani/antigravity-skills" target="_blank" rel="noreferrer" className="underline font-bold hover:text-blue-600 dark:hover:text-blue-400">rominirani/antigravity-skills</a>
                            </span>
                        </div>
                        
                        <p className="text-gray-700 text-sm dark:text-slate-400">
                            이러한 스킬들은 <code>~/.gemini/antigravity/skills</code> 폴더나 <code>/.agent/skills</code> 폴더에 배치할 수 있습니다.
                        </p>
                    </div>

                    {/* Level 1 */}
                    <div className="border-t border-gray-100 pt-8 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold dark:bg-white dark:text-black">Level 1</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">기본 라우터 (The Basic Router)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 dark:text-slate-300">
                            이것을 스킬의 "Hello World"라고 생각해 봅시다. 
                            개발자들은 종종 "wip", "fix bug", "updates"와 같이 성의 없는 커밋 메시지를 작성하곤 합니다. "Conventional Commits"을 수동으로 강제하는 것은 지루하고 잊어버리기 쉽습니다. Conventional Commits 사양을 강제하는 스킬을 구현해 봅시다. 에이전트에게 규칙을 지시하는 것만으로 에이전트가 집행자 역할을 하게 할 수 있습니다.
                        </p>
                        
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md mb-6 inline-block pr-12 border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> git-commit-formatter/</div>
                            <div className="flex items-center ml-4 text-white"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md <span className="text-gray-500 ml-2">(지침 전용)</span></div>
                        </div>

                        <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                             <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 leading-relaxed">
{`---
name: git-commit-formatter
description: Formats git commit messages according to Conventional Commits specification. Use this when the user asks to commit changes or write a commit message.
---

Git Commit Formatter Skill

When writing a git commit message, you MUST follow the Conventional Commits specification.

Format
\`[type][optional scope]: [description]\`

Allowed Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

Instructions
1. Analyze the changes to determine the primary \`type\`.
2. Identify the \`scope\` if applicable (e.g., specific component or file).
3. Write a concise \`description\` in an imperative mood (e.g., "add feature" not "added feature").
4. If there are breaking changes, add a footer starting with \`BREAKING CHANGE:\`.

Example
\`feat(auth): implement login with google\``}
                            </pre>
                        </div>
                        
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 dark:bg-emerald-900/20 dark:border-emerald-800">
                            <h5 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2 dark:text-emerald-400"><Play className="w-4 h-4 fill-current" /> 실행 방법</h5>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li>워크스페이스의 아무 파일이나 조금 수정하세요.</li>
                                <li>채팅창을 열고 입력하세요: <strong>"Commit these changes."</strong></li>
                                <li>에이전트가 단순히 <code>git commit</code>을 실행하는 것이 아니라, 먼저 <strong>git-commit-formatter</strong> 스킬을 활성화합니다.</li>
                                <li>결과: 컨벤션을 준수한 Git 커밋 메시지가 제안됩니다. (예: <code>docs: add detailed comments to demo_primes.py</code>)</li>
                            </ol>
                        </div>
                    </div>

                    {/* Level 2 */}
                    <div className="border-t border-gray-100 pt-8 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold dark:bg-white dark:text-black">Level 2</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">자산 활용 (Asset Utilization)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 dark:text-slate-300">
                            이것은 "참조(Reference)" 패턴입니다. 기업 프로젝트의 모든 소스 파일에는 특정 20줄짜리 Apache 2.0 라이선스 헤더가 필요할 수 있습니다. 이 정적 텍스트를 프롬프트(또는 SKILL.md)에 직접 넣는 것은 낭비입니다. 스킬이 인덱싱될 때마다 토큰을 소비하고, 모델이 법적 텍스트에서 오타를 낼("hallucinate") 수도 있습니다. 정적 텍스트를 <code>resources/</code> 폴더의 일반 텍스트 파일로 분리하고, 에이전트에게 필요할 때만 이 파일을 읽도록 지시합니다.
                        </p>
                        
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md mb-6 inline-block pr-12 border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> license-header-adder/</div>
                            <div className="flex items-center ml-4 text-white mb-1"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md</div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> resources/</div>
                            <div className="flex items-center ml-8 text-gray-300"><FileText className="w-4 h-4 mr-2" /> HEADER_TEMPLATE.txt <span className="text-gray-500 ml-2">(무거운 텍스트)</span></div>
                        </div>

                        <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                             <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 leading-relaxed">
{`---
name: license-header-adder
description: Adds the standard open-source license header to new source files. Use involves creating new code files that require copyright attribution.
---

# License Header Adder Skill

This skill ensures that all new source files have the correct copyright header.

## Instructions

1. **Read the Template**:
  First, read the content of the header template file located at \`resources/HEADER_TEMPLATE.txt\`.

2. **Prepend to File**:
  When creating a new file (e.g., \`.py\`, \`.java\`, \`.js\`, \`.ts\`, \`.go\`), prepend the \`target_file\` content with the template content.

3. **Modify Comment Syntax**:
  - For C-style languages (Java, JS, TS, C++), keep the \`/* ... */\` block as is.
  - For Python, Shell, or YAML, convert the block to use \`#\` comments.
  - For HTML/XML, use \`<!-- ... -->\`.`}
                            </pre>
                        </div>
                        
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 dark:bg-emerald-900/20 dark:border-emerald-800">
                            <h5 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2 dark:text-emerald-400"><Play className="w-4 h-4 fill-current" /> 실행 방법</h5>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li>새 더미 Python 파일을 만드세요: <code>touch my_script.py</code></li>
                                <li>입력하세요: <strong>"Add the license header to my_script.py."</strong></li>
                                <li>에이전트가 <code>license-header-adder/resources/HEADER_TEMPLATE.txt</code>를 읽습니다.</li>
                                <li>내용을 정확하게, 있는 그대로 파일에 붙여넣습니다.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Level 3 */}
                    <div className="border-t border-gray-100 pt-8 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold dark:bg-white dark:text-black">Level 3</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">예시를 통한 학습 (Learning by Example)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 dark:text-slate-300">
                            이것은 "Few-Shot" 패턴입니다. 느슨한 데이터(JSON API 응답 등)를 엄격한 코드(Pydantic 모델 등)로 변환하려면 수십 가지 결정이 필요합니다. 클래스 이름은 어떻게 지을까요? Optional을 써야 할까요? snake_case 또는 camelCase? 50가지 규칙을 영어로 작성하는 것은 지루하고 오류가 발생하기 쉽습니다. LLM은 패턴 매칭 엔진입니다. 황금 예제(입력 &rarr; 출력)를 보여주는 것이 장황한 지침보다 훨씬 효과적일 때가 많습니다.
                        </p>
                        
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md mb-6 inline-block pr-12 border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> json-to-pydantic/</div>
                            <div className="flex items-center ml-4 text-white mb-1"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md</div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> examples/</div>
                            <div className="flex items-center ml-8 text-green-400 mb-1"><Code className="w-4 h-4 mr-2" /> input_data.json <span className="text-gray-500 ml-2">(Before State)</span></div>
                            <div className="flex items-center ml-8 text-blue-400"><Code className="w-4 h-4 mr-2" /> output_model.py <span className="text-gray-500 ml-2">(After State)</span></div>
                        </div>

                         <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                             <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 leading-relaxed">
{`---
name: json-to-pydantic
description: Converts JSON data snippets into Python Pydantic data models.
---

# JSON to Pydantic Skill

This skill helps convert raw JSON data or API responses into structured, strongly-typed Python classes using Pydantic.

Instructions

1. **Analyze the Input**: Look at the JSON object provided by the user.
2. **Infer Types**:
  - \`string\` -> \`str\`
  - \`number\` -> \`int\` or \`float\`
  - \`boolean\` -> \`bool\`
  - \`array\` -> \`List[Type]\`
  - \`null\` -> \`Optional[Type]\`
  - Nested Objects -> Create a separate sub-class.
 
3. **Follow the Example**:
  Review \`examples/\` to see how to structure the output code. notice how nested dictionaries like \`preferences\` are extracted into their own class.
 
  - Input: \`examples/input_data.json\`
  - Output: \`examples/output_model.py\``}
                            </pre>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                                <h6 className="font-bold text-gray-600 text-xs mb-2 dark:text-slate-400">input_data.json</h6>
                                <pre className="text-xs text-gray-800 font-mono overflow-x-auto dark:text-slate-200">
{`{
   "user_id": 12345,
   "username": "jdoe_88",
   "is_active": true,
   "preferences": {
       "theme": "dark",
       "notifications": ["email", "push"]
   },
   "last_login": "2024-03-15T10:30:00Z",
   "meta_tags": null
}`}
                                </pre>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-700">
                                <h6 className="font-bold text-blue-600 text-xs mb-2 dark:text-blue-400">output_model.py</h6>
                                <pre className="text-xs text-gray-800 font-mono overflow-x-auto dark:text-slate-200">
{`from pydantic import BaseModel
from typing import List, Optional

class Preferences(BaseModel):
   theme: str
   notifications: List[str]

class User(BaseModel):
   user_id: int
   username: str
   is_active: bool
   preferences: Preferences
   last_login: Optional[str] = None
   meta_tags: Optional[List[str]] = None`}
                                </pre>
                            </div>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 dark:bg-emerald-900/20 dark:border-emerald-800">
                            <h5 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2 dark:text-emerald-400"><Play className="w-4 h-4 fill-current" /> 실행 방법</h5>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li>에이전트에게 JSON 스니펫을 제공합니다: <code>&#123; "product": "Widget", "cost": 10.99, "stock": null &#125;</code></li>
                                <li>입력하세요: <strong>"Convert this JSON to a Pydantic model."</strong></li>
                                <li>에이전트는 스킬 폴더의 예제 쌍을 확인합니다.</li>
                                <li><code>output_model.py</code>의 코딩 스타일, 임포트, 구조를 완벽하게 모방하여 Python 클래스를 생성합니다. (null인 stock을 Optional로 처리하는 것까지 포함)</li>
                            </ol>
                        </div>
                    </div>

                     {/* Level 4 */}
                     <div className="border-t border-gray-100 pt-8 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold dark:bg-white dark:text-black">Level 4</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">절차적 로직 (Procedural Logic)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 dark:text-slate-300">
                            이것은 "도구 사용(Tool Use)" 패턴입니다. LLM에게 "이 스키마가 안전한가요?"라고 묻는다면, 중요한 기본 키(Primary Key)가 빠져 있어도 SQL 문법이 정확하다는 이유만으로 괜찮다고 할 수 있습니다. 이 확인 작업을 결정론적인 스크립트에 위임합시다. 스킬을 사용하여 에이전트를 우리가 작성한 Python 스크립트로 라우팅합니다. 스크립트는 이진(True/False) 진실을 제공합니다.
                        </p>
                        
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md mb-6 inline-block pr-12 border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> database-schema-validator/</div>
                            <div className="flex items-center ml-4 text-white mb-1"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md</div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> scripts/</div>
                            <div className="flex items-center ml-8 text-green-400"><Terminal className="w-4 h-4 mr-2" /> validate_schema.py <span className="text-gray-500 ml-2">(검증기)</span></div>
                        </div>

                        <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                             <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 leading-relaxed">
{`---
name: database-schema-validator
description: Validates SQL schema files for compliance with internal safety and naming policies.
---

# Database Schema Validator Skill

This skill ensures that all SQL files provided by the user comply with our strict database standards.

Policies Enforced
1. **Safety**: No \`DROP TABLE\` statements.
2. **Naming**: All tables must use \`snake_case\`.
3. **Structure**: Every table must have an \`id\` column as PRIMARY KEY.

Instructions

1. **Do not read the file manually** to check for errors. The rules are complex and easily missed by eye.
2. **Run the Validation Script**:
  Use the \`run_command\` tool to execute the python script provided in the \`scripts/\` folder against the user's file.
 
  \`python scripts/validate_schema.py [path_to_user_file]\`

3. **Interpret Output**:
  - If the script returns **exit code 0**: Tell the user the schema looks good.
  - If the script returns **exit code 1**: Report the specific error messages printed by the script to the user and suggest fixes.`}
                            </pre>
                        </div>

                         <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">scripts/validate_schema.py</div>
                             <pre className="bg-gray-50 text-gray-800 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-200 leading-relaxed max-h-64 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
{`import sys
import re

def validate_schema(filename):
   """
   Validates a SQL schema file against internal policy:
   1. Table names must be snake_case.
   2. Every table must have a primary key named 'id'.
   3. No 'DROP TABLE' statements allowed (safety).
   """
   try:
       with open(filename, 'r') as f:
           content = f.read()
          
       lines = content.split('\\n')
       errors = []
      
       # Check 1: No DROP TABLE
       if re.search(r'DROP TABLE', content, re.IGNORECASE):
           errors.append("ERROR: 'DROP TABLE' statements are forbidden.")
          
       # Check 2 & 3: CREATE TABLE checks
       table_defs = re.finditer(r'CREATE TABLE\\s+(?P<name>\\w+)\\s*\\((?P<body>.*?)\\);', content, re.DOTALL | re.IGNORECASE)
      
       for match in table_defs:
           table_name = match.group('name')
           body = match.group('body')
          
           # Snake case check
           if not re.match(r'^[a-z][a-z0-9_]*$', table_name):
               errors.append(f"ERROR: Table '{table_name}' must be snake_case.")
              
           # Primary key check
           if not re.search(r'\\bid\\b.*PRIMARY KEY', body, re.IGNORECASE):
               errors.append(f"ERROR: Table '{table_name}' is missing a primary key named 'id'.")

       if errors:
           for err in errors:
               print(err)
           sys.exit(1)
       else:
           print("Schema validation passed.")
           sys.exit(0)
          
   except FileNotFoundError:
       print(f"Error: File '{filename}' not found.")
       sys.exit(1)

if __name__ == "__main__":
   if len(sys.argv) != 2:
       print("Usage: python validate_schema.py <schema_file>")
       sys.exit(1)
      
   validate_schema(sys.argv[1])`}
                            </pre>
                        </div>
                        
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 dark:bg-emerald-900/20 dark:border-emerald-800">
                            <h5 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2 dark:text-emerald-400"><Play className="w-4 h-4 fill-current" /> 실행 방법</h5>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li>잘못된 SQL 파일을 만듭니다: <code>CREATE TABLE users (name TEXT);</code> (bad_schema.sql)</li>
                                <li>입력하세요: <strong>"Validate bad_schema.sql."</strong></li>
                                <li>에이전트는 추측하지 않습니다. 스크립트를 호출하고, 스크립트는 실패(Exit Code 1)합니다.</li>
                                <li>에이전트는 우리에게 보고합니다: "The validation failed because the table ‘users' is missing a primary key."</li>
                            </ol>
                        </div>
                    </div>

                    {/* Level 5 */}
                    <div className="border-t border-gray-100 pt-8 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold dark:bg-white dark:text-black">Level 5</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">아키텍트 (The Architect)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6 dark:text-slate-300">
                            이 패턴은 스킬에서 사용할 수 있는 대부분의 기능을 다룹니다. 복잡한 작업에는 파일 생성, 템플릿 따르기, 로직 작성 등 우리가 지금까지 본 모든 것의 조합이 필요합니다. 
                            <br/><br/>
                            ADK(Agent Development Kit)를 위한 새로운 도구를 생성하려면 이 모든 것이 필요합니다. 
                            우리는 다음을 결합합니다: 
                            <strong>스크립트</strong>(파일 생성/스캐폴딩 처리), 
                            <strong>템플릿</strong>(리소스의 상용구 처리), 
                            <strong>예제</strong>(로직 생성 안내).
                        </p>
                        
                        <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-sm shadow-md mb-6 inline-block pr-12 border border-gray-800">
                            <div className="flex items-center text-blue-400 mb-1"><Folder className="w-4 h-4 mr-2" /> adk-tool-scaffold/</div>
                            <div className="flex items-center ml-4 text-white mb-1"><FileText className="w-4 h-4 mr-2 text-yellow-500" /> SKILL.md</div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> resources/</div>
                            <div className="flex items-center ml-8 text-gray-300 mb-1"><FileText className="w-4 h-4 mr-2" /> ToolTemplate.py.hbs <span className="text-gray-500 ml-2">(Jinja2)</span></div>
                             <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> scripts/</div>
                            <div className="flex items-center ml-8 text-green-400 mb-1"><Terminal className="w-4 h-4 mr-2" /> scaffold_tool.py <span className="text-gray-500 ml-2">(생성기)</span></div>
                            <div className="flex items-center ml-4 text-gray-400 mb-1"><Folder className="w-4 h-4 mr-2" /> examples/</div>
                            <div className="flex items-center ml-8 text-blue-400"><Code className="w-4 h-4 mr-2" /> WeatherTool.py <span className="text-gray-500 ml-2">(참조 구현)</span></div>
                        </div>

                         <div className="relative group mb-6">
                             <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded dark:bg-slate-700 dark:text-slate-300">SKILL.md</div>
                             <pre className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 leading-relaxed">
{`---
name: adk-tool-scaffold
description: Scaffolds a new custom Tool class for the Agent Development Kit (ADK).
---

# ADK Tool Scaffold Skill

This skill automates the creation of standard \`BaseTool\` implementations for the Agent Development Kit.

Instructions

1. **Identify the Tool Name**:
  Extract the name of the tool the user wants to build (e.g., "StockPrice", "EmailSender").
 
2. **Review the Example**:
  Check \`examples/WeatherTool.py\` to understand the expected structure of an ADK tool (imports, inheritance, schema).

3. **Run the Scaffolder**:
  Execute the python script to generate the initial file.
 
  \`python scripts/scaffold_tool.py [ToolName]\`

4. **Refine**:
  After generation, you must edit the file to:
  - Update the \`execute\` method with real logic.
  - Define the JSON schema in \`get_schema\`.
 
Example Usage
User: "Create a tool to search Wikipedia."
Agent:
1. Runs \`python scripts/scaffold_tool.py WikipediaSearch\`
2. Editing \`WikipediaSearchTool.py\` to add the \`requests\` logic and \`query\` argument schema.`}
                            </pre>
                        </div>
                        
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 dark:bg-emerald-900/20 dark:border-emerald-800">
                            <h5 className="font-bold text-emerald-800 text-sm mb-3 flex items-center gap-2 dark:text-emerald-400"><Play className="w-4 h-4 fill-current" /> 실행 방법</h5>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li>입력하세요: <strong>"Create a new ADK tool called StockPrice to fetch data from an API."</strong></li>
                                <li><strong>단계 1 (스캐폴딩):</strong> 에이전트가 Python 스크립트를 실행합니다. <code>StockPriceTool.py</code>가 올바른 클래스 구조, 임포트 및 클래스 이름으로 즉시 생성됩니다.</li>
                                <li><strong>단계 2 (구현):</strong> 에이전트가 방금 만든 파일을 "읽습니다". <code># TODO: Implement logic</code>을 확인합니다.</li>
                                <li><strong>단계 3 (안내):</strong> 도구 인수에 대한 JSON 스키마를 정의하는 방법을 확신할 수 없어 <code>examples/WeatherTool.py</code>를 확인합니다.</li>
                                <li><strong>완료:</strong> ADK 스타일과 정확히 일치하도록 파일을 편집하여 <code>requests.get(...)</code>을 추가하고 스키마에 티커(ticker) 인수를 정의합니다.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
            
            {activeStep === 5 && (
                // Step 6: Congratulations
                <div className="animate-fade-in space-y-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">6. 축하합니다</h2>

                    <div className="w-full bg-gradient-to-br from-indigo-50 via-blue-50 to-white rounded-3xl border border-indigo-100 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm mb-8 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 dark:border-slate-600">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
                        
                        {/* Floating elements for celebration vibe */}
                        <div className="absolute top-10 left-10 text-2xl opacity-50 animate-bounce" style={{ animationDuration: '3s' }}>🎈</div>
                        <div className="absolute top-16 right-16 text-3xl opacity-60 animate-bounce" style={{ animationDuration: '2.5s' }}>✨</div>
                        <div className="absolute bottom-8 left-20 text-2xl opacity-40 animate-pulse">🎊</div>
                        <div className="absolute top-1/2 right-8 text-2xl opacity-40 animate-pulse">🎇</div>

                        <div className="mb-6 relative z-10">
                             <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-indigo-50 dark:bg-slate-700 dark:border-slate-600">
                                <span className="text-6xl">🎓</span>
                             </div>
                             <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-2 rounded-full shadow-md border-2 border-white dark:border-slate-700">
                                <Check className="w-5 h-5" />
                             </div>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2 z-10 dark:text-white">Antigravity Skills Mastered!</h3>
                        <p className="text-indigo-600/80 font-medium z-10 dark:text-indigo-400">성공적으로 과정을 수료하신 것을 축하드립니다.</p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        Antigravity Skills에 대한 실습을 성공적으로 완료하고 다음 스킬들을 구축했습니다:
                    </p>

                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-lg dark:text-slate-300">
                        <li>Git commit formatter (Git 커밋 포맷터)</li>
                        <li>License header adder (라이선스 헤더 추가기)</li>
                        <li>JSON to Pydantic (JSON Pydantic 변환기)</li>
                        <li>Database schema validator (데이터베이스 스키마 검증기)</li>
                        <li>ADK Tool scaffolding (ADK 도구 스캐폴딩)</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed text-lg dark:text-slate-300">
                        Agent Skills는 Antigravity가 여러분의 방식대로 코드를 작성하고, 규칙을 따르며, 도구를 사용하도록 하는 확실하고 훌륭한 방법입니다.
                    </p>

                    <div className="mt-8 border-t border-gray-200 pt-8 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 dark:text-white">참고 문서 (Reference docs)</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1 dark:bg-blue-900 dark:text-blue-300">
                                    <FileText className="w-4 h-4" />
                                </span>
                                <div>
                                    <span className="font-bold text-gray-700 block dark:text-white">Codelab : Getting Started with Google Antigravity</span>
                                    <span className="text-sm text-gray-500 dark:text-slate-400">Google Antigravity 시작하기 코드랩</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-green-100 text-green-600 p-1 rounded mr-3 mt-1 dark:bg-green-900 dark:text-green-300">
                                    <Globe className="w-4 h-4" />
                                </span>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-white">Official Site : </span>
                                    <a href="https://antigravity.google/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all dark:text-blue-400">
                                        https://antigravity.google/
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-purple-100 text-purple-600 p-1 rounded mr-3 mt-1 dark:bg-purple-900 dark:text-purple-300">
                                    <FileText className="w-4 h-4" />
                                </span>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-white">Documentation : </span>
                                    <a href="https://antigravity.google/docs" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all dark:text-blue-400">
                                        https://antigravity.google/docs
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-100 text-orange-600 p-1 rounded mr-3 mt-1 dark:bg-orange-900 dark:text-orange-300">
                                    <Download className="w-4 h-4" />
                                </span>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-white">Download : </span>
                                    <a href="https://antigravity.google/download" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all dark:text-blue-400">
                                        https://antigravity.google/download
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-indigo-100 text-indigo-600 p-1 rounded mr-3 mt-1 dark:bg-indigo-900 dark:text-indigo-300">
                                    <Code className="w-4 h-4" />
                                </span>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-white">Antigravity Skills documentation : </span>
                                    <a href="https://antigravity.google/docs/skills" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all dark:text-blue-400">
                                        https://antigravity.google/docs/skills
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white mt-12 shadow-lg dark:from-blue-700 dark:to-indigo-800">
                        <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300 drop-shadow-md" />
                        <h2 className="text-3xl font-black mb-2">과정 완료!</h2>
                        <p className="text-blue-100 mb-6">모든 단계를 완료하셨습니다. 이제 나만의 Antigravity 스킬을 만들어보세요.</p>
                        <button onClick={() => navigate('/education')} className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors dark:bg-slate-200 dark:text-blue-800">
                            교육 메인으로 돌아가기
                        </button>
                    </div>
                </div>
            )}
        </main>
      </div>

      {/* Footer Navigation */}
      <footer className="h-16 border-t border-gray-200 bg-white flex items-center justify-between px-6 sticky bottom-0 z-10 shrink-0 dark:bg-slate-900 dark:border-slate-800">
        <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-800 transition-colors dark:text-slate-500 dark:hover:text-slate-300">
            <Bug className="w-4 h-4" />
            <span>오류 신고</span>
        </button>
        
        <div className="flex items-center space-x-3">
             <button 
                onClick={handleBack}
                className="px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:text-blue-400 dark:hover:bg-slate-800"
            >
                이전
            </button>
            <button 
                onClick={handleNext}
                className={`px-6 py-2 text-sm font-bold text-white rounded-lg shadow-sm transition-colors ${
                    activeStep === steps.length - 1 
                    ? 'bg-emerald-500 hover:bg-emerald-600' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {activeStep === steps.length - 1 ? '완료' : '다음'}
            </button>
        </div>
      </footer>
    </div>
  );
};

export default CourseViewerPage;