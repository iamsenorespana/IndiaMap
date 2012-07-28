(function(){

	App.ui.android = {
		topBar: null,
		view1: null,
		btn1:  null,
		view2: null,
		btn2:  null,
		view3: null,
		btn3:  null,
		view4: null,
		btn4:  null,
		view5: null,
		btn5:  null		
	};
	
	App.ui.android.createErrorWindow = function(){
		var _win = Ti.UI.createWindow({
			
		});
		
			var _label = Ti.UI.createLabel({
				text: 'App will not run on this device',
				color: '#000',
				font: {
					fontSize: 18,
					fontWeight: 'bold'
				}
			});
			
			_win.add(_label);
				
		return _win;
	};	

	App.ui.android.loadingIndicator =  Ti.UI.createActivityIndicator({
			  color: '#FFF',
			  font: {fontFamily:'Helvetica Neue', fontSize:22, fontWeight:'bold'},
			  message: 'Loading App Data...',
			  top:10,
			  left:10,
			  height:'auto',
			  width:'auto'
	});
		
	App.ui.android.createSubView = function(/*String*/section){
		var temp = require('/views/android-' + App.ui.density + '-' + section).load();
		return temp.view;
	};
	
})();