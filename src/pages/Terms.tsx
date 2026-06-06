import React from 'react';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex justify-center py-16"
    >
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <h2 className="text-xl font-serif text-slate-600 mb-8 border-b border-slate-200 pb-4">服务条款</h2>

        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">1. 接受条款</h4>
            <p className="text-slate-800 leading-relaxed">
              By accessing this website, you are agreeing to be bound by these website Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              通过访问本网站，您同意受这些网站服务条款以及所有适用的法律和法规的约束，并同意您有责任遵守任何适用的当地法律。如果您不同意这些条款的任何内容，则禁止您使用或访问本网站。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">2. Use License</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">2. 使用许可</h4>
            <p className="text-slate-800 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Heritage Insights's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              我们仅授权您暂时下载Heritage Insights网站上的材料（信息或软件）的一份副本，仅供个人、非商业性的临时浏览。这是许可的授予，并非所有权的转移。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">3. Disclaimer</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">3. 免责声明</h4>
            <p className="text-slate-800 leading-relaxed">
              The materials on Heritage Insights's website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              Heritage Insights网站上的材料按“原样”提供。我们不提供任何明示或暗示的保证，并特此声明并否定所有其他保证，包括但不限于适销性、针对特定目的的适用性、或者不侵犯知识产权或其他权利的暗示保证。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">4. Generative AI Use Declaration</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">4. 生成式AI使用声明</h4>
            <p className="text-slate-800 leading-relaxed">
              Some atmospheric or illustrative image materials displayed within the editorial contexts have been synthesized utilizing Generative AI models. These are intended solely to provide visual and mood context for the historical articles and are not necessarily accurate historical photographs.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              在编辑语境中展示的一些氛围性或说明性图片材料，是利用生成式AI模型合成的。这些图片仅旨在为历史文章提供视觉和氛围上的补充，并不一定代表准确的历史照片。
            </p>
          </section>
        </div>

      </div>
    </motion.div>
  );
}
