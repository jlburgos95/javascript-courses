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
    const player = {
      media: this.videoEl,
      play: () => this.play(),
      pause: () => this.pause(),
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
    this.plugins.forEach((plugin) => {
      plugin.run(player);
    });
  }
}

export default MediaPlayer;
