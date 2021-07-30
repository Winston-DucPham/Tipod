if (self !== global) self = global;
if(!self.__tfAppInited) {
 self.__tfAppInited = 1;
require('./config.js?hash=a58059d5eaa2c584230080db7dfbdc658c4bbec6');

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
require('../app.js?hash=da9de61bac638693b784e567438d87684a998e14');
require('../pages/index/index?hash=ee0dbcb8c6979fd06a8b9e284b44dd1b296509cf');
require('../pages/list/index?hash=1bdcd89cd1260fd3f602a9632fc98a313c768382');
require('../pages/TV/index?hash=bdac436e26130b8657c025308b7e898f759113b3');
require('../pages/radio/index?hash=00e31edad1de6091c5ce5e20a39318adcec5c1a3');
require('../pages/record/index?hash=7867db12d5eceb3855307b1f23331d81ab0e40bf');
require('../pages/play/index?hash=19a57712a29b1f72ad7fa17796b1aa48c0b4a60f');
require('../pages/addmusic/index?hash=735d314960f246964e3ec9ca24be79214870af09');
require('../pages/edit/index?hash=94ad2db4e9edeb7fb2605d089ad38868075302de');
 }
 self.TFApp.bootstrapApp({ success });
}