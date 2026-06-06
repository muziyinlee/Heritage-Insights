import React from 'react';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex justify-center py-16"
    >
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy & Cookie Statement</h1>
        <h2 className="text-xl font-serif text-slate-600 mb-8 border-b border-slate-200 pb-4">隐私政策与Cookie声明</h2>

        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Introduction</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">引言</h4>
            <p className="text-slate-800 leading-relaxed">
              At Heritage Insights, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by our website and how it is used.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              在 Heritage Insights，访客的隐私对我们来说至关重要。本隐私政策文件概述了我们的网站接收和收集哪些类型的个人信息，以及我们如何使用这些信息。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Cookies and Web Beacons</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">Cookie与网络信标</h4>
            <p className="text-slate-800 leading-relaxed">
              We use cookies to store information about visitors' preferences, record user-specific information on which pages the user access or visit, and customize page content based on visitors' browser type or other information that the visitor sends via their browser.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              我们使用Cookie来存储有关访客偏好的信息，记录用户访问特定页面的用户特定信息，以及根据访客的浏览器类型或访客通过浏览器发送的其他信息来定制页面内容。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Google AdSense and Third-Party Advertising</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">Google AdSense 与第三方广告</h4>
            <p className="text-slate-800 leading-relaxed">
              Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              包括Google在内的第三方广告供应商，利用Cookie根据用户对本网站或其他网站的先前访问来投放广告。Google使用广告Cookie，使其及合作伙伴能够根据用户对您的网站和/或互联网上其他网站的访问向您的用户投放广告。
            </p>
            <p className="text-slate-800 leading-relaxed mt-2">
              Users may opt-out of personalized advertising by visiting Google's <a href="https://myadcenter.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              用户可以通过访问Google的广告设置来退出个性化广告。或者，您可以通过访问www.aboutads.info，退出第三方供应商对Cookie的个性化广告使用。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Log Files</h3>
            <h4 className="text-lg font-serif text-slate-700 mb-4">日志文件</h4>
            <p className="text-slate-800 leading-relaxed">
              Like many other Web sites, we makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement, and gather broad demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
            </p>
            <p className="text-slate-600 leading-relaxed font-serif">
              与许多其他网站一样，我们利用日志文件。日志文件内的信息包括互联网协议（IP）地址、浏览器类型、互联网服务提供商（ISP）、日期/时间戳、引用/退出页面以及点击次数。这些用于分析趋势、管理网站、追踪用户的移动并收集广泛的人口统计信息。IP地址及其他此类信息不与任何可识别个人身份的信息相关联。
            </p>
          </section>
        </div>

      </div>
    </motion.div>
  );
}
