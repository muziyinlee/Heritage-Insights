import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80" onClick={closeMenu}>
            <Landmark className="h-6 w-6 text-slate-800" />
            <div className="flex flex-col ml-2">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">Heritage Insights</span>
              <span className="text-[10px] font-serif text-slate-500 uppercase tracking-widest leading-none mt-0.5">中国非遗探索</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
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
            <Link to="/contact" className="hover:text-slate-900 transition-colors">
              <div className="flex flex-col items-center">
                <span>Contact</span>
                <span className="text-[10px] font-serif text-slate-400">联系我们</span>
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
          <Link to="/" className="block py-2 text-slate-700 font-medium hover:text-slate-900" onClick={closeMenu}>
            Home <span className="text-xs text-slate-400 font-serif ml-2">首页</span>
          </Link>
          <Link to="/articles" className="block py-2 text-slate-700 font-medium hover:text-slate-900" onClick={closeMenu}>
            All Articles <span className="text-xs text-slate-400 font-serif ml-2">全部文章</span>
          </Link>
          <Link to="/about" className="block py-2 text-slate-700 font-medium hover:text-slate-900" onClick={closeMenu}>
            About Us <span className="text-xs text-slate-400 font-serif ml-2">关于我们</span>
          </Link>
          <Link to="/contact" className="block py-2 text-slate-700 font-medium hover:text-slate-900" onClick={closeMenu}>
            Contact <span className="text-xs text-slate-400 font-serif ml-2">联系我们</span>
          </Link>
        </div>
      )}
    </header>
  );
}
