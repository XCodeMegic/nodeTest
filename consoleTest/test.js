

var value = {'all':[
		{'name':'zhaoqing','age':118,'class':2,'id':'0098'},
		{'name':'longzhou','age':28,'class':1,'id':'0099'},
		{'name':'piaomiao','age':119,'class':2,'id':'0097'},
		{'name':'biyao','age':120,'class':1,'id':'0096'},
		]};

console.log(value.all.length);

/*var users = value.all;
for (var i = 0; i < users.length; i++) {
	var user = users[i];
	for (var x in user) {
		console.log(x + ":" + user[x]);
	}
}*/
var fs = require('fs');
function readfile(filename, count, callback) {
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

readfile('config.json', 20, function(value) {
	console.log(value);
});