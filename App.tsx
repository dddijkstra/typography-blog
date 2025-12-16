import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { BLOG_POSTS } from './constants';
import { Post } from './types';

function App() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-serif text-gray-800 selection:bg-theme-dark selection:text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Main Content Area (Left) */}
          <main className="flex-1 min-w-0 order-2 lg:order-1">
            {activePost ? (
              <PostDetail post={activePost} onBack={handleHomeClick} />
            ) : (
              <PostList posts={BLOG_POSTS} onPostClick={handlePostClick} />
            )}
          </main>

          {/* Sidebar Area (Right) */}
          <div className="w-full lg:w-64 flex-shrink-0 order-1 lg:order-2">
            <Sidebar onHomeClick={handleHomeClick} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;