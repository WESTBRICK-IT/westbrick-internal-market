<!DOCTYPE html>
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
    <?php
        echo "<h2>Testing this echo function</h2>";
        // Connect to the database
        $conn = mysqli_connect("localhost", "chris-barber", "!!!Dr0w554p!!!", "news-and-articles");

        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        // Select articles from the database
        $query = "SELECT * FROM articles";        
        $result = mysqli_query($conn, $query);
        echo "<p>Here are the results: </p>";
        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)){
                echo "<h2>" . $row["title"] . "</h2>";
                echo "<h2>" . $row["author"] . "</h2>";
                echo "<h2>" . $row["date"] . "</h2>";
                echo "<h2>" . $row["body"] . "</h2>";                
            }            
        }
        else {
            echo "<p>doesn't work</p>";
        }
        // Close connection
        mysqli_close($conn);
    ?>
</body>
</html>