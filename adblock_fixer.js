$('body').append('<div id="content_adv">Adblock выключен!</div>');
$('head').append('<link rel="stylesheet" type="text/css" href="style.css">');

if (  $("#content_adv").css("display") == "none"){
	$('body').empty();
	$('body').append('<div class="adblock_info"><p>Для получения контента отключите Adblock.</p></div>')	
}