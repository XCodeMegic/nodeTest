$(function(){
	$('#btn-search').on('click',function() {
		var value = $("input[name='search_type']:checked").data('value');
		show_info(0, parseInt(value));
	});
	$('#page-next').on('click', () => {
		var crash_type = $('page-next').attr('data-type');
		var index = parseInt($('#page-index').attr('data-index'));
		var count = parseInt($('#page-index').attr('data-count'));
		if (index < count) {
			show_info(index, crash_type);
		}
	});
	$('#page-prev').on('click', () => {
		var crash_type = $('#page-prev').attr('data-type');
		var indexstr = $('#page-index').attr('data-index');
		var countstr = $('#page-index').attr('data-count');
		var index = parseInt($('#page-index').attr('data-index'));
		var count = parseInt($('#page-index').attr('data-count'));
		if (index > 1) {
			show_info(index - 2, crash_type);
		}
	});
	$('#btn-delete').on('click', () => {
		var id = $('#mid_body').attr('data-id');
		if (id == null || id == '') {
			return;
		}
		$.ajax({
			type: 'post',
			url: '/query/delete',
			data:{'crash_id':id},
			dataType:'json',
			success : function(data) {
				$('#mid_body').attr('data-id','');
				$('#mid_body').empty();
				var index = parseInt($('#page-index').attr('data-index'));
				var crash_type = $('#page-prev').attr('data-type');
				if($('#left_body').children().length > 1) {
					index -= 1;
				} else {
					if (index > 1) {
						index -= 2;
					} else {
						index = 0;
					}
				}
				show_info(index, crash_type);
			},
			error : function() {
				alert('delete record error!');
			}
		});
	});
	$('#left_body').delegate('.left-item','click',show_details);
});

function show_info(index, crash_type) {
	$.ajax({
		type:'post',
		url:'/query/info_count',
		data:{'search_type':crash_type},
		dataType:'json',
		success : function(data) {
			var page_index = index + 1;
			var page_count = Math.ceil(data.count/10);
			$('#page-index').html(page_index + '/' + page_count);
			$('#page-index').attr({
				'data-index':page_index,
				'data-count':page_count
			});
			$('#page-prev').attr({'data-type':crash_type});
			$('#page-next').attr({'data-type':crash_type});

			if (page_index > 1) {
				$('#page-prev').attr('class','right');
			} else {
				$('#page-prev').attr('class', 'right-none');
			}
			if (page_count > page_index) {
				$('#page-next').attr('class','right');
			} else {
				$('#page-next').attr('class', 'right-none');
			}
		},
		error : function() {
			alert('error to fetch page count!');
		}
	});
	$.ajax({
		type:'post',
		url:'/query/info',
		data:{
			'search_type':crash_type,
			'pageno':index
		},
		dataType:'json',
		success : function(data) {
			$('#left_body').empty();
			var crashes = data;
			for (var i = 0; i < crashes.length; i++) {
				var crash = crashes[i];
				var doc = "<div class='left-item' data-id='" + crash.id + "'>" + crash.app_name + '_' + crash.crash_date + "</div>";
				$('#left_body').append(doc); 
			}
		},
		error : function() {
			alert('error to fetch crash info!');
		}
	});
}

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
				if (x == 'id') {
					$('#mid_body').attr('data-id',data[x]);
					continue;
				}
				var doc = "<div class='mid_item_title'>" + x + ":</div>";
				$('#mid_body').append(doc);
				doc = "<div id='mid_item_stack'><pre>" + data[x] + '</pre></div>';
				$('#mid_body').append(doc);
			}
		},
		error:function() {
			alert('query crash info error');
		}
	});
}