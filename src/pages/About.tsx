import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex justify-center py-16"
    >
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">About Us</h1>
        <h2 className="text-xl font-serif text-slate-600 mb-8 border-b border-slate-200 pb-4">关于我们</h2>

        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">我们的使命</h4>
            <p className="text-slate-800 leading-relaxed">
              Heritage Insights is dedicated to exploring, preserving, and sharing the Intangible Cultural Heritage of China with the world. Our mission is to bridge cultural gaps by providing deeply researched, bilingual articles that illuminate traditional practices, arts, and philosophies.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              Heritage Insights（非遗探索）致力于向世界探索、保护和分享中国非物质文化遗产。我们的使命是通过提供经过深入研究的双语文章，阐明传统习俗、艺术和哲学，从而弥合文化鸿沟。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Why Bilingual?</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">为什么提供双语内容？</h4>
            <p className="text-slate-800 leading-relaxed">
              We believe that culture should not be confined by language barriers. By presenting our detailed observations in both English and Chinese, we hope to reach an international audience while honoring the original linguistic context of the heritage.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              我们认为文化不应受限于语言障碍。通过用英文和中文展示我们的详细观察，我们希望在尊重这些文化遗产原生语言背景的同时，能触及更广泛的国际受众。
            </p>
          </section>

          <section className="space-y-3 pb-8">
            <h3 className="text-xl font-semibold text-slate-900">Editorial Standards</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">编辑标准</h4>
            <p className="text-slate-800 leading-relaxed">
              Integrity and depth are at the core of our platform. We avoid superficial summaries, preferring to dive into the technical, historical, and aesthetic depths of each subject. Please note that certain decorative imagery used across the site has been thoughtfully generated using AI to respectfully represent the mood of the heritage.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              诚信与深度是本平台的核心。我们避免粗浅的总结，更倾向于深入探讨每个主题的技术、历史和美学深层。请注意，本网站使用的部分装饰性图像是通过AI精心生成的，旨在虔敬地呈现相关文化遗产的意境。
            </p>
          </section>
        </div>

      </div>
    </motion.div>
  );
}
