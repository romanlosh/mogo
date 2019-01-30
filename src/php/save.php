<? 
   if(isset($_POST['email'])) { $email = $_POST['email']; }
   $db = mysql_connect("localhost","root",""); 
   mysql_select_db("email",$db);
   mysql_query("INSERT INTO address (address) VALUES ('$email')",$db);
?>