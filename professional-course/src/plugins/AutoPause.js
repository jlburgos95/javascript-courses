class AutoPause {
  constructor() {
    this.threshold = 0.25;
    //Se le agrega el contexto de la clase para poder utilizar el player dentro del handler
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleIntersection(entries) {
    const entry = entries[0];
    entry.intersectionRatio >= this.threshold
      ? this.player.play()
      : this.player.pause();
  }

  handleVisibilityChange() {
    document.visibilityState === 'visible'
      ? this.player.play()
      : this.player.pause();
  }
}

export default AutoPause;
