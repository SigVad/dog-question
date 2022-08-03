const buttonReady = document.querySelector('.button__ready');
const buttonPlay = document.querySelector('.button__play');
const buttonTrue = document.querySelector('.button__true');
const buttonFalse = document.querySelector('.button__false');
const soundList = Array.from(document.querySelectorAll('.sound'));

function getStart(evt) {
  evt.preventDefault();
  const sound = evt.target.closest('.button').querySelector('.sound');
  console.log(sound.id);
  if (sound.paused || sound.ended) {
    getOffAll();
    getPlay(sound);
  }
  else {
    getOff(sound)
  }
};

function getPlay(sound) {
  sound.play();
  if (sound.id === 'soundPlay') {
    sound.volume = 0.8;
  };
};
function getOff(sound) {
  sound.pause();
  sound.currentTime = 0;
};
function getOffAll() {
  soundList.forEach(item => {
    getOff(item)
  });
};

buttonReady.addEventListener('click', getStart);
buttonPlay.addEventListener('click', getStart);
buttonTrue.addEventListener('click', getStart);
buttonFalse.addEventListener('click', getStart);
