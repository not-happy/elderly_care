Component({
  data: {},

  methods: {
    navigateToOrder() {
      wx.navigateTo({
        url: '/pages/order/order', // 目标页面路径
      });
    },

    navigateToPerson() {
      wx.navigateTo({
        url: '/pages/my_person/my_person', // 目标页面路径
      });
    },

    navigateToAbout() {
      wx.navigateTo({
        url: '/pages/my_about/my_about', // 目标页面路径
      });
    },

    navigateToPublic() {
      wx.navigateTo({
        url: '/pages/my_public/my_public', // 目标页面路径
      });
    },
  },
});
