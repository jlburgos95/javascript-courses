class AutoPlay {
  run(player) {
    player.mute();
    player.togglePlay();
  }
}

export default AutoPlay;
