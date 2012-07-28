var _OBJ = {};
_OBJ.net = {};

exports.sendRequest = function(_args) {
	_OBJ.net.lastHttpResult = false;
	_OBJ.net.apiRequestTries = 0;
	
	/*
		method, url, data, success(), error()
	*/
	var method = _args.method;
	var url = _args.url;
	var data = _args.data;
	var success = _args.success;
	var error = _args.error;
	var _win = _args.win;
		
	(function() { 
		
		var http = Titanium.Network.createHTTPClient({
			timeout: 10000
		});
		
		if (method == 'GET') {
			for (var i in data) {
				if (data.hasOwnProperty(i)) {
					url += '/' + escape(i) + '/' + escape(data[i]);
				}
			}
			data = {};
		}

		http.ondatastream = function (e) {
			Ti.API.info('http.ondatastream('+method+') ' + e.progress);
		};
		http.onsendstream = function (e) {
			Ti.API.info('http.onsendtream('+method+') ' + e.progress);
		};
		http.onreadystatechange = function(e){			
			Ti.API.info('current state is : '+ this.readyState );
		};
		
		http.onload = function () {
			Ti.API.log('HTTP Call Done.');
			 Ti.API.log(this.responseText);
			
			
			var resp;
			try {
				resp = JSON.parse(this.responseText);
				_OBJ.net.lastHttpResult = resp;
			} catch (e) {
				resp = false;
			}
			if (resp) {
				http = null;
			}
			
			if (success) {success(resp); }

		};

		http.onerror = function (e) {
			http = null;
			Ti.API.info('http error for '+method);
			Ti.API.debug(e);
			alert('We could not connect to the server.  Please ensure you have a working internet connection and try again.');
			if (error) {
				error(null);
			}
		};

		Ti.API.info('URL('+method+' - ' + App.server + url + '): ' + url);
		http.open(method, App.server + url, true);
		http.send(data);
		
	})();
	
	return _OBJ;
};
