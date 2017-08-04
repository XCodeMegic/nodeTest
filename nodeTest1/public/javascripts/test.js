$(function(){
	$('.top_menu').on('click',function() {
		var dataid = $(this).data('id');
		alert(dataid);
	});
	$('#test').on('click',function() {
		var search_types = document.getElementsByName('search_type');
		var value = "";
		for (var i=0; i < search_types.length; i++) {
			if (search_types[i].checked) {
				value = search_types[i].value;
			}
		}
		$.ajax({
			type:'post',
			url:'/query',
			data:{'search_type':value},
			dataType:'json',
			success:function(datax) {
				alert(JSON.stringify(datax));
				var users = datax.all;
				for (var i = 0; i < users.length; i++) {
					var user = users[i];
					var doc = "<div class='left-item' data-id='" + user.id + "'>" + user.name + "</div>";
					$('#left_menu').append(doc); 
					// alert(doc);
				}
			},
			error:function() {
				alert('error');
			}
		});
	});
});

//function 