// Code for accordion
$(".content").hide();
$(".heading").append('<span class="arrow"></span>');


$('.heading').click(function(){
	var heading = $(this).attr('data-heading');
	var con = $("[data-content='" + heading + "']");
	con.slideToggle(200);
	if(con.attr('newTile')){
		con.removeAttr('newTile');
		$(this).find( ".arrow" ).css({
			'-webkit-transform': '',
			'-moz-transform': '',
			'-ms-transform': '',
			'-o-transform': '',
			'transform': '',
			'zoom': 1
		});
	}
	else{
		con.attr('newTile', heading);
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

// Code end for accordion

