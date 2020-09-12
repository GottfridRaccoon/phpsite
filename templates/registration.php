
<?php
require (TEMPLATE_PATH . "/include/SQL_secure_credentials.php");
//"INSERT INTO `users` (`id`, `login`, `name`, `last_name`, `surname`, `email`, `password`) VALUES (NULL, 'login', 'name', '', '', '', '111');"
$db = new PDO("mysql:dbname=" . $site_db . ";host=" . $server . "", "" . $username . "", "" . $password . "");
$db->exec("set names utf8");


if (isset($_POST['submit'])){
    $login = $_POST['login'];
    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
   
     
   
    if($firstname == trim("") or $lastname == trim("") or $email == trim("") or $pass ==trim("")){
        echo "<h1> Одно из полей не введено</h1>";
       die();
    }
    
   
   
    if (!$db) {
        echo "\nPDO::errorInfo():\n";
        print_r($db->errorInfo());
    }
    $req = $db ->prepare('INSERT INTO `users`(`login`, `name`, `last_name`, `email`, `password`) VALUES (:login, :firstname, :lastname, :email, :pass)');
    $db -> beginTransaction();
   
    $req -> execute(array(':login'=> $login,
                        ':firstname'=>$firstname,
                        ':lastname'=>$lastname,
                        ':email'=>$email,
                        ':pass'=>$pass));

$db->commit();

echo '<h1>Регистрация завершена </h1>';


}

?>
<!DOCTYPE html>


    

<html>

<body>


    <h1>Регистрация</h1>
    <form action="" method ="POST" >
    Введите логин: <input type = "text" name = "login" >
    Введите имя: <input type = "text" name = "first_name" >
    Введите фамилию: <input type = "text" name = "last_name" >
  
    Введите email: <input type = "text" name = "email" >
    
    
    Введите пароль  : <input type = 'password' name = "password" >
   
  <input type="submit" name="submit" value="Зарегистрироваться" id = 'submit'>
 
    </form>
   
  
    </body>
</html>

