import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Landmark className="h-6 w-6 text-slate-800" />
            <div className="flex flex-col ml-2">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">Heritage Insights</span>
              <span className="text-[10px] font-serif text-slate-500 uppercase tracking-widest leading-none mt-0.5">中国非遗探索</span>
            </div>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition-colors">
              <div className="flex flex-col items-center">
                <span>Home</span>
                <span className="text-[10px] font-serif text-slate-400">首页</span>
              </div>
            </Link>
            <Link to="/articles" className="hover:text-slate-900 transition-colors">
              <div className="flex flex-col items-center">
                <span>All Articles</span>
                <span className="text-[10px] font-serif text-slate-400">全部文章</span>
              </div>
            </Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">
              <div className="flex flex-col items-center">
                <span>About Us</span>
                <span className="text-[10px] font-serif text-slate-400">关于我们</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
