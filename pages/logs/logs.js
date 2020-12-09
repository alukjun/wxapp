//logs.js

Page({
  data: {
  },
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
      }
    });
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
})
