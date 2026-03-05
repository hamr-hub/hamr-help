import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircleQuestion, Wrench, User, Home, Smartphone, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '新手入门',
      description: '快速了解 HamR 的基本功能和使用方法',
      link: '/getting-started',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: <User className="w-8 h-8" />,
      title: '账号管理',
      description: '注册、登录、密码重置等账号相关问题',
      link: '/faq/account',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: '家庭管理',
      description: '创建家庭、添加成员、设备共享等',
      link: '/faq/family',
      color: 'bg-green-50 text-green-600 border-green-200',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: '设备连接',
      description: '设备配对、连接问题、设备控制',
      link: '/faq/devices',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: '故障排查',
      description: '常见问题诊断和解决方案',
      link: '/troubleshooting',
      color: 'bg-red-50 text-red-600 border-red-200',
    },
    {
      icon: <MessageCircleQuestion className="w-8 h-8" />,
      title: '联系支持',
      description: '无法找到答案？联系我们的支持团队',
      link: '/contact',
      color: 'bg-gray-50 text-gray-600 border-gray-200',
    },
  ];

  const popularArticles = [
    { title: '如何开始使用 HamR？', link: '/getting-started/quickstart' },
    { title: '如何添加新设备？', link: '/faq/devices/add-device' },
    { title: '如何重置密码？', link: '/faq/account/reset-password' },
    { title: '设备离线怎么办？', link: '/troubleshooting/device-offline' },
    { title: '如何创建自动化规则？', link: '/guides/automation' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            HamR 帮助中心
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            搜索问题、浏览指南，快速找到您需要的答案
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索帮助文章..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">浏览帮助分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={category.link}
                className={`card border-2 ${category.color} hover:scale-105 transition-transform`}
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">热门文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={article.link}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                  <span className="text-gray-700 group-hover:text-primary-600 font-medium">
                    {article.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">没有找到答案？</h3>
          <p className="text-gray-700 mb-6">
            我们的支持团队随时准备帮助您。通过邮件或在线聊天联系我们。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              联系支持团队
            </Link>
            <a
              href="https://discord.gg/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              加入社区讨论
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
