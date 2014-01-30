<?php
// Start output buffering:
ob_start();

echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><!-- InstanceBegin template="/Templates/ut.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<!-- 
(c) 2007 Copyright - All Rights Reserved - California State University, Long Beach.
University Public Affairs & Publications office. For documentation and usage policy please visit www.csulb.edu/style/ 

Updated and modified by: 	Phillip Nguyen, October 2008
Usage and Intent: 			CSULB, Student Life Development
							Student Organization Web Template
-->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<!-- InstanceBeginEditable name="doctitle" -->
<title>Contact Us!</title>
<!-- InstanceEndEditable -->';
include ('../../org/college/sps/ADMIN/metatags.html');
include ('../../org/college/sps/ADMIN/config.html');

include ('../../org/college/sps/ADMIN/utjs.html');
include ('../../org/college/sps/css/utcss.html'); ?>

<link href="/org/college/sps/css/website.css" rel="stylesheet" type="text/css" />
<!--#include virtual="/org/college/sps/ADMIN/localcss.html" -->
<link rel="shortcut icon" href="/images/favicon.ico" />

<? 
// Check for form submission:
if ($_POST['clear']=='Clear Form') {
	// Clear $_POST
	$_POST = array();
}
elseif (isset($_POST['submitted'])) {
	
	function spam_scrubber($value) {
	
		// List of very bad values:
		$very_bad = array('to:', 'cc:', 'bcc:', 'content-type:', 'mime-version:', 'multipart-mixed:', 'content-transfer-encoding:');
		
		// If any of the very bad strings are in 
		// the submitted value, return an empty string:
		foreach ($very_bad as $v) {
			if (stripos($value, $v) !== false) {
				// A bad thing was found, redirect to contact page.
			
				// Clear $_POST (so that the form's not sticky):
				$_POST = array();
				
				// Redirect the page:
				$url = 'http://www.csulb.edu/org/college/sps/contact/index.php'; // Define the URL:
				ob_end_clean(); // Delete the buffer.
				header("Location: $url");
				exit(); // Quit the script.
			};
		}
		
		// Replace any newline characters with spaces:
		$value = str_replace(array( "\r", "\n", "%0a", "%0d"), ' ', $value);
		
		// Return the value:
		return trim($value);
	
	} // End of spam_scrubber() function.
	
	// Clean the form data:
	$scrubbed = array_map('spam_scrubber', $_POST);
	
	// Assume invalid values:
	$fn = $ln = $e = FALSE;
	$errors = array();
	
	//Form Validation
	// Check for a first name:
	if (preg_match ('/^[A-Z \'.-]{2,20}$/i', $scrubbed['first_name'])) {
		$fn = $scrubbed['first_name'];
	} else {
		$errors[] = 'Please (re)enter your first name.';
	}
	
	// Check for a last name:
	if (preg_match ('/^[A-Z \'.-]{2,40}$/i', $scrubbed['last_name'])) {
		$ln = $scrubbed['last_name'];
	} else {
		$errors[] = 'Please (re)enter your last name.';
	}
	
	// Check for an email address:
	if (preg_match ('/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/', $scrubbed['email'])) {
		$e = $scrubbed['email'];
	} else {
		$errors[] = 'Please enter a valid email address.';
	}
	
	// Check that the phone number is in the form (xxx) xxx-xxxx.
	if (!empty($scrubbed['phone'])) { 
		if( preg_match('/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/', stripslashes($scrubbed['phone'])) ) {
			$p = $scrubbed['phone'];
			$phone_submission = TRUE;
		} else {
			$errors[] = 'Please (re)enter a valid numeric phone number in the form (xxx) xxx-xxxx';
		}		
	} else {
		$phone_submission = FALSE;
	}
	
	// Check Organization Purpose.
	if (empty($scrubbed['comments'])) {
		$errors[] = 'Please enter your comments.';
	} 

	// If no errors
	if (empty($errors) ) {
	
		// Create the body:
		$body = "Name: ".$scrubbed['first_name']." ". $scrubbed['last_name'];
		
		if($phone_submission) {
			$body .= "\nPhone #: ".$scrubbed['phone'];
		}
		
		$body .= "\n\nComments: ". stripslashes($scrubbed['comments']);
		$body = wordwrap($body, 70);
	
		// Send the email:
		//		your e-mail							subject
		mail('dbergman@csulb.edu', 'The Society of Physics Students at CSULB Contact Form Submission', $body, "From: {$scrubbed['email']}");
		
		// Clear $_POST (so that the form's not sticky):
		$_POST = array();
		
		// Redirect the page:
		$url = 'http://www.csulb.edu/org/college/sps/contact/thankyou.htm'; // Define the URL:
		ob_end_clean(); // Delete the buffer if there is any.
		header("Location: $url");
		exit(); // Quit the script.
	
	} 
	
} // End of main isset() IF.
?>
</head>
<body class="contact">

