$(function(){
	$('#btn-ok').on('click',function() {
		var time = new Date();
		time = time.getTime();
		var username = $("input[name='username']").val();
		var password = $("input[name='userpass']").val();
		password = $.md5(password);

		var sign = $.md5(time + password);
		$.ajax({
			type: 'post',
			url: "/login",
			data:{
				'username':username,
				'logindate':time,
				'sign':sign
			},
			dataType: 'json',
			success:function(data) {
				if (data.result == 'OK') {
					$(location).attr('href', '/');
				} else {
					alert('error account info!');
				}
			},
			error:function() {
				alert('sign in error!');
			}
		});
	});
});