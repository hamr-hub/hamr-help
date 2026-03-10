import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Wifi, Smartphone, RefreshCw } from 'lucide-react';

export default function Troubleshooting() {
  const issues = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: '设备离线',
      steps: [
        '检查设备电源是否正常连接',
        '确认家庭 Wi-Fi 网络正常工作',
        '尝试将设备靠近路由器',
        '重启设备（断电 10 秒后重新通电）',
        '重启路由器',
        '在 HamR 应用中删除设备并重新添加',
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: '应用无法登录',
      steps: [
        '检查网络连接是否正常',
        '确认账号和密码输入正确',
        '尝试使用"忘记密码"功能重置密码',
        '更新 HamR 应用到最新版本',
        '清除应用缓存后重试',
        '如果持续无法登录，请联系客服',
      ],
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: '自动化规则不执行',
      steps: [
        '确认规则已启用（开关为开启状态）',
        '检查触发条件设置是否正确',
        '确保相关设备处于在线状态',
        '检查时间条件是否在正确的时区',
        '查看规则执行历史，确认是否有报错',
        '删除并重新创建规则',
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: '设备配对失败',
      steps: [
        '确保设备处于配对模式（参考设备说明书）',
        '将手机靠近设备（1-2 米范围内）',
        '确认手机连接到 2.4GHz Wi-Fi（非 5GHz）',
        '检查设备是否已被其他账号绑定',
        '关闭手机蓝牙后重新开启再尝试',
        '恢复设备出厂设置后重新配对',
      ],
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">故障排查</h1>
          <p className="text-lg text-gray-600">
            按照以下步骤逐一排查，解决常见问题。如果问题仍然存在，请联系支持团队。
          </p>
        </motion.div>

        <div className="space-y-8">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-primary-600 shrink-0">{issue.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{issue.title}</h2>
              </div>
              <ol className="space-y-3">
                {issue.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center space-x-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>按照以上步骤操作后，大部分情况可以解决</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">问题仍未解决？</h3>
          <p className="text-gray-700 mb-6">
            请通过以下方式联系我们，并提供设备型号、操作系统版本和问题截图，以便更快地解决问题。
          </p>
          <a href="/contact" className="btn-primary inline-block">
            联系支持团队
          </a>
        </div>
      </div>
    </div>
  );
}
