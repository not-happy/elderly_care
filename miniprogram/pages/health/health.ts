Component({
  data: {},

  methods: {
    navigateToFiles() {
      wx.navigateTo({
        url: '/pages/health_files/health_files', // 目标页面路径
      });
    },
    navigateToRemind() {
      wx.navigateTo({
        url: '/pages/health_remind/health_remind', // 目标页面路径
      });
    },
  },
});
