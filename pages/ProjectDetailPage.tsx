import React from 'react';
import { ArrowLeft, Flag, Clock, Users, Mail, PlayCircle, CheckCircle, ChevronRight, BookOpen, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-slate-900 dark:text-slate-200 transition-colors duration-200">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white relative dark:from-orange-600 dark:to-amber-700">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                 {/* Back Button */}
                 <button onClick={() => navigate('/education')} className="absolute top-6 left-4 md:left-8 text-white/80 hover:text-white transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                 </button>

                 {/* XP Toast (Absolute top right) */}
                 <div className="absolute top-6 right-4 md:right-8 bg-black/80 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg animate-bounce hidden md:block dark:bg-black/60">
                    XP를 획득했어요!
                 </div>

                 <h1 className="text-2xl md:text-3xl font-bold mb-2 pt-4">코드없이 배우는 머신러닝 첫걸음: 하</h1>
                 <p className="text-white/90 text-lg mb-8 font-medium">데이터, 학습, 예측</p>
                 
                 <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium opacity-95">
                     <div className="flex items-center gap-2">
                         <Flag className="w-4 h-4" />
                         <span>첫걸음 프로젝트</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <Clock className="w-4 h-4" />
                         <span>8 시간</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <span className="font-mono text-base font-bold">&lt; &gt;</span>
                         <span>10 스테이지</span>
                     </div>
                     <div className="flex items-center gap-2">
                         <Users className="w-4 h-4" />
                         <span>569 명</span>
                     </div>
                 </div>
            </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 sticky top-16 bg-white z-40 shadow-sm dark:bg-slate-900 dark:border-slate-800">
             <div className="max-w-7xl mx-auto px-4 flex gap-8">
                 <button className="py-4 text-blue-600 font-bold border-b-2 border-blue-600 text-sm dark:text-blue-400 dark:border-blue-400">프로젝트</button>
             </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Left Content */}
             <div className="lg:col-span-2">
                 <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">프로젝트 설명</h2>
                 <p className="text-sm text-gray-500 mb-6 dark:text-slate-400">어떤 프로젝트일지 시작하기 전에 읽어보세요</p>

                 <div className="bg-gray-50 rounded-xl p-6 md:p-8 space-y-8 text-gray-700 leading-relaxed border border-gray-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                     
                     <section>
                         <div className="flex items-start gap-2 mb-4 bg-white p-4 rounded-lg border border-gray-100 shadow-sm dark:bg-slate-700 dark:border-slate-600">
                             <span className="text-xl shrink-0">📢</span>
                             <p className="text-sm font-medium">아래 교재들은 AI를 처음 배우는 분들을 위한 연계된 시리즈입니다.<br/>이론 4권 + 실습 2권으로 구성되어 있으며, AI의 개념부터 실전 활용까지 단계적으로 익힐 수 있습니다.</p>
                         </div>
                         
                         <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3 mt-6 dark:text-white">
                             📚 이론 교재 (기초 개념부터 머신러닝 원리까지)
                         </h3>
                         <ul className="space-y-2 mb-6 text-sm">
                             <li className="flex items-start gap-2">
                                 <span className="bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0 dark:bg-slate-600">1</span>
                                 <span>인공지능 첫걸음: 상 - 인공지능의 정의, 역사, 그리고 미래 전망</span>
                             </li>
                             <li className="flex items-start gap-2">
                                 <span className="bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0 dark:bg-slate-600">2</span>
                                 <span>인공지능 첫걸음: 하 - 인공지능 프로젝트의 기획부터 배포까지</span>
                             </li>
                             <li className="flex items-start gap-2">
                                 <span className="bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0 dark:bg-slate-600">3</span>
                                 <span>코드 없이 배우는 머신러닝 첫걸음: 상 - 학습 원리와 다양한 알고리즘 유형</span>
                             </li>
                             <li className="flex items-start gap-2">
                                 <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0">4</span>
                                 <span className="font-semibold text-gray-900 dark:text-white">코드 없이 배우는 머신러닝 첫걸음: 하 - AI의 학습 과정과 데이터 활용 방법</span>
                             </li>
                         </ul>

                         <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3 dark:text-white">
                             📚 실습 교재 (실제 데이터를 활용한 머신러닝 실습)
                         </h3>
                         <ul className="space-y-2 text-sm">
                             <li className="flex items-start gap-2">
                                 <span className="bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0 dark:bg-slate-600">5</span>
                                 <span>프로젝트 입문 - 따라하면서 배우는 머신러닝 프로젝트: 분류</span>
                             </li>
                             <li className="flex items-start gap-2">
                                 <span className="bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5 shrink-0 dark:bg-slate-600">6</span>
                                 <span>프로젝트 입문 - 따라하면서 배우는 머신러닝 회귀 프로젝트 &rarr; 추후 공개 예정</span>
                             </li>
                         </ul>
                     </section>

                     <hr className="border-gray-200 dark:border-slate-700" />

                     <section>
                         <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 dark:text-white">
                             🚀 AI 학습의 핵심, 데이터를 이해하는 것부터!
                         </h3>
                         <div className="text-sm space-y-4 text-gray-600 dark:text-slate-300">
                            <p>
                                이전 교재에서는 머신러닝이 어떻게 작동하는지, 그리고 <strong className="text-gray-900 bg-yellow-100 px-1 dark:text-slate-900 dark:bg-yellow-200">지도 학습과 비지도 학습의 차이, 선형, 트리, 군집화 모델</strong>을 배웠어요. 하지만 AI가 실제로 학습하는 과정과 데이터를 활용하는 방법은 한층 더 깊이 이해할 필요가 있습니다.
                            </p>
                            <p>
                                이번 교재에서는 <strong className="text-gray-900 dark:text-white">AI 모델이 데이터를 학습하는 과정</strong>과 예측하는 원리를 다룹니다. AI가 데이터를 학습하려면, 먼저 <strong className="text-gray-900 dark:text-white">데이터의 구조와 구성 요소(칼럼, 특징, 타겟 등)</strong>를 이해하는 것이 중요합니다. 이를 통해 AI가 어떤 방식으로 패턴을 학습하고, 새로운 데이터를 분석하는지 배우게 될 거예요.
                            </p>
                            <p>
                                또한, AI 모델이 학습한 내용을 바탕으로 새로운 데이터를 어떻게 예측하는지, 그리고 모델이 훈련 데이터에 지나치게 의존하지 않고 <strong className="text-gray-900 dark:text-white">일반화된 성능을 유지하는 방법</strong>까지 살펴볼 예정입니다.
                            </p>
                         </div>
                     </section>

                     <section>
                         <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 dark:text-white">
                             📚 이번 교재에서는 무엇을 배우나요?
                         </h3>
                         <ul className="space-y-5">
                             <li>
                                 <div className="font-bold text-gray-900 mb-1 flex items-center gap-2 dark:text-white">
                                     <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-slate-300"></div> 
                                     스테이지 1~2: AI가 데이터를 학습하는 과정
                                 </div>
                                 <p className="text-sm pl-4 border-l-2 border-gray-200 ml-1 dark:border-slate-600">AI가 데이터를 학습하려면, 먼저 데이터가 어떻게 구성되어 있는지를 이해해야 합니다. 칼럼(Column), 특징(Feature), 타겟(Target)의 개념을 배우고, AI가 학습 데이터에서 패턴을 찾는 원리를 익힙니다.</p>
                             </li>
                             <li>
                                 <div className="font-bold text-gray-900 mb-1 flex items-center gap-2 dark:text-white">
                                     <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-slate-300"></div>
                                     스테이지 3~4: 학습 데이터와 테스트 데이터의 역할
                                 </div>
                                 <p className="text-sm pl-4 border-l-2 border-gray-200 ml-1 dark:border-slate-600">AI 모델의 성능을 제대로 평가하려면, 학습 데이터와 테스트 데이터를 올바르게 분리해야 합니다. AI가 학습한 내용을 바탕으로 새로운 데이터를 예측하는 과정을 이해하고, <strong className="text-gray-900 dark:text-white">모델의 일반화 성능을 평가하는 이유</strong>를 배웁니다.</p>
                             </li>
                             <li>
                                 <div className="font-bold text-gray-900 mb-1 flex items-center gap-2 dark:text-white">
                                     <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-slate-300"></div>
                                     스테이지 5~6: 모델이 실수하는 이유와 과적합 해결 방법
                                 </div>
                                 <p className="text-sm pl-4 border-l-2 border-gray-200 ml-1 dark:border-slate-600">AI 모델이 새로운 데이터에서 성능이 저하되는 <strong className="text-gray-900 dark:text-white">과적합(Overfitting) 현상</strong>을 이해하고, 이를 방지하는 다양한 방법(적절한 데이터 구성, 학습 조절, 모델 복잡도 조정 등)을 익힙니다.</p>
                             </li>
                             <li>
                                 <div className="font-bold text-gray-900 mb-1 flex items-center gap-2 dark:text-white">
                                     <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-slate-300"></div>
                                     스테이지 7~8: AI 모델의 평가 지표 이해하기
                                 </div>
                                 <p className="text-sm pl-4 border-l-2 border-gray-200 ml-1 dark:border-slate-600">모델의 성능을 평가할 때, <strong className="text-gray-900 dark:text-white">정확도(Accuracy)만으로 충분할까요?</strong> 데이터가 불균형한 경우, 정확도가 높더라도 모델이 잘못된 예측을 할 수 있습니다. <strong className="text-gray-900 dark:text-white">정밀도(Precision), 재현율(Recall) 같은 다양한 평가 지표의 필요성을 배우고, AI 모델을 더 정확하게 분석하는 방법</strong>을 익힙니다.</p>
                             </li>
                             <li>
                                 <div className="font-bold text-gray-900 mb-1 flex items-center gap-2 dark:text-white">
                                     <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-slate-300"></div>
                                     스테이지 9~10: 과적합된 모델과 일반화된 모델 비교하기
                                 </div>
                                 <p className="text-sm pl-4 border-l-2 border-gray-200 ml-1 dark:border-slate-600">과적합된 모델과 일반화된 모델의 차이를 비교하며, <strong className="text-gray-900 dark:text-white">실제 데이터를 통해 어떻게 모델을 평가하고 개선할 수 있는지</strong>를 학습합니다. 과적합이 발생하는 원인과 모델의 복잡도가 증가할수록 과적합이 발생하는 과정과 이를 해결하는 방법(규제, 드롭아웃 등)을 살펴봅니다.</p>
                             </li>
                         </ul>
                     </section>

                     <section className="bg-white p-5 rounded-lg border border-yellow-200 shadow-sm dark:bg-slate-700 dark:border-yellow-700">
                         <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 dark:text-white">
                             🌟 왜 이 교재가 특별할까요?
                         </h3>
                         <ul className="space-y-2 text-sm">
                             <li className="flex gap-2">
                                 <span className="bg-blue-100 text-blue-600 font-bold px-1.5 py-0.5 rounded text-xs shrink-0 h-fit dark:bg-blue-900 dark:text-blue-300">1</span>
                                 <span><strong className="text-gray-900 dark:text-white">쉽고 직관적인 설명:</strong> AI가 학습하는 과정과 데이터 활용법을 단계별로 쉽게 설명합니다.</span>
                             </li>
                             <li className="flex gap-2">
                                 <span className="bg-blue-100 text-blue-600 font-bold px-1.5 py-0.5 rounded text-xs shrink-0 h-fit dark:bg-blue-900 dark:text-blue-300">2</span>
                                 <span><strong className="text-gray-900 dark:text-white">실전 감각을 키우는 사례 학습:</strong> 실제 데이터에서 어떻게 AI가 패턴을 학습하고 예측하는지 실습할 수 있습니다.</span>
                             </li>
                             <li className="flex gap-2">
                                 <span className="bg-blue-100 text-blue-600 font-bold px-1.5 py-0.5 rounded text-xs shrink-0 h-fit dark:bg-blue-900 dark:text-blue-300">3</span>
                                 <span><strong className="text-gray-900 dark:text-white">일반화 성능을 높이는 방법 학습:</strong> AI가 단순히 학습 데이터를 외우는 것이 아니라, <strong className="text-gray-900 dark:text-white">새로운 데이터에서도 잘 작동하는 모델을 만드는 원리</strong>를 배울 수 있습니다.</span>
                             </li>
                         </ul>
                     </section>

                     <section>
                         <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 dark:text-white">
                             🙋‍♀️ 이런 분들에게 추천해요!
                         </h3>
                         <ul className="space-y-2 text-sm">
                             <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-green-500" />
                                 <span>AI가 데이터를 학습하는 과정이 궁금한 분</span>
                             </li>
                             <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-green-500" />
                                 <span>AI 모델이 학습 데이터와 테스트 데이터를 나누는 이유를 알고 싶은 분</span>
                             </li>
                             <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-green-500" />
                                 <span>과적합(Overfitting)을 해결하고 일반화 성능을 높이는 방법을 배우고 싶은 분</span>
                             </li>
                         </ul>
                     </section>

                     <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 font-medium flex items-center gap-2 dark:bg-blue-900/30 dark:text-blue-200">
                         <span>🚀</span>
                         지금 바로 시작해서, AI가 데이터를 학습하고 예측하는 원리를 확실하게 익혀봅시다!
                     </div>
                 </div>

                 {/* Project Curriculum Section */}
                 <div className="mt-12">
                     <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">프로젝트 과정</h2>
                     <p className="text-sm text-gray-500 mb-8 dark:text-slate-400">차근차근 단계를 밟아 학습해보세요.</p>
                     
                     <div className="mb-6 pb-4 border-b border-gray-100 text-sm text-gray-600 font-medium dark:text-slate-400 dark:border-slate-700">
                         스테이지 10 개
                     </div>

                     <div className="relative space-y-4">
                         {/* Active Item */}
                         <div 
                             onClick={() => navigate('/project/first-step/stage/1')}
                             className="flex gap-4 items-center cursor-pointer hover:opacity-90 transition-opacity"
                         >
                             <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0 dark:bg-slate-600"></div>
                             <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 text-sm font-bold text-gray-800 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                                 1. 데이터의 개념과 구조
                             </div>
                         </div>

                         {/* Other Items */}
                         {[
                             "2. QUIZ - 데이터 이해하기",
                             "3. 머신러닝 모델 학습과 평가를 위한 학습/테스트 데이터 이해",
                             "4. QUIZ - 학습/테스트 데이터 이해하기",
                             "5. AI는 어떻게 데이터를 배울까? 지도 학습과 비지도 학습의 과정",
                             "6. QUIZ - 학습 과정 이해하기",
                             "7. 머신러닝 모델의 성능을 평가하는 방법",
                             "8. QUIZ - 모델의 성능 평가 이해하기",
                             "9. 모델의 실수: 과적합",
                             "10. QUIZ - 과적합 이해하기"
                         ].map((item, i) => (
                              <div key={i} className="flex gap-4 items-center cursor-pointer hover:opacity-100 transition-opacity opacity-70">
                                 <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0 dark:bg-slate-700"></div>
                                 <div className="flex-1 bg-gray-100 rounded-lg p-4 text-sm font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                                     {item}
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>

             {/* Right Sidebar */}
             <div className="space-y-6">
                 {/* My Learning Progress */}
                 <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-32 dark:bg-slate-800 dark:border-slate-700">
                     <h3 className="font-bold text-gray-900 mb-4 text-lg dark:text-white">내 학습 진도</h3>
                     <div className="mb-6">
                         <div className="border border-gray-200 rounded-lg p-4 text-sm text-gray-700 bg-gray-50 font-medium dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">
                             1. 데이터의 개념과 구조
                         </div>
                     </div>
                     <button 
                        onClick={() => navigate('/project/first-step/stage/1')}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                     >
                         이어서 학습하기
                     </button>
                 </div>

                 {/* Instructor Profile */}
                 <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center sticky top-[340px] dark:bg-slate-800 dark:border-slate-700">
                      <div className="w-20 h-20 mx-auto bg-white rounded-full mb-3 overflow-hidden border-2 border-gray-100 p-1 dark:bg-slate-700 dark:border-slate-600">
                          {/* Avatar image simulation */}
                          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden dark:bg-slate-600">
                            <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-800 dark:text-slate-300" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                          </div>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-4 dark:text-white">데이스쿨</h3>
                      <div className="text-xs text-gray-500 mb-6 text-left leading-relaxed space-y-2 dark:text-slate-400">
                          <p>안녕하세요! 🙋‍♀️</p>
                          <p>데이스쿨은 인공지능 초/중급 학습자를 위한 프로젝트 학습, 해커톤, 트랙으로 구성된 학습 플랫폼이에요.</p>
                          <p>부단한 연습과 매일의 작은 노력을 통해 여러분의 학습 목표를 달성해 보세요. 🏆</p>
                          <p>여러분의 성공을 위해 데이스쿨이 함께 할게요. 🎉</p>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mb-6 bg-gray-50 py-2 rounded-lg dark:bg-slate-700 dark:text-slate-300">
                          <Mail className="w-3.5 h-3.5" />
                          <span>dacon0school@gmail.com</span>
                      </div>
                      <button className="w-full px-6 py-2.5 border border-blue-200 text-blue-500 font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors dark:border-blue-800 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800">
                          더보기
                      </button>
                 </div>
             </div>
        </div>
    </div>
  );
}

export default ProjectDetailPage;