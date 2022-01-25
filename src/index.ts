import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads/';

const video = document.querySelector('.movie');
const btn_play: HTMLElement = document.querySelector('.btn-play');
const btn_mute: HTMLElement = document.querySelector('.btn-mute');

const mediaVideo = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

btn_play.onclick = function () {
  mediaVideo.togglePlay();
};
btn_mute.onclick = function () {
  mediaVideo.toggleMute();
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch((error) => {
    console.log(error.message);
  });
}
