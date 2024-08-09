var number_pass = ""
function checkFullScreen() {
  if (document.fullscreenElement) {
    iconChange(false)
  } else {
    const documentElement = document.documentElement;
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
  if (event.keyCode === 115 || event.keyCode === 17) {
    event.preventDefault();
  }
  if (event.keyCode === 27) {
    document.exitFullscreen();
  }
  if(event.keyCode <= 48 && event.keyCode >= 57){
    number_pass += event.keyCode-48
    if(number_pass.length === 6){
      $.getJSON("https://script.google.com/macros/s/AKfycbxOFLC9LnmR34UiRXRx8bgOd8XGF1xVBT0uSA6J0DqwEtBbwf0enPj2BUbwWoyTO-Kl/exec?k=check" + number_pass, function (data) {
        if(data.sattus === "Success"){
          document.exitFullscreen();
        }
      })
    }
  }
});

function setPass(){
  $.getJSON("https://script.google.com/macros/s/AKfycbxOFLC9LnmR34UiRXRx8bgOd8XGF1xVBT0uSA6J0DqwEtBbwf0enPj2BUbwWoyTO-Kl/exec?k=check" + number_pass, function (data) {
    if(data.sattus === "Success"){
      console.log("ワンタイム・パスコードを発行しました。")
    }
  })
}
