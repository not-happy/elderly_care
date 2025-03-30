Component({
  data: {
    // 用药提醒相关数据
    reminderTime: '06:30',
    reminderPill: '卡托普利 2片',

    // 疾病宝典数据
    healthTips: [
      {
        title: '控制血糖',
        image: '/images/fruit.png',
      },
      {
        title: '注射胰岛素',
        image: '/images/injection.png',
      },
      {
        title: '健康饮食',
        image: '/images/diet.png',
      },
    ],
  },

  methods: {
    // 页面加载时的生命周期函数
    onLoad() {
      console.log('首页加载完成');
      // 这里可以进行数据初始化或网络请求
    },

    // 用户点击某个快捷功能按钮时的事件处理
    onQuickButtonClick(event: WechatMiniprogram.BaseEvent) {
      const { button } = event.currentTarget.dataset;
      console.log(`用户点击了快捷功能按钮：${button}`);
      // 根据按钮类型进行不同的处理逻辑
      switch (button) {
        case 'call':
          wx.showToast({ title: '一键呼叫', icon: 'none' });
          break;
        case 'heart':
          wx.showToast({ title: '一点孝心', icon: 'none' });
          break;
        case 'help':
          wx.showToast({ title: '三助服务', icon: 'none' });
          break;
        case 'device':
          wx.showToast({ title: '设备中心', icon: 'none' });
          break;
        default:
          wx.showToast({ title: '未知功能', icon: 'none' });
      }
    },

    // 跳转到更多疾病宝典页面
    onMoreHealthTipsClick() {
      wx.showToast({ title: '跳转到更多疾病宝典', icon: 'none' });
      // 这里可以跳转到其他页面，例如：
      // wx.navigateTo({ url: '/pages/healthTips/healthTips' });
    },
  },
});
