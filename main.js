$(document).ready(function(){

	$('.password-control').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass("show")){
			$(this).removeClass("show");
			$(this).parent().find("input").attr("type", "password");
		}else{
			$(this).addClass("show");
			$(this).parent().find("input").attr("type", "text");
		}
	});
});