function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

var keysChase = document.querySelectorAll('.key-chase'); // Selects Chase div
keysChase.forEach(key => key.addEventListener('transitionend', removeTransition));

var keysMarshall = document.querySelectorAll('.key-marshall'); // Selects Marshall div
keysMarshall.forEach(key => key.addEventListener('transitionend', removeTransition));

var keysSkye = document.querySelectorAll('.key-skye'); // Selects Skye div
keysSkye.forEach(key => key.addEventListener('transitionend', removeTransition));

var keysRubble = document.querySelectorAll('.key-rubble'); // Selects Rubble
keysRubble.forEach(key => key.addEventListener('transitionend', removeTransition));

var keysRocky = document.querySelectorAll('.key-rocky'); // Selects Rocky
keysRocky.forEach(key => key.addEventListener('transitionend', removeTransition));

var keysZuma = document.querySelectorAll('.key-zuma'); // Selects Zuma
keysZuma.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); // This places the audio clip
