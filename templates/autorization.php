
<?php
// ini_set("display_errors",1);
// ini_set("display_startup_errors",1);
// error_reporting(E_ALL);
require (TEMPLATE_PATH . "/include/SQL_secure_credentials.php");
//"INSERT INTO `users` (`id`, `login`, `name`, `last_name`, `surname`, `email`, `password`) VALUES (NULL, 'login', 'name', '', '', '', '111');"

try{
    $db = new PDO("mysql:dbname=" . $site_db . ";host=" . $server . "", "" . $username . "", "" . $password . "");
    $db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec("set names utf8");
}catch(PDOException $error){
    $message =$error -> getMessage(); 
}
$db->beginTransaction();


    if (isset($_POST['submit'])){
         
        if(empty($_POST['login'])   or empty($_POST['password'])){//если поля формы пусты
            echo "<label> Одно из полей не введено</label>";
             echo "<br/>";
             }
        
      
      //  else
      //  {
            $login = $_POST['login'];
            $pass = $_POST['password'];
          
            
            $req = $db ->prepare('SELECT login, password FROM `users` WHERE `login` = :login and `password`= :pass');
            $req -> execute(array(':login'=> $login,
            ':pass'=>$pass));

            $result = $req->rowCount();
            if ($result >0){//переход на страницу, если поля совпадают с запросом
                $_SESSION['login'] =$login;
               // $_SESSION['password'] = $password;
               header('Location:index.php');
            }else if ($result ==0){//если в базе не найден результат
                echo '<label> Неверен логин или пароль </label>';
            }
        

        //}
       
        
        
       
       
        $db->commit();
    
       // $db -> beginTransaction();
    }




?>
<!DOCTYPE html>


    

<html>

<body>
   </br>  
 


    <h1>Регистрация</h1>
    <form action="" method ="POST" >
    Введите логин: <input type = "text" name = "login" >
   
    
    
    Введите пароль  : <input type = 'password' name = "password" >
   
  <input type="submit" name="submit" value="Войти" id = 'submit'>

    </form>
   
  
    </body>
</html>

