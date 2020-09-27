<head>
  <script type = "text/javascript" src ="<?php echo(TEMPLATE_PATH . '/include/index.js')?>"></script>
</head>

<?php
	
	require( TEMPLATE_PATH . "/include/SQL_secure_credentials.php" );
    // Create connection

	
	echo "<a id='some' href=./pages/generators/gen_models_features.php ></a>";
	echo "<div id='data_container' > </div>";
	
//	if ($result2) {
     //           printf("Select returned %d rows.\n", $result2->row_count);
      //          display_data($result2);

                /* free result set */
      //          $result2->close();
      //  }
   // $con->close();

function display_data($data) { 
	$output = '<table>';
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
}
require_once( PAGES_PATH . "/include/export_table.html" );
?>

