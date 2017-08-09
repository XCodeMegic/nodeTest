var mysql=require('mysql');
var config = require('./config');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.pass,
	database: config.data
});

console.log("host: " + config.host + ", user: " + config.user + ", pass: " + config.pass + ", data: " + config.data);

connection.connect();
//查询
/*connection.query('select count(*) from `tb_crash_info` where id="0"', function(err, rows, fields) {
    if (err) throw err;
    //console.log(fields);
	//console.log("query end: " + rows);
    for(var i = 0; i < rows.length; i++) {
    	// console.log(rows[i]);
	// var value = "";
	// for (var j in fields) {
	// 	value += "," + fields[j].name + ":" + rows[i][fields[j].name];
	// }
	// console.log(value);
		var row = rows[i];
		var value = '';
		for (var x in row) {
			value += x + ":" + row[x];
		}
		console.log(value);
}
});*/
var obj = new Object();
obj.crash_type = 'java-crash';
obj.crash_date = '201708103322';
obj.app_ver = '1.0';
obj.app_name = 'helloworld';
obj.platform = 'android-9.0';
obj.android_ver = '8.0';
obj.device_id = 'octs-haoga1235';
obj.stack_trace = 'hgaodfiahgiasdofiaogasdfhagklsd;jf;ajsdhgasdkfa;ghsdfja;dsjf';
//insert 
var query = 'insert into tb_crash_info (crash_type,crash_date,app_ver,app_name,platform,android_ver,device_id,stack_trace) values("' 
			+ obj.crash_type + '","' + obj.crash_date + '","' + obj.app_ver + '","' + obj.app_name + '","' + obj.platform + '","' + 
			obj.android_ver + '","' + obj.device_id + '","' + obj.stack_trace + '")';
query = 'select * from tb_crash_info where dumpfile="haha.log"';
connection.query(query, function(err, rows, fields) {
	if (err) {
		throw err;
	}
	if (rows == null) {
		console.log('rows is null');
	} else if (rows.length == 0) {
		console.log('rows is empty');
	}
	console.log(rows);
});
//关闭连接
connection.end();


/*var crypto = require('crypto');

var pass = 'longmaster';
var result = crypto.createHash('md5').update(pass).digest('hex');

console.log(result);*/
