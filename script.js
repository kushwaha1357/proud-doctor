function reveal() {
  document.getElementById("moreMessage").classList.remove("hidden");
  playMusic();
}

function playMusic() {
  const audio = document.getElementById("bgMusic");
  if (audio.paused) {
    audio.play().catch(e => console.log('Autoplay blocked:', e));
  }
}

// Auto play when touched or interacted
document.addEventListener("click", playMusic);
document.addEventListener("touchstart", playMusic);
