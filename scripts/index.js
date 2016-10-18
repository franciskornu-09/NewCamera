(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("capturePhoto").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}
		
		document.getElementById("geolocation").onclick = function(){
			alert('Clicked');
			var watchId = navigator.geolocation.watchPosition(geolocationSuccess,onError,{enablehighAccuracy: true});
		}
		  
	
	};
	
	function geolocationSuccess(position){
		alert('Latitude: '+ position.coords.latitude +'<br />'+
				'Longitude: '+ position.coords.longitude + '<br />');
	}

	function onError(error){
		alert('code: ' + error.code + '\n' +
				'message: '+ error.message + '\n');
	}

	function onPhotoDataSuccess(imageData) {

		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}

})();
