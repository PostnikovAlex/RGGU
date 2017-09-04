$(function(){
	$('.inputwrap input').each(function(){
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	})

	$('.inputwrap textarea').each(function(){
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	})

	$('.inputwrap input').bind('keyup', function () {
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	});
	
	$('.inputwrap input').bind('change', function () {
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	});

	$('.inputwrap textarea').bind('keyup', function () {
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	});

	$('.inputwrap textarea').bind('change', function () {
		var inp = $(this).val();
		if (inp == "") {
			$(this).parents('.inputwrap').removeClass('filled');
		} else {
			$(this).parents('.inputwrap').addClass('filled');
		}
	});
})