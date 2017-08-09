var fs = require('fs');
module.exports = {
	readfile : function(filename, count, callback) {
		if (!fs.existsSync(filename)) {
			callback(null);
			return;
		}
		console.log('-------------------------------------' + filename);
		var input = fs.createReadStream(filename);
		var remaining = '';
		var result = '';
		var readLine = 0;
		input.on('data', function(data) {
			if (readLine >= count) {
				//data will run more than one time
				return;
			}
			remaining += data;
			var index = remaining.indexOf('\n');
			while (index > -1 && readLine < count) {
				var line = remaining.substring(0,index + 1);
				remaining = remaining.substring(index + 1);
				result += line;
				index = remaining.indexOf('\n');
				readLine += 1;
			}
			callback(result);
		});
	},
	deleteFile : function(filename, callback) {
		if (fs.existsSync(filename)) {
			fs.unlink(filename, function(err) {
				if (err) {
					throw err;
				}
				if (callback != null) {
					callback();
				}
			});
		}
	}
}