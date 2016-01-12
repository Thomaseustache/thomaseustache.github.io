$(document).ready(function(){
	$('body').hide().fadeIn(300);
	$('a').click(function(){
		hashUrl = $(this).attr('href');
		if( $(hashUrl).length ){
			$('html, body').animate({ scrollTop : $(hashUrl).offset().top }, 400);
		}else{
			$('body').fadeOut(300,function(){
				window.location.href = hashUrl;
			});
		}
		return false;
	});
	
	$('.tree-line .sentence').hide();
	$('.bulle').click(function(){
		linkTo = $(this).attr('data-link');
		if( $('.'+linkTo).length ){
			$('.tree-line .sentence').fadeOut(200);
			$('.'+linkTo+' .sentence').stop().fadeIn(300);
		}
		return false;
	});

});