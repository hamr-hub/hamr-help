import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const categories: FAQCategory[] = [
    {
      title: '账号相关',
      items: [
        {
          question: '如何注册 HamR 账号？',
          answer: '打开 HamR 应用，点击"注册"按钮，使用手机号或邮箱注册。填写必要信息后，您将收到验证码，输入验证码即可完成注册。',
        },
        {
          question: '忘记密码怎么办？',
          answer: '在登录页面点击"忘记密码"，输入您的注册手机号或邮箱，系统将发送重置密码链接。点击链接并设置新密码即可。',
        },
        {
          question: '如何修改个人信息？',
          answer: '登录后进入"我的"页面，点击头像或用户名，即可编辑昵称、头像等个人信息。',
        },
        {
          question: '可以注销账号吗？',
          answer: '可以。进入"设置" > "账号与安全" > "注销账号"。注意：注销后所有数据将被永久删除且无法恢复。',
        },
      ],
    },
    {
      title: '设备管理',
      items: [
        {
          question: '支持哪些设备？',
          answer: 'HamR 支持市面上主流的智能家居设备，包括智能灯泡、插座、摄像头、温控器等。具体支持列表请查看官网或应用内的设备兼容性页面。',
        },
        {
          question: '如何添加新设备？',
          answer: '确保设备已通电并处于配对模式。在应用首页点击"+"或"添加设备"，选择设备类型，按照提示完成配对。',
        },
        {
          question: '设备离线怎么办？',
          answer: '1. 检查设备电源是否正常；2. 确认 Wi-Fi 网络连接正常；3. 尝试重启设备和路由器；4. 在应用中删除设备后重新添加。',
        },
        {
          question: '如何删除设备？',
          answer: '长按设备卡片，选择"删除设备"，或进入设备详情页，点击右上角"..."，选择"移除设备"。',
        },
      ],
    },
    {
      title: '家庭与共享',
      items: [
        {
          question: '如何创建家庭？',
          answer: '进入"我的" > "家庭管理" > "创建家庭"，填写家庭名称和位置信息即可创建。',
        },
        {
          question: '如何邀请家人？',
          answer: '在家庭管理页面点击"邀请成员"，通过分享邀请链接或二维码的方式邀请家人加入。',
        },
        {
          question: '家庭成员有哪些权限？',
          answer: '家庭创建者为管理员，拥有所有权限。普通成员可以控制设备、查看数据，但无法删除设备或移除其他成员。',
        },
      ],
    },
    {
      title: '自动化与场景',
      items: [
        {
          question: '什么是自动化？',
          answer: '自动化允许您设置触发条件，当条件满足时自动执行指定操作。例如：晚上 6 点自动开灯，或者温度低于 18°C 时自动开启暖气。',
        },
        {
          question: '如何创建自动化规则？',
          answer: '进入"自动化"页面，点击"+"添加规则。设置触发条件（时间、设备状态、传感器数据等）和执行动作，保存即可生效。',
        },
        {
          question: '自动化不生效怎么办？',
          answer: '检查：1. 规则是否已启用；2. 触发条件设置是否正确；3. 相关设备是否在线；4. 设备是否有足够权限执行操作。',
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">常见问题</h1>
          <p className="text-lg text-gray-600">
            快速找到常见问题的答案。如果您的问题未在此列出，请联系我们的支持团队。
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">还有其他问题？</h3>
          <p className="text-gray-700 mb-6">
            如果您没有找到答案，我们的支持团队随时准备提供帮助。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              联系支持团队
            </a>
            <a
              href="https://docs.hamr.top"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              查看技术文档
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
