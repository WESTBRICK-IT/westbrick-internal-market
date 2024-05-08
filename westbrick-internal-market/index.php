<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Westbrick Internal Marketplace</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <img class="main-title" src="img/westbrick-internal-market.svg" alt="Westbrick Internal Market Title">
    <button onclick="window.location.href='PHP/new-item.html'" class="post-item-button" type="button">Post New Item</button> 
    <div class="items">

        <!-- <div class="item">            
            <img class="item-image" src="img/motorcycle-1.jpg" alt="Item Image"></img>
            <div class="top-middle-things">
                <h1 class="item-title">Japanese 80's Motorcycle Really Long Title OVer here</h1>
                <h4 class="item-seller">Chris Barber</h4>
                <h5 class="item-posting-date">May 3rd 2024</h5>                
            </div>              
            <p class="item-body">Sup dudes, I'm selling this motorcycle. It's really cool. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h1 class="item-price">$5000</h3>            
            <a class="item-garbage-button" href="#"><img class="item-garbage-button" src="img/garbage-can.svg" alt="Garbage Can"></a>
        </div>         -->

        <?php
            function convertApostrophe($string) { 
				$newString = str_replace("`", "'", $string); 
				return $newString; 
			}
            // Connect to the database
			 $conn = mysqli_connect("localhost", "cbarber", "!!!Dr0w554p!!!", "item_db");
	 
			 // Check connection
			 if (!$conn) {
				 die("Connection failed: " . mysqli_connect_error());
			 }

             $query = "SELECT * FROM `items` ORDER BY `date` DESC";
             $result = mysqli_query($conn, $query);
             if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)){
                   //replace grave image with apostrophe
                   $title = $row["title"];
                   $seller = $row["seller"];
                   $date = $row["date"];
                   $price = $row["price"];
                   $body = $row["body"];
                   $image_name = $row["image_name"];

                   $title = convertApostrophe($title);
                   $seller = convertApostrophe($seller);
                //    $date = convertApostrophe($date);
                   $body = convertApostrophe($body);

                   //if image name is empty or not found then add default image
                   if($image_name === ""){
                       $image_name = "WESTBRICK-Normal.svg";
                   }

                   echo 	"<div class='item'>";
                   echo		    "<img class='item-image' src='img/". $image_name ."' alt='Item Image'></img>";
                   echo         "<div class='top-middle-things'>";
                   echo		        "<h1 class='item-title'>" . $title . "</h1>";
                   echo			    "<h4 class='item-seller'>". $seller . "</h4>";
                   echo 		    "<h5 class='item-posting-date'>" . $date . "</h5>";
                   echo 	    "</div>";
                   echo 	    "<p class='item-body'>" . $body . "</p>";
                   echo 	    "<h1 class='item-price'>$" . $price . "</h1>";
                   echo 	    "<a class='item-garbage-button' href=''><img class='item-garbage-button' src='img/garbage-can.svg' alt='Garbage Can'></a>";
                   echo     "</div>";                  
                }            
            }
            else {
                echo "<p>no rows found.</p>";
            }
            //  echo "<h1>TESTING</h1>";
             // Close connection
			 mysqli_close($conn);
        ?>
        
    </div>
</body>
</html>

<!-- <qmphp			
			function convertApostrophe($string) { 
				$newString = str_replace("`", "'", $string); 
				return $newString; 
			} 
			 // Connect to the database
			 $conn = mysqli_connect("localhost", "chris-barber", "!!!Dr0w554p!!!", "news-and-articles");
	 
			 // Check connection
			 if (!$conn) {
				 die("Connection failed: " . mysqli_connect_error());
			 }
	 
			 // Select articles from the database
			 $query = "SELECT * FROM `articles` ORDER BY `date` DESC";        
			 $result = mysqli_query($conn, $query);			 
			 if (mysqli_num_rows($result) > 0) {
				 while($row = mysqli_fetch_assoc($result)){
					//replace grave image with apostrophe
					$title = $row["title"];
					$author = $row["author"];
					$date = $row["date"];
					$body = $row["body"];
					$image_name = $row["image_name"];

					$title = convertApostrophe($title);
					$author = convertApostrophe($author);
					$date = convertApostrophe($date);
					$body = convertApostrophe($body);

					//if image name is empty or not found then add default image
					if($image_name === ""){
						$image_name = "default.svg";
					}

					echo 	"<div class='article'>";
					echo		"<div class='row'>";
					echo            "<div class='col-md-7 col-sm-12 col-xs-12'>";
					echo				"<h1 class='article-title'>" . $title . "</h1>";
					echo			"</div>";
					echo 			"<div class='col-md-5 col-sm-12 col-xs-12'>";
					echo 				"<a href='../images/article-images/$image_name'><img class='article-image' src='../images/article-images/$image_name' alt='Article Image'></a>";
					echo 			"</div>";
					echo 		"</div>";
					echo 		"<div class='row'>";
					echo			"<h4 class='article-author'> By " . $author . "</h4>";
					echo 			"<h4 class = 'article-date'>" . $date . "</h4>";
					echo		"</div>";
					echo 		"<div class='row'>";
					echo			"<div class='article-body'>";
					echo				"<p class='article-paragraph'>" . $body . "</p>";
					echo			"</div>";
					echo		"</div>";
					echo 	"</div>";                
				 }            
			 }
			 else {
				 echo "<p>no rows found.</p>";
			 }
			 // Close connection
			 mysqli_close($conn);       
		?> -->

 <!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Westbrick Internal Marketplace</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <img class="main-title" src="img/westbrick-intermal-market.svg" alt="Westbrick Internal Market Title">
    <button class="post-item-button" type="button">Post New Item</button>
    <questionmarkphp
        // echo "<h2>Testing this echo function</h2>";
       
        // $conn = mysqli_connect("localhost", "chris-barber", "!!!Dr0w554p!!!", "news-and-articles");

       
        // if (!$conn) {
        //     die("Connection failed: " . mysqli_connect_error());
        // }

       
        // $query = "SELECT * FROM articles";        
        // $result = mysqli_query($conn, $query);
        // echo "<p>Here are the results: </p>";
        // if (mysqli_num_rows($result) > 0) {
        //     while($row = mysqli_fetch_assoc($result)){
        //         echo "<h2>" . $row["title"] . "</h2>";
        //         echo "<h2>" . $row["author"] . "</h2>";
        //         echo "<h2>" . $row["date"] . "</h2>";
        //         echo "<h2>" . $row["body"] . "</h2>";                
        //     }            
        // }
        // else {
        //     echo "<p>doesn't work</p>";
        // }
       
        // mysqli_close($conn);
    ?>
</body>
</html> -->