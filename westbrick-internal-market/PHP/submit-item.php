<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Westbrick Internal Marketplace Item Submitted</title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/script.js" defer></script>
</head>
<body>
    <img class="main-title" src="../img/westbrick-internal-market.svg" alt="Westbrick Internal Market Title">
      
    <?php
        $allowedIPs = array('206.174.198.58', '206.174.198.59'); // Define the list of allowed IP addresses

        $remoteIP = $_SERVER['REMOTE_ADDR']; // Get the remote IP address of the client
        
        if (!in_array($remoteIP, $allowedIPs)) {
            // Unauthorized access - display an error message or redirect
            echo "Access denied. Your IP address is not allowed to submit this item.";
            exit();
        }
        
        // Process the form submission if the IP address is allowed
        // Your form processing code here...

        $servername = "localhost";
        $username = "cbarber";
        $password = "!!!Dr0w554p!!!";
        $dbname = "items";
        
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }    
        
        $title = $_POST['title'];
        $seller = $_POST['seller'];
        $price = $_POST['price'];
        $body = $_POST['body'];        
        $date = $_POST['date'];
        
        function convertApostrophe($string) { 
            $newString = str_replace("'", '`', $string); 
            return $newString; 
        }    
        $title = convertApostrophe($title);
        $seller = convertApostrophe($seller);
        $body = convertApostrophe($body);    
        $price = convertApostrophe($price); 

        //get the image and upload it
        $image_name = $_FILES['image']['name'];
        $image_tmp = $_FILES['image']['tmp_name'];  
        echo "<h1>Image Name: $image_name " . "Image tmp: $image_tmp</h1>";
        $target_dir = "../img/item-images";
        $target_file = $target_dir . basename($image_name);
        move_uploaded_file($image_tmp, $target_file);

       //replace carriage return with paragraph
        $body = str_replace(chr(13), "</p><p class=`article-paragraph`>", $body); 
        
        $sql = "INSERT INTO items (title, seller, date, price, body, image_name, image_tmp) VALUES ('$title', '$author', '$body', '$date', '$image_name', '$image_tmp')";
        // $sql = "INSERT INTO articles (title, author, body, date) VALUES ('$title', '$author', '$body', '$date')";
        
        if ($conn->query($sql) === TRUE) {
            // echo "<h1>Article $title submitted successfully! Redirecting to articles page in 5 seconds.</h1>";
            echo "<div class='westbrick-success-svg-container'>";
            echo    "<img class='westbrick-success-svg' src='../img/westbrick-success.svg' alt='WESTBRICK SUCCESS SVG'>";
            echo    "<button class='home-button' type='button' onclick='window.location.href=`../index.php`;'>Home</button>";
            echo "</div>";
            // echo "<br><h1>File name: $image" . "File tmp name: $image_tmp" . "</h1>";
            // Set the time delay in seconds
            // $timeDelay = 5; // 5 seconds
            // Wait for the specified amount of time before redirecting
            // header("refresh:".$timeDelay.";url=../articles/index.php");
        } else {
            echo "<div class='westbrick-success-svg-container'>";
            echo    "Error: " . $sql . "<br>" . $conn->error;
            echo    "<button class='home-button' type='button' onclick='window.location.href=`index.html`;'>Compose</button>";
            echo "</div>";
        }
        $conn->close();
        
        ?>
</body>
</html>