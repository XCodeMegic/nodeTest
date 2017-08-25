var mysql=require('mysql');
var config=require('../config/dbconfig');

function querydb(query, callback) {
var connection = mysql.createConnection({
	host: config.dbserver,
	port: config.dbport,
	user: config.dbuser,
	password: config.dbpass,
	database: config.dbname
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

module.exports = {
	queryCrashInfoCount : function(type, callback) {
		var query = '';
		if (type == 'java' || type == 'jni') {
			query = "select count(*) from " + config.tablename + " where crash_type='" + type + "'";
		} else {
			query = 'select count(*) from ' + config.tablename;
		}
		querydb(query, function(data) {
			if (data.length == 0) {
				callback(0);
				return;
			}
			var countvalue = data[0];
			var count = 0;
			for (var i in countvalue) {
				count = countvalue[i];
			}
			callback(count);
		});
	},

	queryCrashInfo : function(type, index, callback) {
		var query = '';
		if (type == 'java' || type == 'jni') {
			query = "select id,app_ver,crash_date,crash_type from " + config.tablename + " where crash_type='" + type + "'";
		} else {
			query = 'select id,app_ver,crash_date,crash_type from ' + config.tablename;
		}
		query += ' order by id desc limit ' + index * 10 + ',10';
		console.log(query);
		querydb(query, callback);
	},

	queryCrashDetail : function(id, callback) {
		var query = "select id,app_name,app_ver,carrier_id,android_ver,platform,device_id,crash_type,crash_date,stack_trace from " + config.tablename + " where id='" + id + "'";
		querydb(query, function(data) {
			if (data.length == 0) {
				callback(null);
				return;
			}
			var info = data[0];
			callback(info);
		});
	},

	queryUser : function(username, callback) {
		var query = "select * from tb_query_user where username='" + username + "'";
		querydb(query, function(data) {
			if (data.length == 0) {
				callback(null);
				return;
			}
			var user = data[0];
			callback(user);
		});
	},

	queryExists : function (filename, callback) {
		var query = "select * from " + config.tablename + " where crash_type='c-crash' and dumpfile='" + filename + "'";
		querydb(query, callback);
	},

//----------------------insert info ------------------------------
	insertCrash : function(obj) {
		var query = 'insert into ' + config.tablename + ' (crash_type,crash_date,app_ver,app_name,platform,android_ver,device_id,dumpfile,carrier_id,stack_trace) values("' 
			+ obj.crash_type + '",now(),"' + obj.app_ver + '","' + obj.app_name + '","' + obj.platform + '","' + 
			obj.android_ver + '","' + obj.device_id + '","' + obj.dumpfile + '","' + obj.carrier_id + '","' + obj.stack_trace + '")';
		querydb(query, function(data) {
			//nothing to do
		});
	},
	deleteInfo : function(id) {
		var query = 'delete from ' + config.tablename + ' where id="' + id + '"';
		querydb(query, function(data) {
			//nothing to do
		});
	}
};