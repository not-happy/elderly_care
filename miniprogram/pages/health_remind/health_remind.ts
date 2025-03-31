Component({
  data: {},

  methods: {
    addNewRemind() {
    wx.navigateTo({
      url: '/pages/health_remind_add/health_remind_add', // 目标页面路径
    });
  },},
});
