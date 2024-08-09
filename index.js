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
checkFullScreen()

document.addEventListener('keydown', function(event) {
  // 例: F5キーの更新を無効化
  if (event.keyCode === 115) {
    event.preventDefault();
  }
});
