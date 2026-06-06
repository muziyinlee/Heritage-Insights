import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { articles } from '../data/articles';
import AdPlaceholder from '../components/AdPlaceholder';

export default function ArticleLayout() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center pb-16"
    >
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 mt-10">
        
        <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Home / 返回首页</span>
        </Link>
        
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 text-xs font-semibold tracking-widest uppercase text-slate-500">
            <span>{article.category.en}</span>
            <span>•</span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            {article.title.en}
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-600">
            {article.title.zh}
          </h2>
        </header>

        {/* Banner Image */}
        <div className="rounded-2xl overflow-hidden aspect-[21/9] mb-12 shadow-sm border border-slate-100">
          <Zoom>
            <img src={article.bannerImage} alt={article.title.en} className="w-full h-full object-cover" />
          </Zoom>
        </div>

        {/* Excerpt */}
        <div className="text-lg md:text-xl text-slate-700 text-center italic mb-12 px-4 border-l-4 border-slate-300 py-2">
          <p className="mb-3">{article.excerpt.en}</p>
          <p className="font-serif text-slate-600">{article.excerpt.zh}</p>
        </div>

        {/* Ad Placeholder below title for AdSense */}
        <AdPlaceholder format="horizontal" className="mb-12" />

        {/* Content Sections */}
        <div className="space-y-12">
          {article.sections.map((section, idx) => (
            <section key={idx}>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {section.title.en}
              </h3>
              <h4 className="text-xl font-serif text-slate-700 mb-6 pb-2 border-b border-slate-200">
                {section.title.zh}
              </h4>
              
              <div className="space-y-8">
                {section.content.map((paragraph, pIdx) => (
                  <div key={pIdx} className="space-y-3">
                    <p className="text-base text-slate-800 leading-relaxed font-sans">
                      {paragraph.en}
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed font-serif">
                      {paragraph.zh}
                    </p>
                  </div>
                ))}
              </div>

              {/* Insert Ad after second section for pacing */}
              {idx === 1 && (
                <div className="mt-12">
                  <AdPlaceholder format="horizontal" />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* End of article Ad Placeholder */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <AdPlaceholder format="horizontal" />
        </div>

      </div>
    </motion.article>
  );
}
