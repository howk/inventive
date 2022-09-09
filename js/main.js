$(document).ready( function(){	
	
	$('.link-open-calendarFull').on('click', function() {
    	$('.calendarFull__body').toggleClass('active');
    	$(this).toggleClass('active');
  	})

  	$('.link-open').click(function(){
		if($(this).is('.open')){
   		$(this).removeClass('open');
     	$(this).next('.box-vacancy-post-group').slideUp(100);
   	}else{
   		$(this).addClass('open');
     	$(this).next('.box-vacancy-post-group').slideDown(100);
   	}
   	return false;
	})

	$('.vacancy-off .title').click(function(){
		if($(this).is('.open')){
   		$(this).removeClass('open');
     	$(this).next('.vacancy-completed').slideUp(100);
   	}else{
   		$(this).addClass('open');
     	$(this).next('.vacancy-completed').slideDown(100);
   	}
   	return false;
	})

	$('.open-vacancy-tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.parents('.open-vacancy-group').find('.box-vacancy').hide().eq($(this).index()).fadeIn(200);
	})

});

