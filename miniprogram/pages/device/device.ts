Component({
  data: {

  },

  methods: {
    // 页面加载时的生命周期函数
    onLoad() {
      console.log('首页加载完成');
      // 这里可以进行数据初始化或网络请求
    },

    navigateToAdd() {
      wx.navigateTo({
        url: '/pages/device_add/device_add', // 目标页面路径
      });
    },
  },
});
