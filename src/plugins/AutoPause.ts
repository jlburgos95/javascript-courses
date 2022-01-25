import MediaPlayer from '../MediaPlayer.js';

class AutoPause {
  //En typescript ya podemos usar el keyword private
  private threshold: number;
  player: MediaPlayer;

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

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    entry.intersectionRatio >= this.threshold
      ? this.player.play()
      : this.player.pause();
  }

  private handleVisibilityChange() {
    document.visibilityState === 'visible'
      ? this.player.play()
      : this.player.pause();
  }
}

export default AutoPause;
