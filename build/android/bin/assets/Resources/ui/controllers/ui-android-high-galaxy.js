(function(){

	App.ui.android.galaxy = {};

	App.ui.android.galaxy.createMainWindow = function(){
		var win = Ti.UI.createWindow({
			id: "androidMainWindow",
		//	backgroundImage: '/images/android-' + App.ui.density + '-background-wood.png'
		});
		
			App.ui.android.topBar = App.ui.android.galaxy.createTopBar();
			
			App.ui.android.viewContact = App.ui.android.galaxy.createSubView('');
				App.ui.android.viewContact.hide();
			App.ui.android.viewOrder = App.ui.android.galaxy.createSubView('');
				App.ui.android.viewOrder.hide();
			App.ui.android.viewMenu = App.ui.android.galaxy.createSubView('');
				App.ui.android.viewMenu.hide();
			App.ui.android.viewHome = App.ui.android.galaxy.createSubView('');
			
			
			App.ui.android.bottomBar = App.ui.android.galaxy.createBottomBar();
			
			// Adding the custom Top Bar for Galaxy
			win.add( App.ui.android.topBar );
			
			// Adding the custom Views for Galaxy Tab
			win.add( App.ui.android.viewContact );
			win.add( App.ui.android.viewOrder );
			win.add( App.ui.android.viewMenu );
			win.add( App.ui.android.viewHome );
			
			// Adding the custom Bottom Bar for Galaxy
			win.add( App.ui.android.bottomBar );

		Ti.App.addEventListener('app:showAlert', function(e){
			win.add( App.ui.android.loadingIndicator );			
			App.ui.android.loadingIndicator.show();
			
			// Start the http Request
			if ( Ti.Network.online ){
				App.http.sendRequest({
					method: 'POST',
					url: '',
					success: function(data){
						

						// Hide Alert
						Ti.App.fireEvent('app:hideAlert');
					}
				});
			} else {
				alert('No network connection available. Check your phone settings');
			}
			
		});
		
	
		Ti.App.addEventListener('app:hideAlert', function(e){

			App.ui.android.loadingIndicator.hide();			
			win.remove( App.ui.android.loadingIndicator );
		}); 				

		return win;
	};
		
	App.ui.android.createSubView = function(/*String*/section){
		var temp = require('views/android-' + App.ui.density + '-galaxy-' + section).load();
		return temp.view;
	};	

	App.ui.android.galaxy.createTopBar = function(){
		var _view = Ti.UI.createView({
			height: '44dp',
			width: App.ui.pWidth,
			backgroundImage: '/images/android-' + App.ui.density + '-galaxy-topbar.png',
			top: 0,
			backgroundColor: '#000'
		});
		
		return _view;
	};
	
	App.ui.android.galaxy.createSubView = function(/*String*/section){
		var temp = require('/views/android-' + App.ui.density + '-galaxy-' + section).load();
		return temp.view;
	};

	App.ui.android.galaxy.createBottomBar = function(){

			var _view = Ti.UI.createView({
				height: '60dp',
				width: '320dp',
				layout: 'horizontal',
				backgroundImage: '/images/android-' + App.ui.density + '-bottombar.png',
				bottom: 0
			});
			
				App.ui.android.btn1 = Ti.UI.createButton({
					width: App.ui.pWidth / 4,
					height: '60dp',
					backgroundImage: '/images/nav-home.png'
				});
				
					App.ui.android.btn1.addEventListener('touchend', function(e){
						
						// Switch screens
					//	App.ui.android.high.view5.hide();	
					//	App.ui.android.high.view4.hide();
					//	App.ui.android.high.view2.hide();
					//	App.ui.android.high.view3.hide();
					//	App.ui.android.high.view1.show();
						
						// Set Title Bar Image
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-galaxy-topbar-home.png');
												
					});
					
					
				App.ui.android.btn2 = Ti.UI.createButton({
					width: App.ui.pWidth / 4,
					height: '60dp',
					backgroundImage: '/images/nav-order.png'			
				});
				
					App.ui.android.btn2.addEventListener('touchend', function(e){
						// Switch screens
						//	App.ui.android.high.view5.hide();	
						//	App.ui.android.high.view4.hide();
						//	App.ui.android.high.view1.hide();
						//	App.ui.android.high.view3.hide();
						//	App.ui.android.high.view2.show();
						
						// Set Title Bar Image
					//	App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-galaxy-topbar-order.png');				
					});
				
				App.ui.android.btn3 = Ti.UI.createButton({
					width: App.ui.pWidth / 4,
					height: '60dp',
					backgroundImage: '/images/nav-menu.png'			
				});
	
					App.ui.android.btn3.addEventListener('touchend', function(e){
						// Switch screens
						//	App.ui.android.high.view5.hide();	
						//	App.ui.android.high.view4.hide();
						//	App.ui.android.high.view2.hide();
						//	App.ui.android.high.view1.hide();
						//	App.ui.android.high.view3.show();
						
						// Set Title Bar Image
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-galaxy-topbar-menu.png');				
					});
					
				App.ui.android.btn4 = Ti.UI.createButton({
					width: App.ui.pWidth / 4,
					height: '60dp',
					backgroundImage: '/images/nav-contact.png'			
				});	
				
					App.ui.android.btn4.addEventListener('touchend', function(e){
						// Switch screens
						//	App.ui.android.high.view5.hide();	
						//	App.ui.android.high.view1.hide();
						//	App.ui.android.high.view2.hide();
						//	App.ui.android.high.view3.hide();
						//	App.ui.android.high.view4.show();
						
						// Set Title Bar Image
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-galaxy-topbar-contact.png');				
					});	
	
			_view.add( App.ui.android.btn1  );
			_view.add( App.ui.android.btn2  );
			_view.add( App.ui.android.btn3  );
			_view.add( App.ui.android.btn4  );		
			
			return _view; 		
 		
 	};
	
})();