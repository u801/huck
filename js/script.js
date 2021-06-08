window.addEventListener("load", function(event) {
	PR.prettyPrint()
});

// Q1
// ボックスを表示して、タイマーを開始
function showBox() {
  document.getElementById("temporaryBox").style.display = "block"; // ボックスを表示
  timerId = setTimeout( closeBox , 30000 ); // タイマーを開始
  document.getElementById("btnShowBox").disabled = true; // 表示用ボタンを無効化
}
// ボックスを消して、タイマーを終了
function closeBox() {
  document.getElementById("temporaryBox").style.display = "none"; // ボックスを消す
  clearTimeout( timerId ); // タイマーを終了
  document.getElementById("btnShowBox").disabled = false; // 表示用ボタンを有効化
}

$(function(){
  $('#js-target').t({
    speed:5,
    // speed_vary:true,
  });
});


