(function(){

	App.ui.android.zoom = {};
	
	App.ui.android.createSubView = function(/*String*/section){
		var temp = require('views/android-' + App.ui.density + '-zoom-' + section).load();
		return temp.view;
	};	

})();