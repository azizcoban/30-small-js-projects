
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();

  key.classList.add('playing');
}

const removeTransition = (e, key) => {
  if(e.propertyName === 'transition') return; // skip it if it is not a transform
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (e, key) => removeTransition(e, key)));
window.addEventListener('keydown', playSound);
