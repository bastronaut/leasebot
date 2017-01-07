var player = document.getElementById('player');






function requestMicrophonePermission() {
  navigator.mediaDevices.getUserMedia({
  		audio: true,
  		video: false
  	})
  	.then(handleSuccess).catch(handleError)
}





var handleSuccess = function(stream) {
	if (window.URL) {
    console.log('window.url');
		player.src = window.URL.createObjectURL(stream);
	} else {
		player.src = stream;
	}
};


function handleError(error) {
	if (error.name) {
		if (error.name === "DevicesNotFoundError") {
			showDeviceNotFoundError(error);
		} else {
			console.log(error);
		}
	}
}

function showDeviceNotFoundError(error) {
	console.log('device not found', error);
}


// problem: permissions.query for microphone is not yet suppored in chrome
function requestPermissionIfNotYetGranted() {
	navigator.permissions.query({name:'microphone'}).then(function(result) {
		if (result.state == 'granted') {
			console.log('permission already granted');
		} else if (result.state == 'prompt') {
      requestMicrophonePermission();
		} else if (result.state == 'denied') {
			console.log('permission was denied, need to clear cookies probably?');
		}
		console.log(result);
	});
}
