import React from 'react';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => {
  return (
    <div className="flex flex-col gap-12">
      {posts.map((post) => (
        <article key={post.id} className="group">
          <header className="mb-3">
            <h2 
              onClick={() => onPostClick(post)}
              className="text-3xl font-serif font-bold text-theme-dark cursor-pointer inline-block border-b-2 border-theme-dark/80 pb-1 hover:text-black hover:border-black transition-colors"
            >
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 font-serif">
              <span>發佈於 {post.date}</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-theme-dark">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                評論
              </span>
            </div>
          </header>
          
          <div className="text-gray-700 leading-relaxed font-serif text-justify">
            <p className="mb-2 font-bold text-gray-900">
                {post.title === '吾輩は猫である' ? '著者：' : '作者：'}{post.author}
            </p>
            <p className="opacity-90">
              {post.excerpt}
            </p>
          </div>
          
          <div className="mt-3">
             <button 
                onClick={() => onPostClick(post)}
                className="text-sm font-serif text-gray-500 hover:text-theme-dark underline underline-offset-4 decoration-gray-300 hover:decoration-theme-dark transition-all"
             >
                阅读全文 »
             </button>
          </div>
        </article>
      ))}
    </div>
  );
};