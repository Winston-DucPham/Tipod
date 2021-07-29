function formatTime(time) {
  

  if (time > 60) {
    
    var minutes = Math.floor(time / 60);
    seconds = Math.floor(time - minutes*60); 

    return minutes + ":" + seconds;
  } else{
  
    fixtime = time.toFixed(0);
    return fixtime;
  
  }
  
}
Page({
  data:{
    playing: false,
  },
  audioContext: null,
  async onLoad() {
    this.audioContext = my.createAudioContext('audio1');
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
  seekNext() {
    if (this.audioContext) {
      this.audioContext.seek(this.currentTime + 10);
    }
  },
  seekPrev() {
    if (this.audioContext) {
      this.audioContext.seek(this.currentTime - 10);
    }
  }
})