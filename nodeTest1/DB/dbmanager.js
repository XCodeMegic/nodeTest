var mysql=require('mysql');
var config=require('../config/dbconfig');

function querydb(query) {
var result = null;
var connection = mysql.createConnection({
	host: config.dbserver,
	user: config.dbuser,
	password: config.dbpass,
	database: config.dbname
});

connection.connect();
//查询
connection.query(query, function(err, rows, fields) {
	if (err) throw err;
	result = rows;
});
//关闭连接
connection.end();
return result;
}

module.exports = {
	queryCrashInfo : function(type) {
		var query = "select * from tb_crash_info where crash_type=" + type;
		var results = querydb(query);

	}
}