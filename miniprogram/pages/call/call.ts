Component({
  data: {
  },

  methods: {
     // 点击拨号功能
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '13800138000' // 替换为实际电话号码
    })
  }
  },
});
