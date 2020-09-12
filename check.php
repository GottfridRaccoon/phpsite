
class functionCheck{

public static function checkLogin($db) {
        if (!isset($_SESSION['id']) or !isset($_COOKIE['PHPSESSID'])){
            session_start();
        }
        if (isset($_COOKIE['id']) and isset($_COOKIE['token']) and isset($_COOKIE['serial'])){
           
           $query = "SELECT * FROM sessions WHERE sessions_userid = :userid AND sessions_token = :token 
                    AND sessions_serial =:serial";
            $id = $_COOKIE['userid'];
            $token = $_COOKIE['token'];
            $serial = $_COOKIE['serial'];
            $request = $db->prepare($query);
               
            $request = execute (array(':userid'=>id,
                                    ':token'=>$token,
                                    'serial' => $serial));
            
            $row = $request->fetch(PDO::FETCH_ASSOC);
            if ($row['sessions_userid']>0) {
                    if ( $row['sessions_userid'] ==$_COOKIE['userid'] and 
                         $row['sessions_token'] ==$_COOKIE['token'] and
                         $row['sessions_serial'] ==$_COOKIE['serial'] 
                    ){
                        if(
                            $row['sessions_userid'] ==$_SESSION['userid'] and 
                            $row['sessions_token'] ==$_SESSION['token'] and
                            $row['sessions_serial'] ==$_SESSION['serial'] 
                        ){
                            return true;
                        }

                    }
            }

        }
                      


    }   
}