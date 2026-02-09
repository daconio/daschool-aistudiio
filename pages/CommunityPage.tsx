import React from 'react';
import { PageBanner, SidebarContainer, MiniProfile } from '../components/Shared';
import { Post } from '../types';
import { MessageCircle, ThumbsUp, Eye, Share2, ExternalLink } from 'lucide-react';

const mockPosts: Post[] = [
  { id: 1, author: 'Mather', avatar: '🧘', timeAgo: '약 21시간 전', title: 'https://figma2slide-mcp-4498.vercel.app/', content: '', url: 'figma2slide-mcp-4498.vercel.app', image: 'bg-blue-50', likes: 1, comments: 0, views: 1 },
  { id: 2, author: '도비콘', avatar: '👨‍💻', timeAgo: '3일 전', title: 'https://n.news.naver.com/mnews/ranking/article/023/00...', content: '', url: 'n.news.naver.com', image: 'bg-stone-800', likes: 1, comments: 0, views: 11 },
  { id: 3, author: '도비콘', avatar: '👨‍💻', timeAgo: '3일 전', title: 'https://daker.ai/public/hackathons', content: '', url: 'daker.ai', image: 'bg-orange-500', likes: 0, comments: 0, views: 6 },
  { id: 4, author: '도비콘', avatar: '👨‍💻', timeAgo: '3일 전', title: 'https://daker.ai/public/hackathons', content: '서버 및 DB에 참여하세요', url: 'daker.ai', image: 'bg-orange-400', likes: 0, comments: 0, views: 2 },
  { id: 5, author: '도비콘', avatar: '👨‍💻', timeAgo: '3일 전', title: 'ㄴㅇㅏㄹㅁㄴㅇㅣㄹㅏ', content: '#아라린 #아라만두', image: '', likes: 0, comments: 0, views: 1 },
];

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden dark:bg-slate-800 dark:border-slate-700">
    {/* Preview Area */}
    <div className={`h-48 ${post.image || 'bg-gray-100 dark:bg-slate-700'} flex items-center justify-center relative group`}>
        {post.image ? (
            post.url ? (
                <div className="text-center">
                     {post.image.includes('bg-') ? (
                         <div className="w-full h-full absolute inset-0 opacity-50"></div>
                     ) : (
                         <img src={post.image} alt="preview" className="w-full h-full object-cover absolute inset-0" />
                     )}
                     <div className="relative z-10 text-white/80 flex flex-col items-center">
                        <ExternalLink className="mb-2 w-8 h-8" />
                        <span className="text-xs underline">{post.url}</span>
                     </div>
                </div>
            ) : (
                <div className="p-6 text-gray-800 font-bold text-xl dark:text-white">{post.title}</div>
            )
        ) : (
            <div className="p-6 text-gray-400 text-sm dark:text-slate-500">No Preview</div>
        )}
        
        {post.url && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded flex items-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <span>daker.ai</span>
            </div>
        )}
    </div>

    {/* Content */}
    <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1 truncate dark:text-white">{post.title}</h3>
        {post.content && <p className="text-xs text-gray-500 mb-3 dark:text-slate-400">{post.content}</p>}
        
        <div className="flex items-center space-x-2 mb-3">
             <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] dark:bg-slate-600">{post.avatar}</div>
             <span className="text-xs text-gray-600 dark:text-slate-300">{post.author}</span>
             <span className="text-[10px] text-gray-400 dark:text-slate-500">• {post.timeAgo}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-slate-700">
            <div className="flex space-x-3">
                <button className={`flex items-center space-x-1 text-xs ${post.likes > 0 ? 'text-blue-500 bg-blue-50 px-2 py-1 rounded dark:bg-blue-900/30' : 'text-gray-400 dark:text-slate-500'}`}>
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-gray-400 dark:text-slate-500">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                </button>
                <div className="flex items-center space-x-1 text-xs text-gray-400 dark:text-slate-500">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{post.views}</span>
                </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300">
                <Share2 className="w-4 h-4" />
            </button>
        </div>
    </div>
  </div>
);

const CommunityPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <SidebarContainer title="커뮤니티 메뉴">
         <div className="space-y-1">
            <button className="w-full flex justify-between items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                <span>홈</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">77</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>잡담</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">23</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>대회</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">13</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>학습</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">7</span>
            </button>
            <button className="w-full flex justify-between items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium dark:text-slate-400 dark:hover:bg-slate-700">
                <span>기타</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs dark:bg-slate-700 dark:text-slate-300">34</span>
            </button>
         </div>
         <div className="mt-6 border-t border-gray-100 pt-4 dark:border-slate-700">
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 mb-2 dark:text-slate-400">
                <span>🕒 최근 인기</span>
            </div>
            <div className="bg-gray-50 p-1 rounded-lg flex text-xs mb-3 dark:bg-slate-700">
                <button className="flex-1 bg-emerald-500 text-white rounded py-1 shadow-sm">일간</button>
                <button className="flex-1 text-gray-500 py-1 dark:text-slate-400">주간</button>
                <button className="flex-1 text-gray-500 py-1 dark:text-slate-400">월간</button>
            </div>
            <p className="text-[10px] text-gray-400 text-center py-2 dark:text-slate-500">해당 기간에 게시글이 없습니다</p>
         </div>
         <MiniProfile />
      </SidebarContainer>

      <div className="flex-1">
        <PageBanner />
        
        <div className="flex items-center gap-2 mb-6">
            <input 
              type="text" 
              placeholder="게시글 검색..." 
              className="flex-1 pl-4 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm outline-none dark:bg-slate-800 dark:text-white"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">
                + 새 글 작성
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockPosts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
            
            {/* Login Failure Card for visual variety */}
            <div className="bg-gradient-to-br from-yellow-100 to-blue-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-center items-center p-6 text-center dark:from-yellow-900/50 dark:to-blue-900/50">
                 <h3 className="font-black text-xl italic mb-1 dark:text-white">LOGIN FAILURE?</h3>
                 <p className="text-[10px] text-gray-600 mb-4 dark:text-slate-300">계정/회사 이메일을 사용할 수 없나요?<br/>안전하게 계정을 복구하세요.</p>
                 <div className="flex gap-1 w-full max-w-[200px] mb-2">
                    <button className="flex-1 bg-yellow-400 text-[10px] font-bold py-1 rounded border border-black dark:border-transparent text-black">보조 이메일</button>
                    <button className="flex-1 bg-white text-[10px] font-bold py-1 rounded border border-black dark:border-transparent text-black">휴대폰 인증</button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;