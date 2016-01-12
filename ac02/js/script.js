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

});