Component({
  data: {
    isEmpty: false,
    records: [
      {
        value: '6.2 mmol/L',
        time: '2025-03-30 12:10',
        device: '家用血糖仪'
      },
      {
        value: '5.8 mmol/L',
        time: '2025-03-29 09:15',
        device: '家用血糖仪'
      },
      {
        value: '6.5 mmol/L',
        time: '2025-03-28 18:30',
        device: '智能监测手表'
      },
      {
        value: '5.9 mmol/L',
        time: '2025-03-27 08:00',
        device: '医院血糖仪'
      },
      {
        value: '6.1 mmol/L',
        time: '2025-03-26 12:45',
        device: '家用血糖仪'
      }
    ]
  },
  
  methods: {
    // 跳转到添加记录页面
    navigateToAdd() {
      wx.navigateTo({
        url: '/pages/health_record_add/health_record_add'
      });
    }
  },
  
  lifetimes: {
    attached() {
      // 这里可以加载血糖记录数据
    }
  }
});