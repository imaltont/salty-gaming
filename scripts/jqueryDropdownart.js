$(function(){
		$('.toggleButton').click(function(e){
			$(this).next().slideToggle();
			var sign=$(this).children(':first');
			});
	});