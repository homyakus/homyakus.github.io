$(document).ready(function(){
	$(".list_desc").hide();
	$("li h3").click(function(){
		$(this).siblings($(".list_desc")).slideToggle();
		$(this).children().toggleClass("toggle_hover");
		$(this).toggleClass("active");
	});
});