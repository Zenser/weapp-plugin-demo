var webpackRequire=require("././../../../webpack-require");webpackRequire("./src/packages/cart/cart/index.js",{"./src/packages/cart/cart/index.js":
/*!*****************************************!*\
  !*** ./src/packages/cart/cart/index.js ***!
  \*****************************************/
/*! no static exports found */function(a,e){Page({data:{openId:"",appId:"",shopId:""},onLoad:function(a){this.setData({openId:a.openId,appId:a.appId,shopId:a.shopId})},goBuy:function(a){var e=a.detail.bookKey,p=this.data,d=p.openId,o=p.appId,t=p.shopId;wx.navigateTo({url:"/packages/trade/index?pageType=buy&bookKey="+e+"&openId="+d+"&appId="+o+"&shopId="+t})},goGoodsDetail:function(a){var e=a.detail.goodsId,p=this.data,d=p.openId,o=p.appId,t=p.shopId;wx.navigateTo({url:"/packages/trade/index?pageType=goods-detail&alias="+e+"&openId="+d+"&appId="+o+"&shopId="+t})}})}});