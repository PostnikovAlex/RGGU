$(document).ready(function(){

	$('.tab').bind('click', function(){
	$( '.tab' ).removeClass('active');
	$('.tab-inner').removeClass('tab-active');
	$( this ).addClass('active');
	var i = $(this).index();
	$('.tab-inner').each(function(){
		if($(this).index() == i){
			$(this).addClass('tab-active');
		}
	})
	});
}); 

