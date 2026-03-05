import { Link } from 'react-router-dom';
import { HelpCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/getting-started', label: '新手指南' },
    { to: '/faq', label: '常见问题' },
    { to: '/contact', label: '联系我们' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HelpCircle className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">HamR 帮助中心</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://hamr.store"
              className="btn-primary"
            >
              返回官网
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://hamr.store"
              className="block text-primary-600 font-medium"
            >
              返回官网
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
