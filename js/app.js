$('.content').hide();
$( ".heading" ).append( '<span class="arrow"></span>' );


$('.heading').click(function(){
	var at = $(this).attr('data-heading');
	var con = $("[data-content='" + at + "']");
	con.slideToggle(200);
	if(con.attr('newTile')){
		con.removeAttr('newTile');
		var degree = 0;
		$(this).find( ".arrow" ).css({
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)',
			'zoom': 1
		});
	}
	else{
		con.attr('newTile', at);
		var degree = -90;
		$(this).find( ".arrow" ).css({
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-ms-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)',
			'zoom': 1
		});
	}
	
})

