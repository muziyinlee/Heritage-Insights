import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white mt-16 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm font-medium text-slate-900">
            Heritage Insights Platform
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} All Rights Reserved. <br className="md:hidden" />
            <span className="font-serif">版权所有</span>
          </p>
          <p className="text-[10px] text-slate-400 max-w-md">
            Disclosure: Generative AI was utilized to assist in creating the decorative images and elements format on this website. 
            <br />声明：本网站的装饰性图片及排版元素由AI辅助生成。
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
          <Link to="/privacy" className="hover:text-slate-900 transition-colors text-center">
            <span className="block">Privacy Policy</span>
            <span className="text-[10px] font-serif text-slate-400">隐私政策</span>
          </Link>
          <Link to="/terms" className="hover:text-slate-900 transition-colors text-center">
            <span className="block">Terms of Service</span>
            <span className="text-[10px] font-serif text-slate-400">服务条款</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
