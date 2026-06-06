import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulateform submission or use mailto
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contact from ${formData.get('name')}`);
    const body = encodeURIComponent(formData.get('message') as string);
    window.location.href = `mailto:contact@heritageinsights.org?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-3xl"
    >
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl font-serif text-slate-600 mb-2">联系我们</p>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We would love to hear from you. Please reach out with any questions, suggestions, or collaborations. <br/>
          期待您的来信。如有任何疑问、建议或合作意向，请随时与我们联系。
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
        {isSubmitted ? (
          <div className="text-center py-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6"
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Prepared</h2>
            <p className="text-slate-600">Your default email client should have opened. If not, you can email us directly at contact@heritageinsights.org</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name <span className="text-xs font-serif text-slate-500 ml-1">姓名</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email <span className="text-xs font-serif text-slate-500 ml-1">电子邮件</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message <span className="text-xs font-serif text-slate-500 ml-1">留言内容</span></label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-200"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message / 发送邮件
            </button>
          </form>
        )}
      </div>

      <div className="mt-16 text-center text-slate-500 flex flex-col items-center justify-center">
        <Mail className="w-6 h-6 mb-4 text-slate-400" />
        <p>Or email us directly at</p>
        <a href="mailto:contact@heritageinsights.org" className="text-slate-900 font-medium hover:underline mt-1">
          contact@heritageinsights.org
        </a>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200">
        <AdPlaceholder format="horizontal" />
      </div>
    </motion.div>
  );
}
