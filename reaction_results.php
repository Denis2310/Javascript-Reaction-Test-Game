<?php 

require("database.php");

//Dohvati najbolji rezultat
$all_time_best = 100;

$sql = "SELECT * FROM best_results ORDER BY id DESC LIMIT 1";
$result = $connection->query($sql);
if($result) {

	$result = $result->fetch_assoc();
	$all_time_best = $result['result'];


}

if(isset($_GET['all_time_best'])) {

	echo $all_time_best;
}


if(isset($_POST['best'])) {

	$best_result = $_POST['best'];

	if($best_result < $all_time_best) {

		$sql = "INSERT INTO best_results(result) VALUES ($best_result)";
		$connection->query($sql);

	}

}



?>