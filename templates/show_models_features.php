<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "w1sBGpe5bIKZIrGxJQUV";
$dbname = "Video_tech_support";
    // Create connection
    $con = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (mysqli_connect_errno())
      {
          echo "Failed to connect to MySQL: " . mysqli_connect_error();
      } //;
        //  exit();
      //}
    //$sql = "SELECT * FROM `Features` ORDER BY `Feature_name` ASC ";
 $sql1 = "SELECT `Features`.`ID`, `Features`.`Feature_name` FROM `Features`";
    $result1 = $con->query($sql1);
 $sql2 = "SELECT * FROM `Модели-функции`";
    $result2 = $con->query($sql2);

    /*while($row = $result->fetch_array(MYSQLI_ASSOC))//mysqli_fetch_array($result)) //$result->fetch_array(MYSQLI_NUM);
      {
//echo $row
      //echo $row['FirstName'] . " " . $row['LastName']; //these are the fields that you have stored in your database table employee
display_data($result);
      //echo "<br />";
      } 
*/

	/* Select queries return a resultset */
	if ($result1) {
		printf("Select returned %d rows.\n", $result1->num_rows);
		display_data($result1);

		/* free result set */
		$result1->close();
	}
	if ($result2) {
                printf("Select returned %d rows.\n", $result2->num_rows);
                display_data($result2);

                /* free result set */
                $result2->close();
        }
    $con->close();

function display_data($data) { $output = '<table>';
	foreach($data as $key => $var) {
		$output .= '<tr>';
		if ($key === 0) {
			foreach($var as $k => $v) {
				$output .= '<td><strong>' . $k . '</strong></td>';
			}
			$output .= '</tr>';
			foreach($var as $k => $v) {
				$output .= '<td>' . $v . '</td>';
			}
		}
		else {
			foreach($var as $k => $v) {
				$output .= '<td>' . $v . '</td>';
		}
	}
	$output .= '</tr>';
}
$output .= '</table>';
echo $output;
echo  file_get_contents("php://input");
}
?>
