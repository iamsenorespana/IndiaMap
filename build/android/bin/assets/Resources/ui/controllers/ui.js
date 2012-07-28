(function(){

	App.ui = {
		density: Ti.Platform.displayCaps.density,
		pHeight: Ti.Platform.displayCaps.platformHeight,
		pWidth: Ti.Platform.displayCaps.platformWidth
	};
	
	
	App.ui.w = function(_args){
		return Ti.UI.createWindow(_args);
	};
	
	App.ui.v = function(_args){
		return Ti.UI.createView(_args);
	};
	
	App.ui.btn = function(_args){
		return Ti.UI.createButton(_args);
	};
	
	App.ui.img = function(_args){
		return Ti.UI.createImageView(_args);
	};
	
	App.ui.web = function(_args){
		return Ti.UI.createWebView(_args);
	};
	
	App.ui.table = function(_args){
		return Ti.UI.createTableView(_args);
	};
	
	App.ui.createCustomNavGroup = function(){
		var _navWin = Ti.UI.createWindow({
			 id: "navGroupWrapperWindow"
		});
		
			App.ui.iphone.rootWindow = createRootWindow();
			
			App.mainNav = Ti.UI.iPhone.createNavigationGroup({
				window: App.ui.iphone.rootWindow
			});
			
			_navWin.add(App.mainNav);

			function createRootWindow(){
				App.ui.iphone.rootWindow = Ti.UI.createWindow({
					id: "mainWindow"
				});
				
					//App.ui.iphone.rootWindow.setTitleImage('images/title-home.png');
							
					App.ui.iphone.viewMasterWrapper = Ti.UI.createView({
						width: 1280,
						bottom: 60,
						top: 1,
						left: 0,
						height: '100%',
						backgroundColor: 'red'
					});	
					
					App.ui.iphone.viewMaster.add( App.ui.iphone.createSubView('home') );	
			};
			
			function moveWrapperScreen(_args){
				App.ui.iphone.viewMasterWrapper.animate({
					left: _args,
					duration: 500
				});				
			};
			
			function createBottomBar(){
				var _view = Ti.UI.createView({
					id: "bottomBar",
					layout: 'horizontal'
				});

				App.ui.iphone.btn1 = Ti.UI.createButton({
					backgroundImage: 'ui/images/nav-home.png',
					width: 80,
					height: 60
				});
					App.ui.iphone.btn1.addEventListener('click', function(e){
						App.ui.iphone.moveScreen(0);
						//App.ui.iphone.rootWindow.setTitleImage('images/title-home.png');
					});
					
				_view.add(App.ui.iphone.btn1);

				App.ui.iphone.btn2 = Ti.UI.createButton({
					backgroundImage: 'ui/images/nav-menu.png',
					width: 80,
					//left: 80,
					height: 60
				});
					App.ui.iphone.btn2.addEventListener('click', function(e){
						App.ui.iphone.moveScreen(-320);
						//App.ui.iphone.rootWindow.setTitleImage( 'images/title-menu.png' ); //
					});
				_view.add(App.ui.iphone.btn2);				

				App.ui.iphone.btn3 = Ti.UI.createButton({
					backgroundImage: 'ui/images/nav-order.png',
					width: 80,
					//left: 160,
					height: 60
				});
					App.ui.iphone.btn3.addEventListener('click', function(e){
						App.ui.iphone.moveScreen(-640);
						//App.ui.iphone.rootWindow.setTitleImage('images/title-order.png');
					});
				_view.add(App.ui.iphone.btn3);				

				App.ui.iphone.btn4 = Ti.UI.createButton({
					backgroundImage: 'ui/images/nav-contact.png',
					width: 80,
					//left: 240,
					height: 60
				});
					App.ui.iphone.btn4.addEventListener('click', function(e){
						App.ui.iphone.moveScreen(-960);
						//App.ui.iphone.rootWindow.setTitleImage('images/title-contact.png');
					});
				_view.add(App.ui.iphone.btn4ffa);				
				
				return _view;				
			};
			
			function createSubView(/*String*/sectionName){
		 		var tempView = require('ui/views/iphone-' + sectionName).load();
				return tempView.view;				
			}
			
		
		return _navWin;		
	};
	
	
	App.ui.createAppTabGroup = function(_args){
		
		var winSettings = ( _args.win != null )? _args.win : null;
		var tabKeywords = ( _args.keywords )? _args.keywords: 'home';
		var tabIcons    = ( _args.icons )? _args.icons: null;
		var tabTitles   = (_args.titles )? _args.titles : 'Home';
		
		var tabGroup = Titanium.UI.createTabGroup({
			allowUserCustomization: false,
			id: "tabGroupStyle"
		});
		
		var sections = tabKeywords;  
		var sectionsCount = sections.length;
		 		
		for(var i=0;i<sectionsCount;i++){
			 
			var myTabWindow = Ti.UI.createWindow(winSettings);
				myTabWindow.setTitle(tabTitles[i]);
				myTabWindow.add( createTabWindowView(tabKeywords[i]) );
				
			var myTab = Titanium.UI.createTab({
				window: myTabWindow,
				icon :  ( tabIcons[i] )? tabIcons[i]: null,
				title : (tabTitles[i] )? tabTitles[i]: null
			});
			tabGroup.addTab( myTab );
		}
		
		tabGroup.setActiveTab(0);
		
					
			function createTabWindowView(/*String*/sectionName){
				Ti.API.error('creating ' + App.os + 'window view for Tab: ' + sectionName );
				var myWindow = require('ui/views/' + App.os + '-' + sectionName).load();
				return myWindow.view;
			};
		
		return tabGroup;
			
	};
	
})();