function AppWindow(){
	
	var self, map, city1, city1Btn,city2, city3; 
	
	self = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
	Ti.Geolocation.purpose = "Viewing Cities in India";
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	
		city1Btn = Ti.UI.createButton({
			systemButton: Ti.UI.iPhone.SystemButton.DISCLOSURE	
		});
		
			city1Btn.addEventListener('click', function(){
				var nextWindow = Ti.UI.createWindow({
					backgroundColor: '#fff',
					
				});
				
					nextWindow.add(
						Ti.UI.createWebView({ url: 'http://www.bengaluruairport.com/'})
					);
					nextWindow.open({
						transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
					});
			});
		
		// 3.197890, 77.706329 airport GPS
		city1 = Ti.Map.createAnnotation({
			animate: true,
			latitude: 13.197890,
			longitude: 77.706329,
			pinColor: Ti.Map.ANNOTATION_GREEN, 
			//rightView: city1Btn,
			rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE,
			title: 'BLR Airport',
			subtitle: 'World Greatest Airport'
		});
			city1.addEventListener('click', function(e){
				if ( e.clicksource === 'rightButton'){
					var nextWindow = Ti.UI.createWindow({
						backgroundColor: '#fff',
						
					});
					
						nextWindow.add(
							Ti.UI.createWebView({ url: 'http://www.bengaluruairport.com/'})
						);
						nextWindow.open({
							transition: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
						});					
				}
			});
		
		//12.970920, 77.604820
		//
		// Titanium.Map.SATELLITE_TYPE, HYBRID_TYPE, STANDARD_TYPE
		map = Ti.Map.createView({
			userLocation: true,
			annotations: [ city1 ],
			animate: true,
			mapType: Titanium.Map.HYBRID_TYPE,
			region: {
				longitude: 77.604820,
				latitude: 12.970920,
				latitudeDelta: 3.60,
				longitudeDelta:3.60
			}
		});
	self.add( map );

			
		 
		
	// REturn the window object
	return self;
};

module.exports = AppWindow;
