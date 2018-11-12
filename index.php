<!DOCTYPE html>
<html>
<head>
	<title>Adblock fixer demo example</title>
	<link rel="stylesheet" type="text/css" href="adblock-fixer/adblock-fixer.css">
	<script src="js/jquery.min.js"></script>
</head>
<body>
	<header>
		<h1>This is header content</h1>
	</header>
	<main>
		<h2>This is main content</h2>
	</main>
	<footer>
		<h3>This is footer content</h3>
	</footer>
	<style type="text/css">
		header, main, footer {
			background: #afbfd1;
			padding: 15px;
			border: 1px solid white;
		}

		h1, h2, h3 {
			margin: 0;
		}
	</style>
	<script src="adblock-fixer/adblock-fixer.js"></script>

	<script>
		adblock_fixer({
			error_text: 'Для получения контента отключите Adblock.',
			action: "redirect",
			redirect_page: "404.php"
		});
	</script>

</body>
</html>