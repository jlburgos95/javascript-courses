class MediaPlayer {
  constructor(config) {
    this.videoEl = config.el;
    this.plugins = config.plugins || [];
  }
  play() {
    this.videoEl.play();
  }
  pause() {
    this.videoEl.pause();
  }
  togglePlay() {
    if (this.videoEl.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.videoEl.muted = true;
  }
  unmute() {
    this.videoEl.muted = false;
  }
  toggleMute() {
    this.videoEl.muted = !this.videoEl.muted;
  }
  initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;
