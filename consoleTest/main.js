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
connection.query('select count(*) from `tb_crash_info` where id="0"', function(err, rows, fields) {
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
});
//关闭连接
connection.end();


/*var crypto = require('crypto');

var pass = 'longmaster';
var result = crypto.createHash('md5').update(pass).digest('hex');

console.log(result);*/
