
<?php
session_start();
session_destroy();
header('Location:'.TEMPLATE_PATH.'/autorization.php');
?>