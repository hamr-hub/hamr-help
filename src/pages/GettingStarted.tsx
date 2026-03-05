import { motion } from 'framer-motion';
import { CheckCircle, Download, Smartphone, Wifi } from 'lucide-react';

export default function GettingStarted() {
  const steps = [
    {
      icon: <Download className="w-12 h-12" />,
      title: '1. 下载 HamR 应用',
      description: '从 App Store 或 Google Play 下载 HamR 应用',
      details: [
        '支持 iOS 13+ 和 Android 8+',
        '应用大小约 50MB',
        '免费下载，无需付费订阅',
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: '2. 创建账号',
      description: '注册您的 HamR 账号并完成初始设置',
      details: [
        '使用手机号或邮箱注册',
        '设置安全密码',
        '完成邮箱或手机验证',
      ],
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: '3. 连接设备',
      description: '添加您的第一个智能设备',
      details: [
        '确保设备已通电并处于配对模式',
        '在应用中点击"添加设备"',
        '按照屏幕提示完成配置',
      ],
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: '4. 开始使用',
      description: '体验智能家居的便利',
      details: [
        '通过语音或手机控制设备',
        '创建自动化规则',
        '与家人共享设备',
      ],
    },
  ];

  const tips = [
    {
      title: '📱 确保网络稳定',
      content: '设备配对过程中请保持手机连接到 2.4GHz Wi-Fi 网络',
    },
    {
      title: '🔋 检查设备电源',
      content: '确保智能设备已接通电源并显示配对指示灯',
    },
    {
      title: '📍 靠近设备',
      content: '配对时请将手机靠近智能设备（1-2 米范围内）',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">新手入门指南</h1>
          <p className="text-lg text-gray-600">
            欢迎使用 HamR！按照以下 4 个简单步骤，快速开始您的智能家居之旅。
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 text-primary-600">{step.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">配对设备小贴士</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-gray-700 text-sm">{tip.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">准备好开始了吗？</h3>
          <p className="mb-6 opacity-90">
            下载 HamR 应用，立即体验智能家居的便利
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              App Store 下载
            </a>
            <a
              href="https://play.google.com/store/apps/hamr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Google Play 下载
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
