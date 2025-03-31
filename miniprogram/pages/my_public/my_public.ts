Component({
  data: {
    publicAccountName: '智慧养老助手'
  },

  methods: {
    // 复制公众号名称
    copyPublicAccount(): void {
      wx.setClipboardData({
        data: this.data.publicAccountName,
        success: () => {
          wx.showToast({
            title: '已复制',
            icon: 'success',
            duration: 2000
          });
        }
      });
    },
    
    // 保存二维码到相册
    saveQRCode(): void {
      wx.showLoading({
        title: '保存中...',
        mask: true
      });
      
      // 获取本地临时文件路径
      const qrcodeSrc = '/images/qrcode.jpg';
      
      // 获取全局文件路径
      const fileManager = wx.getFileSystemManager();
      
      // 将本地资源文件转为临时文件，用于保存到相册
      wx.downloadFile({
        url: getApp().globalData.serverUrl + qrcodeSrc,
        success: (res) => {
          if (res.statusCode === 200) {
            // 保存到相册
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                wx.hideLoading();
                wx.showToast({
                  title: '已保存到相册',
                  icon: 'success'
                });
              },
              fail: (error) => {
                wx.hideLoading();
                // 如果失败，可能是因为用户拒绝了授权
                if (error.errMsg.indexOf('auth deny') >= 0) {
                  wx.showModal({
                    title: '提示',
                    content: '保存图片需要您授权允许保存到相册',
                    confirmText: '去授权',
                    success: (res) => {
                      if (res.confirm) {
                        wx.openSetting({
                          success: (settingRes) => {
                            console.log(settingRes);
                          }
                        });
                      }
                    }
                  });
                } else {
                  wx.showToast({
                    title: '保存失败',
                    icon: 'none'
                  });
                }
              }
            });
          } else {
            wx.hideLoading();
            wx.showToast({
              title: '下载二维码失败',
              icon: 'none'
            });
          }
        },
        fail: () => {
          wx.hideLoading();
          wx.showToast({
            title: '下载二维码失败',
            icon: 'none'
          });
        }
      });
    }
  }
});