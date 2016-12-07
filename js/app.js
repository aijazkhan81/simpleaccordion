$('.content').slideUp();

$('.heading').click(function(){
	$(this).next().slideToggle(500);
})