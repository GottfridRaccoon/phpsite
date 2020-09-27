<!DOCTYPE html>
<html>
  <head>
    <link rel="apple-touch-icon" sizes="57x57" href="/site_icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/site_icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/site_icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/site_icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/site_icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/site_icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/site_icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/site_icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/site_icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/site_icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/site_icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/site_icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/site_icons/favicon-16x16.png">
    <link rel="manifest" href="/site_icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/site_icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <title><?php echo htmlspecialchars($results['pageTitle']) ?></title>
    <link rel="stylesheet" type="text/css" href="style.css" />
	
  </head>
  
  <body>
    <?php
      require CLASS_PATH . "/Engine.php";
      // header("Access-Control-Allow-Origin: *");
    ?>
    
    <div id="container">

      <a href="."><img id="logo" src="site_icons/ms-icon-310x310.png" alt="Widget News" /></a>
