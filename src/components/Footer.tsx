import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const helpLinks = [
    { label: '新手指南', to: '/getting-started' },
    { label: '常见问题', to: '/faq' },
    { label: '故障排查', to: '/troubleshooting' },
    { label: '联系我们', to: '/contact' },
  ];

  const productLinks = [
    { label: '官网', href: 'https://hamr.store' },
    { label: '开发者门户', href: 'https://hamr.top' },
    { label: '技术文档', href: 'https://docs.hamr.top' },
    { label: '状态监控', href: 'https://status.hamr.top' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-900 font-bold text-lg mb-4">HamR 帮助中心</h3>
            <p className="text-gray-600 mb-4">
              快速找到答案，解决使用问题。我们随时为您提供帮助。
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:support@hamr.store"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>邮件支持</span>
              </a>
              <a
                href="https://discord.gg/hamr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>在线咨询</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">帮助资源</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-600 hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">相关链接</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} HamR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
