import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的反馈！我们会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: '邮件支持',
      description: 'support@hamr.store',
      detail: '通常 24 小时内回复',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '在线聊天',
      description: '即时支持',
      detail: '工作日 9:00-18:00',
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: '电话支持',
      description: '400-123-4567',
      detail: '工作日 9:00-18:00',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们随时准备帮助您。选择最方便的方式与我们联系。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card border-2 ${method.color} text-center`}
            >
              <div className="mb-4 flex justify-center">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="font-medium text-gray-900 mb-1">{method.description}</p>
              <p className="text-sm text-gray-600">{method.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主题
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="请简要描述问题"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  消息内容
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                  placeholder="请详细描述您的问题或建议..."
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                发送消息
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">支持时间</h2>
            <div className="card space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">工作时间</h4>
                  <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                  <p className="text-gray-600">周六至周日: 10:00 - 17:00</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
                <div className="space-y-3">
                  <a
                    href="/faq"
                    className="block text-primary-600 hover:underline"
                  >
                    → 常见问题 FAQ
                  </a>
                  <a
                    href="/getting-started"
                    className="block text-primary-600 hover:underline"
                  >
                    → 新手入门指南
                  </a>
                  <a
                    href="https://docs.hamr.top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-600 hover:underline"
                  >
                    → 技术文档
                  </a>
                  <a
                    href="https://status.hamr.top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary-600 hover:underline"
                  >
                    → 服务状态
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">社区支持</h4>
                <p className="text-gray-600 mb-4">
                  加入我们的 Discord 社区，与其他用户交流经验。
                </p>
                <a
                  href="https://discord.gg/hamr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  加入 Discord
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
