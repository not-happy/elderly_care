Component({
  data: {},

  methods: {
    navigateToRecord() {
      wx.navigateTo({
        url: '/pages/health_record/health_record', // 目标页面路径
      });
    },

  },
});
