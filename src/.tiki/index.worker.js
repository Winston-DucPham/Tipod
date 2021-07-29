if (self !== global) self = global;
if(!self.__tfAppInited) {
 self.__tfAppInited = 1;
require('./config.js?hash=f4b21167e1a31551405750a7e3b284c84b19cc7e');

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
require('../app.js?hash=7bb21e238b9b6b10816c60875ee186aaff72e6d4');
require('../pages/index/index?hash=04b61f676a278c8aac70910d4ea14ccd6f34ec9c');
require('../pages/list/index?hash=cfccc7370a96459d2f58665c91199265bb3ab1bc');
require('../pages/TV/index?hash=43556711fb6ae084649f379c44da139a1329946c');
require('../pages/radio/index?hash=5e0457e68509344055214ce5f04b5de6c2b0cebc');
require('../pages/record/index?hash=de045f537a96d49ae95a49aa48da3ba6bb7b02c8');
require('../pages/play/index?hash=8c2d6592843ea210ff06a2fdeb01fd5801b976d1');
 }
 self.TFApp.bootstrapApp({ success });
}