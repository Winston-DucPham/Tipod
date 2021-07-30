const app = getApp();
Page({
  data: {},
  onChange(e) {
    console.log('onChange: ', e);
  },
  navigateTo(){
    my.navigateTo({url:'pages/record/index'});
  }
});