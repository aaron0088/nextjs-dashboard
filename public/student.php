<?php  

       $host = "localhost";  
       $user = "yachtin1_asptest";  
       $password = "asptest@123";  
	   $db="yachtin1_asptest";
	   
	   // Create connection
		 $conn = new mysqli($host, $user, $password,$db) or die("Connect failed: %s\n". $conn -> error);
		 
		 		 if (!$conn) {
			die("Connection failed: " . mysqli_connect_error());
			}	
			
			use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);
			
	if(isset($_POST['submit'])){
		 $name=$_POST['name'];
		 $email=$_POST['email'];
		 $contactno=$_POST['contactno'];
		 $prefix=$_POST['prefix'];
		 $organiszation=$_POST['organiszation'];
		 $nationality=$_POST['nationality'];
		 $studentid=$_POST['studentid'];
		 $file=$_POST['file'];
		 $tshirtsize=$_POST['tshirtsize'];
		 $emergencyname=$_POST['emergencyname'];
		 $emergencyemail=$_POST['emergencyemail'];
		 $emergencyno=$_POST['emergencyno'];
		 $file_name=$_FILES['studentid']['name'];
		 $file_tmp=$_FILES['studentid']['tmp_name'];
		 $files_name=$_FILES['file']['name'];
		 $files_tmp=$_FILES['file']['tmp_name'];
		 
		 
		 
		$sql = "INSERT INTO student (name, email, contactno, prefix, organiszation, nationality, studentid, file, tshirtsize, emergencyname, emergencyemail, emergencyno)
		VALUES ('$name', '$email', '$contactno', '$prefix', '$organiszation', '$nationality', '$studentid', '$file', '$tshirtsize', '$emergencyname', '$emergencyemail', '$emergencyno')";
		
		
		move_uploaded_file($file_tmp, "studentid/".$file_name);
		move_uploaded_file($files_tmp, "studentfile/".$files_name);
		
		

		if (mysqli_query($conn, $sql)) {
		    
		    ?>
		     <script>
             alert("Thank you for your ASPASP 2022 Registration. Click the OK button to complete your payment. A registration confirmation email and payment receipt will be sent to you after payment has been made.")  
             window.location.href='https://buy.stripe.com/14kg1w2B95Xsga4aEG'
             </script>  
             
             <?php
		      
		  $mail->SMTPDebug = 0; // Enable verbose debug output
            $mail->isSMTP(); // Set mailer to use SMTP
            $mail->Host = 'xpoexpo.com'; // Specify main and backup SMTP servers
            $mail->SMTPAuth = true; // Enable SMTP authentication
            $mail->Username = 'aspasp2022@xpoexpo.com'; // SMTP username
            $mail->Password = 'aspasp2022'; // SMTP password
            $mail->SMTPSecure = 'tls'; // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
            $mail->Port = 587; // TCP port to connect to
            		    
            $mail->isHTML(true);
            
            $mail->setFrom('aspasp2022@xpoexpo.com', 'ASPASP 2022 Registration');
            $mail->addReplyTo('aspasp2022@xpoexpo.com', 'ASPASP 2022 Registration');
            $mail->addAddress($email); // Name is optional
            $mail->Subject = 'ASPASP 2022 Registration'; // Give the email a subject 
            $mail->Body = '
            
            <br>  
            
            Thank you for your Registration!<br>
            <br>
            
            <br>
            Your payment receipt will be sent to you shortly.
            <br>
            <br>
            We look forward to welcoming you at
            the 9th Asia South Pacific Sports
            Psychology Congress in the 
            city of Kuching, Sarawak!
            <br>

            
            <br>
            
            	
            '; 
            
            try{
            $mail->send();
		 }
		 
		 catch (Exception $e) {
 echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
		  
		}else {
		  echo "<p><b>Oops! This Email has been registered. Please register with a different email address</b></p>";

        
		}
		
		
		 }
	   
?>   
