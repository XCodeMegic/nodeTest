

var value = {'all':[
		{'name':'zhaoqing','age':118,'class':2,'id':'0098'},
		{'name':'longzhou','age':28,'class':1,'id':'0099'},
		{'name':'piaomiao','age':119,'class':2,'id':'0097'},
		{'name':'biyao','age':120,'class':1,'id':'0096'},
		]};

console.log(value.all.length);

var users = value.all;
for (var i = 0; i < users.length; i++) {
	var user = users[i];
	console.log(user.name);
}
