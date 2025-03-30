Component({
  data: {},

  methods: {
    navigateToOrder() {
      wx.navigateTo({
        url: '/pages/order/order', // 目标页面路径
      });
    },
  },
});
