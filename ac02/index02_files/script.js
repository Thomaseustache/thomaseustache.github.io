$(document).ready(function(){
	$('body').hide().fadeIn(300);
	
	$('.navigation li a').click(function(){
		hashUrl = $(this).attr('href');
		hash = hashUrl.split('#')[1];
		if (hash) {
			$('html, body').animate({ scrollTop : $('#'+hash).offset().top }, 400);
			return false;
		}
	});
	
	$('.case').on('click touch',function(){
		caseNb = $(this).attr('data-case');
		
		// $('.grid').after('<div class="overlay"></div>');
		
		// $('.overlay').click(function(){
			// $('.popin-case,.next-case,.prev-case').hide().removeClass('active');
			// $('.overlay').remove();
		// });
		
		$('.grid').animate({'opacity':0, x: -$(window).width()},400);
		$('.close-case').fadeIn();
		$('.popin-case#'+caseNb).css({'opacity':0, x:$(window).width()}).show().addClass('active').animate({'opacity':1, x:0},400);
		$('html, body').animate({ scrollTop : $('#offres').offset().top }, 400);
		return false;
	});
	$('.close-case').on('click touch',function(){
		$('html, body').animate({ scrollTop : $('#offres').offset().top }, 400);
		$('.close-case').fadeOut();
		$('.grid').animate({'opacity':1, x:0},400);
		$('.popin-case.active').animate({'opacity':0, x:$(window).width()},400,function(){
			$('.popin-case.active').hide();
		});

	});
	
	
	// $('.prev-case').click(function(){
		// next = $('.popin-case.active').prev('.popin-case');
		// console.log('prev : ', next);
		// if( next.length ){
			// $('.popin-case').hide().removeClass('active');
			// next.show().addClass('active');
			// $('html, body').animate({ scrollTop : $('#offres').offset().top }, 400);
		// }
	// });
	
	
	if( $(window).width() > 640 ){
		$('.tree-line .sentence').hide();
		$('.bulle').on('click touch',function(){
			linkTo = $(this).attr('data-link');
			if( $('.'+linkTo).length ){
				$('.tree-line .sentence').fadeOut(200);
				$('.'+linkTo+' .sentence').stop().fadeIn(300);
			}
			return false;
		});
	}else{
		$('.header').on('click touch',function(){
			$('.header .navigation').stop().slideToggle(300);
		});
	}
	
	
	
	if( $('.banner-title li, .banner-legend li').length > 0){
		$('.banner-title li, .banner-legend li').css({'width': 'calc( 100% / '+$('.banner-title li').length+')'});
	}
	

});