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
    

    navigateToCall() {
      wx.navigateTo({
        url: '/pages/call/call', // 目标页面路径
      });
    },

    navigateToHelp() {
      wx.navigateTo({
        url: '/pages/help/help', // 目标页面路径
      });
    },
    navigateToHeart() {
      wx.navigateTo({
        url: '/pages/heart/heart', // 目标页面路径
      });
    },

    navigateToDevice() {
      wx.navigateTo({
        url: '/pages/device/device', // 目标页面路径
      });
    },

    navigateToDiabetes() {
      wx.navigateTo({
        url: '/pages/article/article', // 目标页面路径
      });
    },

    navigateToRemind() {
      wx.navigateTo({
        url: '/pages/health_remind/health_remind', // 目标页面路径
      });
    },
    
    // 在methods对象中添加:
    navigateToMore() {
      console.log('点击了更多');
      wx.navigateTo({
        url: '/pages/article_more/article_more', // 导航到文章列表页面
        success: () => {
          console.log('导航到更多文章页面成功');
        },
        fail: (err) => {
          console.error('导航失败:', err);
        }
      });
    },
  },
});
