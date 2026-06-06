import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';
import { articles } from '../data/articles';
import { BookOpen, ShieldCheck, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Only show the first 6 articles on the homepage
  const featuredArticles = articles.slice(0, 6);

  return (
    <div className="w-full flex justify-center pb-12">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section - Redesigned as Digital Museum Concept */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="my-10 pt-24 pb-28 bg-[#0a0a0a] text-white rounded-xl overflow-hidden relative flex flex-col items-center justify-center text-center px-4"
        >
          {/* Subtle background texture overlay if needed, currently solid black-ish feeling */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0a0a0a]/80 to-[#0a0a0a] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center mb-10 text-slate-400 uppercase tracking-[0.25em]"
            >
              <h3 className="text-xs font-semibold">The Digital Museum</h3>
              <h4 className="text-[10px] font-serif mt-1 tracking-[0.3em]">数字博物馆</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
                Intangible Heritage
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-300 font-light">
                非遗瑰宝之光
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center text-slate-300 max-w-2xl"
            >
              <p className="text-lg md:text-xl font-light mb-4 leading-relaxed opacity-90">
                A curated exhibition exploring the profound history, artistry, and aesthetic philosophy embedded within classical Chinese cultural heritage.
              </p>
              <p className="text-base md:text-lg font-serif font-light opacity-80 mb-12">
                一场精心策划的展览，探索古典中国文化遗产内涵的深厚历史、精湛工艺与美学哲学。
              </p>
              
              <Link 
                to="/articles" 
                className="inline-flex items-center gap-3 px-8 py-3 border border-slate-700 hover:border-slate-400 hover:bg-slate-800/50 transition-all text-sm font-medium tracking-widest uppercase rounded-sm"
              >
                <span>Enter Exhibition</span>
                <span className="font-serif">进入展厅</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Ad Space Top */}
        <AdPlaceholder format="horizontal" className="mb-12" />

        {/* Trust & Quality Section - Good for AdSense Review */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-4 text-slate-700" />
            <h3 className="text-lg font-semibold mb-1">In-Depth Volumes</h3>
            <h4 className="text-sm font-serif text-slate-500 mb-3">深度编撰卷宗</h4>
            <p className="text-sm text-slate-600 mb-2">Our articles provide comprehensive historic context and scholarly observation.</p>
            <p className="text-xs text-slate-500 font-serif">我们的文章提供全面的历史背景与学术视角的观察。</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <Globe className="w-8 h-8 mx-auto mb-4 text-slate-700" />
            <h3 className="text-lg font-semibold mb-1">Global Bilingual Read</h3>
            <h4 className="text-sm font-serif text-slate-500 mb-3">全球双语阅读</h4>
            <p className="text-sm text-slate-600 mb-2">Crossing language barriers to deliver heritage value to international readers.</p>
            <p className="text-xs text-slate-500 font-serif">跨越语言障碍，将文化遗产的价值传递给国际读者。</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-slate-700" />
            <h3 className="text-lg font-semibold mb-1">AdSense Compliant</h3>
            <h4 className="text-sm font-serif text-slate-500 mb-3">合规可靠保障</h4>
            <p className="text-sm text-slate-600 mb-2">Committed to safe browsing, transparent policies, and substantive value.</p>
            <p className="text-xs text-slate-500 font-serif">致力于安全的浏览体验、透明的政策声明以及实质性的内容价值。</p>
          </motion.div>
        </motion.section>

        {/* Featured Articles */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Discoveries</h2>
            <h3 className="text-lg font-serif text-slate-500 mt-1">特色展品陈列</h3>
          </div>
          <Link to="/articles" className="inline-flex flex-col items-end text-slate-600 hover:text-slate-900 transition-colors">
            <span className="text-sm font-semibold uppercase tracking-wider">View All Gallery</span>
            <span className="text-xs font-serif">查看全部展览库 &rarr;</span>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article) => (
            <motion.div variants={itemVariants} key={article.id} className="group flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/article/${article.id}`} className="block overflow-hidden relative aspect-[4/3]">
                <img src={article.bannerImage} alt={article.title.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider text-slate-800">
                  {article.category.en}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <Link to={`/article/${article.id}`}>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors mb-2 leading-tight">
                    {article.title.en}
                  </h3>
                  <h4 className="text-md font-serif text-slate-700 mb-4 line-clamp-1">
                    {article.title.zh}
                  </h4>
                </Link>
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-slate-600 mb-2 line-clamp-3">
                    {article.excerpt.en}
                  </p>
                  <p className="text-xs font-serif text-slate-500 line-clamp-2">
                    {article.excerpt.zh}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-400 mt-auto pt-4 border-t border-slate-100">
                  <span>{article.publishDate}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ad Space Bottom */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <AdPlaceholder format="horizontal" />
        </div>

      </div>
    </div>
  );
}
