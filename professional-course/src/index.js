import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('.movie');
const btn_play = document.querySelector('.btn-play');
const btn_mute = document.querySelector('.btn-mute');

const mediaVideo = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

mediaVideo.initPlugins();

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
