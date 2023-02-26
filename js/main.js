let circle = document.querySelector('.circle')
startButton = document.querySelector('.startButton')
popupWrap = document.querySelector('.popup_wrap')
seconds = document.querySelector('.seconds')
allPatrons = document.querySelector('.all__patrons')
currentPatron = document.querySelector('.current__patron')

startButton.addEventListener('click', () => {
  popupWrap.style.display = 'none'
  startSecond()
})

function changeCirclePosition() {
  circle.style.position = `absolute`
  circle.style.top = `${Math.floor(Math.random() * 92)}%`
  circle.style.right = `${Math.floor(Math.random() * (92 - 2) + 2)}%`
}


function patrons() {
  if (currentPatron.textContent !== '0') {
    currentPatron.textContent--
    var weaponSound = new Audio('./sounds/glock/glock.wav');
    weaponSound.play();
    weaponSound.volume = 0.13
    console.log('currentPatron.textContent !== \'0\'')
    killed()
  } else if (currentPatron.textContent === '0') {
    console.log('currentPatron.textContent === \'0\'')
    circle.removeEventListener('click', changeSoundCircle)
    var weaponSoundClipout = new Audio('./sounds/glock/galil_clipin.wav');
    weaponSoundClipout.play();
    weaponSoundClipout.volume = 0.13
  }
}


function start() {
  circle.style.display = 'block'
  seconds.style.display = 'none'
  changeCirclePosition()
  document.addEventListener('click', ()=> {
    patrons()
  })
}

function startSecond() {
  if (seconds.textContent === '3') {
    var f = setInterval(() => {
      seconds.textContent--
      if (seconds.textContent === '0') {
        clearInterval(f)
        start()
      }
    }, 100)
  }

}

function changeSoundCircle() {
  var killedSound = new Audio('./sounds/killed.ogg');
  killedSound.play();
  changeCirclePosition()
}


function killed() {
  circle.addEventListener('click', changeSoundCircle)
}