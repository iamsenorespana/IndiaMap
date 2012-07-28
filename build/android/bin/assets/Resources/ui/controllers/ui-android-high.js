(function(){

	App.ui.android.high = {
		
	};

		App.ui.android.high.createMainWindow = function(){

			var win = Ti.UI.createWindow({
				id: "androidMainWindow",
				backgroundImage: '/images/android-' + App.ui.density + '-background-wood.png'
			});

					App.ui.android.topBar = App.ui.android.high.createTopBar();

					App.ui.android.view4 = App.ui.android.createSubView('');
						App.ui.android.view4.hide();
					App.ui.android.view3 = App.ui.android.createSubView('');
						App.ui.android.view3.hide();
					App.ui.android.view2 = App.ui.android.createSubView('');
						App.ui.android.view2.hide();
					App.ui.android.view1 = App.ui.android.createSubView('');


					App.ui.android.bottomBar = App.ui.android.high.createBottomBar();

				// Adding the Custom TopBar
				win.add( App.ui.android.topBar );
 			
				// Adding all the SubViews
				win.add( App.ui.android.view4 );
				win.add( App.ui.android.view3 );
				win.add( App.ui.android.view2 );
				win.add( App.ui.android.view1 );
 
				// Adding the Custom Bottom Bar
				win.add( App.ui.android.bottomBar );
				
			Ti.App.addEventListener('app:showAlert', function(e){
				App.ui.android.high.viewLogin = require('views/android-alert').load();			
				win.add( App.ui.android.high.viewLogin.view );

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
				//App.ui.iphone.viewLogin = null;		
				//_win.add( App.ui.iphone.viewLogin.view );
				win.remove( App.ui.android.high.viewLogin.view );

			}); 			
				  

			return win;		
		};
			
 	App.ui.android.high.createTopBar = function(){
		var _view = Ti.UI.createView({
			height: '44dp',
			width: '320dp',
			backgroundImage: '/images/android-' + App.ui.density + '-topbar.png',
			top: 0,
			backgroundColor: 'blue'
		});
		
		return _view; 				
 	};	

 	App.ui.android.high.createBottomBar = function(){

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
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-topbar-home.png');
												
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
					//	App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-topbar-order.png');				
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
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-topbar-menu.png');				
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
						//App.ui.android.topBar.setBackgroundImage('/images/android-' + App.ui.density + '-topbar-contact.png');				
					});	
	
			_view.add( App.ui.android.btn1  );
			_view.add( App.ui.android.btn2  );
			_view.add( App.ui.android.btn3  );
			_view.add( App.ui.android.btn4  );		
			
			return _view; 		
 		
 	};	
	

})();