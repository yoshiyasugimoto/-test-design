window.onload = function () {
  var my_audio = new Audio("get_music.wav");
  //ボタンにクリックイベントを設定
  document.getElementById("music-btn").onclick = function () {
    my_audio.currentTime = 0; //再生開始位置を先頭に戻す
    my_audio.play(); //サウンドを再生
  };
};
