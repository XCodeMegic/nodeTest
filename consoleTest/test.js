

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
	console.log(filename);
	if (!fs.existsSync(filename)) {
		callback(null);
		return;
	}
	var input = fs.createReadStream(filename, {autoClose:true});
	var remaining = '';
	var result = '';
	var readLine = 0;
	input.on('data', function(data) {
		if (readLine >= count) {
			return;
		}
		console.log('======= on data =============' + readLine);
		remaining += data;
		var index = remaining.indexOf('\n');
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
	input.on('end', ()=>{
		console.log('=-=-=-=-=-=-=-=-==-=-=-=-=-=');
	});
}


//var {spawn} = require('child_process');
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;
var cmd = '/bin/sh';
var arg1 = 'tools/test.sh';
// var arg1 = './tools/perform.sh';
//cmd = 'tools/tools/minidump_stackwalk';
var arg10 = 'tools/tools/symbols/';
var arg11 = '>';
var arg2 = '/home/uuu/Documents/node-test/consoleTest/temp/a4b79d9d-7c4a-4d05-3655428b-e4e444a3.dmp';
var arg3 = '/home/uuu/Documents/node-test/consoleTest/crash-log/haha.log';

/*var worker = spawn(cmd,args,{
       cwd: null,
       env: null,
       windowsVerbatimArguments: false
   });*/

var worker = spawn(cmd,[arg1, arg2, arg3]);
worker.on('close',(code) => {
	console.log('++++++++++++++++++++++++end');
});

worker.stdout.on('data', (data) => {
	console.log('' + data);
});

worker.on('error', (data) => {
	console.log(data);
});

/*execFile(cmd,[src,'tools/tools/symbols/','>',dst], (err,stdout,stderr) => {
	if (err) {
		throw err;
	}
	console.log('OK');
});*/