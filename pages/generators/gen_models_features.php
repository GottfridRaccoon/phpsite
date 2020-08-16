<?php
	
	require( "../../templates/include/SQL_secure_credentials.php" );
    // Create connection

	
    $con = new  PDO("mysql:dbname=".$database.";host=".$server."", "".$username."", "".$password."");
	$con->exec("set names utf8");
	//mysqli_set_charset ($con, "utf8");
		mb_internal_encoding("UTF-8");


    // Check connection
//some code
$sql1 = "SELECT `ID`, `Model` FROM models"; //нулевой столбец
$sql2 = "SELECT `Features`.`ID`, `Features`.`Feature_name` FROM `Features`";// заголовки"столбцов
 $sql3 = "SELECT `models_features`.`ID`, `models_features`.`Model`, `models_features`.`Feature`, `feature_values`.`Val`
 FROM `models_features`,`feature_values` 
 WHERE `models_features`.`Value` = `feature_values`.`ID`"; //данные


 $result1 = $con->prepare($sql1);
 $result2 = $con->prepare($sql2);
 $result3 = $con->prepare($sql3);
 //подготовка запроса
 $result1 -> execute();
 $res1 = $result1->fetchAll(PDO::FETCH_ASSOC); 
 $result2 -> execute();
 $res2 = $result2->fetchAll(PDO::FETCH_ASSOC); 
 $result3 -> execute();
 $res3 = $result3->fetchAll(PDO::FETCH_ASSOC); 
 
//json_encode($res1, JSON_UNESCAPED_UNICODE);


$arr = array();
 if ($result1) {
    $arr =["features" => $res1];
 }
 if ($result2) {
    $arr +=["data" => $res2];
 }
 if ($result3) {
    $arr +=["models" => $res3];
 }
//вывод запросов
header('Content-type: application/json');
//header("Content-Disposition: attachment; filename=modelsFeatures.txt");
header("Pragma: no-cache");
header("Expires: 0");

echo (json_encode($arr));
//Закрытие подключения к БД
$con = null;

?>
