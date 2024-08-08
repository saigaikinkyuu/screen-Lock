function checkFullScreen() {
  if (document.fullscreenElement) {
    iconChange(false)
  } else {
    documentElement.requestFullscreen();
    iconChange(true)
  }
}

document.addEventListener('fullscreenchange', () => {
  checkFullScreen();
});

function iconChange(flag){
  if(flag === true){
    document.getElementById("icon").textContetn = "lock"
  }else {
    document.getElementById("icon").textContetn = "lock_open"
  }
}
