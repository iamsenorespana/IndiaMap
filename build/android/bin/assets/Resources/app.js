

var Map = {
	os: Ti.Platform.osname
};

(function(){
	var AppWindow = require('AppWindow');
	var appWindow = new AppWindow();

		setTimeout( function(){
			appWindow.open({
				transition: ( Map.os === 'android' )? null : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
			});
			
		}, 2000);
		
})();

