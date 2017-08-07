$(function(){
	$('#btn-search').on('click',function() {
		var value = $("input[name='search_type']:checked").data('value');
		$.ajax({
			type:'post',
			url:'/query/info_count',
			data:{'search_type':value},
			dataType:'json',
			success:function(data) {
				var page_index = $('#page-index').data('index');
				var page_count = Math.ceil(data.count/10);
				$('#page-index').html(page_index + '/' + page_count);
				$('#page-index').data('count') = page_count;
			},
			error:function() {
				alert('error to get page count!');
			}
		});
		$.ajax({
			type:'post',
			url:'/query/info',
			data:{'search_type':value},
			dataType:'json',
			success:function(datax) {
				$('#left_body').empty();
				var crashes = datax;
				for (var i = 0; i < crashes.length; i++) {
					var crash = crashes[i];
					var doc = "<div class='left-item' data-id='" + crash.id + "'>" + crash.app_name + '_' + crash.crash_date + "</div>";
					$('#left_body').append(doc); 
					// alert(doc);
				}
			},
			error:function() {
				alert('error to get crash info');
			}
		});
	});
	$('#left_body').delegate('.left-item','click',show_details);
});

function show_details() {
	var id = $(this).data('id');
	$.ajax({
		type:'post',
		url:'/query/detail',
		data:{'crash_id':id},
		dataType:'json',
		success:function(data) {
			$('#mid_body').empty();
			for (var x in data) {
				var doc = "<div class='mid_item_title'>" + x + ":</div>";
				$('#mid_body').append(doc);
				doc = "<div class='mid_item'>" + data[x] + '</div>';
				$('#mid_body').append(doc);
			}
		},
		error:function() {
			alert('query crash info error');
		}
	});
}