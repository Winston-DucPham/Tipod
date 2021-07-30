if (self !== global) self = global;
if(!self.__tfAppInited) {
 self.__tfAppInited = 1;
require('./config.js?hash=e6bd5a9ae3bd05b74327468a9d513d5aa0579d33');

const TFApp = self.TFApp.getAppContext
  ? self.TFApp.getAppContext().TFApp
  : self.TFApp;
self.App = TFApp.App;
self.getApp = TFApp.getApp;
self.getCurrentPages = TFApp.getCurrentPages;
self.Page = TFApp.Page;
self.Component = TFApp.Component;
self.$global = TFApp.$global;
self.my = TFApp.bridge;


if (TFApp.registerApp) {
  TFApp.registerApp({
    appJSON: tfAppJson
  });
}

 function success() {
require('../app.js?hash=7da28690e62a92a3a71b6b8c4cf9ca77f4de0b94');
require('../pages/index/index?hash=0bdcb120753cb8900b2c96d4d608dbc422119a89');
require('../pages/list/index?hash=c6516abc0ed525e240e20a6460368bd7051681fb');
require('../pages/TV/index?hash=620349a132835357f9c7f013afe9752e48534f80');
require('../pages/radio/index?hash=d5c4b0e9eed7a0db71621754ac3001e835502973');
require('../pages/record/index?hash=2ce9dc74797a3e68f937af21e36d8da04d5f07dc');
require('../pages/play/index?hash=6baad681d31923efa725de98ab9f163614be87af');
require('../pages/addmusic/index?hash=cf041f87d9ea5f765911b7fdaa0d933b799cea4b');
require('../pages/edit/index?hash=cd64a0efcffbfa583591f394ff3760069a63ad0e');
 }
 self.TFApp.bootstrapApp({ success });
}