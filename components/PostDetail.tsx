import React from 'react';
import { Post } from '../types';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  return (
    <article className="animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-8 text-sm font-serif text-gray-500 hover:text-black flex items-center gap-1 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> 返回列表
      </button>

      <header className="mb-8 border-b-2 border-gray-100 pb-8">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-theme-dark mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-serif">
          <span>{post.date}</span>
          <span>作者: {post.author}</span>
          <span>{post.commentCount} 評論</span>
        </div>
      </header>
      
      <div className="text-gray-800 leading-loose font-serif text-lg text-justify whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
         <h3 className="font-serif font-bold text-xl mb-4">評論</h3>
         <div className="bg-gray-100/50 p-4 rounded text-gray-500 font-serif text-sm italic">
           評論功能暫未開放。
         </div>
      </div>
    </article>
  );
};