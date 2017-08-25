var mysql=require('mysql');
var config=require('./config/dbconfig');


function querydb(query, callback) {
var connection = mysql.createConnection({
	host: config.carrier.host,
	port: config.carrier.port,
	user: config.carrier.user,
	password: config.carrier.pswd,
	database: config.carrier.dbname
});

connection.connect();
//查询
connection.query(query, function(err, rows, fields) {
	if (err) {
		throw err;
	}
	callback(rows);
});
//关闭连接
connection.end();
};

var query = 'select carrier_id,carrier_name from ' + config.carrier.tbname;

querydb(query, function (data) {
	console.log(data);
});
