!function(e){var a=wx.__installedModules=wx.__installedModules||{};function t(n){if(a[n])return a[n].exports;var o=wx.__installedModules[n]=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(n,o,function(a){return e[a]}.bind(null,o));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=115)}({115:function(e,a,t){"use strict";t.r(a);Page({data:{config:{dashboard:{title:"有赞微商城插件示例",content:[{name:"Goods 商品",path:"/pages/dashboard/index?type=goods"},{name:"Groupon 拼团",path:"/pages/dashboard/index?type=groupon"},{name:"Seckill 秒杀",path:"/pages/dashboard/index?type=seckill"},{name:"LimitDiscount 限时折扣",path:"/pages/dashboard/index?type=limitdiscount"},{name:"Goods 商品页",path:"plugin://yzTradePlugin/goods-detail?goodsId=2fp4pt2vockaq&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82"},{name:"OrderList 订单列表页",path:"plugin://yzTradePlugin/order-list?type=all&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82"},{name:"ZanAccount 绑定手机号",path:"/pages/zan-account/index"},{name:"Coupon 优惠券",path:"/pages/coupon/index"},{name:"AddCart 加入购物车",path:"/pages/addcart/index"},{name:"Cart 购物车",path:"/pages/cart/index?openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82"}]},groupon:{title:"有赞微商城拼团插件",content:[{name:"大图样式",path:"/pages/groupon/big/index"},{name:"小图样式",path:"/pages/groupon/small/index"},{name:"列表样式",path:"/pages/groupon/list/index"}]},goods:{title:"有赞微商城商品插件",content:[{name:"大图样式",path:"/pages/goods/big/index"},{name:"小图样式",path:"/pages/goods/small/index"},{name:"一大两小样式",path:"/pages/goods/big1small2/index"},{name:"列表样式",path:"/pages/goods/list/index"},{name:"一行三个样式",path:"/pages/goods/three/index"},{name:"横向滑动样式",path:"/pages/goods/three-swipe/index"},{name:"加入购物车",path:"/pages/goods/add-cart/index"}]},seckill:{title:"有赞微商城秒杀",content:[{name:"大图样式",path:"/pages/seckill/big/index"},{name:"小图样式",path:"/pages/seckill/small/index"},{name:"一大两小样式",path:"/pages/seckill/hybrid/index"},{name:"列表样式",path:"/pages/seckill/list/index"}]},limitdiscount:{title:"有赞微商城限时折扣",content:[{name:"大图样式",path:"/pages/limitdiscount/big/index"},{name:"小图样式",path:"/pages/limitdiscount/small/index"},{name:"一大两小样式",path:"/pages/limitdiscount/hybrid/index"},{name:"列表样式",path:"/pages/limitdiscount/list/index"}]}},curConfig:{}},onLoad:function(e){var a=e.type||"dashboard";this.setData({curConfig:this.data.config[a]})},onShareAppMessage:function(){return{title:"有赞微商城插件示例",path:"pages/dashboard/index"}}})}});