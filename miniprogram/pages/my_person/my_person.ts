Component({
  data: {
    userInfo: {
      avatarUrl: '',
      name: '张爱国',
      age: '68',
      gender: '男',
      height: '170',
      weight: '65',
      hobbies: '下棋，看报纸，种花，钓鱼',
      phone: '13812345678',
      address: '浙江省杭州市西湖区文三路100号'
    },
    genderArray: ['男', '女'],
    genderIndex: 0
  },

  methods: {
    // 生命周期函数
    onLoad() {
      // 设置性别索引
      const genderIndex = this.data.genderArray.findIndex(g => g === this.data.userInfo.gender);
      if (genderIndex !== -1) {
        this.setData({
          genderIndex
        });
      }
      
      // 这里可以从服务器获取用户数据
    },
    
    // 表单输入事件
    inputName(e) {
      this.setData({
        'userInfo.name': e.detail.value
      });
    },
    
    inputAge(e) {
      this.setData({
        'userInfo.age': e.detail.value
      });
    },
    
    genderChange(e) {
      this.setData({
        genderIndex: e.detail.value,
        'userInfo.gender': this.data.genderArray[e.detail.value]
      });
    },
    
    inputHeight(e) {
      this.setData({
        'userInfo.height': e.detail.value
      });
    },
    
    inputWeight(e) {
      this.setData({
        'userInfo.weight': e.detail.value
      });
    },
    
    inputHobbies(e) {
      this.setData({
        'userInfo.hobbies': e.detail.value
      });
    },
    
    inputPhone(e) {
      this.setData({
        'userInfo.phone': e.detail.value
      });
    },
    
    inputAddress(e) {
      this.setData({
        'userInfo.address': e.detail.value
      });
    },
    
    // 选择头像
    chooseAvatar() {
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          // 设置头像
          this.setData({
            'userInfo.avatarUrl': res.tempFilePaths[0]
          });
          
          // 这里可以添加上传头像的逻辑
        }
      });
    },
    
    // 保存用户信息
    saveUserInfo() {
      const { userInfo } = this.data;
      
      // 表单验证
      if (!userInfo.name) {
        wx.showToast({
          title: '请输入姓名',
          icon: 'none'
        });
        return;
      }
      
      if (!userInfo.phone) {
        wx.showToast({
          title: '请输入联系电话',
          icon: 'none'
        });
        return;
      }
      
      // 手机号格式验证
      if (!/^1\d{10}$/.test(userInfo.phone)) {
        wx.showToast({
          title: '手机号格式不正确',
          icon: 'none'
        });
        return;
      }
      
      // 这里可以添加保存数据到服务器的逻辑
      
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.navigateBack();
          }, 1500);
        }
      });
    }
  }
});