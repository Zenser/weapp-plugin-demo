!function(e){var t=wx.__installedModules=wx.__installedModules||{};function n(r){if(t[r])return t[r].exports;var a=wx.__installedModules[r]=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}({32:function(e,t){var n=getApp();Page({data:{alias:"s4ftrie81",nodes:'&lt;goods<br><span style="margin-left: 10px;"></span>app-id="wxf11c5910cb729a82"<br><span style="margin-left: 10px;"></span>shop-id="{{ 45694034 }}"<br><span style="margin-left: 10px;"></span>layout="{{ 0 }}"<br>/&gt;',extraData:n.globalData.extraData},onLoad:function(){},handleGoodsClick:function(e){var t=e.detail;wx.navigateTo({url:"plugin://yzTradePlugin/goods-detail?alias="+t.alias+"&openId=oDpvq0N1rr0NjE9FmeFXFDWEH9zs&shopId=45694034&appId=wxf11c5910cb729a82"})}})}});