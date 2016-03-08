$(document).ready(function(){
	$('body').hide().fadeIn(300);
	
	$('.navigation li a').click(function(){
		hashUrl = $(this).attr('href');
		if( $(hashUrl).length ){
			$('html, body').animate({ scrollTop : $(hashUrl).offset().top }, 400);
			return false;
		}
	});
	
	$('.case').click(function(){
		caseNb = $(this).attr('data-case');
		$('.grid').after('<div class="overlay"></div>');
		$('.overlay').click(function(){
			$('.popin-case,.next-case,.prev-case').hide().removeClass('active');
			$('.overlay').remove();
		});
		$('.next-case,.prev-case').show();
		$('.popin-case#'+caseNb).show().addClass('active');
		$('html, body').animate({ scrollTop : $('.popin-case.active').offset().top }, 400);
		return false;
	});
	$('.next-case').click(function(){
		next = $('.popin-case.active').next('.popin-case');
		console.log('next : ', next, next.length);
		if( next.length ){
			$('.popin-case').hide().removeClass('active');
			next.show().addClass('active');
			$('html, body').animate({ scrollTop : $('.popin-case.active').offset().top }, 400);
		}
	});
	$('.prev-case').click(function(){
		next = $('.popin-case.active').prev('.popin-case');
		console.log('prev : ', next);
		if( next.length ){
			$('.popin-case').hide().removeClass('active');
			next.show().addClass('active');
			$('html, body').animate({ scrollTop : $('.popin-case.active').offset().top }, 400);
		}
	});
	
	
	if( $(window).width() > 640 ){
		$('.tree-line .sentence').hide();
		$('.bulle').removeClass('active');
		$('.bulle').click(function(){
			$(this).addClass('active');
			linkTo = $(this).attr('data-link');
			if( $('.'+linkTo).length ){
				$('.tree-line .sentence').fadeOut(200);
				$('.'+linkTo+' .sentence').stop().fadeIn(300);
			}
			return false;
		});
	}else{
		$('.header').click(function(){
			$('.header .navigation').stop().slideToggle(300);
		});
	}

});