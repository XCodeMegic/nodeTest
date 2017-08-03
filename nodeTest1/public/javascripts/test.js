$(function(){
	$('.top_menu').on('click',function() {
		var dataid = $(this).data('id');
		alert(dataid);
	});
	$('#test').on('click',function() {
		var div = $('#mid_body');
		div.append('<div class="top_menu" data-id="test">hahah</div>');
	});
});

//function 