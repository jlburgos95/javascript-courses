const video = document.querySelector('.movie');
const btn_play = document.querySelector('.btn-play');

class mediaPlayer {
  constructor(videoEl) {
    this.videoEl = videoEl;
  }
  togglePlay() {
    if (this.videoEl.paused) {
      this.videoEl.play();
    } else {
      this.videoEl.pause();
    }
  }
}

const mediaVideo = new mediaPlayer(video);

btn_play.onclick = function () {
  mediaVideo.togglePlay();
};
