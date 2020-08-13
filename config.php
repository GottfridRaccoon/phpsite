<?php
	ini_set( "display_errors", true );
	$title = "Site Title"; // Введите заголовок сайта
	date_default_timezone_set( "Europe/Moscow" );

	define( "CLASS_PATH", "classes" );
	define( "TEMPLATE_PATH", "templates" );
	define( "PAGES_PATH", "pages" );

	define( "ADMIN_USERNAME", "admin" );
	define( "ADMIN_PASSWORD", "mypass" );
	define( "HOMEPAGE_NUM_ARTICLES", 5 );

	/* Параметры подключения к MySql базе данных */
	require_once( TEMPLATE_PATH . "/include/SQL_secure_credentials.php" );
	
	require( CLASS_PATH . "/Engine.php" );

	$sitetitle = "Site Title"; // Название сайта, отображаемое в Header
	$about = "Какое-то описание сайта";

	require_once( CLASS_PATH . "/Article.php" );
?>