<?php
include ('../../org/college/sps/ADMIN/csulbheader.html');
include ('../../org/college/sps/ADMIN/primarynav.html');

echo '<!--#include virtual="/depot/ADMIN/ut_er.html" -->';

include ('../ADMIN/banner_secondary.html');
include ('../ADMIN/ut_breadcrumbs.html'); ?>

<div id="container">
<div id="contain_content">
  <a name="localnav" id="localnav"></a>
  <div id="contain_column1">
    <?php include ('../../org/college/sps/ADMIN/secondarynav.html'); ?>
	  </div>
  <a name="content" id="content"></a>
  <div id="contain_column2">
  	
	<?php
		if(!empty($errors)) {
			echo '<p class="error">The following error(s) occurred:<br />';
			foreach ($errors as $msg) { // Print each error.
				echo " - $msg<br />\n";
			}
			echo '</p><p>Please try again.</p>';
		}
	?>
	
   <p><em class="requiredasterisk">*</em> <em class="required">Indicates required fields</em></p>
   <form action="../../org/college/sps/contact/index.php" method="post">
		<fieldset>
					<legend>Contact Our Organization</legend>
						<div class="bold">
     
					     <p><label for="First_Name">First Name <em class="requiredasterisk">*</em> <br />
					       <input type="text" name="first_name" size="20" maxlength="50" value="<?php if (isset($_POST['first_name'])) echo $_POST['first_name']; ?>" /></label></p>
							  
						<p>
							  <label for="Last_Name">Last Name <em class="requiredasterisk">*</em> <br />
						  <input type="text" name="last_name" size="20" maxlength="50" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>" /></label></p>
							  
						<p><label for="Phone">Phone	(xxx) xxx-xxxx<br />
						  <input type="text" name="phone" size="20" maxlength="14" value="<?php if (isset($_POST['phone'])) echo $_POST['phone']; ?>" /></label></p>		
							  
						<p>
							  <label for="Email">E-Mail <em class="requiredasterisk">*</em> <br />
						  <input type="text" name="email" size="20" maxlength="80" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>" /></label></p>
							   
						<p>
							  <label for="Comments">Comments: <em class="requiredasterisk">*</em> <br />
						  <textarea name="comments" rows="5" cols="20"><?php if (isset($_POST['comments'])) echo $_POST['comments']; ?></textarea></label></p>
						  <p><input type="submit" name="submit" value="Send!" />
						    <input type="submit" name="clear" value="Clear Form" /></p>
						  <input type="hidden" name="submitted" value="TRUE" />
						  
						</div>
			</fieldset>
   </form>
  </div>
  <div id="contain_column3">
    
	<h1>Contact Us</h1>
	<h4>The Society of Physics Students at CSULB</h4>
	<p>University Student Union, Room 215<br />1250 Bellflower Boulevard<br />Long Beach, California 90840-0604</p>
  </div>
  <div class="clear_float"></div>
</div>
</div>
<? include ('../../org/college/sps/ADMIN/footer.html'); ?>
</body>
</html>