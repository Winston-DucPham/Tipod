Page({
  data:{
    playing: false,
  },
  audioContext: null,
  async onLoad() {
    this.audioContext = my.createAudioContext('video');
  },
  onAudioTimeUpdate(e) {
    console.log(e);
    const { detail: { currentTime, duration } } = e;
    this.currentTime = currentTime;
    this.setData({
      progress: formatTime(currentTime),
      duration: formatTime(duration),
      progressPercent: currentTime / duration * 100,
    });
  },
 
  playTap() {
    const playing = !this.data.playing;
    this.audioContext.play();
    this.setData({ playing })
  },
  pauseTap(){
    const playing = !this.data.playing;
    this.audioContext.pause();
    this.setData({ playing })
  },
  navigateTo(){
    my.navigateTo({url:'pages/edit/index'});
  }
})