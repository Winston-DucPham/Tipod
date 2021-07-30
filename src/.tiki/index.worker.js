if (self !== global) self = global;
if(!self.__tfAppInited) {
 self.__tfAppInited = 1;
require('./config.js?hash=cb10b84b2947af20e093799bfa72c5e2e48bda03');

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
require('../app.js?hash=9db18e0f9f4ae8986e1524af79c094a47f1ea85a');
require('../pages/index/index?hash=a4d2283512c0a55dd908e8b3aad8743893f0b883');
require('../pages/list/index?hash=ce794972794e36f065bea565fe4e23b44709dde2');
require('../pages/TV/index?hash=0e1eb0a230293c451d735211f0ae83945b955795');
require('../pages/radio/index?hash=bb5a418198d75f9e15ffac171f50b768c395d368');
require('../pages/record/index?hash=ef4c81d05bd149cde0548548459ed75bbd5ee80a');
require('../pages/play/index?hash=039e6b527e52da7ef8eff280017ab34090b654ef');
require('../pages/addmusic/index?hash=d22442547b594198768f388cc151f7a0c98c218a');
require('../pages/edit/index?hash=5fa1afa5aebbd59b6bf4b9d6c909162084f680c6');
 }
 self.TFApp.bootstrapApp({ success });
}