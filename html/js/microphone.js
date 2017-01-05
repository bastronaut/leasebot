var recorder = document.getElementById('recorder');
var player = document.getElementById('player');

recorder.addEventListener("change", function(e) {
	var file = e.target.files[0];
	// Do something with the audio file.
	player.src = URL.createObjectURL(file);
});




var playertwo = document.getElementById('player');

var handleSuccess = function(stream) {
	if (window.URL) {
		playertwo.src = window.URL.createObjectURL(stream);
	} else {
		playertwo.src = stream;
	}
};

navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false
	})
	.then(handleSuccess)






let shouldStop = false;
let stopped = false;
const downloadLink = document.getElementById('download');
const stopButton = document.getElementById('stop');

stopButton.addEventListener('click', function() {
	shouldStop = true;
})

var handleSuccess = function(stream) {
	const options = {
		mimeType: 'video/webm;codecs=vp9'
	};
	const recordedChunks = [];
	const mediaRecorder = new MediaRecorder(stream, options);

	mediaRecorder.addEventListener('dataavailable', function(e) {
		if (e.data.size > 0) {
			recordedChunks.push(e.data);
		}

		if (shouldStop === true && stopped === false) {
			mediaRecorder.stop();
			stopped = true;
		}
	});

	mediaRecorder.addEventListener('stop', function() {
		downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
		downloadLink.download = 'acetest.wav';
	});

	mediaRecorder.start();
};

navigator.mediaDevices.getUserMedia({
		audio: true,
		video: false
	})
	.then(handleSuccess);
