var fs = require('fs');
module.exports = {
	readfile : function(filename, count, callback) {
		if (!fs.existsSync(filename)) {
			callback(null);
			return;
		}
		var input = fs.createReadStream(filename);
		var remaining = '';
		var result = '';
		input.on('data', function(data) {
			remaining += data;
			var index = remaining.indexOf('\n');
			var readLine = 0;
			while (index > -1 && readLine < count) {
				var line = remaining.substring(0,index + 1);
				remaining = remaining.substring(index + 1);
				result += line;
				index = remaining.indexOf('\n');
				readLine += 1;
			}
			console.log('call read fs++++++++++++++++++++++')
			callback(result);
		});
	}
}