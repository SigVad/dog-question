const buttonReady = document.querySelector('.button__ready');
const buttonPlay = document.querySelector('.button__play');
const buttonTrue = document.querySelector('.button__true');
const buttonFalse = document.querySelector('.button__false');
const soundReady = buttonReady.querySelector('.sound');
const soundPlay = buttonPlay.querySelector('.sound');
const soundTrue = buttonTrue.querySelector('.sound');
const soundFalse = buttonFalse.querySelector('.sound');
const soundList = Array.from(document.querySelectorAll('.sound'));
const imgPlay = document.getElementById('imgPlay');

function getClick(evt) {
  evt.preventDefault();
  const sound = evt.target.closest('.button').querySelector('.sound');
  getStart(sound)
};
function getKeyUp(evt) {
  switch (evt.key) {
    case '1':
      getStart(soundReady)
      break
    case '2':
      getStart(soundPlay)
      break
    case '3':
      getStart(soundTrue)
      break
    case '4':
      getStart(soundFalse)
      break
  };
};
function getStart(sound) {
  if (sound.paused || sound.ended) {
    getOffAll();
    getPlay(sound);
  }
  else {
    getOff(sound)
  };
};
function getPlay(sound) {
  sound.play();
  if (sound.id === 'soundPlay') {
    sound.volume = 0.8;
    imgPlay.src = './stop.svg';
  };
};
function getOff(sound) {
  sound.pause();
  sound.currentTime = 0;
  if (sound.id === 'soundPlay') {
    imgPlay.src = './play.svg';
  };
};
function getOffAll() {
  soundList.forEach(item => {
    getOff(item)
  });
};

document.addEventListener('keyup', getKeyUp);
buttonReady.addEventListener('click', getClick);
buttonPlay.addEventListener('click', getClick);
buttonTrue.addEventListener('click', getClick);
buttonFalse.addEventListener('click', getClick);
