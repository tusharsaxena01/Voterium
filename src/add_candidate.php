<?php 

$con=mysqli_connect("localhost","root","toor","aadhar");

$name=$_POST['name'];
$party=$_POST['party'];
$age=$_POST['age'];
$qual=$_POST['qual'];

$ins=mysqli_query($con,"insert into registered_users(name,party,age,qual) values('$name','$party','$age','$qual')");


?>