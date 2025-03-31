Component({
  data: {
    activeTab: 'login', // 当前激活的标签页：'login' 或 'register'
    phone: '', // 登录页手机号
    password: '', // 登录页密码
    showPassword: true, // 是否隐藏登录页密码
    regPhone: '', // 注册页手机号
    verificationCode: '', // 验证码
    regPassword: '', // 注册页密码
    showRegPassword: true, // 是否隐藏注册页密码
    agreePolicy: false, // 是否同意政策
    counting: false, // 是否在倒计时中
    countdown: 60 // 倒计时秒数
  },

  methods: {
    // 切换标签页
    switchTab(e: WechatMiniprogram.TouchEvent) {
      const tab = e.currentTarget.dataset.tab as string;
      this.setData({
        activeTab: tab
      });
    },

    // 输入登录手机号
    inputPhone(e: WechatMiniprogram.Input) {
      this.setData({
        phone: e.detail.value
      });
    },

    // 输入登录密码
    inputPassword(e: WechatMiniprogram.Input) {
      this.setData({
        password: e.detail.value
      });
    },

    // 切换登录密码可见性
    togglePasswordVisibility() {
      this.setData({
        showPassword: !this.data.showPassword
      });
    },


    // 微信一键登录
    wechatLogin() {
      wx.showLoading({
        title: '请求授权中...',
        mask: true
      });
      
      wx.login({
        success: (res) => {
          if (res.code) {
            console.log('微信登录成功，code:', res.code);
            // 这里应该将code发送到后端，换取用户信息
            
            // 模拟请求
            setTimeout(() => {
              wx.hideLoading();
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                success: () => {
                  setTimeout(() => {
                    wx.switchTab({
                      url: '/pages/home/home'
                    });
                  }, 1000);
                }
              });
            }, 1000);
          } else {
            wx.hideLoading();
            wx.showToast({
              title: '微信登录失败',
              icon: 'none'
            });
          }
        },
        fail: () => {
          wx.hideLoading();
          wx.showToast({
            title: '微信登录失败',
            icon: 'none'
          });
        }
      });
    },

    // 输入注册手机号
    inputRegPhone(e: WechatMiniprogram.Input) {
      this.setData({
        regPhone: e.detail.value
      });
    },

    // 输入验证码
    inputVerificationCode(e: WechatMiniprogram.Input) {
      this.setData({
        verificationCode: e.detail.value
      });
    },

    // 输入注册密码
    inputRegPassword(e: WechatMiniprogram.Input) {
      this.setData({
        regPassword: e.detail.value
      });
    },

    // 切换注册密码可见性
    toggleRegPasswordVisibility() {
      this.setData({
        showRegPassword: !this.data.showRegPassword
      });
    },

    // 获取验证码
    getVerificationCode() {
      const { regPhone, counting } = this.data;
      
      if (counting) {
        return;
      }
      
      if (!this.validatePhone(regPhone)) {
        return;
      }
      
      // 开始倒计时
      this.setData({
        counting: true,
        countdown: 60
      });
      
      const timer = setInterval(() => {
        if (this.data.countdown <= 1) {
          clearInterval(timer);
          this.setData({
            counting: false
          });
        } else {
          this.setData({
            countdown: this.data.countdown - 1
          });
        }
      }, 1000);
      
      // 模拟发送验证码
      wx.showToast({
        title: '验证码已发送',
        icon: 'success'
      });
    },

    // 切换协议同意状态
    toggleAgreement() {
      this.setData({
        agreePolicy: !this.data.agreePolicy
      });
    },

    // 查看用户协议
    viewUserAgreement() {
      wx.navigateTo({
        url: '/pages/user_agreement/user_agreement'
      });
    },

    // 查看隐私政策
    viewPrivacyPolicy() {
      wx.navigateTo({
        url: '/pages/privacy_policy/privacy_policy'
      });
    },

    // 注册
    register() {
      const { regPhone, verificationCode, regPassword, agreePolicy } = this.data;
      
      if (!this.validatePhone(regPhone)) {
        return;
      }
      
      if (!verificationCode) {
        wx.showToast({
          title: '请输入验证码',
          icon: 'none'
        });
        return;
      }
      
      if (!regPassword) {
        wx.showToast({
          title: '请设置密码',
          icon: 'none'
        });
        return;
      }
      
      if (!agreePolicy) {
        wx.showToast({
          title: '请阅读并同意协议',
          icon: 'none'
        });
        return;
      }
      
      wx.showLoading({
        title: '注册中...',
        mask: true
      });
      
      // 模拟注册请求
      setTimeout(() => {
        wx.hideLoading();
        
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 1500,
          success: () => {
            setTimeout(() => {
              // 切换到登录页
              this.setData({
                activeTab: 'login',
                phone: regPhone
              });
            }, 1000);
          }
        });
      }, 1500);
    },

    // 验证手机号
    validatePhone(phone: string): boolean {
      if (!phone) {
        wx.showToast({
          title: '请输入手机号',
          icon: 'none'
        });
        return false;
      }
      
      if (!/^1\d{10}$/.test(phone)) {
        wx.showToast({
          title: '手机号格式不正确',
          icon: 'none'
        });
        return false;
      }
      
      return true;
    }
  }
});