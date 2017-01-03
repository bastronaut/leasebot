var recorder = document.getElementById('recorder');
var player = document.getElementById('player');

recorder.addEventListener("change", function(e) {
  var file = e.target.files[0];
  // Do something with the audio file.
  player.src =  URL.createObjectURL(file);
});




var playertwo = document.getElementById('player');

var handleSuccess = function(stream) {
  if (window.URL) {
    playertwo.src = window.URL.createObjectURL(stream);
  } else {
    playertwo.src = stream;
  }
};

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(handleSuccess)
