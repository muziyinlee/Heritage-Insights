import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import AdPlaceholder from '../components/AdPlaceholder';

export default function Articles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center py-12">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Archive of Heritage
          </h1>
          <h2 className="text-2xl font-serif text-slate-600">
            传世档案大全
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Browse our complete collection of deeply researched bilingual articles on Chinese Intangible Cultural Heritage.
          </p>
          <p className="mt-2 font-serif text-slate-500 max-w-2xl mx-auto">
            浏览我们关于中国非物质文化遗产的完整双语深度研究文章合集。
          </p>
        </header>

        <AdPlaceholder format="horizontal" className="mb-12" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article, idx) => (
            <React.Fragment key={article.id}>
              <motion.div variants={itemVariants} className="group flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
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
              
              {/* Inject an Ad periodically on the list */}
              {idx === 2 && (
                <div className="col-span-full my-4">
                  <AdPlaceholder format="horizontal" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
        
        <div className="mt-16 pt-8 border-t border-slate-200">
          <AdPlaceholder format="horizontal" />
        </div>

      </div>
    </div>
  );
}
