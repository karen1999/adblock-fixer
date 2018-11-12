$('body').append('<div id="content_adv"></div>');

if (  $("#content_adv").css("display") == "none"){
	$('body').empty();
	$('body').append('<div class="adblock_info"><p>Для получения контента отключите Adblock.</p></div>');	
}

else {
	$("#content_adv").remove();
}